import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

// Import des images pour les collections
import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import sculpture4 from "@/assets/sculpture-4.jpg";
import dorure1 from "@/assets/dorure-1.jpg";

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  available: boolean;
}

const collections: Collection[] = [
  {
    id: "femme",
    title: "Femme",
    description: "Portraits et figures féminines sculptées",
    image: sculpture1,
    available: true,
  },
  {
    id: "faune",
    title: "Faune",
    description: "Le monde animal en sculpture",
    image: sculpture4,
    available: true,
  },
  {
    id: "contour",
    title: "Contour",
    description: "Lignes et formes épurées",
    image: dorure1,
    available: true,
  },
  {
    id: "enfance",
    title: "Enfance",
    description: "Contenu à venir",
    image: sculpture3,
    available: false,
  },
  {
    id: "abstrait",
    title: "Abstrait",
    description: "Formes et expressions abstraites",
    image: dorure1,
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
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Collections
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Explorez mes créations organisées par thématiques : sculptures sur bois, plâtre et dorures à la feuille.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des collections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>
                    
                    {/* Contenu */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h2 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                        {collection.title}
                      </h2>
                      <p className="text-primary-foreground/70 text-sm">
                        {collection.description}
                      </p>
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
                      <h2 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                        {collection.title}
                      </h2>
                      <p className="text-primary-foreground/70 text-sm italic">
                        {collection.description}
                      </p>
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
