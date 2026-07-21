#!/usr/bin/env node
/**
 * Static prerender for GitHub Pages.
 *
 * For every public route (static pages, collections, artworks), writes a real
 * `dist/<path>/index.html` so GitHub Pages returns HTTP 200 with proper
 * <title>, meta description, canonical, Open Graph, Twitter Card and JSON-LD
 * directly in the markup — without waiting for client-side JS.
 *
 * The body still ships the SPA bundle, so React hydrates and routing keeps
 * working as before. Pure Node ESM, no external deps. Runs via `postbuild`.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  existsSync,
} from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = resolve(root, "dist");

const BASE_URL = "https://www.av-sculpturedorure.fr";
const SITE_NAME = "AV Sculpture & Dorure";

if (!existsSync(dist)) {
  console.error("[prerender] dist/ not found — run `vite build` first.");
  process.exit(1);
}

const template = readFileSync(join(dist, "index.html"), "utf8");
const src = readFileSync(resolve(root, "src/data/artworks.ts"), "utf8");

/* ---------- Parse import map (variable → original asset filename) ---------- */
const imports = {};
{
  const re = /import\s+(\w+)\s+from\s+"@\/assets\/([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) imports[m[1]] = m[2];
}

/* ---------- Parse collections ---------- */
const colMap = {};
{
  const block = src.match(/collectionTitles[^=]*=\s*{([\s\S]*?)\n};/);
  if (block) {
    const re =
      /(\w+):\s*{\s*title:\s*"([^"]+)",\s*description:\s*\n?\s*"((?:\\.|[^"\\])*)"/g;
    let c;
    while ((c = re.exec(block[1]))) {
      colMap[c[1]] = {
        title: c[2],
        description: c[3].replace(/\\"/g, '"').replace(/\\n/g, " "),
      };
    }
  }
}

/* ---------- Parse artworks ---------- */
const artworks = [];
{
  const all = src.match(/allArtworks[^=]*=\s*\[([\s\S]*?)\n\];/);
  if (all) {
    const blockRe = /\{\s*id:\s*\d+,[\s\S]*?\n\s{2}\}/g;
    let b;
    while ((b = blockRe.exec(all[1]))) {
      const blk = b[0];
      const get = (re) => blk.match(re)?.[1];
      artworks.push({
        title: get(/title:\s*"([^"]+)"/),
        collection: get(/collection:\s*"([^"]+)"/),
        description: get(/description:\s*\n?\s*"((?:\\.|[^"\\])*)"/)
          ?.replace(/\\"/g, '"')
          .replace(/\\n/g, " "),
        materials: get(/materials:\s*"([^"]+)"/),
        techniques: get(/techniques:\s*"([^"]+)"/),
        dimensions: get(/dimensions:\s*"([^"]+)"/),
        year: get(/year:\s*"([^"]+)"/),
        firstImageVar: get(/images:\s*\[\s*\{\s*src:\s*(\w+)/),
      });
    }
  }
}

/* ---------- Resolve hashed image filenames in dist/assets/ ---------- */
const distAssets = existsSync(join(dist, "assets"))
  ? readdirSync(join(dist, "assets"))
  : [];

function findHashedAsset(filename) {
  const dot = filename.lastIndexOf(".");
  const base = filename.slice(0, dot);
  const ext = filename.slice(dot);
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^${escape(base)}-[A-Za-z0-9_-]+${escape(ext)}$`);
  const found = distAssets.find((f) => re.test(f));
  return found ? `/assets/${found}` : null;
}

/* ---------- Helpers ---------- */
const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function buildHead({ title, description, path, image, type = "website", jsonLd }) {
  // GitHub Pages serves prerendered routes as /path/index.html and 301-redirects
  // /path → /path/. Canonical & og:url MUST include the trailing slash so
  // Googlebot doesn't see a redirect on every fetch (Search Console "Redirect error").
  const canonicalPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const url = `${BASE_URL}${canonicalPath}`;
  const img = image
    ? image.startsWith("http")
      ? image
      : `${BASE_URL}${image}`
    : `${BASE_URL}/og-image.jpg`;
  const lines = [
    `    <!-- Prerendered SEO (${path}) -->`,
    `    <title>${esc(title)}</title>`,
    `    <meta name="description" content="${esc(description)}" />`,
    `    <link rel="canonical" href="${url}" />`,
    `    <meta property="og:title" content="${esc(title)}" />`,
    `    <meta property="og:description" content="${esc(description)}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:type" content="${type}" />`,
    `    <meta property="og:image" content="${img}" />`,
    `    <meta property="og:site_name" content="${SITE_NAME}" />`,
    `    <meta property="og:locale" content="fr_FR" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${esc(title)}" />`,
    `    <meta name="twitter:description" content="${esc(description)}" />`,
    `    <meta name="twitter:image" content="${img}" />`,
  ];
  if (jsonLd) {
    lines.push(
      `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
    );
  }
  return lines.join("\n") + "\n  ";
}

/** Strip template tags that we override per page, then inject our head block. */
function renderPage(headExtra) {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>\s*/i, "");
  html = html.replace(/<meta\s+name="description"[^>]*>\s*/i, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>\s*/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>\s*/gi, "");
  return html.replace("</head>", `${headExtra}</head>`);
}

function writePage(path, headExtra) {
  const outDir = path === "/" ? dist : join(dist, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), renderPage(headExtra));
}

/* ---------- Static pages ---------- */
const staticPages = [
  {
    path: "/a-propos",
    title: "À propos — Aurélie Villemur | AV Sculpture & Dorure",
    description:
      "Découvrez le parcours et la démarche d'Aurélie Villemur, sculptrice et doreuse sur bois : artisanat d'art, restauration du patrimoine et création contemporaine.",
  },
  {
    path: "/collections",
    title: "Collections — Œuvres sculptées | Aurélie Villemur",
    description:
      "Explorez les collections d'Aurélie Villemur : Femme, Faune, Flore, Contour et Abstrait. Sculptures sur bois, dorure à la feuille et créations sur mesure.",
  },
  {
    path: "/savoir-faire",
    title: "Savoir-faire — Sculpture, dorure et restauration | Aurélie Villemur",
    description:
      "Sculpture sur bois, dorure à la feuille, restauration du patrimoine. Techniques traditionnelles et savoir-faire d'excellence au service de la création.",
  },
  {
    path: "/stages",
    title: "Stages d'initiation à la sculpture sur bois | Aurélie Villemur",
    description:
      "Stages d'initiation à la sculpture sur bois avec Aurélie Villemur : découverte des outils, des essences et des gestes traditionnels. Débutant, initié, perfectionnement. Matériel fourni.",
  },
  {
    path: "/contact",
    title: "Contact — Aurélie Villemur | AV Sculpture & Dorure",
    description:
      "Contactez Aurélie Villemur, sculptrice et doreuse sur bois, pour toute demande de création, restauration ou collaboration.",
  },
];

for (const p of staticPages) writePage(p.path, buildHead(p));

/* ---------- Collection pages ---------- */
for (const [id, info] of Object.entries(colMap)) {
  const path = `/collections/${id}`;
  const title = `Collection ${info.title} — Œuvres sculptées | Aurélie Villemur`;
  const description = info.description.slice(0, 160);
  writePage(path, buildHead({ title, description, path }));
}

/* ---------- Artwork pages ---------- */
let artworkCount = 0;
for (const a of artworks) {
  if (!a.title || !a.collection) continue;
  const slug = slugify(a.title);
  const path = `/oeuvres/${slug}`;
  const col = colMap[a.collection];
  const title = `${a.title} — ${col?.title ?? "Collection"} | Aurélie Villemur`;
  const description =
    (a.description || `${a.title}, œuvre sculptée par Aurélie Villemur.`)
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 155);
  const imageFile = a.firstImageVar ? imports[a.firstImageVar] : null;
  const imageUrl = imageFile ? findHashedAsset(imageFile) : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: a.title,
    description: a.description,
    artMedium: a.materials,
    artworkSurface: a.materials,
    artform: a.techniques,
    creator: {
      "@type": "Person",
      name: "Aurélie Villemur",
      jobTitle: "Sculptrice et doreuse sur bois",
      url: BASE_URL,
    },
    url: `${BASE_URL}${path}/`,
    ...(imageUrl ? { image: `${BASE_URL}${imageUrl}` } : {}),
    ...(a.year ? { dateCreated: a.year } : {}),
  };
  writePage(
    path,
    buildHead({ title, description, path, type: "article", image: imageUrl, jsonLd }),
  );
  artworkCount++;
}

console.log(
  `[prerender] ${staticPages.length} static + ${Object.keys(colMap).length} collections + ${artworkCount} artworks → dist/`,
);
