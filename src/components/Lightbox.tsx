import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onIndexChange: (index: number) => void;
  title?: string;
  category?: string;
  description?: string;
}

const Lightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onIndexChange,
  title,
  category,
  description,
}: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 animate-fade-in">
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        <X size={28} />
      </button>

      {/* Contenu principal */}
      <div className="h-full flex flex-col md:flex-row">
        {/* Zone image */}
        <div className="flex-1 relative flex items-center justify-center p-4 md:p-12">
          {/* Image principale */}
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-h-[70vh] md:max-h-[85vh] max-w-full object-contain animate-scale-in"
            key={currentIndex}
          />

          {/* Navigation gauche */}
          {images.length > 1 && (
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all ${
                currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
              }`}
              aria-label="Image précédente"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Navigation droite */}
          {images.length > 1 && (
            <button
              onClick={onNext}
              disabled={currentIndex === images.length - 1}
              className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all ${
                currentIndex === images.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : ""
              }`}
              aria-label="Image suivante"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        {/* Panneau d'informations */}
        <div className="md:w-80 lg:w-96 bg-black/50 p-6 md:p-8 flex flex-col">
          {category && (
            <span className="text-accent text-xs tracking-[0.25em] uppercase mb-2">
              {category}
            </span>
          )}
          {title && (
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-white/70 leading-relaxed mb-6">{description}</p>
          )}

          {/* Indicateur de position */}
          {images.length > 1 && (
            <div className="mt-auto">
              <p className="text-white/50 text-sm mb-4">
                {currentIndex + 1} / {images.length}
              </p>

              {/* Miniatures */}
              <div className="flex gap-2 flex-wrap">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => onIndexChange(idx)}
                    className={`w-16 h-16 overflow-hidden border-2 transition-all ${
                      idx === currentIndex
                        ? "border-accent"
                        : "border-white/20 hover:border-white/50"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
