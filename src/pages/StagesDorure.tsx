import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Hand,
  Feather,
  Palette,
  Wrench,
  Users,
  Coins,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Page « Initiation à la dorure à la feuille » — reprend la structure exacte
// de la page Sculpture pour garantir une parfaite cohérence graphique.
// -----------------------------------------------------------------------------

const decouvertes = [
  { icon: Sparkles, label: "Les différentes feuilles métalliques" },
  { icon: Layers, label: "Préparer un support traditionnel" },
  { icon: Coins, label: "Poser une feuille métallique" },
  { icon: Hand, label: "Les gestes fondamentaux de la dorure" },
  { icon: Feather, label: "Manier les outils du doreur" },
  { icon: Palette, label: "Réaliser sa première création" },
];

const inclus = [
  "Matériel et feuilles fournis",
  "Accompagnement personnalisé",
  "Tous niveaux, du débutant au curieux",
  "Formats adaptables selon votre projet",
];

const StagesDorure = () => {
  return (
    <Layout>
      <SEO
        title="Stage d'initiation à la dorure à la feuille | Aurélie Villemur"
        description="Stage d'initiation à la dorure à la feuille avec Aurélie Villemur, artisane d'art à Toulouse. Découverte de la feuille d'or, préparation des supports et pose traditionnelle. Accessible aux débutants, matériel fourni."
        path="/stages/dorure-a-la-feuille"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Stage d'initiation à la dorure à la feuille",
          description:
            "Découverte de la dorure traditionnelle : préparation des supports, pose de la feuille métallique et gestes fondamentaux du doreur. Initiation accessible aux débutants.",
          provider: {
            "@type": "Person",
            name: "Aurélie Villemur",
            jobTitle: "Sculptrice et doreuse sur bois",
            url: "https://www.av-sculpturedorure.fr",
          },
          educationalLevel: "Tous niveaux",
          inLanguage: "fr",
        }}
      />

      {/* ==========================================================
          HERO — placeholder Art Déco en attendant une photographie
          ========================================================== */}
      <section
        className="relative flex items-center justify-center py-fluid bg-primary"
        style={{ minHeight: "clamp(28rem, 65vh, 44rem)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

        <div className="relative z-10 container mx-auto px-fluid text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 md:w-24 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-16 md:w-24 h-px bg-accent" />
          </div>

          <p
            className="text-accent text-fluid-eyebrow tracking-[0.25em] uppercase mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Transmission d'un métier d'art
          </p>

          <h1
            className="font-display text-fluid-h1 font-semibold text-primary-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Initiation à la dorure à la feuille
          </h1>

          <p
            className="text-primary-foreground/90 text-fluid-lead max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Découvrir la lumière de la feuille, apprivoiser un geste patient et
            précis, révéler un support.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Être informé des prochains stages
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ==========================================================
          INTRO NARRATIVE — sensibilité et matière
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <div className="w-12 h-px bg-accent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>

          <h2 className="font-display text-fluid-h2 font-semibold text-foreground text-center mb-8 animate-fade-in">
            Un savoir-faire d'exception
          </h2>

          <div
            className="space-y-6 text-muted-foreground text-fluid-body text-center animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              La dorure à la feuille est un art du temps et de l'attention.
              Avant même la pose de la feuille métallique, le support demande
              une préparation minutieuse : couches successives, ponçage patient
              et surfaces révélées peu à peu, jusqu'à obtenir cette douceur qui
              accueillera la lumière.
            </p>
            <p>
              Puis vient le geste du doreur : léger, précis, presque retenu.
              La feuille d'or, d'une finesse extrême, se pose, se lisse et
              s'anime. C'est un dialogue entre la matière et la main, où la
              patience devient elle-même une matière première.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Users, label: "Accessible aux débutants" },
              { icon: Wrench, label: "Matériel fourni" },
              { icon: Sparkles, label: "Accompagnement sur mesure" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-3 border border-accent text-forest">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="text-foreground text-fluid-body font-medium">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          CE QUE VOUS DÉCOUVRIREZ
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Ce que vous découvrirez"
            subtitle="Les fondamentaux d'une tradition précieuse"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-w-5xl mx-auto">
            {decouvertes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-background border border-border/60 p-6 text-center animate-fade-in transition-colors duration-500 hover:border-accent"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 border border-accent text-forest">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="text-foreground text-fluid-body">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          UNE APPROCHE SUR MESURE
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-12 h-px bg-accent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>

          <h2 className="font-display text-fluid-h2 font-semibold text-foreground mb-6 animate-fade-in">
            Une approche sur mesure
          </h2>

          <div
            className="space-y-5 text-muted-foreground text-fluid-body animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              Chaque initiation est pensée comme une rencontre : avec la
              matière, avec un geste, et avec un métier d'art transmis dans le
              respect des techniques traditionnelles. L'accompagnement est
              attentif, adapté au rythme de chacun, sans autre objectif que le
              plaisir sincère de découvrir et de faire.
            </p>
            <p>
              Le cadre reste convivial et propice aux échanges. Une formule sur
              mesure est toujours envisageable, en fonction de vos envies, de
              votre projet ou du temps dont vous disposez.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          CE QUI EST INCLUS
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid max-w-3xl">
          <SectionHeading
            title="Ce qui est inclus"
            subtitle="L'essentiel, sans se soucier de rien"
          />

          <div className="bg-background border border-border/60 p-8 md:p-10 animate-fade-in">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclus.map((info) => (
                <li
                  key={info}
                  className="flex items-start gap-4 text-muted-foreground text-fluid-body"
                >
                  <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0" />
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================================
          CTA FINAL
          ========================================================== */}
      <section className="py-fluid bg-primary text-primary-foreground">
        <div className="container mx-auto px-fluid">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-accent" />
              <div className="w-2 h-2 rotate-45 bg-accent" />
              <div className="w-16 h-px bg-accent" />
            </div>

            <h2 className="font-display text-fluid-h2 font-semibold mb-4">
              Envie de vivre l'expérience ?
            </h2>
            <p className="text-primary-foreground/85 text-fluid-lead mb-10">
              Écrivez-moi pour être informé des prochaines dates ou construire
              une formule adaptée à votre projet.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Être informé des prochains stages
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StagesDorure;
