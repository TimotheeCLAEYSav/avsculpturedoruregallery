import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams, useNavigate } from "react-router-dom";
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
import frida1 from "@/assets/frida-1.jpg";
import fridaDetail2 from "@/assets/frida-detail-2.jpg";
import fridaDetail3 from "@/assets/frida-detail-3.jpg";
import enigma1 from "@/assets/enigma-1.jpg";
import enigma2 from "@/assets/enigma-2.jpg";
import enigma3 from "@/assets/enigma-3.jpg";
import hokusai from "@/assets/hokusai.jpg";
import hokusai1 from "@/assets/hokusai-1.jpg";
import hokusai2 from "@/assets/hokusai-2.jpg";

interface ArtworkImage {
  src: string;
  alt: string;
  objectPosition?: "center" | "top";
  objectFit?: "cover" | "contain";
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
      { src: enigma1, alt: "Enigma - détail visage" },
      { src: enigma2, alt: "Enigma - détail base" },
      { src: enigma3, alt: "Enigma - vue de dos" },
    ],
    title: "Enigma",
    collection: "femme",
    categoryLabel: "Femme",
    description: "Ronde bosse sur socle (meuble). Luminaire d'inspiration Max Le Verrier, de style Art Déco en noyer, dorure, patine et faux marbre.\n\nDimensions (mm): 1500 x 400 x 330\n\n2023",
  },
  {
    id: 2,
    images: [
      { src: sculpture3, alt: "Buste de Frida Kahlo - vue de face" },
      { src: frida2, alt: "Buste de Frida Kahlo - vue de profil" },
      { src: frida3, alt: "Buste de Frida Kahlo - vue arrière" },
      { src: frida1, alt: "Frida Kahlo - détail couronne florale" },
      { src: fridaDetail2, alt: "Frida Kahlo - détail collier" },
      { src: fridaDetail3, alt: "Frida Kahlo - détail chevelure" },
    ],
    title: "Frida Kahlo",
    collection: "femme",
    categoryLabel: "Femme",
    description: "Ronde bosse sur socle en bois tourné inspirée de l'artiste Frida Kahlo. Tilleul, faux marbre, teinte, cire, bronzine, patine et fleurs artificielles.\n\nDimensions (mm): 650 x 230 x 210\n\n2023",
  },
  {
    id: 3,
    images: [
      { src: sculpture4, alt: "Le voyage - vue principale" },
      { src: basRelief2, alt: "Le voyage - détail du visage avec dorure" },
      { src: basRelief3, alt: "Le voyage - détail doré" },
    ],
    title: "Le Voyage",
    collection: "femme",
    categoryLabel: "Femme",
    description: "Bas relief inspiré par les créations d'Alphonse Mucha et de voyages. Noyer, dorure à la mixtion avec feuille d'or, cire, patine et insertion d'une boussole.\n\nDimensions (mm): 480 x 670 x 70\n\n2023",
  },
  // Collection Faune
  {
    id: 4,
    images: [
      { src: faune, alt: "Le scarabée - vue principale" },
      { src: faune1, alt: "Le scarabée - vue détaillée" },
      { src: faune2, alt: "Le scarabée - autre vue" },
    ],
    title: "Le Scarabée",
    collection: "faune",
    categoryLabel: "Faune",
    description: "Sculpture représentant un scarabée, symbole de renaissance et de transformation. Différents modèles existent en bois de noyer et en plâtre polychrome.\n\nDimensions (mm): 180 x 140 x 35\n\n2025",
  },
  // Collection Flore
  {
    id: 5,
    images: [
      { src: flore1, alt: "La pivoine - sculpture florale" },
    ],
    title: "La Pivoine",
    collection: "flore",
    categoryLabel: "Flore",
    description: "Pivoine sculptée dans le bois avec délicatesse et sensibilité, en noyer, cire et patine.\n\nDimensions (mm): diamètre 125\n\n2025",
  },
  {
    id: 7,
    images: [
      { src: hokusai, alt: "Plongeon - vue principale" },
      { src: hokusai1, alt: "Plongeon - autre angle" },
      { src: hokusai2, alt: "Plongeon - détail" },
    ],
    title: "Plongeon",
    collection: "flore",
    categoryLabel: "Flore",
    description: "Dorure à la détrempe avec feuille d'or inspirée d'une estampe d'Hokusai, Hortensia et hirondelle.\n\nDimensions (mm): 360 x 190 x 22\n\n2023",
  },
  // Collection Contour
  {
    id: 6,
    images: [
      { src: contour, alt: "Miroir Louis XVI - vue principale", objectFit: "contain" },
    ],
    title: "Miroir Louis XVI",
    collection: "contour",
    categoryLabel: "Contour",
    description: "Châssis et éléments sculptés. Tilleul, dorure à la détrempe, peinture.\n\nDimensions (mm): 740 x 390 x 120\n\n2023",
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
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const collectionInfo = collectionId ? collectionTitles[collectionId] : null;
  const artworks = allArtworks.filter((artwork) => artwork.collection === collectionId);

  // Ouvrir automatiquement l'œuvre si paramètre URL artwork=xxx (seulement au montage)
  useEffect(() => {
    const artworkParam = searchParams.get("artwork");
    if (artworkParam && !selectedArtwork) {
      const artwork = allArtworks.find(
        (a) => a.collection === collectionId && a.title.toLowerCase() === artworkParam.toLowerCase()
      );
      if (artwork) {
        setSelectedArtwork(artwork);
        setCurrentImageIndex(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionId]);

  const openArtwork = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(0);
  };

  const closeDialog = () => {
    setSelectedArtwork(null);
    setCurrentImageIndex(0);
    // Retirer le paramètre artwork de l'URL pour revenir à la collection normale
    if (searchParams.has("artwork")) {
      searchParams.delete("artwork");
      setSearchParams(searchParams, { replace: true });
    }
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
                      objectFit={artwork.images[0].objectFit}
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