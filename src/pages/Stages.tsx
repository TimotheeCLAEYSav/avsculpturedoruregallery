import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sculptureImage from "@/assets/stage-hero-atelier.jpg";
import dorureImage from "@/assets/dorure-hero.jpg";

// -----------------------------------------------------------------------------
// Page « Stages d'initiation » — hub qui présente les différentes disciplines.
// Chaque carte renvoie vers une page dédiée. La structure est pensée pour
// accueillir facilement de futurs stages (restauration, patines, etc.).
// -----------------------------------------------------------------------------

const stages = [
  {
    slug: "sculpture-sur-bois",
    eyebrow: "Métier d'art",
    title: "Initiation à la sculpture sur bois",
    description:
      "Découvrez les gestes fondamentaux de la sculpture sur bois et réalisez votre première création en étant accompagné pas à pas.",
    image: sculptureImage,
    imagePosition: "center 60%",
  },
  {
    slug: "dorure-a-la-feuille",
    eyebrow: "Métier d'art",
    title: "Initiation à la dorure à la feuille",
    description:
      "Découvrez les techniques traditionnelles de préparation des supports et de pose de la feuille à travers une initiation accessible aux débutants.",
    image: dorureImage,
    imagePosition: "center 60%",
  },
];

const Stages = () => {
  return (
    <Layout>
      <SEO
        title="Stages d'initiation aux métiers d'art | Aurélie Villemur"
        description="Découvrez les stages d'initiation proposés par Aurélie Villemur, artisane d'art : sculpture sur bois et dorure à la feuille. Transmission d'un savoir-faire traditionnel, accompagnement personnalisé."
        path="/stages"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Stages d'initiation aux métiers d'art",
          itemListElement: stages.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `https://www.av-sculpturedorure.fr/stages/${s.slug}/`,
          })),
        }}
      />

      {/* ==========================================================
          HERO — introduction sobre, cohérente avec les autres pages
          ========================================================== */}
      <section className="relative bg-primary text-primary-foreground py-fluid">
        <div className="container mx-auto px-fluid max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 md:w-24 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-16 md:w-24 h-px bg-accent" />
          </div>

          <p
            className="text-accent text-fluid-eyebrow tracking-[0.25em] uppercase mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Transmission des métiers d'art
          </p>

          <h1
            className="font-display text-fluid-h1 font-semibold mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Stages d'initiation
          </h1>

          <p
            className="text-primary-foreground/90 text-fluid-lead animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Une invitation à ralentir, à découvrir la matière et à apprivoiser
            les gestes patients d'un métier d'art. Un temps suspendu, où la main
            se forme au contact du bois, de l'outil ou de la feuille,
            au fil d'une transmission attentive et sur mesure.
          </p>
        </div>
      </section>

      {/* ==========================================================
          CARTES DES STAGES — mêmes proportions, même hiérarchie
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Les disciplines proposées"
            subtitle="Deux expériences pour découvrir un savoir-faire d'exception"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 max-w-5xl mx-auto">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.slug}
                  className="group flex flex-col bg-background border border-border/60 transition-colors duration-500 hover:border-accent animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Placeholder illustration Art Déco (en attente de photo) */}
                  <div className="relative aspect-[4/3] bg-secondary/40 border-b border-border/60 flex items-center justify-center overflow-hidden">
                    {/* Motif décoratif */}
                    <div className="absolute inset-4 border border-accent/40 pointer-events-none" />
                    <div className="absolute inset-6 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4 text-forest">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-px bg-accent" />
                          <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
                          <div className="w-10 h-px bg-accent" />
                        </div>
                        <Icon size={44} strokeWidth={1.25} />
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-px bg-accent" />
                          <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
                          <div className="w-10 h-px bg-accent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-8">
                    <p className="text-forest text-fluid-eyebrow tracking-[0.25em] uppercase mb-3">
                      {stage.eyebrow}
                    </p>
                    <h2 className="font-display text-fluid-h3 font-semibold text-foreground mb-4">
                      {stage.title}
                    </h2>
                    <p className="text-muted-foreground text-fluid-body mb-8 flex-1">
                      {stage.description}
                    </p>

                    <Button
                      asChild
                      variant="outline"
                      className="self-start border-forest text-forest hover:bg-forest hover:text-primary-foreground font-medium tracking-wide"
                    >
                      <Link
                        to={`/stages/${stage.slug}`}
                        className="inline-flex items-center gap-2"
                      >
                        Découvrir ce stage
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          CTA FINAL
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>

          <h2 className="font-display text-fluid-h2 font-semibold text-foreground mb-4">
            Une question, une envie ?
          </h2>
          <p className="text-muted-foreground text-fluid-lead mb-10">
            Écrivez-moi pour être informé des prochaines dates ou pour imaginer
            une formule sur mesure.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
          >
            <Link to="/contact" className="inline-flex items-center gap-2">
              Me contacter
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Stages;
