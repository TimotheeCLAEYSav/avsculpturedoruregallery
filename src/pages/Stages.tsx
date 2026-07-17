import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Hammer,
  TreePine,
  Hand,
  Users,
  Gift,
  Clock,
  GraduationCap,
  UserCheck,
  MapPin,
  Euro,
  Wrench,
  ImageIcon,
} from "lucide-react";

const experienceItems = [
  {
    icon: Hammer,
    title: "Découvrir les outils",
    description:
      "Prendre en main gouges, maillet et fermoirs, comprendre leur rôle et apprendre à les affûter.",
  },
  {
    icon: TreePine,
    title: "Comprendre les essences de bois",
    description:
      "Tilleul, noyer, chêne : découvrir la personnalité de chaque bois et choisir la bonne matière.",
  },
  {
    icon: Hand,
    title: "Apprendre les gestes fondamentaux",
    description:
      "Le trait, l'ébauche, la mise au net : les gestes traditionnels transmis pas à pas.",
  },
  {
    icon: UserCheck,
    title: "Être accompagné individuellement",
    description:
      "Un suivi personnalisé, à votre rythme, dans une ambiance calme et bienveillante.",
  },
  {
    icon: Gift,
    title: "Repartir avec sa création",
    description:
      "Chaque participant emporte l'œuvre qu'il a sculptée de ses mains au fil du stage.",
  },
];

const infoItems = [
  { icon: Clock, label: "Durée" },
  { icon: GraduationCap, label: "Niveau" },
  { icon: Users, label: "Nombre de participants" },
  { icon: MapPin, label: "Lieu" },
  { icon: Euro, label: "Tarifs" },
  { icon: Wrench, label: "Matériel fourni" },
];

const Stages = () => {
  return (
    <Layout>
      <SEO
        title="Stages d'initiation à la sculpture sur bois | Aurélie Villemur – Atelier d'art à Toulouse"
        description="Stages d'initiation à la sculpture sur bois animés par Aurélie Villemur, artisane d'art. Découverte des outils, des essences et des gestes traditionnels dans un atelier d'art à Toulouse. Pour débutants, aucune expérience requise."
        path="/stages"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Stage d'initiation à la sculpture sur bois",
          description:
            "Stage d'initiation à la sculpture sur bois pour débutants : découverte des outils, des essences, des gestes traditionnels et réalisation d'une pièce personnelle.",
          provider: {
            "@type": "Person",
            name: "Aurélie Villemur",
            jobTitle: "Sculptrice et doreuse sur bois",
            url: "https://www.av-sculpturedorure.fr",
          },
          educationalLevel: "Débutant",
          inLanguage: "fr",
        }}
      />

      {/* Hero */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid text-center max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 md:w-24 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-16 md:w-24 h-px bg-accent" />
          </div>

          <p
            className="text-forest text-fluid-eyebrow tracking-[0.25em] uppercase mb-4 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Transmission d'un métier d'art
          </p>

          <h1
            className="font-display text-fluid-h1 font-semibold text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Stages d'initiation à la sculpture sur bois
          </h1>

          <p
            className="text-muted-foreground text-fluid-lead max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Le temps d'un stage, je vous ouvre les portes de mon atelier pour partager les gestes,
            les outils et la matière d'un métier d'art. Une parenthèse hors du temps, pour laisser
            naître une forme dans le bois.
          </p>

          <div
            className="flex items-center justify-center gap-4 mt-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-8 h-px bg-accent/50" />
            <div className="w-1 h-1 rotate-45 bg-accent/50" />
            <div className="w-8 h-px bg-accent/50" />
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid max-w-3xl">
          <SectionHeading
            title="Une invitation à créer"
            subtitle="Pour débutants — aucune expérience préalable n'est nécessaire"
          />
          <div className="space-y-6 text-muted-foreground text-fluid-body text-center">
            <p>
              Ces stages s'adressent à toute personne curieuse de découvrir la sculpture sur bois,
              sans prérequis. On y apprend à observer la matière, à écouter ses fibres, à guider
              l'outil avec justesse.
            </p>
            <p>
              L'atelier est pensé comme un lieu de calme et d'attention. On y prend le temps :
              celui d'affûter un fermoir, de comprendre un veinage, de suivre un tracé. Peu à peu,
              une forme apparaît — la vôtre.
            </p>
            <p>
              Bien plus qu'un cours technique, c'est une expérience artistique et humaine :
              une rencontre avec un métier d'art, ses gestes séculaires et le plaisir simple
              de créer de ses mains.
            </p>
          </div>
        </div>
      </section>

      {/* L'expérience */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="L'expérience"
            subtitle="Ce que vous vivrez au fil du stage"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {experienceItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-background border border-border/60 p-8 text-center animate-fade-in transition-colors duration-500 hover:border-accent"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 border border-accent text-forest">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-fluid-h3 font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-fluid-body">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galerie (placeholders) */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="L'atelier en images"
            subtitle="Photos des stages, des participants et des créations — à venir"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-secondary/50 border border-border/60 flex items-center justify-center animate-fade-in"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <ImageIcon
                  size={32}
                  strokeWidth={1.25}
                  className="text-muted-foreground/50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Informations pratiques"
            subtitle="Les détails des prochains stages seront communiqués très prochainement"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-background border border-border/60 p-6 flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="shrink-0 flex items-center justify-center w-11 h-11 border border-accent text-forest">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground text-sm italic">
                      Informations à venir
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Laissez-moi vos coordonnées et je vous informerai personnellement de l'ouverture
              des prochaines dates de stages.
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

export default Stages;
