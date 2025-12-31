import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ImageCard from "@/components/ImageCard";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Hammer, Building, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import dorure1 from "@/assets/dorure-1.jpg";

const featuredWorks = [
  {
    src: sculpture3,
    alt: "Buste Frida Kahlo",
    title: "Frida Kahlo",
    category: "Sculpture",
  },
  {
    src: dorure1,
    alt: "Panneau doré à la feuille d'or",
    title: "Panneau doré",
    category: "Dorure",
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
        description="Un savoir-faire artisanal au service du patrimoine et de la création contemporaine. Des pièces uniques qui font dialoguer tradition et modernité."
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

      {/* Section Chef-d'œuvre - Enigma */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image principale */}
            <div className="relative group">
              <div className="aspect-[3/4] overflow-hidden bg-card">
                <img
                  src={sculpture1}
                  alt="Enigma - Chef d'œuvre d'Aurélie Villemur"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Badge chef-d'œuvre */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 flex items-center gap-2">
                <Star size={16} fill="currentColor" />
                <span className="text-xs font-medium tracking-wider uppercase">Chef-d'œuvre</span>
              </div>
              {/* Cadre décoratif */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            {/* Description */}
            <div className="lg:pl-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-sm tracking-[0.2em] uppercase">
                  Œuvre phare
                </span>
              </div>

              <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
                Enigma
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Cette sculpture incarne l'essence de mon travail : un profil féminin mystérieux, sublimé par la délicatesse de la feuille d'or. Inspirée par l'élégance géométrique de l'Art Déco, Enigma représente la fusion parfaite entre tradition et modernité.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Chaque détail a été sculpté avec une précision absolue, puis rehaussé de dorure à la feuille pour capturer la lumière et créer ce jeu subtil d'ombres et d'éclats qui donne vie à l'œuvre.
              </p>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Link to="/oeuvres" className="inline-flex items-center gap-2">
                  Découvrir toutes mes œuvres
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Œuvres en vedette */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Autres créations"
            subtitle="Un aperçu de mes dernières réalisations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
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
              "La lumière de l'or pour sublimer le bois et révéler ses détails."
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
