import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import ExhibitionBadge from "@/components/ExhibitionBadge";
import { resolveActiveExhibitions } from "@/data/exhibitions";

import { preloadImages } from "@/lib/imagePreload";
import {
  allArtworks,
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

  // Précharge toutes les vues de l'œuvre + œuvres voisines/liées pour que la
  // navigation entre œuvres soit instantanée.
  useEffect(() => {
    if (!artwork) return;
    preloadImages(artwork.images.map((i) => i.src), "high");
    const siblings = allArtworks.filter((a) => a.collection === artwork.collection);
    const idx = siblings.findIndex((a) => a.id === artwork.id);
    const neighbours = [siblings[idx - 1], siblings[idx + 1]].filter(Boolean);
    const relatedSrcs = related.map((r) => r.images[0]?.src);
    const neighbourSrcs = neighbours.flatMap((n) => n.images.map((i) => i.src));
    preloadImages([...relatedSrcs, ...neighbourSrcs], "low");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artwork?.id]);

  const seoTitle = `${artwork.title} — ${collection?.title ?? "Collection"} | Aurélie Villemur`;
  const seoDesc =
    (artwork.description ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 155) || `${artwork.title}, œuvre sculptée par Aurélie Villemur.`;

  const visualArtworkLd = {
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
    url: `${SITE_URL}${path}/`,
    ...(artwork.year ? { dateCreated: artwork.year } : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Collections", item: `${SITE_URL}/collections/` },
      {
        "@type": "ListItem",
        position: 2,
        name: collection?.title ?? "Collection",
        item: `${SITE_URL}/collections/${artwork.collection}/`,
      },
      { "@type": "ListItem", position: 3, name: artwork.title, item: `${SITE_URL}${path}/` },
    ],
  };

  const jsonLd = [visualArtworkLd, breadcrumbLd];

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
              <div className="relative bg-secondary/60 flex items-center justify-center p-4 md:p-6">
                {artwork.status === "sold" && (
                  <div className="absolute top-4 right-4 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 text-[0.65rem] tracking-[0.25em] uppercase font-medium border border-accent/60 backdrop-blur-sm shadow-sm">
                      <span className="w-1 h-1 rotate-45 bg-accent" />
                      Vendu
                    </span>
                  </div>
                )}
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain mix-blend-multiply"
                  loading="eager"
                  decoding="async"
                  {...({ fetchpriority: "high" } as Record<string, string>)}
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

              {artwork.status === "sold" && (
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 text-xs tracking-[0.25em] uppercase font-medium border border-accent/60">
                    <span className="w-1.5 h-1.5 rotate-45 bg-accent" />
                    Vendu
                  </span>
                </div>
              )}

              {(() => {
                const active = resolveActiveExhibitions(artwork.exhibitions);
                return active.length > 0 ? (
                  <ExhibitionBadge exhibitions={active} variant="detail" className="mb-6" />
                ) : null;
              })()}



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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {artwork.images.map((img, idx) => (
                <div key={idx} className="bg-secondary/60 flex items-center justify-center p-3 min-h-[16rem]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto max-h-[28rem] object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Œuvres liées */}
      {related.length > 0 && (
        <section className="py-16 bg-secondary/30">
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
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary/60 mb-3 flex items-center justify-center p-2">
                    {rel.status === "sold" && (
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-2.5 py-0.5 text-[0.6rem] tracking-[0.25em] uppercase font-medium border border-accent/60 backdrop-blur-sm shadow-sm">
                          <span className="w-1 h-1 rotate-45 bg-accent" />
                          Vendu
                        </span>
                      </div>
                    )}
                    {rel.exhibitions && rel.exhibitions.length > 0 && (
                      <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                        <ExhibitionBadge exhibitions={rel.exhibitions} variant="card" />
                      </div>
                    )}
                    <img
                      src={rel.images[0].src}
                      alt={rel.images[0].alt}
                      loading="lazy"
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
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
