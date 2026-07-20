import { useEffect, useRef, useState } from "react";
import { isPreloaded } from "@/lib/imagePreload";

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Classes appliquées au wrapper (permet de contrôler l'aspect-ratio et donc le CLS). */
  wrapperClassName?: string;
  /** Priorité de chargement — `high` pour les images critiques (LCP). */
  priority?: "high" | "auto";
}

/**
 * Image avec chargement progressif :
 * - Réserve l'espace via un wrapper (évite tout CLS quand l'aspect-ratio y est défini).
 * - Fade-in doux à l'apparition (aucun flash).
 * - `decoding="async"` + `fetchpriority` pour ne pas bloquer le rendu.
 * - Si l'image est déjà en cache (préchargée), affichage instantané sans fade.
 */
const ProgressiveImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  priority = "auto",
  loading,
  onLoad,
  ...rest
}: ProgressiveImageProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(() => isPreloaded(src));

  // Vérifie l'état `complete` au montage (cache navigateur, SSR, changement de src).
  useEffect(() => {
    setLoaded(isPreloaded(src));
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-secondary/40 ${wrapperClassName}`}
      aria-busy={!loaded}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        decoding="async"
        loading={loading ?? (priority === "high" ? "eager" : "lazy")}
        // @ts-expect-error - fetchpriority est récent mais accepté par React
        fetchpriority={priority === "high" ? "high" : "auto"}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`${className} transition-opacity duration-500 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </div>
  );
};

export default ProgressiveImage;
