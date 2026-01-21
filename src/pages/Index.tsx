import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import dorure1 from "@/assets/dorure-1.jpg";
import sculptureAccueil from "@/assets/sculpture-accueil.jpg";
import dorureSavoirFaire from "@/assets/dorure-savoirfaire.jpg";
import restaurationPatrimoineNew from "@/assets/restauration-patrimoine-new.jpeg";
import modelage2 from "@/assets/modelage-2.jpeg";
import moulage1 from "@/assets/moulage-1.jpg";
import patineFinition from "@/assets/patine-finition.png";

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
    image: sculptureAccueil,
    title: "Sculpture",
    description: "Création d'ornements, bas-reliefs et sculptures en ronde-bosse dans la tradition des maîtres anciens, tout en introduisant des techniques plus contemporaines.",
    anchor: "sculpture",
  },
  {
    image: dorureSavoirFaire,
    title: "Dorure",
    description: "Application de feuilles d'or, d'argent et de cuivre selon les techniques traditionnelles.",
    anchor: "dorure",
  },
  {
    image: restaurationPatrimoineNew,
    title: "Restauration patrimoine",
    description: "Conservation et restauration d'éléments sculptés et dorés pour monuments historiques.",
    anchor: "restauration",
  },
  {
    image: modelage2,
    title: "Modelage",
    description: "Modelage en terre et création de formes originales.",
    anchor: "modelage",
  },
  {
    image: moulage1,
    title: "Moulage",
    description: "Moulage traditionnel en plâtre et reproductions fidèles.",
    anchor: "platre",
  },
  {
    image: patineFinition,
    title: "Patine et Finition",
    description: "Patines et finitions pour sublimer chaque œuvre.",
    anchor: "patine",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section avec image Enigma en fond */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${sculpture1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        {/* Overlay léger */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/60" />
        
        {/* Contenu */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Ornement supérieur */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="w-16 md:w-24 h-px bg-accent" />
            <div className="w-2 h-2 rotate-45 bg-accent" />
            <div className="w-16 md:w-24 h-px bg-accent" />
          </div>

          {/* Sous-titre */}
          <p 
            className="text-accent text-sm md:text-base tracking-[0.25em] uppercase mb-4 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Artisane d'Art, Sculptrice & Doreuse sur bois
          </p>

          {/* Titre principal */}
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Aurélie Villemur
          </h1>

          {/* Description */}
          <p 
            className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Atelier de création d'ouvrages sculptés, dorés et de restauration patrimoniale
          </p>

          {/* Bouton CTA */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide px-8"
            >
              <Link to="/collections" className="inline-flex items-center gap-2">
                Découvrir mon travail
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Ornement inférieur */}
          <div 
            className="flex items-center justify-center gap-4 mt-12 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="w-8 h-px bg-accent/50" />
            <div className="w-1 h-1 rotate-45 bg-accent/50" />
            <div className="w-8 h-px bg-accent/50" />
          </div>
        </div>
      </section>

      {/* Section Expertise avec photos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Un savoir-faire d'exception"
            subtitle="Six domaines d'expertise au service de la beauté et du patrimoine"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {expertiseAreas.map((area, index) => (
              <Link
                key={area.title}
                to={`/savoir-faire#${area.anchor}`}
                className="relative group overflow-hidden animate-fade-in cursor-pointer block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={area.title === "Restauration patrimoine" ? { objectPosition: 'center 30%' } : undefined}
                  />
                </div>
                {/* Overlay avec texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-base leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Chef-d'œuvre - Enigma */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image principale - lien vers l'œuvre */}
            <Link to="/collections/femme?artwork=enigma" className="relative group block">
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
            </Link>

            {/* Description */}
            <div className="lg:pl-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <h2 className="font-display text-3xl font-semibold text-amber-800">
                  Œuvre phare
                </h2>
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Enigma
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Cette sculpture incarne l'essence de mon travail : un profil féminin mystérieux, sublimé par la délicatesse de la feuille d'or. Inspirée par l'élégance géométrique de l'Art Déco, Enigma représente la fusion parfaite entre tradition et modernité.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Chaque détail a été sculpté avec précision, puis rehaussé de dorure à la feuille pour capturer la lumière et créer ce jeu subtil d'ombres et d'éclats qui donne vie à l'œuvre. Un faux marbre a été créé pour rappeler le globe chiné dans une brocante à Athènes et qui accueille une lampe.
              </p>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-forest text-forest hover:bg-forest hover:text-primary-foreground"
              >
                <Link to="/collections" className="inline-flex items-center gap-2">
                  Découvrir toutes mes œuvres
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
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
            <p className="text-accent/80 tracking-[0.15em] uppercase text-xs mt-1">
              Artisane d'Art
            </p>
            <p className="text-accent/80 tracking-[0.15em] uppercase text-xs">
              Sculptrice, Ébéniste et Doreuse sur bois
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