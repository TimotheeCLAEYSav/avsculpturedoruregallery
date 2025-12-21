interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  onClick?: () => void;
}

const ImageCard = ({ src, alt, title, category, onClick }: ImageCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden cursor-pointer bg-card"
      onClick={onClick}
    >
      {/* Cadre doré Art Déco */}
      <div className="absolute inset-0 border border-accent/30 z-10 pointer-events-none group-hover:border-accent/60 transition-colors duration-300" />
      <div className="absolute inset-1 border border-accent/20 z-10 pointer-events-none group-hover:border-accent/40 transition-colors duration-300" />
      
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Overlay au survol */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        {category && (
          <span className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
            {category}
          </span>
        )}
        {title && (
          <h3 className="font-display text-xl text-primary-foreground">
            {title}
          </h3>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
