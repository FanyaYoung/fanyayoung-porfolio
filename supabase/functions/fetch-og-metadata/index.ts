import { corsHeaders } from "../_shared/cors.ts";

interface OgResult {
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
}

const decodeEntities = (s: string) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ");

const pickMeta = (html: string, patterns: RegExp[]): string | undefined => {
  for (const re of patterns) {
    const m = html.match(re);
    if (m && m[1]) return decodeEntities(m[1].trim());
  }
  return undefined;
};

const parseOg = (html: string, baseUrl: string): OgResult => {
  // Tolerant attribute matchers (property/name can appear before or after content)
  const metaPatterns = (key: string) => [
    new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["']`, "i"),
  ];

  const title =
    pickMeta(html, [...metaPatterns("og:title"), ...metaPatterns("twitter:title")]) ||
    (() => {
      const t = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      return t ? decodeEntities(t[1].trim()) : undefined;
    })();

  const description = pickMeta(html, [
    ...metaPatterns("og:description"),
    ...metaPatterns("twitter:description"),
    ...metaPatterns("description"),
  ]);

  let image = pickMeta(html, [
    ...metaPatterns("og:image:secure_url"),
    ...metaPatterns("og:image"),
    ...metaPatterns("twitter:image"),
    ...metaPatterns("twitter:image:src"),
  ]);

  // Resolve relative image URLs
  if (image) {
    try {
      image = new URL(image, baseUrl).toString();
    } catch {
      // leave as-is
    }
  }

  const siteName = pickMeta(html, metaPatterns("og:site_name"));

  return { title, description, image, siteName };
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return new Response(JSON.stringify({ error: "Missing url" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let target: URL;
    try {
      target = new URL(url);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid url" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!["http:", "https:"].includes(target.protocol)) {
      return new Response(JSON.stringify({ error: "Unsupported protocol" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    let res: Response;
    try {
      res = await fetch(target.toString(), {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; FanyaYoungBot/1.0; +https://fanyayoung.com)",
          Accept: "text/html,application/xhtml+xml",
        },
        redirect: "follow",
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `Fetch failed: ${res.status}` }),
        {
          status: 200, // soft-fail so the import can still proceed
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Cap to ~512KB of HTML to keep things fast
    const reader = res.body?.getReader();
    const chunks: Uint8Array[] = [];
    let received = 0;
    const MAX = 512 * 1024;
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          received += value.length;
          if (received >= MAX) {
            try {
              await reader.cancel();
            } catch (_) { /* ignore */ }
            break;
          }
        }
      }
    }
    const html = new TextDecoder("utf-8", { fatal: false }).decode(
      await new Blob(chunks).arrayBuffer(),
    );

    const og = parseOg(html, target.toString());

    return new Response(JSON.stringify(og), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("fetch-og-metadata error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message ?? "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
