import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Check the supplied business facts directly in the shared artwork entry.
const source = readFileSync(new URL("../src/data/artworks.ts", import.meta.url), "utf8");
const entry = source.match(/\{\s*id: 24,[\s\S]*?\n  \},/)?.[0];

test("Coordonnées belongs to Abstrait", () => {
  assert.ok(entry);
  assert.match(entry, /collection: "abstrait"/);
});
test("The photographed Coordonnées piece is sold", () => {
  assert.match(entry ?? "", /status: "sold"/);
});
test("Coordonnées remains available to order", () => {
  assert.match(entry ?? "", /availability: "Commande sur demande"/);
});
test("Coordonnées dimensions are 260 x 125 x 125 mm", () => {
  assert.match(entry ?? "", /dimensions: "260 x 125 x 125 mm"/);
});
test("Coordonnées uses raw oak, 23 carat gold leaf and patina", () => {
  assert.match(entry ?? "", /materials: "Bois de chêne brut, feuille d'or 23 carats, patine"/);
});
test("All six photos retain their supplied order", () => {
  const photos = [...(entry ?? "").matchAll(/src: coordonnees(\d),/g)].map(match => Number(match[1]));
  assert.deepEqual(photos, [1, 2, 3, 4, 5, 6]);
});