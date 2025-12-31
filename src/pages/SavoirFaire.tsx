import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Sparkles, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Photos atelier
import atelierModelage from "@/assets/atelier-modelage.jpg";
import atelierDorure1 from "@/assets/atelier-dorure-1.jpg";
import atelierDorure2 from "@/assets/atelier-dorure-2.jpg";

const techniques = [
  {
    icon: Hammer,
    title: "Sculpture sur bois",
    description: "Chaque sculpture est une rencontre entre le bois et la lumière. Inspirée par la nature, les voyages et les symboles, je conçois des pièces uniques qui mêlent tradition et contemporanéité.",
    details: [
      "Bas-reliefs et hauts-reliefs",
      "Ornements architecturaux",
      "Sculptures en ronde-bosse",
      "Pièces destinées à un intérieur, une collection ou une exposition",
    ],
  },
  {
    icon: Sparkles,
    title: "Dorure à la feuille",
    description: "La dorure à la feuille est un art délicat qui sublime le bois et révèle ses reliefs. J'utilise des techniques ancestrales pour appliquer l'or, l'argent ou d'autres métaux précieux, selon des méthodes respectueuses de la tradition.",
    details: [
      "Dorure à la détrempe (à l'eau)",
      "Dorure à la mixtion",
      "Jeu subtil entre éclat et profondeur",
      "Argenture et feuille de cuivre",
    ],
  },
  {
    icon: Clock,
    title: "Moulage et plâtre",
    description: "Au-delà du bois, je réalise également des œuvres en plâtre grâce à des techniques de moulage traditionnelles. Cette discipline complémentaire permet de créer des reproductions fidèles ou des créations originales.",
    details: [
      "Moulage en creux et à bon-creux",
      "Tirage au plâtre",
      "Reproductions et éditions",
      "Ornements architecturaux en staff",
    ],
  },
];



const SavoirFaire = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-accent" />
            </div>
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
              Expertise & Patrimoine
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Savoir-faire & Patrimoine
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Des techniques ancestrales au service de la conservation et de la restauration du patrimoine historique.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Mes techniques"
            subtitle="Un savoir-faire transmis de génération en génération"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {techniques.map((technique) => (
              <div
                key={technique.title}
                className="bg-card p-8 border border-border hover:border-accent/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center border border-accent text-accent">
                    <technique.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {technique.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {technique.description}
                </p>

                <ul className="space-y-2">
                  {technique.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'atelier en action */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase">
              L'atelier en action
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={atelierModelage}
                alt="Aurélie travaillant le modelage en terre"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={atelierDorure1}
                alt="Aurélie appliquant la feuille d'or sur un cadre"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={atelierDorure2}
                alt="Aurélie en train de dorer un ornement"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restauration du Patrimoine */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Restauration du patrimoine"
            subtitle="Une approche rigoureuse et respectueuse"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="text-accent" size={24} strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold text-foreground">
                Principes de conservation
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Restaurer une œuvre, c'est lui redonner son intégrité tout en respectant son histoire. J'interviens sur des éléments en bois sculpté, doré ou polychrome provenant de monuments historiques, d'objets d'art ou de mobilier ancien. Mon approche allie rigueur technique, respect des matériaux originaux et recherche d'une harmonie visuelle fidèle à l'esprit de l'œuvre.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              J'ai collaboré avec plusieurs artisans d'art notamment sur les travaux de restauration de l'Église Notre Dame du Taur à Toulouse et sur les retables des Églises de Camurac et de Labarthe Inard.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0 mt-2" />
                <div>
                  <strong className="text-foreground">Réversibilité</strong>
                  <p className="text-sm text-muted-foreground">
                    Toute intervention doit pouvoir être défaite sans altérer l'œuvre originale.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0 mt-2" />
                <div>
                  <strong className="text-foreground">Lisibilité</strong>
                  <p className="text-sm text-muted-foreground">
                    Les parties restaurées doivent être identifiables par un œil averti.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rotate-45 bg-accent flex-shrink-0 mt-2" />
                <div>
                  <strong className="text-foreground">Intervention minimale</strong>
                  <p className="text-sm text-muted-foreground">
                    Ne restaurer que ce qui est strictement nécessaire à la conservation de l'œuvre.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading
            title="Un projet de restauration ?"
            subtitle="Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé."
          />

          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10"
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

export default SavoirFaire;
