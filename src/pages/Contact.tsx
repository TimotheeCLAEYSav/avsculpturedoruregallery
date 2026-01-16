import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi - À remplacer par votre logique d'envoi email
    // Pour un envoi réel, vous devrez configurer un service backend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les meilleurs délais.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

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

      {/* Formulaire et Coordonnées */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-card p-8 md:p-10 border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Envoyez-moi un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone (optionnel)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Coordonnées */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Mes coordonnées
                </h2>

                <div className="space-y-6">
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
                        France<br />
                        <span className="text-sm italic">Sur rendez-vous uniquement</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Suivez-moi
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/av_sculpturedorure/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              {/* Note sur le délai de réponse */}
              <div className="bg-secondary/50 p-6 border border-border">
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
