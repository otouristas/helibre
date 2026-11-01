'use client';

import { FIXED_PRICES } from '@/config/seoFacts';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import styles from './FareCalculator.module.css';

type TransferType = 'private' | 'shared';
type RouteType = 'bru' | 'crl' | 'other';
type TimeType = 'day' | 'night';

export default function FareCalculator() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);

  const [type, setType] = useState<TransferType>('private');
  const [route, setRoute] = useState<RouteType>('crl');
  const [passengers, setPassengers] = useState<number>(2);
  const [time, setTime] = useState<TimeType>('day');

  // Dictionary for inline calculator labels
  const ui = {
    en: {
      title: 'Estimate Your Fare',
      private: 'Private Transfer',
      shared: 'Shared Shuttle',
      route: 'Route',
      routeCrl: 'Brussels ↔ Charleroi Airport (CRL)',
      routeBru: 'Brussels ↔ Brussels Airport (BRU)',
      routeOther: 'Other Cities (Custom Route)',
      timeOfDay: 'Time of Day',
      day: 'Day (06:00 - 22:00)',
      night: 'Night (22:00 - 06:00)',
      passengers: 'Number of Passengers',
      pax: 'Pax',
      paxMax: 'Pax max',
      estimatedPrice: 'Estimated Price',
      btn: 'Request Ride Online',
      quoteRequired: 'Quote Required',
      otherNote: 'Prices for intercity and other custom routes are tailormade. Click below to request a direct quote.',
      crlNote: '*Estimated price. Fares can vary +/- 10€ depending on pickup location, luggage count, and pickup time.',
      bruSharedNote: 'Shared shuttles are only operated for Brussels <-> Charleroi Airport route. Please select Private transfer.',
      sharedNote: 'Shared shuttles entail picking up other passengers. Waiting times are minimized.'
    },
    nl: {
      title: 'Bereken Uw Ritprijs',
      private: 'Privé Transfer',
      shared: 'Gedeelde Shuttle',
      route: 'Route',
      routeCrl: 'Brussel ↔ Luchthaven Charleroi (CRL)',
      routeBru: 'Brussel ↔ Luchthaven Brussel (BRU)',
      routeOther: 'Andere steden (aangepaste route)',
      timeOfDay: 'Tijdstip',
      day: 'Overdag (06:00 - 22:00)',
      night: 'Nacht (22:00 - 06:00)',
      passengers: 'Aantal Passagiers',
      pax: 'Pers.',
      paxMax: 'Pers. max',
      estimatedPrice: 'Geschatte Prijs',
      btn: 'Vraag Rit Online Aan',
      quoteRequired: 'Offerte Vereist',
      otherNote: 'Tarieven voor intercity en andere aangepaste routes zijn op maat gemaakt. Klik hieronder om een offerte aan te vragen.',
      crlNote: '*Geschatte prijs. Tarieven kunnen +/- 10€ variëren afhankelijk van ophaallocatie, hoeveelheid bagage en ophaaltijd.',
      bruSharedNote: 'Gedeelde shuttles rijden alleen op de route Brussel <-> Charleroi. Selecteer een Privé transfer.',
      sharedNote: 'Gedeelde shuttles houden in dat u de wagen deelt met andere passagiers. Wachttijden worden geminimaliseerd.'
    },
    fr: {
      title: 'Estimez Votre Tarif',
      private: 'Transfert Privé',
      shared: 'Navette Partagée',
      route: 'Trajet',
      routeCrl: 'Bruxelles ↔ Aéroport Charleroi (CRL)',
      routeBru: 'Bruxelles ↔ Aéroport Bruxelles (BRU)',
      routeOther: 'Autres Villes (Sur Mesure)',
      timeOfDay: 'Période de la Journée',
      day: 'Jour (06:00 - 22:00)',
      night: 'Nuit (22:00 - 06:00)',
      passengers: 'Nombre de Passagers',
      pax: 'Pax',
      paxMax: 'Pax max',
      estimatedPrice: 'Tarif Estimé',
      btn: 'Demander le Trajet en Ligne',
      quoteRequired: 'Devis Requis',
      otherNote: 'Les tarifs pour les trajets interurbains et personnalisés sont sur mesure. Cliquez ci-dessous pour demander un devis.',
      crlNote: '*Tarif estimé. Les prix peuvent varier de +/- 10€ selon le lieu de prise en charge, les bagages et l\'heure.',
      bruSharedNote: 'Les navettes partagées fonctionnent uniquement pour la ligne Bruxelles <-> Charleroi. Veuillez choisir un transfert Privé.',
      sharedNote: 'Les navettes partagées impliquent la prise en charge d\'autres passagers. Les temps d\'attente sont minimisés.'
    },
    el: {
      title: 'Υπολογισμός Κόστους',
      private: 'Ιδιωτική Μεταφορά',
      shared: 'Κοινόχρηστη μεταφορά',
      route: 'Διαδρομή',
      routeCrl: 'Βρυξέλλες ↔ Αεροδρόμιο Charleroi (CRL)',
      routeBru: 'Βρυξέλλες ↔ Αεροδρόμιο Βρυξελλών (BRU)',
      routeOther: 'Άλλες πόλεις (προσαρμοσμένη διαδρομή)',
      timeOfDay: 'Ωρα της Ημέρας',
      day: 'Ημέρα (06:00 - 22:00)',
      night: 'Νύχτα (22:00 - 06:00)',
      passengers: 'Αριθμός Επιβατών',
      pax: 'Ατομα',
      paxMax: 'Ατομα μέγιστο',
      estimatedPrice: 'Εκτιμώμενη Τιμή',
      btn: 'Αίτηση Κράτησης Online',
      quoteRequired: 'Απαιτείται Προσφορά',
      otherNote: 'Οι τιμές για διαδρομές εκτός πόλης ή εξατομικευμένες είναι προσαρμοσμένες. Κάντε κλικ παρακάτω για προσφορά.',
      crlNote: '*Εκτιμώμενη τιμή. Οι τιμές ενδέχεται να διαφέρουν κατά +/- 10€ ανάλογα με την τοποθεσία παραλαβής, τις αποσκευές και την ώρα.',
      bruSharedNote: 'Οι κοινόχρηστες μεταφορές εκτελούνται μόνο για τη διαδρομή Βρυξέλλες <-> Αεροδρόμιο Charleroi. Επιλέξτε Ιδιωτική Μεταφορά.',
      sharedNote: 'Οι κοινόχρηστες μεταφορές περιλαμβάνουν την παραλαβή και άλλων επιβατών. Οι χρόνοι αναμονής ελαχιστοποιούνται.'
    },
    hr: {
      title: 'Procijenite svoju cijenu',
      private: 'Privatni transfer',
      shared: 'Zajednički prijevoz',
      route: 'Ruta',
      routeCrl: 'Bruxelles ↔ Zračna luka Charleroi (CRL)',
      routeBru: 'Bruxelles ↔ Zračna luka Bruxelles (BRU)',
      routeOther: 'Drugi gradovi (ruta po mjeri)',
      timeOfDay: 'Doba dana',
      day: 'Dan (06:00 - 22:00)',
      night: 'Noć (22:00 - 06:00)',
      passengers: 'Broj putnika',
      pax: 'pax',
      paxMax: 'pax maks',
      estimatedPrice: 'Procijenjena cijena',
      btn: 'Zatražite vožnju online',
      quoteRequired: 'Potrebna ponuda',
      otherNote: 'Cijene za međugradske i druge prilagođene rute izrađuju se po mjeri. Kliknite ispod kako biste zatražili izravnu ponudu.',
      crlNote: '*Procijenjena cijena. Cijene mogu varirati +/- 10 € ovisno o lokaciji preuzimanja, količini prtljage i vremenu preuzimanja.',
      bruSharedNote: 'Zajednički prijevoz dostupan je samo za rutu Bruxelles <-> Zračna luka Charleroi. Odaberite Privatni transfer.',
      sharedNote: 'Zajednički prijevoz uključuje preuzimanje drugih putnika. Vrijeme čekanja je svedeno na minimum.'
    }
  }[lang];

  const { price, note } = (() => {
    if (route === 'other') return { price: ui.quoteRequired, note: ui.otherNote };
    if (type === 'private') {
      if (route === 'crl') {
        const tier = FIXED_PRICES.brusselsToCRL.find((tier) => Number(tier.pax) === passengers)!;
        return { price: tier.price, note: ui.crlNote };
      }
      const tier = FIXED_PRICES.brusselsToBRU[passengers <= 3 ? 0 : 1];
      const rangeNote = {
        en: 'Published price range; exact fare confirmed at booking. Drop-off Area. Extra 5€ for P1.',
        nl: 'Gepubliceerde prijsklasse; exacte prijs bevestigd bij boeking. Drop-off zone. Toeslag 5€ voor P1.',
        fr: 'Fourchette publiée ; prix exact confirmé à la réservation. Dépose-minute. Supplément de 5€ pour le P1.',
        el: 'Δημοσιευμένο εύρος τιμών· η ακριβής τιμή επιβεβαιώνεται στην κράτηση. Ζώνη Drop-off. Επιπλέον 5€ για P1.',
        hr: 'Objavljeni raspon cijena; točna cijena potvrđuje se pri rezervaciji. Drop-off zona. Dodatnih 5€ za P1.',
      }[lang];
      return { price: `${tier.price}–${tier.maxPrice}€*`, note: rangeNote };
    }
    if (route === 'bru') return { price: 'N/A', note: ui.bruSharedNote };
    // Shared group tariffs are intentionally unchanged, including the night rates.
    const dayPrices: Record<number, number> = { 1: 25, 2: 50, 3: 75, 4: 90, 5: 110, 6: 120, 7: 130 };
    const nightPrices: Record<number, number> = { 1: 30, 2: 60, 3: 80, 4: 100, 5: 115, 6: 125, 7: 135 };
    return { price: (time === 'day' ? dayPrices : nightPrices)[passengers], note: ui.sharedNote };
  })();

  const getFormUrl = () => {
    if (type === 'private' && route === 'crl') {
      return 'https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM';
    }
    if (type === 'private' && route === 'bru') {
      return 'https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM';
    }
    return 'https://forms.clickup.com/9015129384/f/8cnfx98-215/HYNDJD9OSRESGIPWVM';
  };

  return (
    <div className={styles.calculator}>
      <h3 className={styles.title}>{ui.title}</h3>
      
      {/* Transfer Type Select */}
      <div className={styles.typeContainer}>
        <button 
          className={`${styles.typeBtn} ${type === 'private' ? styles.typeBtnActive : ''}`}
          onClick={() => setType('private')}
        >
          {ui.private}
        </button>
        <button 
          className={`${styles.typeBtn} ${type === 'shared' ? styles.typeBtnActive : ''}`}
          onClick={() => { setType('shared'); setPassengers((count) => Math.min(count, 7)); }}
        >
          {ui.shared}
        </button>
      </div>

      {/* Route Select */}
      <div className={styles.formGroup}>
        <label className={styles.label}>{ui.route}</label>
        <select 
          className={styles.select}
          value={route}
          onChange={(e) => setRoute(e.target.value as RouteType)}
        >
          <option value="crl">{ui.routeCrl}</option>
          {type === 'private' && (
            <option value="bru">{ui.routeBru}</option>
          )}
          <option value="other">{ui.routeOther}</option>
        </select>
      </div>

      {/* Time of Day (Shared Shuttle Only) */}
      {type === 'shared' && route === 'crl' && (
        <div className={styles.formGroup}>
          <label className={styles.label}>{ui.timeOfDay}</label>
          <select 
            className={styles.select}
            value={time}
            onChange={(e) => setTime(e.target.value as TimeType)}
          >
            <option value="day">{ui.day}</option>
            <option value="night">{ui.night}</option>
          </select>
        </div>
      )}

      {/* Passenger Count */}
      {route !== 'other' && !(type === 'shared' && route === 'bru') && (
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {ui.passengers}: <span style={{ color: 'var(--primary-light)', fontWeight: 'bold' }}>{passengers}</span>
          </label>
          <input 
            type="range" 
            min="1" 
            max={type === 'shared' ? "7" : "8"} 
            className="w-full"
            style={{ accentColor: 'var(--primary)' }}
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1 {ui.pax}</span>
            <span>{type === 'shared' ? `7 ${ui.paxMax}` : `8 ${ui.paxMax}`}</span>
          </div>
        </div>
      )}

      {/* Result Display */}
      <div className={styles.resultCard}>
        <div className={styles.priceLabel}>{ui.estimatedPrice}</div>
        <div className={styles.price}>
          {typeof price === 'number' ? `${price}€` : price}
        </div>
        <div className={styles.priceDetails}>{note}</div>
        
        <a 
          href={getFormUrl()} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.actionBtn}
        >
          {ui.btn}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}
