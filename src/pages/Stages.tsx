import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TreePine,
  Hand,
  Sparkles,
  Shield,
  Layers,
  Wrench,
  Palette,
  Users,
} from "lucide-react";
// Nouvelle photo d'établi : outils, gouges, maillet et espace de travail visibles.
import heroAsset from "@/assets/stage-hero-atelier.jpg.asset.json";

// -----------------------------------------------------------------------------
// Contenus synthétiques — pensés pour une lecture en quelques secondes.
// Chaque bloc est isolé pour rester facile à modifier.
// -----------------------------------------------------------------------------

// Trois niveaux de stage — une phrase courte + 3 points-clés max
const niveaux = [
  {
    label: "Débutant",
    subtitle: "Découvrir le geste",
    points: ["Premiers outils", "Sécurité et posture", "Premier projet guidé"],
  },
  {
    label: "Initié",
    subtitle: "Gagner en précision",
    points: ["Volumes et proportions", "Techniques de taille", "Plus d'autonomie"],
  },
  {
    label: "Perfectionnement",
    subtitle: "Affiner sa pratique",
    points: ["Finitions soignées", "Détails maîtrisés", "Approche artistique"],
  },
];

// Ce qu'on apprend — grille d'icônes synthétique
const apprentissages = [
  { icon: TreePine, label: "Les essences de bois" },
  { icon: Wrench, label: "Gouges, ciseaux, maillet" },
  { icon: Hand, label: "Le geste juste" },
  { icon: Shield, label: "Sécurité et posture" },
  { icon: Layers, label: "Lecture des volumes" },
  { icon: Palette, label: "Réalisation d'un bas-relief" },
];

// Points forts affichés dans l'encadré « Ce qui est inclus »
const inclus = [
  "Matériel et outils fournis",
  "Accompagnement personnalisé",
  "Tous niveaux, du débutant au confirmé",
  "Formats adaptables selon votre projet",
];

const Stages = () => {
  return (
    <Layout>
      <SEO
        title="Stages d'initiation à la sculpture sur bois | Aurélie Villemur"
        description="Stages de sculpture sur bois avec Aurélie Villemur, artisane d'art. Découverte des outils, du geste et réalisation d'un bas-relief. Tous niveaux, matériel fourni, accompagnement personnalisé."
        path="/stages"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Stage d'initiation à la sculpture sur bois",
          description:
            "Stage de sculpture sur bois : outils traditionnels, gestes fondamentaux et réalisation d'un bas-relief. Trois niveaux : débutant, initié, perfectionnement.",
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
          HERO — photo d'établi mise en valeur (outils visibles).
          `object-position: center 65%` pour privilégier l'établi
          plutôt qu'un cadrage serré.
          ========================================================== */}
      <section
        className="relative flex items-center justify-center py-fluid"
        style={{
          backgroundImage: `url(${heroAsset.url})`,
          backgroundSize: "cover",
          // Cadrage centré verticalement : garde établi + outils bien visibles
          backgroundPosition: "center 60%",
          minHeight: "clamp(28rem, 65vh, 44rem)",
        }}
      >
        {/* Overlay plus léger que sur les autres pages pour laisser voir
            davantage l'établi, les gouges et l'environnement de travail. */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/70 to-primary/85" />

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
            Stages de sculpture sur bois
          </h1>

          <p
            className="text-primary-foreground/90 text-fluid-lead max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Découvrir la matière, apprivoiser l'outil, faire naître une forme.
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
        </div>
      </section>

      {/* ==========================================================
          INTRO NARRATIVE — quelques paragraphes inspirants
          pour projeter le visiteur dans l'expérience humaine
          et créative du stage, puis trois piliers visuels.
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <div className="w-12 h-px bg-accent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>

          <h2 className="font-display text-fluid-h2 font-semibold text-foreground text-center mb-8 animate-fade-in">
            Le plaisir de créer de ses mains
          </h2>

          <div
            className="space-y-6 text-muted-foreground text-fluid-body text-center animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              Ces stages sont une invitation à ralentir, à retrouver la
              matière et à découvrir la joie de faire naître une forme sous
              ses mains. Une véritable transmission d'un savoir-faire
              artisanal, dans le respect du bois et des gestes hérités.
            </p>
            <p>
              L'accompagnement est personnalisé, bienveillant et adapté à
              chacun : chacun avance à son rythme, guidé pas à pas, du
              premier geste jusqu'à la réalisation de sa propre sculpture.
            </p>
          </div>

          {/* Trois piliers courts, en ligne */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Users, label: "Tous niveaux" },
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
          TROIS NIVEAUX — cartes très courtes (3 points max)
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Trois niveaux"
            subtitle="Une formule adaptée à votre pratique"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 max-w-6xl mx-auto">
            {niveaux.map((niveau, index) => (
              <div
                key={niveau.label}
                className="bg-background border border-border/60 p-8 animate-fade-in transition-colors duration-500 hover:border-accent flex flex-col"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
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
          CE QUE VOUS APPRENDREZ — grille d'icônes condensée
          ========================================================== */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-fluid">
          <SectionHeading
            title="Ce que vous apprendrez"
            subtitle="Les fondamentaux pour sculpter votre première œuvre"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-w-5xl mx-auto">
            {apprentissages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-secondary/30 border border-border/60 p-6 text-center animate-fade-in transition-colors duration-500 hover:border-accent"
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
          UN MOMENT POUR SOI — narration : créativité, partage,
          concentration et déconnexion. Bloc texte centré,
          ornements Art Déco, même motif que les autres pages.
          ========================================================== */}
      <section className="py-fluid bg-secondary/30">
        <div className="container mx-auto px-fluid max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-12 h-px bg-accent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
            <div className="w-12 h-px bg-accent" />
          </div>

          <h2 className="font-display text-fluid-h2 font-semibold text-foreground mb-6 animate-fade-in">
            Un moment pour soi
          </h2>

          <div
            className="space-y-5 text-muted-foreground text-fluid-body animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              Au-delà de la technique, un stage est une parenthèse : un temps
              de concentration, de déconnexion et de partage autour de la
              matière. On y éveille sa créativité, on affine son observation
              et sa sensibilité artistique.
            </p>
            <p>
              Le cadre reste convivial et propice aux échanges, avec toute la
              place laissée à l'expression de chacun. Une formule sur mesure
              est toujours envisageable, selon votre projet et vos envies.
            </p>
          </div>
        </div>
      </section>


      {/* ==========================================================
          CE QUI EST INCLUS — encadré synthétique
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
          CTA FINAL — un seul bouton clair, renvoi vers /contact
          (page de contact déjà utilisée partout sur le site).
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
              Réservez votre stage ou construisons ensemble une formule sur mesure.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
            >
              <Link to="/contact" className="inline-flex items-center gap-2">
                Me contacter pour réserver un stage
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
