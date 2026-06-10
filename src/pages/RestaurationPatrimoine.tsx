import ServicePage, { ServiceContent } from "./ServicePage";
import patrimoineImage from "@/assets/restauration-patrimoine-new.jpeg";

const content: ServiceContent = {
  slug: "restauration-patrimoine",
  title: "Restauration du patrimoine",
  metaTitle:
    "Restauration du patrimoine — Sculpture & dorure ancienne | Aurélie Villemur",
  metaDescription:
    "Restauration de sculptures, cadres et dorures anciennes. Mobilier, art sacré, ornements du XVIIe au XIXe siècle, dans le respect des techniques d'origine.",
  intro:
    "Redonner vie aux œuvres anciennes en respectant la main de l'artisan qui les a créées : un travail de diagnostic, de patience et de fidélité aux techniques d'origine.",
  image: patrimoineImage,
  imageAlt: "Sculpture en bois doré ancienne en cours de restauration",
  sections: [
    {
      heading: "Un diagnostic avant toute intervention",
      body: "Chaque pièce ancienne raconte une histoire. Avant d'agir, j'observe : essence du bois, technique d'origine, dorures successives, altérations, parties manquantes. Ce diagnostic permet de proposer une intervention juste, ni trop discrète, ni trop appuyée, dans le respect du caractère de l'œuvre.",
    },
    {
      heading: "Respecter l'œuvre, pas la réinventer",
      body: "La restauration que je pratique privilégie la réversibilité et la lisibilité. Les reprises sculptées s'accordent avec le style de la pièce, les retouches de dorure suivent les techniques anciennes (assiettes traditionnelles, feuille à la détrempe, patines). L'objectif n'est pas de faire du neuf, mais de prolonger la vie de l'œuvre tout en assumant son ancienneté.",
    },
    {
      heading: "Quelles pièces ?",
      body: "Cadres anciens, miroirs, sculptures religieuses ou profanes, ornements de mobilier, éléments architecturaux (rosaces, trumeaux, consoles). Pièces du XVIIe au XIXe siècle principalement, ainsi que créations contemporaines abîmées ou accidentées.",
    },
  ],
  bullets: [
    "Reprise de sculpture sur bois (parties manquantes, éclats)",
    "Restauration de dorures à la feuille et patines anciennes",
    "Reprises invisibles ou assumées selon la déontologie choisie",
    "Art sacré, mobilier d'apparat, encadrement",
  ],
  faq: [
    {
      q: "Travaillez-vous pour des particuliers ?",
      a: "Oui, autant pour des particuliers attachés à une pièce de famille que pour des décorateurs, antiquaires, lieux de culte ou institutions.",
    },
    {
      q: "Faut-il restaurer entièrement une pièce ancienne ?",
      a: "Pas nécessairement. Une intervention ciblée est souvent préférable : elle conserve la patine du temps tout en stabilisant les zones fragilisées. Le choix se fait toujours avec vous, après diagnostic.",
    },
    {
      q: "Combien de temps prend une restauration ?",
      a: "Cela dépend de l'ampleur et de la complexité. Une étude préalable permet d'estimer le temps d'atelier et le calendrier de l'intervention.",
    },
  ],
  related: [
    { label: "Miroir Louis XVI", to: "/oeuvres/miroir-louis-xvi" },
    { label: "Miroir Louis-Philippe", to: "/oeuvres/miroir-de-style-louis-philippe" },
    { label: "Savoir-faire", to: "/savoir-faire" },
  ],
};

const RestaurationPatrimoine = () => <ServicePage content={content} />;
export default RestaurationPatrimoine;
