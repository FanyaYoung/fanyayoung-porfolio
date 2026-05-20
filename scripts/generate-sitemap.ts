// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.
// Multi-host sitemap covering primary portfolio + attorney subdomain.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { articles } from "../src/data/articles";

const PRIMARY = "https://fanyayoung-porfolio.lovable.app";
const ATTORNEY = "https://attorney.fanyayoung.com";

interface Entry {
  loc: string;
  changefreq?: string;
  priority?: string;
  lastmod?: string;
}

const today = new Date().toISOString().slice(0, 10);

const entries: Entry[] = [
  // Primary portfolio
  { loc: `${PRIMARY}/`, changefreq: "weekly", priority: "1.0", lastmod: today },
  { loc: `${PRIMARY}/attorney`, changefreq: "weekly", priority: "0.9", lastmod: today },
  { loc: `${PRIMARY}/attorney/articles`, changefreq: "weekly", priority: "0.8", lastmod: today },
  { loc: `${PRIMARY}/projects/lg`, changefreq: "monthly", priority: "0.6" },
  { loc: `${PRIMARY}/projects/mgm`, changefreq: "monthly", priority: "0.6" },
  { loc: `${PRIMARY}/projects/walmart`, changefreq: "monthly", priority: "0.6" },
  { loc: `${PRIMARY}/projects/samsclub`, changefreq: "monthly", priority: "0.6" },
  { loc: `${PRIMARY}/social-media`, changefreq: "monthly", priority: "0.5" },

  // Attorney subdomain (canonical home for legal practice)
  { loc: `${ATTORNEY}/`, changefreq: "weekly", priority: "1.0", lastmod: today },
  { loc: `${ATTORNEY}/articles`, changefreq: "weekly", priority: "0.9", lastmod: today },
];

// Article pages on attorney subdomain (canonical) AND on primary domain
for (const a of articles) {
  entries.push({
    loc: `${ATTORNEY}/articles/${a.slug}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: a.published,
  });
  entries.push({
    loc: `${PRIMARY}/attorney/articles/${a.slug}`,
    changefreq: "monthly",
    priority: "0.6",
    lastmod: a.published,
  });
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${e.loc}</loc>`,
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
