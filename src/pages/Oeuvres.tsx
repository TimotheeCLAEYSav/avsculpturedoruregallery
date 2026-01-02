import { useState } from "react";
import Layout from "@/components/Layout";
import ImageCard from "@/components/ImageCard";
import Lightbox from "@/components/Lightbox";

// Import des images
import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import sculpture4 from "@/assets/sculpture-4.jpg";
import dorure1 from "@/assets/dorure-1.jpg";
import dorure2 from "@/assets/dorure-2.jpg";
import frida2 from "@/assets/frida-2.jpg";
import frida3 from "@/assets/frida-3.jpg";
import basRelief2 from "@/assets/bas-relief-2.jpg";
import basRelief3 from "@/assets/bas-relief-3.jpg";

type Category = "all" | "femmes" | "faune" | "flore" | "dorures";

interface ArtworkImage {
  src: string;
  alt: string;
}

interface Artwork {
  id: number;
  images: ArtworkImage[];
  title: string;
  category: Category;
  categoryLabel: string;
  description?: string;
}

const artworks: Artwork[] = [
  // Femmes
  {
    id: 1,
    images: [
      { src: sculpture1, alt: "Enigma - vue principale" },
      { src: sculpture2, alt: "Enigma - vue détaillée" },
    ],
    title: "Enigma",
    category: "femmes",
    categoryLabel: "Femmes",
    description: "Sculpture représentant un profil de femme avec détails à la feuille d'or.",
  },
  {
    id: 2,
    images: [
      { src: sculpture3, alt: "Buste de Frida Kahlo - vue de face" },
      { src: frida2, alt: "Buste de Frida Kahlo - vue de profil" },
      { src: frida3, alt: "Buste de Frida Kahlo - vue arrière" },
    ],
    title: "Frida Kahlo",
    category: "femmes",
    categoryLabel: "Femmes",
    description: "Buste sculpté en bois représentant Frida Kahlo, avec ornements floraux et détails dorés.",
  },
  {
    id: 3,
    images: [
      { src: sculpture4, alt: "Bas-relief avec colibri et fleurs" },
      { src: basRelief2, alt: "Bas-relief - détail du visage avec dorure" },
      { src: basRelief3, alt: "Bas-relief - détail du colibri doré" },
    ],
    title: "Le Colibri",
    category: "femmes",
    categoryLabel: "Femmes",
    description: "Bas-relief sculpté représentant un colibri parmi les fleurs, rehaussé de feuille d'or.",
  },
  // Dorures
  {
    id: 4,
    images: [
      { src: dorure1, alt: "Panneau doré à la feuille d'or" },
    ],
    title: "Panneau doré",
    category: "dorures",
    categoryLabel: "Dorure",
  },
  {
    id: 5,
    images: [
      { src: dorure2, alt: "Motif inca doré à la feuille d'or" },
    ],
    title: "Motif Inca",
    category: "dorures",
    categoryLabel: "Dorure",
  },
];

const categories = [
  { id: "all" as Category, label: "Toutes" },
  { id: "femmes" as Category, label: "Femmes" },
  { id: "faune" as Category, label: "Faune" },
  { id: "flore" as Category, label: "Flore" },
  { id: "dorures" as Category, label: "Dorures" },
];

const Oeuvres = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredArtworks = activeCategory === "all"
    ? artworks
    : artworks.filter((artwork) => artwork.category === activeCategory);

  const openArtwork = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(0);
  };

  const closeDialog = () => {
    setSelectedArtwork(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedArtwork && currentImageIndex < selectedArtwork.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

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
              Explorez mes créations : sculptures sur bois, plâtre et dorures à la feuille.
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

          {/* Galerie Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredArtworks.map((artwork, index) => {
              // Variation de tailles pour l'effet masonry
              const sizes: Array<"small" | "medium" | "large"> = ["medium", "large", "small", "large", "medium"];
              const size = sizes[index % sizes.length];
              
              return (
                <div
                  key={artwork.id}
                  className="break-inside-avoid animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <ImageCard
                    src={artwork.images[0].src}
                    alt={artwork.images[0].alt}
                    title={artwork.title}
                    category={artwork.categoryLabel}
                    onClick={() => openArtwork(artwork)}
                    size={size}
                  />
                  {artwork.images.length > 1 && (
                    <div className="mt-2 text-center">
                      <span className="text-xs text-muted-foreground italic">
                        {artwork.images.length} vues disponibles
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
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

      {/* Lightbox immersive */}
      {selectedArtwork && (
        <Lightbox
          images={selectedArtwork.images}
          currentIndex={currentImageIndex}
          isOpen={!!selectedArtwork}
          onClose={closeDialog}
          onNext={nextImage}
          onPrev={prevImage}
          onIndexChange={setCurrentImageIndex}
          title={selectedArtwork.title}
          category={selectedArtwork.categoryLabel}
          description={selectedArtwork.description}
        />
      )}
    </Layout>
  );
};

export default Oeuvres;
