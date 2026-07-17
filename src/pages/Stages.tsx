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
  UserCheck,
  Gift,
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
            Découvrez les gestes d'un métier d'art et laissez-vous guider dans la réalisation de votre première sculpture sur bois. Une expérience créative où la matière, le temps et le plaisir de créer occupent une place essentielle.
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
              L'initiation est pensée comme un moment de calme et d'attention. On y prend le temps :
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

      {/* Une approche sur mesure */}
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

          <p
            className="text-muted-foreground text-fluid-lead max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Les initiations sont pensées pour privilégier l'échange, l'observation et l'accompagnement personnalisé. Chaque participant progresse à son rythme afin de découvrir les gestes fondamentaux de la sculpture sur bois dans un cadre bienveillant et adapté à son niveau.
          </p>
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
