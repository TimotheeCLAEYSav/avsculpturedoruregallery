import { useEffect, useRef, useState } from "react";
import { isPreloaded } from "@/lib/imagePreload";
import ExhibitionBadge from "@/components/ExhibitionBadge";
import type { Exhibition } from "@/data/artworks";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  size?: "small" | "medium" | "large";
  objectPosition?: "center" | "top";
  objectFit?: "cover" | "contain";
  status?: "available" | "sold";
  priority?: "high" | "auto";
  exhibitions?: Exhibition[];
}

const ImageCard = ({ src, alt, title, category, onClick, onMouseEnter, size = "medium", objectPosition = "center", objectFit = "cover", status, priority = "auto", exhibitions }: ImageCardProps) => {

  const aspectClasses = {
    small: "aspect-square",
    medium: "aspect-[4/5]",
    large: "aspect-[3/4]",
  };
  
  const positionClasses = {
    center: "object-center",
    top: "object-top",
  };

  const fitClasses = {
    cover: "object-cover",
    contain: "object-contain",
  };

  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(() => isPreloaded(src));

  useEffect(() => {
    setLoaded(isPreloaded(src));
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div
      className="group relative overflow-hidden cursor-pointer bg-secondary/60 p-3 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-shadow duration-500"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {/* Cadre doré Art Déco */}
      <div className="absolute inset-0 border border-accent/30 z-10 pointer-events-none group-hover:border-accent transition-colors duration-500" />
      <div className="absolute inset-1 border border-accent/20 z-10 pointer-events-none group-hover:border-accent/60 transition-colors duration-500" />

      {/* Badge "Vendu" */}
      {status === "sold" && (
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 text-[0.65rem] tracking-[0.25em] uppercase font-medium border border-accent/60 backdrop-blur-sm shadow-sm">
            <span className="w-1 h-1 rotate-45 bg-accent" />
            Vendu
          </span>
        </div>
      )}

      {/* Badge exposition en cours (discret, ancré en bas-gauche pour ne pas masquer l'œuvre) */}
      {exhibitions && exhibitions.length > 0 && (
        <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
          <ExhibitionBadge exhibitions={exhibitions} variant="card" />
        </div>
      )}




      {/* Passe-partout + image — aspect-ratio réservé pour éviter tout CLS */}
      <div className={`${aspectClasses[size]} overflow-hidden bg-secondary/40 ring-1 ring-accent/20`}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          decoding="async"
          loading={priority === "high" ? "eager" : "lazy"}
          {...({ fetchpriority: priority === "high" ? "high" : "auto" } as Record<string, string>)}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full ${fitClasses[objectFit]} ${positionClasses[objectPosition]} mix-blend-multiply transition-all duration-700 ease-out group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Overlay au survol avec effet de révélation */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        {category && (
          <span className="text-accent text-xs tracking-[0.2em] uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {category}
          </span>
        )}
        {title && (
          <h3 className="font-display text-xl text-primary-foreground translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
            {title}
          </h3>
        )}
        
        {/* Icône de zoom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-accent/80 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
            <path d="M11 8v6" />
            <path d="M8 11h6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
