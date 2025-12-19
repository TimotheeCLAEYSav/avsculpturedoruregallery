import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ImageCard from "@/components/ImageCard";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Hammer, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

// Images placeholders - À remplacer par vos vraies photos
const featuredWorks = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
    alt: "Sculpture sur bois ornementale",
    title: "Ornement baroque",
    category: "Sculpture",
  },
  {
    src: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600&h=800&fit=crop",
    alt: "Cadre doré à la feuille d'or",
    title: "Cadre Louis XV",
    category: "Dorure",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
    alt: "Restauration de mobilier ancien",
    title: "Console restaurée",
    category: "Restauration",
  },
];

const expertiseAreas = [
  {
    icon: Hammer,
    title: "Sculpture sur bois",
    description: "Création d'ornements, bas-reliefs et sculptures en ronde-bosse dans la tradition des maîtres anciens.",
  },
  {
    icon: Sparkles,
    title: "Dorure à la feuille",
    description: "Application de feuilles d'or et d'argent selon les techniques traditionnelles : dorure à l'eau et dorure à la mixtion.",
  },
  {
    icon: Building,
    title: "Patrimoine historique",
    description: "Restauration et conservation d'éléments sculptés et dorés pour monuments historiques et demeures anciennes.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Aurélie Villemur"
        subtitle="Sculptrice & Doreuse sur bois"
        description="Artisane d'art passionnée, je perpétue les gestes ancestraux de la sculpture et de la dorure sur bois. De la création à la restauration du patrimoine, chaque œuvre est un dialogue entre tradition et sensibilité contemporaine."
        ctaText="Découvrir mon travail"
        ctaLink="/oeuvres"
      />

      {/* Section Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Un savoir-faire d'exception"
            subtitle="Trois domaines d'expertise au service de la beauté et du patrimoine"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.title}
                className="text-center p-8 bg-card border border-border hover:border-accent/50 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-accent text-accent">
                  <area.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Œuvres en vedette */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Œuvres récentes"
            subtitle="Un aperçu de mes dernières créations et restaurations"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredWorks.map((work, index) => (
              <div
                key={work.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ImageCard {...work} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Link to="/oeuvres" className="inline-flex items-center gap-2">
                Voir toutes les œuvres
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Citation / Philosophie */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Ornement */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-accent" />
              <div className="w-2 h-2 rotate-45 bg-accent" />
              <div className="w-16 h-px bg-accent" />
            </div>

            <blockquote className="font-display text-2xl md:text-3xl italic leading-relaxed mb-8">
              "Chaque pièce de bois porte en elle une histoire à révéler. Mon rôle est de lui donner vie, de magnifier sa noblesse par la sculpture et l'éclat de l'or."
            </blockquote>

            <p className="text-accent tracking-[0.2em] uppercase text-sm">
              — Aurélie Villemur
            </p>
          </div>
        </div>
      </section>

      {/* Section CTA - Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              title="Un projet en tête ?"
              subtitle="Création sur mesure, restauration de patrimoine ou simple question : n'hésitez pas à me contacter."
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
        </div>
      </section>
    </Layout>
  );
};

export default Index;
