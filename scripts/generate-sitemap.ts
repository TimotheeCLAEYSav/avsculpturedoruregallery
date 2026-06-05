// Generates public/sitemap.xml from the routes in src/App.tsx and the artwork
// titles in src/data/artworks.ts. Runs via predev/prebuild hooks so new
// artworks are automatically picked up on the next build.

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.av-sculpturedorure.fr";

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Static, hand-maintained routes (kept in sync with src/App.tsx).
const staticEntries: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/a-propos", changefreq: "monthly", priority: "0.8" },
  { path: "/collections", changefreq: "weekly", priority: "0.9" },
  { path: "/collections/femme", changefreq: "monthly", priority: "0.7" },
  { path: "/collections/faune", changefreq: "monthly", priority: "0.7" },
  { path: "/collections/flore", changefreq: "monthly", priority: "0.7" },
  { path: "/collections/contour", changefreq: "monthly", priority: "0.7" },
  { path: "/collections/abstrait", changefreq: "monthly", priority: "0.7" },
  { path: "/savoir-faire", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
];

// Extract artwork titles via regex (avoids resolving @/assets imports at script time).
const artworksSrc = readFileSync(resolve("src/data/artworks.ts"), "utf8");
const titleMatches = [...artworksSrc.matchAll(/title:\s*"((?:[^"\\]|\\.)*)"/g)];
const artworkSlugs = Array.from(new Set(titleMatches.map((m) => slugify(m[1]))));

const artworkEntries = artworkSlugs.map((slug) => ({
  path: `/oeuvres/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const entries = [...staticEntries, ...artworkEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      `  </url>`,
    ].join("\n"),
  ),
  `</urlset>`,
  ``,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries — ${artworkEntries.length} artworks)`);
