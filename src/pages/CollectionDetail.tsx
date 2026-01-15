import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ImageCard from "@/components/ImageCard";
import Lightbox from "@/components/Lightbox";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
import flore1 from "@/assets/flore-1.png";

interface ArtworkImage {
  src: string;
  alt: string;
  objectPosition?: "center" | "top";
}

interface Artwork {
  id: number;
  images: ArtworkImage[];
  title: string;
  collection: string;
  categoryLabel: string;
  description?: string;
}

const allArtworks: Artwork[] = [
  // Collection Femme
  {
    id: 1,
    images: [
      { src: sculpture1, alt: "Enigma - vue principale", objectPosition: "top" },
      { src: sculpture2, alt: "Enigma - vue détaillée" },
    ],
    title: "Enigma",
    collection: "femme",
    categoryLabel: "Femme",
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
    collection: "femme",
    categoryLabel: "Femme",
    description: "Buste sculpté en bois représentant Frida Kahlo, avec ornements floraux et détails dorés.",
  },
  // Collection Faune
  {
    id: 3,
    images: [
      { src: sculpture4, alt: "Bas-relief avec colibri et fleurs" },
      { src: basRelief2, alt: "Bas-relief - détail du visage avec dorure" },
      { src: basRelief3, alt: "Bas-relief - détail du colibri doré" },
    ],
    title: "Le Colibri",
    collection: "faune",
    categoryLabel: "Faune",
    description: "Bas-relief sculpté représentant un colibri parmi les fleurs, rehaussé de feuille d'or.",
  },
  // Collection Flore
  {
    id: 6,
    images: [
      { src: flore1, alt: "Fleur sculptée en bois" },
    ],
    title: "La Fleur",
    collection: "flore",
    categoryLabel: "Flore",
    description: "Fleur sculptée dans le bois avec délicatesse.",
  },
  // Collection Contour
  {
    id: 7,
    images: [
      { src: dorure1, alt: "Panneau doré à la feuille d'or" },
    ],
    title: "Panneau doré",
    collection: "contour",
    categoryLabel: "Contour",
  },
  // Collection Abstrait
  {
    id: 8,
    images: [
      { src: dorure2, alt: "Motif inca doré à la feuille d'or" },
    ],
    title: "Motif Inca",
    collection: "abstrait",
    categoryLabel: "Abstrait",
    description: "Bas-relief sculpté représentant un colibri parmi les fleurs, rehaussé de feuille d'or.",
  },
  // Collection Flore
  {
    id: 4,
    images: [
      { src: flore1, alt: "Fleur sculptée en bois" },
    ],
    title: "La Fleur",
    collection: "flore",
    categoryLabel: "Flore",
    description: "Fleur sculptée dans le bois avec délicatesse.",
  },
  // Collection Contour
  {
    id: 5,
    images: [
      { src: dorure1, alt: "Panneau doré à la feuille d'or" },
    ],
    title: "Panneau doré",
    collection: "contour",
    categoryLabel: "Contour",
  },
  // Collection Abstrait
  {
    id: 6,
    images: [
      { src: dorure2, alt: "Motif inca doré à la feuille d'or" },
    ],
    title: "Motif Inca",
    collection: "abstrait",
    categoryLabel: "Abstrait",
  },
];

const collectionTitles: Record<string, { title: string; description: string }> = {
  femme: {
    title: "Femme",
    description: "Portraits et figures féminines sculptées, célébrant la grâce et la beauté.",
  },
  faune: {
    title: "Faune",
    description: "Le monde animal capturé dans le bois et sublimé par la feuille d'or.",
  },
  flore: {
    title: "Flore",
    description: "Le monde végétal sculpté dans le bois avec délicatesse.",
  },
  contour: {
    title: "Contour",
    description: "Lignes épurées et formes géométriques, inspirées de l'Art Déco.",
  },
  enfance: {
    title: "Enfance",
    description: "Collection en préparation.",
  },
  abstrait: {
    title: "Abstrait",
    description: "Expressions abstraites et formes libres.",
  },
};

const CollectionDetail = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const collectionInfo = collectionId ? collectionTitles[collectionId] : null;
  const artworks = allArtworks.filter((artwork) => artwork.collection === collectionId);

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

  if (!collectionInfo) {
    return (
      <Layout>
        <section className="py-24 bg-background text-center">
          <p className="text-muted-foreground">Collection non trouvée.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/collections">Retour aux collections</Link>
          </Button>
        </section>
      </Layout>
    );
  }

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
              Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              {collectionInfo.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              {collectionInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation retour */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button asChild variant="ghost" className="text-foreground hover:text-accent">
            <Link to="/collections" className="inline-flex items-center gap-2">
              <ArrowLeft size={18} />
              Retour aux collections
            </Link>
          </Button>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {artworks.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {artworks.map((artwork, index) => {
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
                      objectPosition={artwork.images[0].objectPosition}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aucune œuvre dans cette collection pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
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

export default CollectionDetail;
