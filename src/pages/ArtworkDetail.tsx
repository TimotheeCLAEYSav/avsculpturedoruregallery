import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import {
  allArtworks,
  artworkExcerpt,
  collectionTitles,
  getArtworkBySlug,
  getArtworksByCollection,
} from "@/data/artworks";

const SITE_URL = "https://www.av-sculpturedorure.fr";

/**
 * Parse the free-form description into structured fields when possible.
 * Falls back gracefully so display still works for unstructured text.
 */
function parseDescription(description?: string) {
  if (!description) return { materials: "", dimensions: "", availability: "", year: "", body: "" };
  const parts = description.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const dims = parts.find((p) => /^dimensions/i.test(p)) || "";
  const year = parts.find((p) => /^\d{4}$/.test(p)) || "";
  const availability = parts.find((p) => /disponible|commande|vente|pièces? disponibles?/i.test(p)) || "";
  const body = parts[0] || "";
  return {
    body,
    dimensions: dims.replace(/^dimensions\s*\(mm\)\s*:?\s*/i, "").trim(),
    year,
    availability,
    materials: body,
  };
}

const ArtworkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artwork = slug ? getArtworkBySlug(slug) : undefined;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!artwork) {
    return (
      <Layout>
        <SEO
          title="Œuvre introuvable | Aurélie Villemur"
          description="Cette œuvre n'existe pas ou a été déplacée."
          path={`/oeuvres/${slug ?? ""}`}
        />
        <section className="py-24 text-center">
          <p className="text-muted-foreground">Œuvre non trouvée.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/collections">Retour aux collections</Link>
          </Button>
        </section>
      </Layout>
    );
  }

  const { body, dimensions, year, availability } = parseDescription(artwork.description);
  const collection = collectionTitles[artwork.collection];
  const related = getArtworksByCollection(artwork.collection)
    .filter((a) => a.slug !== artwork.slug)
    .slice(0, 3);

  const ogImage = `${SITE_URL}${artwork.images[0].src}`;
  const canonicalPath = `/oeuvres/${artwork.slug}`;

  const visualArtworkSchema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    description: artwork.description,
    image: artwork.images.map((i) => `${SITE_URL}${i.src}`),
    url: `${SITE_URL}${canonicalPath}`,
    artform: "Sculpture",
    artMedium: body,
    artworkSurface: dimensions || undefined,
    dateCreated: year || undefined,
    creator: {
      "@type": "Person",
      name: "Aurélie Villemur",
      jobTitle: "Sculptrice et doreuse",
      url: SITE_URL,
    },
    genre: artwork.categoryLabel,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Collections", item: `${SITE_URL}/collections` },
      {
        "@type": "ListItem",
        position: 3,
        name: collection?.title || artwork.categoryLabel,
        item: `${SITE_URL}/collections/${artwork.collection}`,
      },
      { "@type": "ListItem", position: 4, name: artwork.title, item: `${SITE_URL}${canonicalPath}` },
    ],
  };

  const openLightbox = (i: number) => {
    setCurrentIndex(i);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      <SEO
        title={`${artwork.title} — ${artwork.categoryLabel} | Aurélie Villemur`}
        description={artworkExcerpt(artwork)}
        path={canonicalPath}
        image={ogImage}
        type="article"
        jsonLd={[visualArtworkSchema, breadcrumbSchema]}
      />

      {/* Fil d'Ariane */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link to="/collections" className="hover:text-accent inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Collections
          </Link>
          <span>/</span>
          <Link to={`/collections/${artwork.collection}`} className="hover:text-accent">
            {collection?.title || artwork.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-foreground">{artwork.title}</span>
        </div>
      </section>

      {/* Détail œuvre */}
      <article className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visuels */}
          <div>
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="block w-full aspect-square overflow-hidden bg-card border border-border"
              aria-label={`Agrandir ${artwork.title}`}
            >
              <img
                src={artwork.images[0].src}
                alt={artwork.images[0].alt}
                className={`w-full h-full ${
                  artwork.images[0].objectFit === "contain" ? "object-contain" : "object-cover"
                }`}
                style={
                  artwork.images[0].objectPosition === "top"
                    ? { objectPosition: "top" }
                    : undefined
                }
                loading="eager"
              />
            </button>

            {artwork.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-2">
                {artwork.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => openLightbox(i)}
                    className="aspect-square overflow-hidden bg-card border border-border hover:border-accent transition-colors"
                    aria-label={`Voir l'image ${i + 1}`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informations */}
          <div>
            <p className="text-accent text-xs tracking-[0.25em] uppercase mb-3">
              {artwork.categoryLabel}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-6">
              {artwork.title}
            </h1>

            {body && (
              <p className="text-foreground/85 leading-relaxed mb-6 whitespace-pre-line">
                {body}
              </p>
            )}

            <dl className="space-y-3 border-t border-border pt-6">
              {dimensions && (
                <div className="flex gap-3">
                  <dt className="w-32 text-sm uppercase tracking-wider text-muted-foreground">Dimensions</dt>
                  <dd className="text-foreground">{dimensions} mm</dd>
                </div>
              )}
              {year && (
                <div className="flex gap-3">
                  <dt className="w-32 text-sm uppercase tracking-wider text-muted-foreground">Année</dt>
                  <dd className="text-foreground">{year}</dd>
                </div>
              )}
              <div className="flex gap-3">
                <dt className="w-32 text-sm uppercase tracking-wider text-muted-foreground">Collection</dt>
                <dd>
                  <Link to={`/collections/${artwork.collection}`} className="text-forest hover:underline">
                    {collection?.title || artwork.categoryLabel}
                  </Link>
                </dd>
              </div>
              {availability && (
                <div className="flex gap-3">
                  <dt className="w-32 text-sm uppercase tracking-wider text-muted-foreground">Disponibilité</dt>
                  <dd className="text-foreground whitespace-pre-line">{availability}</dd>
                </div>
              )}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <Mail size={18} /> Contacter l'atelier
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to={`/collections/${artwork.collection}`}>
                  Voir la collection {collection?.title}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Œuvres liées */}
      {related.length > 0 && (
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
              Dans la même collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/oeuvres/${r.slug}`}
                  className="group block bg-background border border-border hover:border-accent transition-colors"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={r.images[0].src}
                      alt={r.images[0].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-display text-lg text-primary">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {lightboxOpen && (
        <Lightbox
          images={artwork.images}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentIndex((i) => Math.min(i + 1, artwork.images.length - 1))}
          onPrev={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
          onIndexChange={setCurrentIndex}
          title={artwork.title}
          category={artwork.categoryLabel}
          description={artwork.description}
        />
      )}
    </Layout>
  );
};

export default ArtworkDetail;

// Re-export for build-time consumers (sitemap generator).
export { allArtworks };
