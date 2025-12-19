interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  withOrnament?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  withOrnament = true 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {withOrnament && (
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-accent" />
          <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
          <div className="w-12 h-px bg-accent" />
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
