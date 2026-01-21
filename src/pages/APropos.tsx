import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aPropos2 from "@/assets/a-propos-2.jpg";
import patrimoine1 from "@/assets/patrimoine-1.jpg";

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
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Portrait */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="bg-secondary overflow-hidden">
                <img
                  src={aPropos2}
                  alt="Portrait d'Aurélie Villemur dans un musée de sculptures"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Cadre décoratif */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>

            {/* Texte Parcours */}
            <div className="lg:pl-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <h2 className="font-display text-3xl font-semibold text-amber-800">
                  Mon parcours
                </h2>
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Une passion devenue vocation
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  À travers mon atelier, je mets mon savoir-faire au service de la restauration du patrimoine, de la création décorative et de la production artistique contemporaine.
                </p>
                <p>
                  Mon parcours atypique nourrit ma pratique : après plusieurs années d'engagement dans le secteur associatif et humanitaire, j'ai éprouvé le besoin de renouer avec un travail manuel, au plus près de la matière. Il me pousse à chercher dans chaque œuvre un équilibre entre respect de l'histoire, transmission des savoir-faire traditionnels et expression personnelle.
                </p>
                <p>
                  La période Art Déco m'inspire tout particulièrement : ses lignes géométriques épurées, ses motifs stylisés et son élégance intemporelle nourrissent profondément mon travail créatif. Aujourd'hui, je suis artisan d'art spécialisée en sculpture sur bois et dorure à la feuille.
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

          <div className="max-w-4xl mx-auto">
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
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Dans le même temps, je reste attentive aux évolutions de mon métier, aux nouvelles techniques et aux technologies contemporaines qui viennent enrichir la pratique sans en trahir l'esprit.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-card p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                L'écoute du matériau
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le bois est un matériau vivant, chaque essence possède son caractère. Avant de sculpter, je prends le temps d'observer, de comprendre les veines, les nœuds, les tensions du bois. C'est ce dialogue silencieux qui guide ma main et donne à chaque œuvre son âme unique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La terre, elle, se prête au modelage avec une réceptivité presque immédiate. Souple ou résistante selon son degré d'humidité, elle enregistre chaque pression, chaque intention. Je travaille avec elle dans un échange direct, attentif à ses réactions, à ses limites, laissant la forme émerger progressivement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le plâtre, plus exigeant, impose le temps et la précision. Sa prise rapide demande une présence totale, une anticipation du geste. Qu'il soit coulé ou sculpté, il oblige à écouter le moment juste, à accepter l'irréversibilité. Dans tous les cas, c'est l'attention portée au matériau qui détermine la justesse du geste et la force de la forme.
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
                <h2 className="font-display text-3xl font-semibold text-amber-800">
                  Patrimoine
                </h2>
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Au service du patrimoine historique
              </h3>

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
                <img
                  src={patrimoine1}
                  alt="Aurélie Villemur sur un chantier de restauration patrimoniale"
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