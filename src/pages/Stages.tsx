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
  Sparkles,
  Eye,
  Shield,
  Layers,
  Compass,
  Wrench,
  BookOpen,
  Palette,
} from "lucide-react";
// Image principale du hero — chargée via lovable-assets pour rester légère
// et cachée par le CDN (voir public/_headers).
import heroAsset from "@/assets/stage-hero.jpg.asset.json";

// -----------------------------------------------------------------------------
// Contenu structuré : chaque bloc est décrit sous forme de données
// pour rester facile à modifier sans toucher au JSX.
// -----------------------------------------------------------------------------

// Les trois niveaux de stage proposés
const niveaux = [
  {
    label: "Débutant",
    subtitle: "Pour découvrir la sculpture sur bois",
    points: [
      "Découverte du bois",
      "Premiers gestes",
      "Prise en main des outils",
      "Règles essentielles de sécurité",
      "Réalisation d'un premier projet accompagné",
    ],
  },
  {
    label: "Initié",
    subtitle: "Pour consolider ses premières notions",
    points: [
      "Amélioration de la précision du geste",
      "Compréhension des volumes",
      "Perfectionnement des techniques de taille",
      "Développement de l'autonomie",
    ],
  },
  {
    label: "Perfectionnement",
    subtitle: "Pour approfondir sa pratique",
    points: [
      "Finitions soignées",
      "Qualité des détails",
      "Maîtrise des outils traditionnels",
      "Approche plus artistique de la sculpture",
    ],
  },
];

// Le parcours pédagogique proposé au fil du stage
const parcours = [
  {
    icon: TreePine,
    title: "Découverte du matériau",
    items: [
      "Comprendre les différentes essences de bois",
      "Reconnaître leurs qualités et particularités",
      "Apprendre à lire le sens des fibres",
      "Choisir un bois adapté au projet",
    ],
  },
  {
    icon: Wrench,
    title: "Les outils",
    items: [
      "Gouges",
      "Ciseaux à bois",
      "Maillet",
      "Outils de traçage",
      "Matériel d'affûtage",
    ],
  },
  {
    icon: BookOpen,
    title: "Les bases techniques",
    items: [
      "Posture de travail",
      "Tenue des outils",
      "Gestes de sécurité",
      "Respect du fil du bois",
      "Techniques de taille et création des volumes",
    ],
  },
  {
    icon: Palette,
    title: "Réalisation d'un bas-relief",
    items: [
      "Préparation du projet",
      "Report du dessin",
      "Dégagement des fonds",
      "Mise en volume et modelé",
      "Sculpture des détails et finitions",
    ],
  },
];

// Compétences acquises à l'issue d'un stage
const competences = [
  { icon: TreePine, label: "Connaître les principales essences de bois" },
  { icon: Eye, label: "Comprendre le comportement du matériau" },
  { icon: Hand, label: "Manipuler les outils avec assurance" },
  { icon: Shield, label: "Travailler en toute sécurité" },
  { icon: Layers, label: "Lire les volumes" },
  { icon: Sparkles, label: "Réaliser un bas-relief complet" },
  { icon: Compass, label: "Développer précision et sens de l'observation" },
  { icon: UserCheck, label: "Gagner en autonomie créative" },
];

// Points-clés récapitulés dans l'encadré « Informations pratiques »
const infosPratiques = [
  "Stages accessibles à tous les niveaux",
  "Matériel fourni",
  "Accompagnement personnalisé",
  "Formats adaptables : initiation, découverte, perfectionnement",
  "Organisation selon le projet et les besoins du participant",
];

const Stages = () => {
  return (
    <Layout>
      <SEO
        title="Stages d'initiation à la sculpture sur bois | Aurélie Villemur"
        description="Stages d'initiation à la sculpture sur bois animés par Aurélie Villemur, artisane d'art. Découverte des outils, des essences et des gestes traditionnels — de l'initiation au perfectionnement. Accompagnement personnalisé, matériel fourni."
        path="/stages"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Stage d'initiation à la sculpture sur bois",
          description:
            "Stage d'initiation à la sculpture sur bois : découverte des outils, des essences, des gestes traditionnels et réalisation d'un bas-relief. Trois niveaux : débutant, initié, perfectionnement.",
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
          HERO — visuel pleine largeur avec overlay Art Déco
          Reprend exactement la structure de HeroSection utilisée
          sur les autres pages du site (ornements, typographie fluide,
          animations fade-in décalées).
          ========================================================== */}
      <section
        className="relative flex items-center justify-center py-fluid"
        style={{
          backgroundImage: `url(${heroAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(28rem, 65vh, 44rem)",
        }}
      >
        {/* Overlay vert forêt pour garantir la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" />

        <div className="relative z-10 container mx-auto px-fluid text-center">
          {/* Ornement supérieur — motif partagé avec HeroSection */}
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
            Stages d'initiation à la sculpture sur bois
          </h1>

          <p
            className="text-primary-foreground/85 text-fluid-lead max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Une véritable immersion dans l'univers de la sculpture sur bois
            traditionnelle : découvrir la matière, apprivoiser l'outil et
            laisser une forme naître sous ses mains.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Réserver un stage
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Ornement inférieur */}
          <div
            className="flex items-center justify-center gap-4 mt-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-8 h-px bg-accent/50" />
            <div className="w-1 h-1 rotate-45 bg-accent/50" />
            <div className="w-8 h-px bg-accent/50" />
          </div>
        </div>
      </section>

      {/* ==========================================================
          INTRODUCTION — texte central, aéré, ton chaleureux
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid max-w-3xl">
          <SectionHeading
            title="Une invitation à créer"
            subtitle="Ouverts à tous, quel que soit le niveau d'expérience"
          />
          <div className="space-y-6 text-muted-foreground text-fluid-body text-center">
            <p>
              Ces stages sont pensés comme une véritable immersion dans
              l'univers de la sculpture sur bois traditionnelle. Ils
              s'adressent aussi bien à celles et ceux qui n'ont jamais tenu
              une gouge qu'aux personnes déjà familières du geste.
            </p>
            <p>
              L'approche est progressive, bienveillante et adaptée à chaque
              participant. Chacun avance à son rythme, avec pour horizon la
              découverte d'un savoir-faire artisanal et l'acquisition de
              bases solides pour réaliser ses propres sculptures.
            </p>
            <p>
              Peu à peu, l'attention se pose sur la matière, la main se
              stabilise, l'outil trouve sa juste place — et une forme
              apparaît.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TROIS NIVEAUX — cartes homogènes façon "L'expérience"
          Utilise le même style de carte que la page /savoir-faire
          et l'ancienne page Stages (fond blanc, bordure fine,
          hover accent, animations décalées).
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Des stages accessibles à tous"
            subtitle="Trois formules pensées pour accompagner chaque niveau"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {niveaux.map((niveau, index) => (
              <div
                key={niveau.label}
                className="bg-background border border-border/60 p-8 animate-fade-in transition-colors duration-500 hover:border-accent flex flex-col"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Ornement Art Déco discret au sommet de la carte */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-accent" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
                </div>

                <p className="text-forest text-fluid-eyebrow tracking-[0.25em] uppercase mb-2">
                  {niveau.label}
                </p>
                <h3 className="font-display text-fluid-h3 font-semibold text-foreground mb-6">
                  {niveau.subtitle}
                </h3>

                <ul className="space-y-3 text-muted-foreground text-fluid-body">
                  {niveau.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rotate-45 bg-accent flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          LES APPRENTISSAGES — parcours pédagogique en 4 étapes
          Cartes centrées avec icône dans un carré cerclé accent,
          motif visuel identique aux cartes "L'expérience".
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Les apprentissages"
            subtitle="Un parcours pédagogique construit pas à pas"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {parcours.map((etape, index) => {
              const Icon = etape.icon;
              return (
                <div
                  key={etape.title}
                  className="bg-secondary/30 border border-border/60 p-8 animate-fade-in transition-colors duration-500 hover:border-accent"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-12 h-12 border border-accent text-forest flex-shrink-0">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-fluid-h3 font-semibold text-foreground">
                      {etape.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 text-muted-foreground text-fluid-body">
                    {etape.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rotate-45 bg-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          CE QUE VOUS APPRENDREZ — grille d'icônes, format inspiré
          des cartes "L'expérience" de l'ancienne page Stages.
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Ce que vous apprendrez"
            subtitle="Les compétences que vous emporterez avec vous"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            {competences.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <div
                  key={comp.label}
                  className="bg-background border border-border/60 p-6 text-center animate-fade-in transition-colors duration-500 hover:border-accent"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 border border-accent text-forest">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <p className="text-muted-foreground text-fluid-body">
                    {comp.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          APPROCHE PERSONNALISÉE — bloc texte centré + ornements
          Motif identique à la section "Une approche sur mesure"
          précédente pour rester cohérent avec la charte.
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-12 h-px bg-accent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>

          <h2 className="font-display text-fluid-h2 font-semibold text-foreground mb-6 animate-fade-in">
            Une approche personnalisée
          </h2>

          <div
            className="space-y-5 text-muted-foreground text-fluid-lead animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              Chaque stage repose sur un accompagnement individualisé et
              une pédagogie adaptée au niveau de chacun, dans un cadre
              propice aux échanges privilégiés et à la concentration.
            </p>
            <p>
              Transmettre un savoir-faire artisanal, c'est aussi partager
              le plaisir du geste et le temps long de la matière — une
              expérience conviviale qui laisse toute sa place à la
              créativité.
            </p>
            <p className="text-fluid-body">
              Les stages peuvent être organisés dans différents contextes,
              selon les besoins et les possibilités de chacun, avec tout
              le matériel nécessaire fourni. Une formule sur mesure est
              toujours envisageable.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          INFORMATIONS PRATIQUES — encadré synthétique
          Fond beige clair (secondary/30) + bordure fine pour rester
          dans l'esprit Art Déco sobre du reste du site.
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid max-w-3xl">
          <SectionHeading
            title="Informations pratiques"
            subtitle="Ce qu'il faut retenir en un coup d'œil"
          />

          <div className="bg-background border border-border/60 p-8 md:p-10 animate-fade-in">
            <ul className="space-y-4">
              {infosPratiques.map((info) => (
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
          CTA FINAL — deux boutons (réserver / stage sur mesure)
          Reprend l'encart CTA vert forêt utilisé sur les autres
          pages pour clôturer la lecture.
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
              Réservez un stage ou construisons ensemble une formule
              adaptée à votre projet et à votre niveau.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Réserver un stage
                  <ArrowRight size={18} />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium tracking-wide px-8 bg-transparent"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Construire un stage personnalisé
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stages;
