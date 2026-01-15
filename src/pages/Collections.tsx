import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

// Import des images pour les collections
import sculpture1 from "@/assets/sculpture-1.jpg";
import flore1 from "@/assets/flore-1.png";
import contour from "@/assets/contour.jpg";
import faune from "@/assets/faune.jpg";

interface Collection {
  id: string;
  title: string;
  image: string;
  available: boolean;
}

const collections: Collection[] = [
  {
    id: "femme",
    title: "Femme",
    image: sculpture1,
    available: true,
  },
  {
    id: "faune",
    title: "Faune",
    image: faune,
    available: true,
  },
  {
    id: "flore",
    title: "Flore",
    image: flore1,
    available: true,
  },
  {
    id: "contour",
    title: "Contour",
    image: contour,
    available: true,
  },
];

const Collections = () => {
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
              Portfolio
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              Collections
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Les créations de l'atelier sont des pièces uniques, réalisées entièrement à la main.
              Elles se déclinent en plusieurs collections, conçues comme des champs de recherche formelle et sensible, nourris par les univers des cabinets de curiosités, du naturalisme, de la sculpture décorative et de mes voyages.
              Chaque œuvre est pensée comme un objet singulier, destiné à dialoguer avec l'espace et le regard.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des collections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {collection.available ? (
                  <Link
                    to={`/collections/${collection.id}`}
                    className="group block relative overflow-hidden bg-card border border-border hover:border-accent transition-all duration-500"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={collection.id === "femme" ? { objectPosition: 'top' } : undefined}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>
                    
                    {/* Contenu */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h2 className="font-display text-2xl font-semibold text-primary-foreground">
                        {collection.title}
                      </h2>
                    </div>
                  </Link>
                ) : (
                  <div className="relative overflow-hidden bg-card border border-border opacity-60">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
                    </div>
                    
                    {/* Contenu */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h2 className="font-display text-2xl font-semibold text-primary-foreground">
                        {collection.title}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collections;