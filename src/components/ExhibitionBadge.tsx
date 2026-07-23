import { Landmark } from "lucide-react";
import type { ExhibitionConfig as Exhibition } from "@/data/exhibitions";

interface ExhibitionBadgeProps {
  exhibitions: Exhibition[];
  variant?: "card" | "detail";
  className?: string;
}

/**
 * Badge discret et élégant signalant qu'une œuvre est actuellement
 * visible dans une (ou plusieurs) exposition(s). Décliné en deux variantes :
 * - "card"  : chip compact posé sur la vignette d'une œuvre.
 * - "detail": ligne raffinée affichée sur la fiche d'une œuvre.
 */
const ExhibitionBadge = ({ exhibitions, variant = "card", className = "" }: ExhibitionBadgeProps) => {
  if (!exhibitions?.length) return null;

  if (variant === "card") {
    // Un seul lieu suffit à afficher un chip compact. Si plusieurs, on
    // n'affiche que le premier lieu ici pour rester lisible ; la fiche
    // détaillera l'ensemble.
    const first = exhibitions[0];
    return (
      <span
        className={`inline-flex items-center gap-1.5 bg-secondary/95 text-primary px-2 py-0.5 text-[0.6rem] tracking-[0.18em] uppercase font-medium border border-accent/60 backdrop-blur-sm shadow-sm ${className}`}
        title={`Visible actuellement à la ${first.gallery} · ${first.city}`}
      >
        <Landmark size={11} className="text-primary/80 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">Exposée · {first.city}</span>
      </span>
    );
  }

  return (
    <div className={`space-y-1.5 ${className}`}>
      {exhibitions.map((ex, i) => (
        <p
          key={`${ex.gallery}-${ex.city}-${i}`}
          className="inline-flex items-center gap-2 text-sm text-primary/90 italic"
        >
          <Landmark size={16} className="text-accent shrink-0" aria-hidden="true" />
          <span>
            Cette œuvre est actuellement visible à la{" "}
            {ex.url ? (
              <a
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                className="not-italic font-medium text-accent hover:underline"
              >
                {ex.gallery}
              </a>
            ) : (
              <span className="not-italic font-medium">{ex.gallery}</span>
            )}{" "}
            ({ex.city}).
          </span>
        </p>
      ))}
    </div>
  );
};

export default ExhibitionBadge;
