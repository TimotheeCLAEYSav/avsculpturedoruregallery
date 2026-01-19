interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  objectPosition?: "center" | "top";
  objectFit?: "cover" | "contain";
}

const ImageCard = ({ src, alt, title, category, onClick, size = "medium", objectPosition = "center", objectFit = "cover" }: ImageCardProps) => {
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

  return (
    <div 
      className="group relative overflow-hidden cursor-pointer bg-card"
      onClick={onClick}
    >
      {/* Cadre doré Art Déco */}
      <div className="absolute inset-0 border border-accent/30 z-10 pointer-events-none group-hover:border-accent transition-colors duration-500" />
      <div className="absolute inset-1 border border-accent/20 z-10 pointer-events-none group-hover:border-accent/60 transition-colors duration-500" />
      
      {/* Image avec effet zoom */}
      <div className={`${aspectClasses[size]} overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${fitClasses[objectFit]} ${positionClasses[objectPosition]} transition-all duration-700 ease-out group-hover:scale-110`}
          loading="lazy"
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
