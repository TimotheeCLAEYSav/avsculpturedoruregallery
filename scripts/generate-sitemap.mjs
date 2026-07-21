#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from the static routes + the artworks data source.
 * Pure Node.js (ESM). No external dependencies. Compatible with `npm run build`.
 *
 * Runs via the `prebuild` npm script before `vite build`.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const BASE_URL = "https://www.av-sculpturedorure.fr";

const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Extract titles + collections from src/data/artworks.ts without executing TS. */
function extractArtworks() {
  const file = readFileSync(resolve(root, "src/data/artworks.ts"), "utf8");
  // Match each object: title + collection
  const artworkRegex =
    /title:\s*"([^"]+)"\s*,\s*collection:\s*"([^"]+)"/g;
  const artworks = [];
  let m;
  while ((m = artworkRegex.exec(file)) !== null) {
    artworks.push({ title: m[1], collection: m[2] });
  }
  return artworks;
}

function extractCollectionIds() {
  const file = readFileSync(resolve(root, "src/data/artworks.ts"), "utf8");
  const block = file.match(/collectionTitles[^=]*=\s*{([\s\S]*?)\n};/);
  if (!block) return [];
  const ids = [];
  const re = /^\s*(\w+):\s*{/gm;
  let m;
  while ((m = re.exec(block[1])) !== null) ids.push(m[1]);
  return ids;
}

const today = new Date().toISOString().split("T")[0];

const staticEntries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/a-propos", changefreq: "monthly", priority: "0.8" },
  { path: "/collections", changefreq: "weekly", priority: "0.9" },
  { path: "/savoir-faire", changefreq: "monthly", priority: "0.8" },
  { path: "/stages", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
];

const collectionEntries = extractCollectionIds().map((id) => ({
  path: `/collections/${id}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const artworkEntries = extractArtworks().map((a) => ({
  path: `/oeuvres/${slugify(a.title)}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const entries = [...staticEntries, ...collectionEntries, ...artworkEntries];

const urlNodes = entries
  .map(
    (e) => {
      const locPath = e.path === "/" ? "/" : `${e.path}/`;
      return `  <url>\n    <loc>${BASE_URL}${locPath}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`;
    },
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>
`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
