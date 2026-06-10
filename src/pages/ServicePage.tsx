import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface ServiceContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; body: string }[];
  bullets?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; to: string }[];
  image: string;
  imageAlt: string;
}

const ServicePage = ({ content }: { content: ServiceContent }) => {
  const path = `/${content.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: content.title,
      description: content.metaDescription,
      provider: {
        "@type": "Person",
        name: "Aurélie Villemur",
        jobTitle: "Sculptrice et doreuse sur bois",
        url: "https://www.av-sculpturedorure.fr",
      },
      areaServed: "France",
      url: `https://www.av-sculpturedorure.fr${path}`,
    },
    ...(content.faq && content.faq.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : []),
  ];

  return (
    <Layout>
      <SEO
        title={content.metaTitle}
        description={content.metaDescription}
        path={path}
        image={content.image}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            {content.title}
          </h1>
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="container mx-auto px-6 -mt-12 md:-mt-16 mb-16">
        <div className="max-w-4xl mx-auto aspect-[16/9] overflow-hidden shadow-2xl">
          <img
            src={content.image}
            alt={content.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* Sections */}
      <section className="container mx-auto px-6 pb-16 max-w-3xl">
        {content.sections.map((s, i) => (
          <article key={i} className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              {s.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {s.body}
            </p>
          </article>
        ))}

        {content.bullets && (
          <ul className="space-y-3 mb-12">
            {content.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-accent shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* FAQ */}
      {content.faq && content.faq.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <SectionHeading title="Questions fréquentes" />
            <div className="space-y-6">
              {content.faq.map((f, i) => (
                <div key={i}>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {f.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {content.related && content.related.length > 0 && (
        <section className="container mx-auto px-6 py-16 max-w-3xl text-center">
          <SectionHeading title="À découvrir" />
          <div className="flex flex-wrap justify-center gap-4">
            {content.related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="text-foreground hover:text-accent transition-colors underline-offset-4 hover:underline"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Chaque pièce naît d'un échange. Parlons de votre projet et étudions
            ensemble la création ou la restauration qui vous correspond.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Demander un devis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
