import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Sparkles, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const techniques = [
  {
    icon: Hammer,
    title: "Sculpture sur bois",
    description: "La sculpture sur bois requiert une maîtrise parfaite des outils traditionnels : gouges, ciseaux, rifloirs. Chaque essence de bois – tilleul, chêne, noyer – demande une approche spécifique.",
    details: [
      "Bas-reliefs et hauts-reliefs",
      "Ornements architecturaux",
      "Sculptures en ronde-bosse",
      "Moulures et corniches",
    ],
  },
  {
    icon: Sparkles,
    title: "Dorure à la feuille",
    description: "La dorure à la feuille d'or est un art délicat qui demande patience et précision. Deux techniques principales : la dorure à l'eau (brillante) et la dorure à la mixtion (mate).",
    details: [
      "Dorure à l'eau sur apprêt",
      "Dorure à la mixtion",
      "Patines et effets vieillis",
      "Argenture et feuille de cuivre",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnostic",
    description: "Analyse approfondie de l'état de conservation, identification des techniques d'origine et des interventions antérieures.",
  },
  {
    number: "02",
    title: "Proposition",
    description: "Élaboration d'un protocole de restauration adapté, en accord avec les principes de conservation préventive.",
  },
  {
    number: "03",
    title: "Intervention",
    description: "Réalisation des travaux selon les techniques traditionnelles, avec des matériaux compatibles et réversibles.",
  },
  {
    number: "04",
    title: "Documentation",
    description: "Rapport détaillé des interventions réalisées, incluant photographies avant/après et recommandations d'entretien.",
  },
];

const projects = [
  {
    title: "Château de Fontainebleau",
    type: "Monument Historique",
    description: "Restauration des boiseries sculptées et dorées des appartements royaux.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  },
  {
    title: "Église Saint-Germain",
    type: "Édifice religieux",
    description: "Restauration du retable principal et des stalles du chœur.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop",
  },
  {
    title: "Hôtel particulier parisien",
    type: "Demeure privée",
    description: "Restauration des lambris et dessus-de-porte sculptés du grand salon.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
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

      {/* Restauration du Patrimoine */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Restauration du patrimoine"
            subtitle="Une approche rigoureuse et respectueuse"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=600&fit=crop"
                  alt="Détail de restauration de boiseries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            {/* Texte */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Shield className="text-accent" size={24} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Principes de conservation
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Mes interventions sur le patrimoine historique s'inscrivent dans le respect des chartes internationales de conservation. Chaque décision est guidée par trois principes fondamentaux :
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
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Mon processus"
            subtitle="Une méthodologie rigoureuse pour chaque projet"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-display text-accent/30 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Ligne de connexion */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-accent/30 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chantiers de référence */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
              Chantiers de référence
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Quelques exemples de projets de restauration auxquels j'ai participé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-primary-foreground/5 border border-primary-foreground/20 overflow-hidden hover:border-accent/50 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs tracking-[0.15em] uppercase">
                    {project.type}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
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
