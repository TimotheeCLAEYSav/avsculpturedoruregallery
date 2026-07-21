/**
 * Manifeste responsive : associe l'URL bundlée (celle stockée dans
 * `artworks.ts` via `import x from "@/assets/x.jpg"`) à un objet <picture>
 * généré à la volée par vite-imagetools (AVIF + WebP + JPEG, plusieurs largeurs).
 *
 * Ce fichier reste ~0 KB dans le bundle initial : les variantes ne sont
 * chargées que lorsque le composant est monté (route splittée).
 */

type PictureSources = Record<string, string>;
export interface PictureManifest {
  img: { src: string; w: number; h: number };
  sources: PictureSources;
}

// Map absolu (ex: "/src/assets/leopard-1.jpg") → URL bundlée hashée.
const rawUrls = import.meta.glob<string>("/src/assets/*.{jpg,jpeg,png}", {
  query: "?url",
  import: "default",
  eager: true,
});

// Map absolu → objet <picture> (srcset multi-format multi-largeur).
const pictures = import.meta.glob<PictureManifest>(
  "/src/assets/*.{jpg,jpeg,png}",
  {
    query: "?w=480;800;1200;1600&format=avif;webp;jpg&as=picture",
    import: "default",
    eager: true,
  }
);

const bySrc = new Map<string, PictureManifest>();
for (const abs in rawUrls) {
  const url = rawUrls[abs];
  const pic = pictures[abs];
  if (url && pic) bySrc.set(url, pic);
}

export function getPicture(src: string): PictureManifest | undefined {
  return bySrc.get(src);
}
