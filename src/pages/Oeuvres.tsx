import { useState } from "react";
import Layout from "@/components/Layout";
import ImageCard from "@/components/ImageCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import des images
import sculpture2 from "@/assets/sculpture-2.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import sculpture4 from "@/assets/sculpture-4.jpg";
import dorure1 from "@/assets/dorure-1.jpg";
import dorure2 from "@/assets/dorure-2.jpg";

type Category = "all" | "sculptures" | "dorures";

interface Artwork {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: Category;
  categoryLabel: string;
  description?: string;
}

const artworks: Artwork[] = [
  // Sculptures
  {
    id: 1,
    src: sculpture2,
    alt: "Sculpture Enigma",
    title: "Enigma",
    category: "sculptures",
    categoryLabel: "Sculpture",
  },
  {
    id: 2,
    src: sculpture3,
    alt: "Buste sculpté en bois",
    title: "Buste sculpté",
    category: "sculptures",
    categoryLabel: "Sculpture",
  },
  {
    id: 3,
    src: sculpture4,
    alt: "Bas-relief sculpté avec dorure",
    title: "Bas-relief",
    category: "sculptures",
    categoryLabel: "Sculpture",
  },
  // Dorures
  {
    id: 4,
    src: dorure1,
    alt: "Panneau doré à la feuille d'or",
    title: "Panneau doré",
    category: "dorures",
    categoryLabel: "Dorure",
  },
  {
    id: 5,
    src: dorure2,
    alt: "Motif inca doré à la feuille d'or",
    title: "Motif Inca",
    category: "dorures",
    categoryLabel: "Dorure",
  },
];

const categories = [
  { id: "all" as Category, label: "Toutes" },
  { id: "sculptures" as Category, label: "Sculptures" },
  { id: "dorures" as Category, label: "Dorures" },
];

const Oeuvres = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = activeCategory === "all"
    ? artworks
    : artworks.filter((artwork) => artwork.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-accent" />
            </div>
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Mes Œuvres
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Explorez mes créations : sculptures sur bois et dorures à la feuille.
            </p>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm font-medium tracking-wide border transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grille d'images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ImageCard
                  src={artwork.src}
                  alt={artwork.alt}
                  title={artwork.title}
                  category={artwork.categoryLabel}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              </div>
            ))}
          </div>

          {/* Message si aucune œuvre */}
          {filteredArtworks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aucune œuvre dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal de détail */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
          {selectedArtwork && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/5] md:aspect-auto">
                <img
                  src={selectedArtwork.src}
                  alt={selectedArtwork.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
                  {selectedArtwork.categoryLabel}
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {selectedArtwork.title}
                </h3>
                {selectedArtwork.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Oeuvres;
