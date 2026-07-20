/**
 * Utilitaires de préchargement d'images.
 * - Utilise un cache module-level pour éviter les préchargements en double.
 * - Utilise `Image()` (déclenche le fetch réseau + décodage) — les images
 *   deviennent instantanément disponibles depuis le cache HTTP/mémoire.
 */

const preloaded = new Set<string>();
const inflight = new Map<string, Promise<void>>();

export function preloadImage(src: string, priority: "high" | "low" = "low"): Promise<void> {
  if (!src || preloaded.has(src)) return Promise.resolve();
  const existing = inflight.get(src);
  if (existing) return existing;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    // fetchpriority est ignoré silencieusement par les navigateurs qui ne le
    // supportent pas — sûr à définir.
    (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = priority;
    img.decoding = "async";
    img.onload = () => {
      preloaded.add(src);
      inflight.delete(src);
      resolve();
    };
    img.onerror = () => {
      inflight.delete(src);
      resolve();
    };
    img.src = src;
  });

  inflight.set(src, promise);
  return promise;
}

export function preloadImages(srcs: (string | undefined)[], priority: "high" | "low" = "low") {
  srcs.forEach((s) => {
    if (s) preloadImage(s, priority);
  });
}

export function isPreloaded(src: string) {
  return preloaded.has(src);
}
