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
import frida2 from "@/assets/frida-2.jpg";
import frida3 from "@/assets/frida-3.jpg";
import basRelief2 from "@/assets/bas-relief-2.jpg";
import basRelief3 from "@/assets/bas-relief-3.jpg";
import flore1 from "@/assets/flore-1.png";
import contour from "@/assets/contour.jpg";
import faune from "@/assets/faune.jpg";
import faune1 from "@/assets/faune-1.jpg";
import faune2 from "@/assets/faune-2.jpg";

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
  {
    id: 3,
    images: [
      { src: sculpture4, alt: "Le voyage - vue principale" },
      { src: basRelief2, alt: "Le voyage - détail du visage avec dorure" },
      { src: basRelief3, alt: "Le voyage - détail doré" },
    ],
    title: "Le voyage",
    collection: "femme",
    categoryLabel: "Femme",
    description: "Bas-relief sculpté représentant un voyage onirique, rehaussé de feuille d'or.",
  },
  // Collection Faune
  {
    id: 4,
    images: [
      { src: faune, alt: "Le scarabée - vue principale" },
      { src: faune1, alt: "Le scarabée - vue détaillée" },
      { src: faune2, alt: "Le scarabée - autre vue" },
    ],
    title: "Le scarabée",
    collection: "faune",
    categoryLabel: "Faune",
    description: "Sculpture représentant un scarabée, symbole de renaissance et de transformation.",
  },
  // Collection Flore
  {
    id: 5,
    images: [
      { src: flore1, alt: "La pivoine - sculpture florale" },
    ],
    title: "La pivoine",
    collection: "flore",
    categoryLabel: "Flore",
    description: "Pivoine sculptée dans le bois avec délicatesse et sensibilité.",
  },
  // Collection Contour
  {
    id: 6,
    images: [
      { src: contour, alt: "Miroir Louis XVI - vue principale" },
    ],
    title: "Miroir Louis XVI",
    collection: "contour",
    categoryLabel: "Contour",
    description: "Cadre sculpté et doré dans le style Louis XVI, sublimant le miroir qu'il entoure.",
  },
];

const collectionTitles: Record<string, { title: string; description: string }> = {
  femme: {
    title: "Femme",
    description: "La collection Femme explore la figure féminine à travers des formes sculptées. Les corps y sont abordés comme des territoires sensibles, porteurs de force, de fragilité, d'histoire et de présence silencieuse.",
  },
  faune: {
    title: "Faune",
    description: "La collection Faune s'inspire du monde animal et de son énergie propre. Les sculptures cherchent à restituer le mouvement, la tension et la vitalité du vivant, sans recherche de naturalisme strict.",
  },
  flore: {
    title: "Flore",
    description: "La collection Flore propose une interprétation sculptée du végétal. Les formes y sont organiques, parfois stylisées et toujours ornementales.",
  },
  contour: {
    title: "Contour",
    description: "Des cadres qui s'attachent à la ligne, au tracé et à la limite de la forme pour sublimer le contenu.",
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
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
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