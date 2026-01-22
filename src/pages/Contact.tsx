import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
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
              Parlons de votre projet
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Contact
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Chaque projet est unique. Je suis à votre écoute pour imaginer et réaliser des créations sur mesure, adaptées à vos besoins, qu'il s'agisse de restauration, de décoration ou de sculpture contemporaine.
            </p>
          </div>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 md:p-10 border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
                Mes coordonnées
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent text-accent flex-shrink-0">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:av.sculpturedorure@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      av.sculpturedorure@gmail.com
                    </a>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent text-accent flex-shrink-0">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Téléphone</h3>
                    <a
                      href="tel:+33629927475"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      06 29 92 74 75
                    </a>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent text-accent flex-shrink-0">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Atelier</h3>
                    <p className="text-muted-foreground">
                      Toulouse<br />
                      <span className="text-sm italic">Sur rendez-vous uniquement</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
                  Suivez-moi
                </h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.instagram.com/av_sculpturedorure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aur%C3%A9lie-villemur-64b51378/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Note sur le délai de réponse */}
              <div className="mt-8 bg-secondary/50 p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Délai de réponse
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Je m'efforce de répondre à toutes les demandes sous 48 à 72 heures. Pour les demandes urgentes, n'hésitez pas à me contacter par téléphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;