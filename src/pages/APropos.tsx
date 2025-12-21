import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import portraitAurelie from "@/assets/portrait-aurelie.jpg";

const APropos = () => {
  return (
    <Layout>
      {/* Hero À propos */}
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
              <div className="w-12 h-px bg-accent" />
            </div>
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
              Artisane d'art
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              À propos
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Découvrez mon parcours, ma démarche artistique et ma passion pour les métiers du patrimoine.
            </p>
          </div>
        </div>
      </section>

      {/* Portrait et Parcours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Portrait */}
            <div className="relative">
              <div className="aspect-[3/4] bg-secondary overflow-hidden">
                <img
                  src={portraitAurelie}
                  alt="Portrait d'Aurélie Villemur dans son atelier"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Cadre décoratif */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            {/* Texte Parcours */}
            <div className="lg:pl-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-sm tracking-[0.2em] uppercase">
                  Mon parcours
                </span>
              </div>

              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Une passion devenue vocation
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fascinée depuis l'enfance par la beauté des ornements sculptés et l'éclat mystérieux de la dorure, j'ai choisi de consacrer ma vie à ces métiers d'art ancestraux.
                </p>
                <p>
                  Après une reconversion professionnelle, j'ai intégré la formation ESEA d'Avignon (promo 2022/2023), une formation d'excellence en sculpture et dorure. Cette formation rigoureuse m'a permis de maîtriser les techniques traditionnelles et les gestes précis transmis de génération en génération.
                </p>
                <p>
                  Aujourd'hui installée dans mon atelier, je mets ce savoir-faire au service de projets variés : créations contemporaines, restauration de mobilier ancien et chantiers de rénovation du patrimoine historique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Démarche Artistique */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Ma démarche artistique"
            subtitle="Entre tradition et sensibilité contemporaine"
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Respect de la tradition
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Je perpétue les techniques ancestrales avec une exigence absolue : outils traditionnels, feuilles d'or véritable, préparations artisanales. Chaque geste est l'héritier de siècles de savoir-faire.
                </p>
              </div>

              <div className="bg-card p-8 border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Regard contemporain
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si mes techniques sont anciennes, mon regard est résolument contemporain. Je crée des pièces qui dialoguent avec notre époque tout en honorant l'héritage des maîtres anciens.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-card p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                L'écoute du matériau
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Le bois est un matériau vivant, chaque essence possède son caractère. Avant de sculpter, je prends le temps d'observer, de comprendre les veines, les nœuds, les tensions du bois. C'est ce dialogue silencieux qui guide ma main et donne à chaque œuvre son âme unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patrimoine */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="lg:pr-8 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-sm tracking-[0.2em] uppercase">
                  Patrimoine
                </span>
              </div>

              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Au service du patrimoine historique
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La restauration du patrimoine est au cœur de mon engagement. Intervenir sur des éléments sculptés et dorés de monuments historiques représente une responsabilité immense et un honneur.
                </p>
                <p>
                  Chaque chantier de restauration est une enquête passionnante : retrouver les techniques d'origine, comprendre les choix des artisans du passé, et redonner vie à des œuvres parfois oubliées.
                </p>
                <p>
                  Je travaille en étroite collaboration avec les architectes du patrimoine, les conservateurs et les autres corps de métier pour garantir des interventions respectueuses et durables.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] bg-secondary overflow-hidden">
                {/* REMPLACER PAR UNE PHOTO DE CHANTIER */}
                <img
                  src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop"
                  alt="Détail de restauration de boiseries dorées"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Cadre décoratif */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
                <div className="w-12 h-px bg-accent" />
              </div>
              <h2 className="font-display text-3xl font-semibold">
                Mes valeurs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-display text-xl text-accent mb-3">Excellence</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Une exigence absolue dans chaque détail, chaque geste, chaque finition.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-accent mb-3">Authenticité</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Des matériaux nobles, des techniques traditionnelles, un savoir-faire véritable.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-accent mb-3">Transmission</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Perpétuer les gestes ancestraux et partager la passion de ces métiers d'art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
