import type { Locale } from '@/lib/seo';

export interface HubLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

/** Localized hub-and-spoke link groups used on the home page and in the footer. */
export const HUB_LINKS: Record<Locale, HubLinkGroup[]> = {
  en: [
    {
      title: 'Airport transfers',
      links: [
        { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport (Zaventem) taxi & transfer' },
        { href: '/en/airport-transfer/brussels-charleroi', label: 'Charleroi Airport taxi & transfer' },
        { href: '/en/airport-transfer/lille', label: 'Lille Airport transfer' },
        { href: '/en/route/brussels-zaventem', label: 'Brussels to Zaventem from 35€' },
        { href: '/en/route/brussels-charleroi', label: 'Brussels to Charleroi from 65€' },
        { href: '/en/route/brussels-charleroi-shared-shuttle', label: 'Shared shuttle to Charleroi from 25€ pp' },
        { href: '/price-list', label: 'Full price list 2026' },
      ],
    },
    {
      title: 'Long-distance and cross-border',
      links: [
        { href: '/en/route/charleroi-airport-antwerp', label: 'Charleroi Airport to Antwerp from 135€' },
        { href: '/en/route/brussels-amsterdam', label: 'Brussels to Amsterdam / Schiphol from 250€' },
        { href: '/en/route/brussels-paris-cdg', label: 'Brussels to Paris CDG from 380€' },
        { href: '/en/airport-transfer/lille', label: 'Brussels to Lille Airport from 150€' },
        { href: '/en/route/brussels-luxembourg', label: 'Brussels to Luxembourg from 260€' },
        { href: '/en/route/brussels-cologne', label: 'Brussels to Cologne from 250€' },
      ],
    },
    {
      title: 'Routes to the airport',
      links: [
        { href: '/en/route/antwerp-brussels-airport', label: 'Antwerp to Brussels Airport' },
        { href: '/en/route/ghent-brussels-airport', label: 'Ghent to Brussels Airport' },
        { href: '/en/route/bruges-brussels-airport', label: 'Bruges to Brussels Airport' },
        { href: '/en/route/leuven-brussels-airport', label: 'Leuven to Brussels Airport' },
        { href: '/en/route/liege-brussels-airport', label: 'Liège to Brussels Airport' },
        { href: '/en/route/namur-charleroi-airport', label: 'Namur to Charleroi Airport' },
      ],
    },
    {
      title: 'Private driver by city',
      links: [
        { href: '/en/service-area/brussels', label: 'Private driver Brussels' },
        { href: '/en/service-area/antwerp', label: 'Private driver Antwerp' },
        { href: '/en/service-area/ghent', label: 'Private driver Ghent' },
        { href: '/en/service-area/bruges', label: 'Private driver Bruges' },
        { href: '/en/service-area/leuven', label: 'Private driver Leuven' },
        { href: '/en/service-area', label: 'All service areas' },
      ],
    },
    {
      title: 'Day trips & events',
      links: [
        { href: '/en/day-trip/bruges', label: 'Private Bruges day trip' },
        { href: '/en/day-trip/ghent', label: 'Private Ghent day trip' },
        { href: '/en/day-trip/durbuy', label: 'Durbuy & Ardennes day trip' },
        { href: '/en/day-trip/waterloo', label: 'Waterloo battlefield tour' },
        { href: '/services/event-transfers/tomorrowland', label: 'Tomorrowland transfers' },
        { href: '/en/festival/rock-werchter', label: 'Rock Werchter transfers' },
      ],
    },
  ],
  nl: [
    {
      title: 'Luchthavenvervoer',
      links: [
        { href: '/nl/luchthavenvervoer/zaventem', label: 'Luchthavenvervoer Zaventem vanaf 35€' },
        { href: '/nl/luchthavenvervoer/charleroi', label: 'Luchthavenvervoer Charleroi vanaf 65€' },
        { href: '/nl/luchthavenvervoer/gent', label: 'Luchthavenvervoer Gent' },
        { href: '/nl/luchthavenvervoer/antwerpen', label: 'Luchthavenvervoer Antwerpen' },
        { href: '/nl/luchthavenvervoer/leuven', label: 'Luchthavenvervoer Leuven' },
        { href: '/nl/luchthavenvervoer/brugge', label: 'Luchthavenvervoer Brugge' },
      ],
    },
    {
      title: 'Vaste prijzen en lange afstand',
      links: [
        { href: '/nl/prijslijst', label: 'Volledige prijslijst 2026' },
        { href: '/nl/route/brussel-charleroi-gedeelde-shuttle', label: 'Gedeelde shuttle Charleroi vanaf 25€ pp' },
        { href: '/nl/route/charleroi-airport-antwerpen', label: 'Charleroi Airport – Antwerpen vanaf 135€' },
        { href: '/nl/route/brussel-amsterdam', label: 'Brussel – Amsterdam / Schiphol vanaf 250€' },
        { href: '/nl/route/brussel-parijs-cdg', label: 'Brussel – Parijs CDG vanaf 380€' },
        { href: '/nl/route/brussel-rijsel-luchthaven', label: 'Brussel – luchthaven Rijsel vanaf 150€' },
      ],
    },
    {
      title: 'Diensten',
      links: [
        { href: '/nl/services/airport', label: 'Luchthavenvervoer: alle info' },
        { href: '/nl/pricing', label: 'Vaste prijzen' },
        { href: '/nl/services/sightseeing', label: 'Dagtochten met privéchauffeur' },
        { href: '/nl/services/event-transfers/tomorrowland', label: 'Tomorrowland transfers' },
        { href: '/nl/services/corporate', label: 'Zakelijk vervoer' },
        { href: '/nl/faq', label: 'Veelgestelde vragen' },
      ],
    },
  ],
  fr: [
    {
      title: 'Navettes aéroport',
      links: [
        { href: '/fr/navette/aeroport-bruxelles', label: 'Navette aéroport Bruxelles dès 35€' },
        { href: '/fr/navette/aeroport-charleroi', label: 'Taxi aéroport Charleroi dès 65€' },
        { href: '/fr/navette/charleroi-bruxelles', label: 'Navette Bruxelles – Charleroi' },
        { href: '/fr/local/braine-l-alleud', label: 'Taxi Braine-l’Alleud' },
        { href: '/fr/local/waterloo', label: 'Taxi Waterloo' },
        { href: '/fr/local/wavre', label: 'Taxi Wavre' },
      ],
    },
    {
      title: 'Prix fixes et longue distance',
      links: [
        { href: '/fr/tarifs', label: 'Liste complète des tarifs 2026' },
        { href: '/fr/navette/bruxelles-charleroi-navette-partagee', label: 'Navette partagée Charleroi dès 25€ pp' },
        { href: '/fr/navette/charleroi-aeroport-anvers', label: 'Aéroport de Charleroi – Anvers dès 135€' },
        { href: '/fr/navette/bruxelles-paris-cdg', label: 'Bruxelles – Paris CDG dès 380€' },
        { href: '/fr/navette/bruxelles-lille-aeroport', label: 'Bruxelles – aéroport de Lille dès 150€' },
        { href: '/fr/navette/bruxelles-luxembourg', label: 'Bruxelles – Luxembourg dès 260€' },
      ],
    },
    {
      title: 'Services',
      links: [
        { href: '/fr/local/nivelles', label: 'Taxi Nivelles' },
        { href: '/fr/local/louvain-la-neuve', label: 'Taxi Louvain-la-Neuve' },
        { href: '/fr/services/airport', label: 'Navette aéroport : le service' },
        { href: '/fr/pricing', label: 'Prix fixes' },
        { href: '/fr/services/sightseeing', label: 'Excursions privées' },
        { href: '/fr/services/event-transfers/tomorrowland', label: 'Transferts Tomorrowland' },
        { href: '/fr/services/corporate', label: 'Chauffeur d’entreprise' },
      ],
    },
  ],
  el: [
    {
      title: 'Δημοφιλείς μεταφορές',
      links: [
        { href: '/el/greek-driver-brussels', label: 'Έλληνας οδηγός στις Βρυξέλλες' },
        { href: '/el/services/airport', label: 'Μεταφορές αεροδρομίου Zaventem & Charleroi' },
        { href: '/el/pricing', label: 'Σταθερές τιμές' },
        { href: '/el/services/sightseeing', label: 'Εκδρομές σε Μπριζ και Γάνδη' },
        { href: '/el/services/corporate', label: 'Εταιρικές μεταφορές' },
        { href: '/el/faq', label: 'Συχνές ερωτήσεις' },
      ],
    },
  ],
  hr: [
    {
      title: 'Popularni transferi',
      links: [
        { href: '/hr/croatian-driver-brussels', label: 'Privatni vozač za putnike iz Hrvatske' },
        { href: '/hr/services/airport', label: 'Transferi Zaventem i Charleroi' },
        { href: '/hr/pricing', label: 'Fiksne cijene' },
        { href: '/hr/services/sightseeing', label: 'Izleti u Bruges i Gent' },
        { href: '/hr/services/corporate', label: 'Korporativni prijevoz' },
        { href: '/hr/faq', label: 'Česta pitanja' },
      ],
    },
  ],
};

export const HUB_SECTION_TITLE: Record<Locale, { title: string; subtitle: string }> = {
  en: { title: 'Popular transfers, routes and day trips', subtitle: 'Fixed-price pages for the journeys we drive most often. Every page lists distance, travel time, meeting point and what is included.' },
  nl: { title: 'Populaire transfers en routes', subtitle: 'Pagina’s met vaste prijzen voor de ritten die we het vaakst rijden, met afstand, reistijd, ophaalpunt en wat inbegrepen is.' },
  fr: { title: 'Navettes et trajets populaires', subtitle: 'Pages à prix fixe pour les trajets que nous assurons le plus souvent, avec distance, temps de trajet, point de rencontre et prestations incluses.' },
  el: { title: 'Δημοφιλείς μεταφορές και διαδρομές', subtitle: 'Σελίδες με σταθερές τιμές για τις διαδρομές που κάνουμε πιο συχνά, με απόσταση, χρόνο, σημείο συνάντησης και τι περιλαμβάνεται.' },
  hr: { title: 'Popularni transferi i rute', subtitle: 'Stranice s fiksnim cijenama za vožnje koje najčešće obavljamo, s udaljenošću, vremenom vožnje, mjestom sastanka i uključenim uslugama.' },
};
