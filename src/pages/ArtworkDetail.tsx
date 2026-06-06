import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import {
  getArtworkBySlug,
  getArtworkSlug,
  getRelatedArtworks,
  collectionTitles,
} from "@/data/artworks";

const SITE_URL = "https://www.av-sculpturedorure.fr";

const ArtworkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artwork = slug ? getArtworkBySlug(slug) : undefined;

  if (!artwork) {
    return <Navigate to="/collections" replace />;
  }

  const collection = collectionTitles[artwork.collection];
  const related = getRelatedArtworks(artwork);
  const path = `/oeuvres/${getArtworkSlug(artwork)}`;
  const mainImage = artwork.images[0];

  const seoTitle = `${artwork.title} — ${collection?.title ?? "Collection"} | Aurélie Villemur`;
  const seoDesc =
    (artwork.description ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 155) || `${artwork.title}, œuvre sculptée par Aurélie Villemur.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    image: artwork.images.map((i) => `${SITE_URL}${i.src}`),
    description: artwork.description,
    artMedium: artwork.materials,
    artworkSurface: artwork.materials,
    artform: artwork.techniques,
    creator: {
      "@type": "Person",
      name: "Aurélie Villemur",
      jobTitle: "Sculptrice et doreuse sur bois",
      url: SITE_URL,
    },
    url: `${SITE_URL}${path}`,
    ...(artwork.year ? { dateCreated: artwork.year } : {}),
  };

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDesc}
        path={path}
        type="article"
        image={`${SITE_URL}${mainImage.src}`}
        jsonLd={jsonLd}
      />

      {/* Breadcrumb / back */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4 flex flex-wrap items-center gap-2 text-sm">
          <Link to="/collections" className="text-muted-foreground hover:text-accent">
            Collections
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            to={`/collections/${artwork.collection}`}
            className="text-muted-foreground hover:text-accent"
          >
            {collection?.title}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{artwork.title}</span>
        </div>
      </section>

      {/* Main */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image principale */}
            <div>
              <div className="aspect-[4/5] overflow-hidden bg-secondary/30">
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>

            {/* Infos */}
            <div className="lg:pl-8">
              <p className="text-accent text-xs tracking-[0.25em] uppercase mb-3">
                Collection {collection?.title}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                {artwork.title}
              </h1>

              {artwork.description && (
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
                  {artwork.description}
                </p>
              )}

              <dl className="space-y-3 mb-8 text-sm">
                {artwork.materials && (
                  <div className="flex gap-3">
                    <dt className="font-medium text-foreground w-32 shrink-0">Matériaux</dt>
                    <dd className="text-muted-foreground">{artwork.materials}</dd>
                  </div>
                )}
                {artwork.techniques && (
                  <div className="flex gap-3">
                    <dt className="font-medium text-foreground w-32 shrink-0">Techniques</dt>
                    <dd className="text-muted-foreground">{artwork.techniques}</dd>
                  </div>
                )}
                {artwork.dimensions && (
                  <div className="flex gap-3">
                    <dt className="font-medium text-foreground w-32 shrink-0">Dimensions</dt>
                    <dd className="text-muted-foreground">{artwork.dimensions}</dd>
                  </div>
                )}
                {artwork.year && (
                  <div className="flex gap-3">
                    <dt className="font-medium text-foreground w-32 shrink-0">Année</dt>
                    <dd className="text-muted-foreground">{artwork.year}</dd>
                  </div>
                )}
                {artwork.availability && (
                  <div className="flex gap-3">
                    <dt className="font-medium text-foreground w-32 shrink-0">Disponibilité</dt>
                    <dd className="text-muted-foreground">{artwork.availability}</dd>
                  </div>
                )}
                <div className="flex gap-3">
                  <dt className="font-medium text-foreground w-32 shrink-0">Collection</dt>
                  <dd>
                    <Link
                      to={`/collections/${artwork.collection}`}
                      className="text-accent hover:underline"
                    >
                      {collection?.title}
                    </Link>
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    <Mail size={18} />
                    Me contacter à propos de cette œuvre
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={`/collections/${artwork.collection}`} className="inline-flex items-center gap-2">
                    <ArrowLeft size={18} />
                    Retour à la collection
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      {artwork.images.length > 1 && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Galerie
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {artwork.images.map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden bg-background">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Œuvres liées */}
      {related.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
              Œuvres de la même collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={getArtworkSlug(rel)}
                  to={`/oeuvres/${getArtworkSlug(rel)}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-secondary/30 mb-3">
                    <img
                      src={rel.images[0].src}
                      alt={rel.images[0].alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    {rel.categoryLabel}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArtworkDetail;
