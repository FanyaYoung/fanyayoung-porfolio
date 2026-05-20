// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { articles } from "../src/data/articles";

const BASE = "https://fanyayoung-porfolio.lovable.app";

interface Entry {
  path: string;
  changefreq?: string;
  priority?: string;
  lastmod?: string;
}

const today = new Date().toISOString().slice(0, 10);

const entries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/attorney", changefreq: "weekly", priority: "0.9", lastmod: today },
  { path: "/attorney/articles", changefreq: "weekly", priority: "0.8", lastmod: today },
  { path: "/projects/lg", changefreq: "monthly", priority: "0.7" },
  { path: "/projects/mgm", changefreq: "monthly", priority: "0.7" },
  { path: "/projects/walmart", changefreq: "monthly", priority: "0.7" },
  { path: "/projects/samsclub", changefreq: "monthly", priority: "0.7" },
  { path: "/social-media", changefreq: "monthly", priority: "0.5" },
];

for (const a of articles) {
  entries.push({
    path: `/attorney/articles/${a.slug}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: a.published,
  });
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
