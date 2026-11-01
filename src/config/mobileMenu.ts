import type { Locale } from '@/config/translations';

/**
 * Numbers shown as marketing indicators in the mobile menu.
 * Computed on the server (RootShell) from googleReviews and FIXED_PRICES and passed down as props,
 * so the client bundle never ships the full reviews list or the SEO facts module.
 */
export interface MenuFacts {
  rating: number;
  reviewCount: number;
  airportFrom: number;
  waitSchengen: number;
}

export interface MobileMenuCopy {
  available: string;
  groupCompany: string;
  reviewsLabel: (count: number) => string;
  fixedFromLabel: string;
  freeWaitLabel: string;
  freeWaitValue: (minutes: number) => string;
  childSeatsLabel: string;
  badgeFrom: (price: number) => string;
  badgePopular: string;
  badgeInstant: string;
  badgeSeats: string;
  ctaNote: string;
  call: string;
}

export const MOBILE_MENU_COPY: Record<Locale, MobileMenuCopy> = {
  en: {
    available: 'Available 24/7',
    groupCompany: 'Helicro',
    reviewsLabel: (n) => `${n} Google reviews`,
    fixedFromLabel: 'Airport transfer prices',
    freeWaitLabel: 'Free airport waiting',
    freeWaitValue: (a) => `${a} min`,
    childSeatsLabel: 'Child seats',
    badgeFrom: (p) => `From ${p}€`,
    badgePopular: 'Popular',
    badgeInstant: 'Instant quote',
    badgeSeats: 'Up to 8 seats',
    ctaNote: 'Fixed price, confirmed in writing',
    call: 'Call',
  },
  nl: {
    available: '24/7 bereikbaar',
    groupCompany: 'Helicro',
    reviewsLabel: (n) => `${n} Google-reviews`,
    fixedFromLabel: 'Prijzen luchthavenvervoer',
    freeWaitLabel: 'Gratis wachttijd luchthaven',
    freeWaitValue: (a) => `${a} min`,
    childSeatsLabel: 'Kinderzitjes',
    badgeFrom: (p) => `Vanaf ${p}€`,
    badgePopular: 'Populair',
    badgeInstant: 'Direct een prijs',
    badgeSeats: 'Tot 8 plaatsen',
    ctaNote: 'Vaste prijs, schriftelijk bevestigd',
    call: 'Bellen',
  },
  fr: {
    available: 'Disponible 24h/24',
    groupCompany: 'Helicro',
    reviewsLabel: (n) => `${n} avis Google`,
    fixedFromLabel: 'Tarifs aéroport',
    freeWaitLabel: 'Attente offerte à l’aéroport',
    freeWaitValue: (a) => `${a} min`,
    childSeatsLabel: 'Sièges enfants',
    badgeFrom: (p) => `Dès ${p}€`,
    badgePopular: 'Populaire',
    badgeInstant: 'Devis immédiat',
    badgeSeats: 'Jusqu’à 8 places',
    ctaNote: 'Prix fixe, confirmé par écrit',
    call: 'Appeler',
  },
  el: {
    available: 'Διαθέσιμοι 24/7',
    groupCompany: 'Helicro',
    reviewsLabel: (n) => `${n} κριτικές Google`,
    fixedFromLabel: 'Αεροδρόμιο, σταθερή τιμή',
    freeWaitLabel: 'Δωρεάν αναμονή στο αεροδρόμιο',
    freeWaitValue: (a) => `${a} λεπτά`,
    childSeatsLabel: 'Παιδικά καθίσματα',
    badgeFrom: (p) => `Από ${p}€`,
    badgePopular: 'Δημοφιλές',
    badgeInstant: 'Άμεση τιμή',
    badgeSeats: 'Έως 8 θέσεις',
    ctaNote: 'Σταθερή τιμή, γραπτή επιβεβαίωση',
    call: 'Κλήση',
  },
  hr: {
    available: 'Dostupni 24/7',
    groupCompany: 'Helicro',
    reviewsLabel: (n) => `${n} Google recenzija`,
    fixedFromLabel: 'Aerodromski transferi, fiksno',
    freeWaitLabel: 'Besplatno čekanje na aerodromu',
    freeWaitValue: (a) => `${a} min`,
    childSeatsLabel: 'Dječje sjedalice',
    badgeFrom: (p) => `Od ${p}€`,
    badgePopular: 'Popularno',
    badgeInstant: 'Trenutna cijena',
    badgeSeats: 'Do 8 mjesta',
    ctaNote: 'Fiksna cijena, pismena potvrda',
    call: 'Nazovi',
  },
};
