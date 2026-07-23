/**
 * Configuration centralisée des expositions.
 *
 * Ajouter une nouvelle exposition ici, puis référencer son `id` dans le
 * champ `exhibitions` des œuvres concernées (voir `src/data/artworks.ts`).
 *
 * Le site détermine automatiquement, en fonction de la date courante :
 *  - si l'exposition est à venir, en cours ou terminée ;
 *  - l'affichage de la section « En ce moment » sur la page d'accueil ;
 *  - l'affichage des badges sur les cartes et fiches œuvres.
 */

export interface ExhibitionConfig {
  /** Identifiant technique unique (référencé par les œuvres). */
  id: string;
  /** Nom de la galerie / lieu. */
  gallery: string;
  /** Ville. */
  city: string;
  /** Date de début (ISO `YYYY-MM-DD`). L'exposition devient active ce jour-là. */
  startDate: string;
  /** Date de fin (ISO `YYYY-MM-DD`) — facultative. `null` = pas de date de fin. */
  endDate?: string | null;
  /** Optionnel : URL du site de la galerie. */
  url?: string;
}

/**
 * Liste des expositions. Il suffit d'ajouter une entrée ici pour qu'une
 * nouvelle exposition soit prise en compte partout dans le site.
 */
export const EXHIBITIONS: ExhibitionConfig[] = [
  {
    id: "artysanat-2026",
    gallery: "Galerie Arty'Sanat",
    city: "Lourdes",
    startDate: "2026-07-28",
    endDate: null,
  },
];

/** Statut d'une exposition à un instant donné. */
export type ExhibitionStatus = "upcoming" | "active" | "ended";

/** Parse une date ISO `YYYY-MM-DD` en Date locale à minuit. */
const parseISODate = (iso: string): Date => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
};

/** Formate une date ISO en français long, ex. « 28 juillet 2026 ». */
export const formatExhibitionDate = (iso: string): string => {
  const date = parseISODate(iso);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/** Retourne le statut d'une exposition à la date `now` (par défaut : maintenant). */
export const getExhibitionStatus = (
  ex: ExhibitionConfig,
  now: Date = new Date(),
): ExhibitionStatus => {
  const start = parseISODate(ex.startDate);
  if (now < start) return "upcoming";
  if (ex.endDate) {
    const end = parseISODate(ex.endDate);
    // fin incluse : l'exposition reste active toute la journée de fin
    end.setHours(23, 59, 59, 999);
    if (now > end) return "ended";
  }
  return "active";
};

/** Retourne toutes les expositions actives à la date donnée. */
export const getActiveExhibitions = (now: Date = new Date()): ExhibitionConfig[] =>
  EXHIBITIONS.filter((ex) => getExhibitionStatus(ex, now) === "active");

/** Retourne toutes les expositions à venir (triées par date de début croissante). */
export const getUpcomingExhibitions = (now: Date = new Date()): ExhibitionConfig[] =>
  EXHIBITIONS
    .filter((ex) => getExhibitionStatus(ex, now) === "upcoming")
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

/**
 * Retourne l'exposition à mettre en avant sur la page d'accueil :
 *  - la première exposition active si elle existe ;
 *  - sinon la prochaine exposition à venir ;
 *  - sinon `null`.
 */
export const getFeaturedExhibition = (
  now: Date = new Date(),
): { exhibition: ExhibitionConfig; status: "active" | "upcoming" } | null => {
  const active = getActiveExhibitions(now);
  if (active.length > 0) return { exhibition: active[0], status: "active" };
  const upcoming = getUpcomingExhibitions(now);
  if (upcoming.length > 0) return { exhibition: upcoming[0], status: "upcoming" };
  return null;
};

/**
 * Résout les expositions actives pour une œuvre à partir de ses IDs.
 * Les expositions à venir ou terminées sont exclues — le badge n'apparaît
 * donc qu'à partir de la date de début et disparaît après la date de fin.
 */
export const resolveActiveExhibitions = (
  ids: string[] | undefined,
  now: Date = new Date(),
): ExhibitionConfig[] => {
  if (!ids?.length) return [];
  return ids
    .map((id) => EXHIBITIONS.find((ex) => ex.id === id))
    .filter((ex): ex is ExhibitionConfig => !!ex && getExhibitionStatus(ex, now) === "active");
};
