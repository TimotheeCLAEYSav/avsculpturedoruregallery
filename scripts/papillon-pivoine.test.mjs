import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Le statut partagé doit déclencher le badge existant sans modifier le design.
test("Le papillon et la pivoine is sold", () => {
  const source = readFileSync(new URL("../src/data/artworks.ts", import.meta.url), "utf8");
  const artwork = source.match(/\{\s*id: 19,[\s\S]*?\n  \},/)?.[0];
  assert.ok(artwork);
  assert.match(artwork, /status: "sold"/);
});