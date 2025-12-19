import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne 1 - Identité */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold mb-2">
              Aurélie Villemur
            </h3>
            <p className="text-accent text-sm tracking-[0.15em] uppercase mb-4">
              AVsculpturedorure
            </p>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Sculptrice et doreuse sur bois
              <br />
              Artisane d'art
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div className="text-center">
            <h4 className="font-display text-lg mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/oeuvres" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Œuvres
                </Link>
              </li>
              <li>
                <Link to="/savoir-faire" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Savoir-faire & Patrimoine
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Réseaux sociaux */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg mb-4 text-accent">Suivez-moi</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@avsculpturedorure.com"
                className="p-2 border border-primary-foreground/30 hover:border-accent hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur Art Déco */}
        <div className="my-8 flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-accent" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} AVsculpturedorure - Aurélie Villemur. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
