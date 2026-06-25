import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ImageCard from "@/components/ImageCard";
import Lightbox from "@/components/Lightbox";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


import {
  allArtworks,
  collectionTitles,
  getArtworkSlug,
  type Artwork,
} from "@/data/artworks";


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
      <SEO
        title={`${collectionInfo.title} - Collection ${collectionInfo.title} | Aurélie Villemur`}
        description={`Découvrez la collection ${collectionInfo.title} d'Aurélie Villemur : œuvres sculptées et dorées, créations originales et pièces uniques.`}
        path={`/collections/${collectionId}`}
      />
      {/* Hero */}
      <section className="relative py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-accent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-accent" />
            </div>
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-3">
              Collection
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-4">
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
                // Pour la collection Contour : taille uniforme (carré) pour homogénéiser les vignettes
                const isContour = artwork.collection === "contour";
                const sizes: Array<"small" | "medium" | "large"> = ["medium", "large", "small", "large", "medium"];
                const size: "small" | "medium" | "large" = isContour ? "small" : sizes[index % sizes.length];

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
                    <div className="mt-2 flex flex-col items-center gap-1">
                      {artwork.images.length > 1 && (
                        <span className="text-xs text-muted-foreground italic">
                          {artwork.images.length} vues disponibles
                        </span>
                      )}
                      <Link
                        to={`/oeuvres/${getArtworkSlug(artwork)}`}
                        className="text-xs text-accent hover:underline tracking-wider uppercase"
                      >
                        Voir la fiche
                      </Link>
                    </div>
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