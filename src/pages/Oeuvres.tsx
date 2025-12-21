import { useState } from "react";
import Layout from "@/components/Layout";
import ImageCard from "@/components/ImageCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  // Faune
  {
    id: 3,
    images: [
      { src: sculpture4, alt: "Bas-relief avec colibri et fleurs" },
      { src: basRelief2, alt: "Bas-relief - détail du visage avec dorure" },
      { src: basRelief3, alt: "Bas-relief - détail du colibri doré" },
    ],
    title: "Le Colibri",
    category: "faune",
    categoryLabel: "Faune",
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

          {/* Grille d'images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ImageCard
                  src={artwork.images[0].src}
                  alt={artwork.images[0].alt}
                  title={artwork.title}
                  category={artwork.categoryLabel}
                  onClick={() => openArtwork(artwork)}
                />
                {artwork.images.length > 1 && (
                  <div className="mt-2 text-center">
                    <span className="text-xs text-muted-foreground">
                      {artwork.images.length} photos
                    </span>
                  </div>
                )}
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

      {/* Modal de détail avec galerie */}
      <Dialog open={!!selectedArtwork} onOpenChange={closeDialog}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-card">
          {selectedArtwork && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Zone image avec navigation */}
              <div className="relative aspect-[4/5] md:aspect-auto bg-secondary">
                <img
                  src={selectedArtwork.images[currentImageIndex].src}
                  alt={selectedArtwork.images[currentImageIndex].alt}
                  className="w-full h-full object-contain bg-secondary"
                />
                
                {/* Navigation entre images */}
                {selectedArtwork.images.length > 1 && (
                  <>
                    {/* Bouton précédent */}
                    <button
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 text-foreground rounded-full transition-opacity ${
                        currentImageIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-background"
                      }`}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    {/* Bouton suivant */}
                    <button
                      onClick={nextImage}
                      disabled={currentImageIndex === selectedArtwork.images.length - 1}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 text-foreground rounded-full transition-opacity ${
                        currentImageIndex === selectedArtwork.images.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-background"
                      }`}
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedArtwork.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-accent w-4"
                              : "bg-background/60 hover:bg-background"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Informations */}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
                  {selectedArtwork.categoryLabel}
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {selectedArtwork.title}
                </h3>
                {selectedArtwork.description && (
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedArtwork.description}
                  </p>
                )}
                
                {/* Miniatures */}
                {selectedArtwork.images.length > 1 && (
                  <div className="mt-auto">
                    <p className="text-xs text-muted-foreground mb-3">
                      Cliquez pour voir les autres vues
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {selectedArtwork.images.map((image, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-16 h-16 overflow-hidden border-2 transition-all ${
                            idx === currentImageIndex
                              ? "border-accent"
                              : "border-transparent hover:border-accent/50"
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
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Oeuvres;
