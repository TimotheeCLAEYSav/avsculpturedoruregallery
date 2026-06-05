import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ImageCard from "@/components/ImageCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collectionTitles, getArtworksByCollection } from "@/data/artworks";

const CollectionDetail = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const collectionInfo = collectionId ? collectionTitles[collectionId] : null;
  const artworks = collectionId ? getArtworksByCollection(collectionId) : [];

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

      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-accent" />
            </div>
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">Collection</p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              {collectionInfo.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              {collectionInfo.description}
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {artworks.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {artworks.map((artwork, index) => {
                const isContour = artwork.collection === "contour";
                const sizes: Array<"small" | "medium" | "large"> = ["medium", "large", "small", "large", "medium"];
                const size: "small" | "medium" | "large" = isContour ? "small" : sizes[index % sizes.length];

                return (
                  <div
                    key={artwork.id}
                    className="break-inside-avoid animate-fade-in"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <Link to={`/oeuvres/${artwork.slug}`} aria-label={`Voir ${artwork.title}`}>
                      <ImageCard
                        src={artwork.images[0].src}
                        alt={artwork.images[0].alt}
                        title={artwork.title}
                        category={artwork.categoryLabel}
                        size={size}
                        objectPosition={artwork.images[0].objectPosition}
                        objectFit={artwork.images[0].objectFit}
                      />
                    </Link>
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
    </Layout>
  );
};

export default CollectionDetail;
