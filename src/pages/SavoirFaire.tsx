import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lightbox from "@/components/Lightbox";

// Photos savoir-faire - nouvelles images
import sculptureSavoirfaire from "@/assets/sculpture-savoirfaire.jpg";
import dorureSavoirfaireNew from "@/assets/dorure-savoirfaire-new.jpeg";
import modelageSavoirfaire from "@/assets/modelage-savoirfaire.jpg";
import platreSavoirfaire from "@/assets/platre-savoirfaire.jpg";
import patineSavoirfaire from "@/assets/patine-savoirfaire.jpg";

// Photos patrimoine
import patrimoine4 from "@/assets/patrimoine-4.jpg";
import patrimoine6 from "@/assets/patrimoine-6.jpg";

const savoirFaireItems = [
  {
    id: "sculpture",
    title: "Sculpture sur bois",
    image: sculptureSavoirfaire,
    description: "Chaque sculpture est une rencontre entre le bois et la lumière. Inspirée par la nature, les voyages et les symboles, je conçois des pièces uniques qui mêlent tradition et contemporanéité.",
    details: [
      "Bas-reliefs et hauts-reliefs",
      "Ornements architecturaux",
      "Sculptures en ronde-bosse",
      "Pièces destinées à un intérieur, une collection ou une exposition",
    ],
  },
  {
    id: "dorure",
    title: "Dorure à la feuille",
    image: dorureSavoirfaireNew,
    description: "La dorure à la feuille est un art délicat qui sublime le bois et révèle ses reliefs. J'utilise des techniques ancestrales pour appliquer l'or, l'argent ou d'autres métaux précieux, selon des méthodes respectueuses de la tradition.",
    details: [
      "Dorure à la détrempe (à l'eau)",
      "Dorure à la mixtion",
      "Jeu subtil entre éclat et profondeur",
      "Argenture et feuille de cuivre",
    ],
  },
  {
    id: "modelage",
    title: "Modelage",
    image: modelageSavoirfaire,
    description: "Le modelage est la première étape de nombreuses créations. Travailler la terre permet de donner forme à une idée avec une grande liberté, avant de la transposer dans d'autres matériaux.",
    details: [
      "Modelage en terre",
      "Ébauches et maquettes",
      "Études de volumes et proportions",
      "Création de modèles originaux",
    ],
  },
  {
    id: "platre",
    title: "Plâtre",
    image: platreSavoirfaire,
    description: "Le travail du plâtre est une discipline complémentaire essentielle. Il permet de créer des reproductions fidèles, des moulages ou des créations originales avec une grande finesse de détail.",
    details: [
      "Moulage en creux et à bon-creux",
      "Tirage au plâtre",
      "Reproductions et éditions",
    ],
  },
  {
    id: "patine",
    title: "Patine",
    image: patineSavoirfaire,
    description: "La patine donne son caractère final aux œuvres. Qu'il s'agisse de vieillir artificiellement une pièce, de créer un faux marbre ou d'appliquer des glacis subtils, ces techniques requièrent patience et savoir-faire.",
    details: [
      "Patines acryliques",
      "Faux marbres",
      "Glacis et effets de matière",
      "Finitions protectrices",
    ],
  },
];

const patrimoineGallery = [
  { src: patrimoine4, alt: "Restauration de fresques murales" },
  { src: patrimoine6, alt: "Détail de sculpture restaurée" },
];

const SavoirFaire = () => {
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

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
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              Savoir-faire
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Des techniques ancestrales au service de la conservation et de la restauration du patrimoine historique.
            </p>
          </div>
        </div>
      </section>

      {/* Savoir-faire items */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Mes techniques"
            subtitle="Un savoir-faire transmis de génération en génération"
          />

          <div className="mt-12 space-y-20">
            {savoirFaireItems.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] bg-secondary overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Cadre décoratif */}
                    <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-full h-full border-2 border-accent -z-10`} />
                  </div>

                  {/* Texte */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-px bg-accent" />
                      <h2 className="font-display text-3xl font-semibold text-amber-800">
                        {item.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <ul className="space-y-2">
                      {item.details.map((detail) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restauration du Patrimoine */}
      <section id="restauration" className="py-20 bg-secondary/30 scroll-mt-24">
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
              J'ai travaillé pour l'entreprise Ateliers Bonhoure notamment sur les travaux de restauration de l'Église Notre-Dame-du-Taur à Toulouse.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 bg-card p-4 border-l-4 border-accent">
              <strong className="text-foreground">Restauration pour particuliers :</strong> Je restaure également des meubles et pièces appartenant à des particuliers, en plus des éléments patrimoniaux. Chaque objet mérite une attention particulière pour retrouver sa splendeur d'origine.
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

            {/* Galerie photos patrimoine */}
            <div className="mt-12">
              <div className="grid grid-cols-2 gap-6">
                {patrimoineGallery.map((photo, index) => (
                  <div 
                    key={index} 
                    className="aspect-[4/3] overflow-hidden bg-secondary cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <Lightbox
              images={patrimoineGallery}
              currentIndex={lightboxIndex}
              isOpen={lightboxOpen}
              onClose={() => setLightboxOpen(false)}
              onNext={() => setLightboxIndex((prev) => (prev + 1) % patrimoineGallery.length)}
              onPrev={() => setLightboxIndex((prev) => (prev - 1 + patrimoineGallery.length) % patrimoineGallery.length)}
              onIndexChange={setLightboxIndex}
            />
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