import ServicePage, { ServiceContent } from "./ServicePage";
import sculptureImage from "@/assets/sculpture-savoirfaire.jpg";

const content: ServiceContent = {
  slug: "sculpture-sur-mesure",
  title: "Sculpture sur bois sur mesure",
  metaTitle: "Sculpture sur bois sur mesure — Pièces uniques | Aurélie Villemur",
  metaDescription:
    "Création de sculptures sur bois sur mesure : pièces uniques pour particuliers, décorateurs et lieux d'exception. Du croquis à l'œuvre finie.",
  intro:
    "Donner forme à une idée, à un lieu, à une intention. Chaque sculpture est conçue pour celui ou celle qui la recevra, dans un dialogue entre la matière, le sujet et l'espace.",
  image: sculptureImage,
  imageAlt: "Sculpture sur bois en cours de réalisation à l'atelier",
  sections: [
    {
      heading: "Du croquis à l'œuvre",
      body: "Tout commence par un échange : un univers, un lieu, une émotion à traduire. Viennent ensuite les croquis, parfois un modelage en terre, puis le choix du bois et la sculpture proprement dite. Chaque étape vous est partagée pour que la pièce vous ressemble vraiment au moment de la livraison.",
    },
    {
      heading: "Les essences travaillées",
      body: "Tilleul pour sa finesse et sa douceur de coupe, idéal pour les bas-reliefs et les sujets délicats. Noyer et chêne pour leur caractère et leur tenue. Bois fruitiers, poirier, érable selon les projets. Le choix de l'essence influence la patine, le grain, la lumière de la pièce finale.",
    },
    {
      heading: "Pour qui ?",
      body: "Particuliers souhaitant une œuvre unique pour leur intérieur, décorateurs et architectes d'intérieur recherchant une pièce singulière pour un projet, hôtellerie de luxe, lieux culturels ou marques attachées à un savoir-faire d'art. Toutes les demandes sont étudiées au cas par cas.",
    },
  ],
  bullets: [
    "Bas-reliefs, hauts-reliefs et sculptures en ronde-bosse",
    "Ornements, panneaux décoratifs, pièces signature",
    "Finition naturelle, patinée, polychromée ou dorée à la feuille",
    "Accompagnement complet : du croquis à l'installation",
  ],
  faq: [
    {
      q: "Comment commence un projet sur mesure ?",
      a: "Par un échange — par téléphone, mail ou en atelier — pour comprendre votre intention, le lieu de destination, le budget et le calendrier. Une proposition vous est ensuite remise avec croquis, choix d'essence et estimation.",
    },
    {
      q: "Travaillez-vous d'après une référence existante ?",
      a: "Oui, à partir d'une photo, d'une œuvre admirée ou d'un univers à transposer. Chaque pièce reste cependant une création originale, jamais une copie.",
    },
    {
      q: "Une pièce peut-elle être dorée ou patinée ?",
      a: "Oui. La sculpture peut être laissée brute, cirée, patinée, polychromée ou dorée à la feuille. Le choix se fait selon l'intention et l'environnement de la pièce.",
    },
  ],
  related: [
    { label: "Enigma", to: "/oeuvres/enigma" },
    { label: "Collection Faune", to: "/collections/faune" },
    { label: "Collection Abstrait", to: "/collections/abstrait" },
  ],
};

const SculptureSurMesure = () => <ServicePage content={content} />;
export default SculptureSurMesure;
