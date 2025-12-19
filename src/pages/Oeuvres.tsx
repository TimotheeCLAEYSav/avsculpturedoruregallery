import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ImageCard from "@/components/ImageCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Category = "all" | "sculptures" | "dorures" | "restaurations";

interface Artwork {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: Category;
  categoryLabel: string;
  description?: string;
}

// IMAGES PLACEHOLDERS - À remplacer par vos vraies photos
const artworks: Artwork[] = [
  // Sculptures
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
    alt: "Sculpture ornementale baroque",
    title: "Ornement baroque",
    category: "sculptures",
    categoryLabel: "Sculpture",
    description: "Sculpture ornementale en tilleul, inspirée du style baroque français.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop",
    alt: "Bas-relief floral",
    title: "Floraison",
    category: "sculptures",
    categoryLabel: "Sculpture",
    description: "Bas-relief représentant un motif floral stylisé.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&h=1000&fit=crop",
    alt: "Sculpture de feuillage",
    title: "Acanthes",
    category: "sculptures",
    categoryLabel: "Sculpture",
    description: "Feuilles d'acanthe sculptées en chêne.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=1000&fit=crop",
    alt: "Mascaron sculpté",
    title: "Mascaron",
    category: "sculptures",
    categoryLabel: "Sculpture",
    description: "Mascaron sculpté dans la tradition classique.",
  },
  // Dorures
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=1000&fit=crop",
    alt: "Cadre doré à la feuille d'or",
    title: "Cadre Louis XV",
    category: "dorures",
    categoryLabel: "Dorure",
    description: "Cadre sculpté et doré à la feuille d'or, style Louis XV.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=1000&fit=crop",
    alt: "Miroir doré",
    title: "Miroir Régence",
    category: "dorures",
    categoryLabel: "Dorure",
    description: "Miroir de style Régence, dorure à l'eau sur apprêt traditionnel.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=1000&fit=crop",
    alt: "Console dorée",
    title: "Console dorée",
    category: "dorures",
    categoryLabel: "Dorure",
    description: "Console en bois sculpté avec dorure à la feuille.",
  },
  // Restaurations
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=1000&fit=crop",
    alt: "Mobilier restauré",
    title: "Commode XVIIIe",
    category: "restaurations",
    categoryLabel: "Restauration",
    description: "Restauration complète d'une commode du XVIIIe siècle.",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop",
    alt: "Boiseries restaurées",
    title: "Boiseries de château",
    category: "restaurations",
    categoryLabel: "Restauration",
    description: "Restauration de boiseries sculptées et dorées pour un château classé.",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=1000&fit=crop",
    alt: "Retable restauré",
    title: "Retable d'église",
    category: "restaurations",
    categoryLabel: "Restauration",
    description: "Restauration d'un retable baroque du XVIIe siècle.",
  },
];

const categories = [
  { id: "all" as Category, label: "Toutes" },
  { id: "sculptures" as Category, label: "Sculptures" },
  { id: "dorures" as Category, label: "Dorures" },
  { id: "restaurations" as Category, label: "Restaurations" },
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
              Explorez mes créations et restaurations : sculptures sur bois, dorures à la feuille et chantiers patrimoniaux.
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
