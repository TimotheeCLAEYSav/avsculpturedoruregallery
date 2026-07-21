import { useEffect, useRef, useState } from "react";
import { isPreloaded } from "@/lib/imagePreload";
import { getPicture } from "@/lib/responsiveImages";

interface Props {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: "high" | "auto";
  loading?: "eager" | "lazy";
  onLoad?: () => void;
}

/**
 * Rend une <picture> multi-format (AVIF/WebP/JPEG) multi-largeur à partir
 * d'une URL d'asset. Fallback silencieux sur <img> si aucune variante n'a
 * été générée pour cette source.
 */
const ResponsiveArtImage = ({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = "auto",
  loading,
  onLoad,
}: Props) => {
  const pic = getPicture(src);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(() => isPreloaded(src));

  useEffect(() => {
    setLoaded(isPreloaded(src));
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, [src]);

  const commonImgProps = {
    ref: imgRef,
    alt,
    decoding: "async" as const,
    loading: loading ?? (priority === "high" ? "eager" : "lazy"),
    onLoad: () => {
      setLoaded(true);
      onLoad?.();
    },
    className: `${className} transition-opacity duration-500 ease-out ${
      loaded ? "opacity-100" : "opacity-0"
    }`,
    ...({ fetchpriority: priority === "high" ? "high" : "auto" } as Record<
      string,
      string
    >),
  };

  if (!pic) {
    return <img src={src} {...commonImgProps} />;
  }

  return (
    <picture>
      {pic.sources.avif && (
        <source type="image/avif" srcSet={pic.sources.avif} sizes={sizes} />
      )}
      {pic.sources.webp && (
        <source type="image/webp" srcSet={pic.sources.webp} sizes={sizes} />
      )}
      <img
        src={pic.img.src}
        srcSet={pic.sources.jpg}
        sizes={sizes}
        width={pic.img.w}
        height={pic.img.h}
        {...commonImgProps}
      />
    </picture>
  );
};

export default ResponsiveArtImage;
