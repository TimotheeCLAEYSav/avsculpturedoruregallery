import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText = "Me contacter",
  ctaLink = "/contact",
  backgroundImage,
  overlay = true,
}: HeroSectionProps) => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Overlay / Fond */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" />
      )}
      
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Ornement supérieur */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="w-16 md:w-24 h-px bg-accent" />
          <div className="w-2 h-2 rotate-45 bg-accent" />
          <div className="w-16 md:w-24 h-px bg-accent" />
        </div>

        {/* Sous-titre */}
        <p 
          className="text-accent text-sm md:text-base tracking-[0.25em] uppercase mb-4 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          {subtitle}
        </p>

        {/* Titre principal */}
        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p 
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            {description}
          </p>
        )}

        {/* Bouton CTA */}
        <div 
          className="animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <Button 
            asChild 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
          >
            <Link to={ctaLink} className="inline-flex items-center gap-2">
              {ctaText}
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {/* Ornement inférieur */}
        <div 
          className="flex items-center justify-center gap-4 mt-12 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="w-8 h-px bg-accent/50" />
          <div className="w-1 h-1 rotate-45 bg-accent/50" />
          <div className="w-8 h-px bg-accent/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
