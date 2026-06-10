import ServicePage, { ServiceContent } from "./ServicePage";
import dorureImage from "@/assets/dorure-savoirfaire-new.jpeg";

const content: ServiceContent = {
  slug: "dorure-feuille-or",
  title: "Dorure à la feuille d'or",
  metaTitle: "Dorure à la feuille d'or — Atelier d'art | Aurélie Villemur",
  metaDescription:
    "Dorure à la feuille d'or 22 carats sur bois : sculptures, cadres, mobilier et miroirs. Techniques traditionnelles à la détrempe et à la mixtion.",
  intro:
    "Un art de la lumière hérité des grands ateliers, appliqué feuille après feuille pour révéler le relief du bois et la profondeur des ornements.",
  image: dorureImage,
  imageAlt: "Dorure à la feuille d'or appliquée sur un ornement sculpté",
  sections: [
    {
      heading: "Une technique d'excellence",
      body: "La dorure à la feuille consiste à appliquer de fines feuilles de métal précieux — or 22 carats, argent, palladium ou cuivre — sur un support préparé avec soin. Chaque étape exige patience et précision : préparation du bois, pose des assiettes, brunissage, patines de vieillissement. Le résultat est une surface vivante, qui capte la lumière comme aucun autre traitement.",
    },
    {
      heading: "Détrempe ou mixtion",
      body: "La dorure à la détrempe (à l'eau) reste la méthode la plus noble : elle permet le brunissage à la pierre d'agate et un éclat incomparable, idéal pour les pièces d'apparat, les cadres anciens et les ornements d'intérieur. La dorure à la mixtion, plus résistante, convient aux supports exposés ou aux pièces destinées à un usage soutenu. Le choix se fait en fonction de la pièce, de son environnement et de l'effet recherché.",
    },
    {
      heading: "Pour quels projets ?",
      body: "Dorure de sculptures sur bois, de cadres et miroirs anciens ou contemporains, d'éléments d'architecture intérieure, de mobilier d'exception. Création de pièces uniques entièrement dorées, restauration de dorures anciennes, finitions partielles à effet contrasté.",
    },
  ],
  bullets: [
    "Feuille d'or 22 ou 23 carats, argent, cuivre, palladium",
    "Dorure à la détrempe (eau) et à la mixtion",
    "Brunissage à la pierre d'agate, patines de vieillissement",
    "Travail sur création neuve et sur pièces anciennes",
  ],
  faq: [
    {
      q: "Quelle différence entre dorure à la feuille et peinture dorée ?",
      a: "La dorure à la feuille utilise du véritable métal précieux battu en feuilles très fines. Elle offre un éclat, une profondeur et une longévité que les peintures métallisées, à base de pigments, ne peuvent pas reproduire.",
    },
    {
      q: "Peut-on dorer une pièce déjà existante ?",
      a: "Oui, à condition que le support soit sain. Une étude préalable permet de définir la préparation nécessaire, le type de dorure adapté et la patine finale.",
    },
    {
      q: "La dorure se conserve-t-elle dans le temps ?",
      a: "Une dorure réalisée dans les règles de l'art traverse les siècles, comme en témoignent les cadres et boiseries anciens encore visibles aujourd'hui. Un entretien doux suffit à préserver son éclat.",
    },
  ],
  related: [
    { label: "Miroir Louis XVI", to: "/oeuvres/miroir-louis-xvi" },
    { label: "Enigma", to: "/oeuvres/enigma" },
    { label: "Savoir-faire", to: "/savoir-faire" },
  ],
};

const DorureFeuilleOr = () => <ServicePage content={content} />;
export default DorureFeuilleOr;
