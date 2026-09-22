import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import GoogleReviews from '@/components/GoogleReviews';
import { DESTINATIONS, FIXED_PRICES, PRICED_ROUTES, SHARED_SHUTTLE, SPA_F1, type DestinationCountry } from '@/config/seoFacts';
import { PRICED_ROUTE_URLS, PRICE_LIST_URLS, SHARED_SHUTTLE_URLS, type PricedLang } from '@/config/pricedRoutePages';
import { breadcrumbSchema, faqSchema, priceCatalogSchema } from '@/lib/schema';
import { LOCALE_NAMES } from '@/lib/seo';
import styles from './SeoLanding.module.css';

const WA = 'https://wa.me/32472358805';
const BOOK = 'https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM';

const T: Record<PricedLang, Record<string, string>> = {
  en: {
    home: 'Home',
    pricing: 'Pricing',
    h1: 'Helicro price list 2026: every fixed price per minivan',
    lead: 'All Helicro prices are fixed per vehicle (up to 8 passengers), VAT included, the same by day and by night, and confirmed in writing before you travel. Luggage, child seats, flight tracking and 60 minutes of free waiting after landing are always included. Prices from Brussels also apply from Brussels Airport (Zaventem).',
    zaventem: 'Brussels to Brussels Airport (Zaventem)',
    zaventemNote: 'Any Brussels address to the Drop-off Area in front of departures. P1 drop-off +5€. Brussels city and the airport are 14 km apart, 20 to 35 minutes outside peak hours.',
    charleroi: 'Brussels to Charleroi Airport, private transfer',
    charleroiNote: 'Any Brussels address to the Kiss & Ride in front of the Charleroi terminal, door to door, 60 km in 55 to 70 minutes. The same price applies in the other direction.',
    shared: 'Brussels to Charleroi Airport, shared shuttle',
    sharedNote: `Seat-in-van shuttle, pickup at your door, maximum ${SHARED_SHUTTLE.maxPassengers} passengers per van. Day 06:00 to 22:00, night 22:00 to 06:00.`,
    belgium: 'Belgium: other destinations',
    france: 'France',
    netherlands: 'The Netherlands',
    germany: 'Germany',
    luxembourg: 'Luxembourg',
    routeNote: 'From Brussels (any address) or Brussels Airport, per vehicle, in either direction. Charleroi Airport rows start at the Charleroi terminal.',
    events: 'Events',
    passengers: 'Passengers',
    price: 'Fixed price',
    route: 'Route',
    p13: '1–3 passengers',
    p48: '4–8 passengers',
    perPerson: 'Per person',
    day: 'Day',
    night: 'Night',
    tomorrowland: 'Brussels to Tomorrowland (Boom)',
    spa: 'Spa-Francorchamps race weekend (F1, WEC, 24 Hours): chauffeur and 8-seat minivan',
    spaPrice: `${SPA_F1.perDay}€ per day, return trips included, usually booked for ${SPA_F1.typicalDays} days`,
    dayTour: 'Private full-day sightseeing tour (Bruges, Ghent, Durbuy, Waterloo), up to 8 passengers',
    dayTourPrice: `from ${FIXED_PRICES.dayTourFrom}€ per vehicle`,
    extras: 'Extras and conditions',
    faq: 'Frequently asked questions',
    cta: 'Book your fixed-price transfer',
    ctaText: 'Send your date, pickup address, destination, flight number and number of passengers on WhatsApp or through the form. You receive the fixed price in writing within minutes.',
    wa: 'WhatsApp a quote request',
    book: 'Book online',
    other: 'This page in other languages',
    seeRoute: 'route page',
  },
  nl: {
    home: 'Home',
    pricing: 'Prijzen',
    h1: 'Prijslijst Helicro 2026: alle vaste prijzen per minivan',
    lead: 'Alle prijzen van Helicro zijn vast per voertuig (tot 8 passagiers), inclusief btw, dezelfde overdag en ’s nachts, en worden schriftelijk bevestigd voor u vertrekt. Bagage, kinderzitjes, vluchtopvolging en 60 minuten gratis wachttijd na de landing zijn altijd inbegrepen. Prijzen vanuit Brussel gelden ook vanaf Brussels Airport (Zaventem).',
    zaventem: 'Brussel naar Brussels Airport (Zaventem)',
    zaventemNote: 'Elk Brussels adres naar de Drop-off zone voor de vertrekhal. P1 drop-off +5€. Brussel en de luchthaven liggen 14 km uit elkaar, 20 tot 35 minuten buiten de spits.',
    charleroi: 'Brussel naar Charleroi Airport, privétransfer',
    charleroiNote: 'Elk Brussels adres naar de Kiss & Ride voor de terminal van Charleroi, van deur tot deur, 60 km in 55 tot 70 minuten. Dezelfde prijs geldt in de andere richting.',
    shared: 'Brussel naar Charleroi Airport, gedeelde shuttle',
    sharedNote: `Shuttle met gedeelde minivan, ophaling aan huis, maximaal ${SHARED_SHUTTLE.maxPassengers} passagiers per wagen. Dag 06:00 tot 22:00, nacht 22:00 tot 06:00.`,
    belgium: 'België: andere bestemmingen',
    france: 'Frankrijk',
    netherlands: 'Nederland',
    germany: 'Duitsland',
    luxembourg: 'Luxemburg',
    routeNote: 'Vanuit Brussel (elk adres) of Brussels Airport, per voertuig, in beide richtingen. De rijen vanaf Charleroi Airport starten aan de terminal van Charleroi.',
    events: 'Evenementen',
    passengers: 'Passagiers',
    price: 'Vaste prijs',
    route: 'Route',
    p13: '1–3 passagiers',
    p48: '4–8 passagiers',
    perPerson: 'Per persoon',
    day: 'Dag',
    night: 'Nacht',
    tomorrowland: 'Brussel naar Tomorrowland (Boom)',
    spa: 'Raceweekend Spa-Francorchamps (F1, WEC, 24 uur): chauffeur en 8-persoons minivan',
    spaPrice: `${SPA_F1.perDay}€ per dag, heen- en terugritten inbegrepen, meestal ${SPA_F1.typicalDays} dagen`,
    dayTour: 'Privé dagtocht (Brugge, Gent, Durbuy, Waterloo), tot 8 passagiers',
    dayTourPrice: `vanaf ${FIXED_PRICES.dayTourFrom}€ per voertuig`,
    extras: 'Extra’s en voorwaarden',
    faq: 'Veelgestelde vragen',
    cta: 'Boek uw rit met vaste prijs',
    ctaText: 'Stuur uw datum, ophaaladres, bestemming, vluchtnummer en aantal passagiers via WhatsApp of het formulier. U ontvangt de vaste prijs binnen enkele minuten op papier.',
    wa: 'Offerte via WhatsApp',
    book: 'Online boeken',
    other: 'Deze pagina in andere talen',
    seeRoute: 'routepagina',
  },
  fr: {
    home: 'Accueil',
    pricing: 'Tarifs',
    h1: 'Tarifs Helicro 2026 : tous les prix fixes par minivan',
    lead: 'Tous les prix Helicro sont fixes par véhicule (jusqu’à 8 passagers), TVA comprise, identiques de jour comme de nuit, et confirmés par écrit avant le départ. Bagages, sièges enfants, suivi de vol et 60 minutes d’attente gratuite après l’atterrissage sont toujours inclus. Les prix depuis Bruxelles s’appliquent aussi depuis Brussels Airport (Zaventem).',
    zaventem: 'Bruxelles vers Brussels Airport (Zaventem)',
    zaventemNote: 'Toute adresse bruxelloise vers la zone Drop-off devant les départs. Dépose P1 +5€. Bruxelles et l’aéroport sont à 14 km, soit 20 à 35 minutes hors heures de pointe.',
    charleroi: 'Bruxelles vers l’aéroport de Charleroi, navette privée',
    charleroiNote: 'Toute adresse bruxelloise vers le Kiss & Ride devant le terminal de Charleroi, porte à porte, 60 km en 55 à 70 minutes. Le même prix s’applique dans l’autre sens.',
    shared: 'Bruxelles vers l’aéroport de Charleroi, navette partagée',
    sharedNote: `Minivan partagé, prise en charge à domicile, ${SHARED_SHUTTLE.maxPassengers} passagers maximum par van. Jour 06h00 à 22h00, nuit 22h00 à 06h00.`,
    belgium: 'Belgique : autres destinations',
    france: 'France',
    netherlands: 'Pays-Bas',
    germany: 'Allemagne',
    luxembourg: 'Luxembourg',
    routeNote: 'Depuis Bruxelles (toute adresse) ou Brussels Airport, par véhicule, dans les deux sens. Les lignes depuis l’aéroport de Charleroi partent du terminal de Charleroi.',
    events: 'Événements',
    passengers: 'Passagers',
    price: 'Prix fixe',
    route: 'Trajet',
    p13: '1–3 passagers',
    p48: '4–8 passagers',
    perPerson: 'Par personne',
    day: 'Jour',
    night: 'Nuit',
    tomorrowland: 'Bruxelles vers Tomorrowland (Boom)',
    spa: 'Week-end de course à Spa-Francorchamps (F1, WEC, 24 Heures) : chauffeur et minivan 8 places',
    spaPrice: `${SPA_F1.perDay}€ par jour, allers-retours compris, généralement ${SPA_F1.typicalDays} jours`,
    dayTour: 'Excursion privée d’une journée (Bruges, Gand, Durbuy, Waterloo), jusqu’à 8 passagers',
    dayTourPrice: `dès ${FIXED_PRICES.dayTourFrom}€ par véhicule`,
    extras: 'Suppléments et conditions',
    faq: 'Questions fréquentes',
    cta: 'Réservez votre trajet à prix fixe',
    ctaText: 'Envoyez votre date, adresse de départ, destination, numéro de vol et nombre de passagers sur WhatsApp ou via le formulaire. Vous recevez le prix fixe par écrit en quelques minutes.',
    wa: 'Devis via WhatsApp',
    book: 'Réserver en ligne',
    other: 'Cette page dans d’autres langues',
    seeRoute: 'page du trajet',
  },
};

const EXTRAS: Record<PricedLang, string[]> = {
  en: [
      `P1 drop-off at Brussels Airport: +${FIXED_PRICES.bruP1Surcharge}€`,
      `Waiting after landing: first ${FIXED_PRICES.waitingFreeMinutes} minutes free, then ${FIXED_PRICES.waitingPerHour}€ per hour`,
      `Extra stop on the route: ${FIXED_PRICES.extraStop}€ per stop`,
      'No night surcharge on private transfers',
      `Free cancellation or changes up to ${FIXED_PRICES.cancellationHours} hours before pickup`,
      'Payment by card, bank transfer, invoice or cash; VAT invoice from Helicro SRL on request',
      'Any other origin or destination in Belgium and neighbouring countries: fixed written quote within minutes',
  ],
  nl: [
      `P1 drop-off op Brussels Airport: +${FIXED_PRICES.bruP1Surcharge}€`,
      `Wachttijd na de landing: eerste ${FIXED_PRICES.waitingFreeMinutes} minuten gratis, daarna ${FIXED_PRICES.waitingPerHour}€ per uur`,
      `Extra stop onderweg: ${FIXED_PRICES.extraStop}€ per stop`,
      'Geen nachttoeslag op privétransfers',
      `Gratis annuleren of wijzigen tot ${FIXED_PRICES.cancellationHours} uur voor de rit`,
      'Betaling per kaart, overschrijving, factuur of cash; btw-factuur van Helicro SRL op aanvraag',
      'Elk ander vertrekpunt of elke andere bestemming in België en de buurlanden: vaste schriftelijke prijs binnen enkele minuten',
  ],
  fr: [
      `Dépose P1 à Brussels Airport : +${FIXED_PRICES.bruP1Surcharge}€`,
      `Attente après l’atterrissage : ${FIXED_PRICES.waitingFreeMinutes} premières minutes gratuites, puis ${FIXED_PRICES.waitingPerHour}€ par heure`,
      `Arrêt supplémentaire en route : ${FIXED_PRICES.extraStop}€ par arrêt`,
      'Pas de supplément de nuit sur les navettes privées',
      `Annulation ou modification gratuite jusqu’à ${FIXED_PRICES.cancellationHours} h avant la prise en charge`,
      'Paiement par carte, virement, facture ou espèces ; facture TVA de Helicro SRL sur demande',
      'Tout autre point de départ ou destination en Belgique et dans les pays voisins : devis fixe écrit en quelques minutes',
  ],
};

const FAQS: Record<PricedLang, { question: string; answer: string }[]> = {
  en: [
    { question: 'Are Helicro prices per person or per vehicle?', answer: 'Per vehicle, except the shared shuttle to Charleroi Airport which is per person. A private minivan price covers everyone on board, up to 8 passengers, with luggage and child seats.' },
    { question: 'Do prices from Brussels also apply from Brussels Airport?', answer: 'Yes. Every route listed from Brussels can start or end at Brussels Airport (Zaventem) for the same fixed price.' },
    { question: 'Is there a night surcharge?', answer: `No. Private transfers cost the same 24 hours a day. Only the shared shuttle has a night rate of ${SHARED_SHUTTLE.perPassengerNight}€ per person between 22:00 and 06:00.` },
    { question: 'What if my city is not in the list?', answer: 'Send your pickup address and destination on WhatsApp and you receive a fixed price per minivan within minutes. Helicro drives anywhere in Belgium and to France, the Netherlands, Germany and Luxembourg.' },
    { question: 'Are tolls included on trips to France, the Netherlands, Germany or Luxembourg?', answer: 'Yes. Cross-border prices include motorway tolls, fuel and the driver’s return; there is nothing to add at the destination.' },
  ],
  nl: [
    { question: 'Zijn de prijzen van Helicro per persoon of per voertuig?', answer: 'Per voertuig, behalve de gedeelde shuttle naar Charleroi Airport, die per persoon is. Een privé minivanprijs geldt voor iedereen aan boord, tot 8 passagiers, inclusief bagage en kinderzitjes.' },
    { question: 'Gelden de prijzen vanuit Brussel ook vanaf Brussels Airport?', answer: 'Ja. Elke route vanuit Brussel kan starten of eindigen op Brussels Airport (Zaventem) voor dezelfde vaste prijs.' },
    { question: 'Is er een nachttoeslag?', answer: `Nee. Privétransfers kosten 24 uur per dag hetzelfde. Enkel de gedeelde shuttle heeft een nachttarief van ${SHARED_SHUTTLE.perPassengerNight}€ per persoon tussen 22u en 6u.` },
    { question: 'Wat als mijn stad niet in de lijst staat?', answer: 'Stuur uw ophaaladres en bestemming via WhatsApp en u krijgt binnen enkele minuten een vaste prijs per minivan. Helicro rijdt overal in België en naar Frankrijk, Nederland, Duitsland en Luxemburg.' },
    { question: 'Is tol inbegrepen op ritten naar Frankrijk, Nederland, Duitsland of Luxemburg?', answer: 'Ja. De grensoverschrijdende prijzen omvatten tol, brandstof en de terugrit van de chauffeur; op de bestemming komt er niets bij.' },
  ],
  fr: [
    { question: 'Les prix Helicro sont-ils par personne ou par véhicule ?', answer: 'Par véhicule, sauf la navette partagée vers l’aéroport de Charleroi, qui est par personne. Le prix d’un minivan privé couvre tous les passagers à bord, jusqu’à 8, bagages et sièges enfants compris.' },
    { question: 'Les prix depuis Bruxelles s’appliquent-ils aussi depuis Brussels Airport ?', answer: 'Oui. Chaque trajet listé depuis Bruxelles peut commencer ou se terminer à Brussels Airport (Zaventem) au même prix fixe.' },
    { question: 'Y a-t-il un supplément de nuit ?', answer: `Non. Les navettes privées coûtent le même prix 24 h/24. Seule la navette partagée a un tarif de nuit de ${SHARED_SHUTTLE.perPassengerNight}€ par personne entre 22h et 6h.` },
    { question: 'Et si ma ville n’est pas dans la liste ?', answer: 'Envoyez votre adresse de départ et votre destination sur WhatsApp et vous recevez un prix fixe par minivan en quelques minutes. Helicro roule partout en Belgique et vers la France, les Pays-Bas, l’Allemagne et le Luxembourg.' },
    { question: 'Les péages sont-ils compris vers la France, les Pays-Bas, l’Allemagne ou le Luxembourg ?', answer: 'Oui. Les prix transfrontaliers comprennent les péages, le carburant et le retour du chauffeur ; rien à ajouter à destination.' },
  ],
};

function Table({ headers, rows, caption }: { headers: string[]; rows: React.ReactNode[][]; caption?: string }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  );
}

const SHARED_DAY = [25, 50, 75, 90, 110, 120, 130];
const SHARED_NIGHT = [30, 60, 80, 100, 115, 125, 135];

export default function PriceList({ lang }: { lang: PricedLang }) {
  const t = T[lang];
  const url = PRICE_LIST_URLS[lang];
  const home = lang === 'en' ? '/' : `/${lang}`;
  const pricing = lang === 'en' ? '/pricing' : `/${lang}/pricing`;
  const F = FIXED_PRICES;

  const routeRows = (from: 'brussels' | 'crl', country: DestinationCountry, exclude: string[] = []) =>
    PRICED_ROUTES.filter((r) => r.from === from && DESTINATIONS[r.to].country === country && !exclude.includes(r.to)).map((r) => {
      const d = DESTINATIONS[r.to];
      const href = PRICED_ROUTE_URLS[r.key]?.[lang];
      const label = `${from === 'crl' ? (lang === 'fr' ? 'Aéroport de Charleroi' : 'Charleroi Airport') : lang === 'en' ? 'Brussels' : lang === 'nl' ? 'Brussel' : 'Bruxelles'} – ${d.name[lang]}`;
      return [href ? <Link key={r.key} href={href}>{label}</Link> : label, `${r.tiers[0].price}€`, `${r.tiers[1].price}€`];
    });

  const schema = [
    priceCatalogSchema(lang),
    faqSchema(FAQS[lang]),
    breadcrumbSchema([
      { name: t.home, url: home },
      { name: t.pricing, url: pricing },
      { name: t.h1, url },
    ]),
  ];

  const otherLangs = (Object.keys(PRICE_LIST_URLS) as PricedLang[]).filter((l) => l !== lang);

  return (
    <div className="section">
      <div className="container">
        <JsonLd data={schema} />
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href={home}>{t.home}</Link>
          <span>/</span>
          <Link href={pricing}>{t.pricing}</Link>
          <span>/</span>
          <span>{t.h1}</span>
        </nav>
        <h1 className={styles.h1}>{t.h1}</h1>
        <div className={styles.wrap}>
          <article className={styles.body}>
            <p className={styles.lead}>{t.lead}</p>

            <h2 className={styles.h2}>{t.zaventem}</h2>
            <p>{t.zaventemNote}</p>
            <Table headers={[t.passengers, t.price]} rows={F.brusselsToBRU.map((r) => [r.pax, `${r.price}€`])} />

            <h2 className={styles.h2}>{t.charleroi}</h2>
            <p>{t.charleroiNote}</p>
            <Table headers={[t.passengers, t.price]} rows={F.brusselsToCRL.map((r) => [r.pax, `${r.price}€`])} />

            <h2 className={styles.h2}>{t.shared}</h2>
            <p>
              {t.sharedNote} <Link href={SHARED_SHUTTLE_URLS[lang]}>{t.seeRoute}</Link>
            </p>
            <Table headers={[t.passengers, t.day, t.night]} rows={SHARED_DAY.map((p, i) => [`${i + 1}`, `${p}€`, `${SHARED_NIGHT[i]}€`])} />

            <h2 className={styles.h2}>{t.belgium}</h2>
            <p>{t.routeNote}</p>
            <Table headers={[t.route, t.p13, t.p48]} rows={[...routeRows('brussels', 'BE', ['tomorrowland']), ...routeRows('crl', 'BE')]} />

            <h2 className={styles.h2}>{t.france}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'FR')} />

            <h2 className={styles.h2}>{t.netherlands}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'NL')} />

            <h2 className={styles.h2}>{t.germany}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'DE')} />

            <h2 className={styles.h2}>{t.luxembourg}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'LU')} />

            <h2 className={styles.h2}>{t.events}</h2>
            <Table
              headers={[t.route, t.p13, t.p48]}
              rows={[
                [<Link key="tomorrowland" href={lang === 'en' ? '/services/event-transfers/tomorrowland' : `/${lang}/services/event-transfers/tomorrowland`}>{t.tomorrowland}</Link>, `${PRICED_ROUTES.find((r) => r.key === 'brussels-tomorrowland')!.tiers[0].price}€`, `${PRICED_ROUTES.find((r) => r.key === 'brussels-tomorrowland')!.tiers[1].price}€`],
              ]}
            />
            <ul className={styles.ul}>
              <li>
                <Link href={lang === 'en' ? '/services/event-transfers/formula-1-spa-francorchamps' : `/${lang}/services/event-transfers/formula-1-spa-francorchamps`}>{t.spa}</Link>: {t.spaPrice}
              </li>
              <li>
                <Link href={lang === 'en' ? '/services/sightseeing' : `/${lang}/services/sightseeing`}>{t.dayTour}</Link>: {t.dayTourPrice}
              </li>
            </ul>

            <h2 className={styles.h2}>{t.extras}</h2>
            <ul className={styles.ul}>
              {EXTRAS[lang].map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>

            <GoogleReviews lang={lang} variant="strip" limit={4} />

            <h2 className={styles.h2}>{t.faq}</h2>
            {FAQS[lang].map((f, i) => (
              <details className={styles.faq} key={i} open={i < 2}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}

            <div className={styles.cta}>
              <h2>{t.cta}</h2>
              <p>{t.ctaText}</p>
              <div className={styles.ctaBtns}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                  {t.wa}
                </a>
                <a href={BOOK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtnAlt}>
                  {t.book}
                </a>
              </div>
            </div>

            <p className={styles.langs}>
              {t.other}:{' '}
              {otherLangs.map((l) => (
                <Link href={PRICE_LIST_URLS[l]} key={l} hrefLang={l}>
                  {LOCALE_NAMES[l]}
                </Link>
              ))}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
