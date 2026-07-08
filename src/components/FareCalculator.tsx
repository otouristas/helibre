'use client';

import React, { useState, useEffect } from 'react';
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
  const [price, setPrice] = useState<number | string>(0);
  const [note, setNote] = useState<string>('');

  // Dictionary for inline calculator labels
  const ui = {
    en: {
      title: 'Estimate Your Fare',
      private: 'Private Transfer',
      shared: 'Shared Shuttle',
      route: 'Route',
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
      shared: 'Κοινόχρηστο Shuttle',
      route: 'Διαδρομή',
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
      bruSharedNote: 'Τα κοινόχρηστα shuttles εκτελούνται μόνο για τη διαδρομή Βρυξέλλες <-> Αεροδρόμιο Charleroi. Επιλέξτε Ιδιωτική Μεταφορά.',
      sharedNote: 'Οι κοινόχρηστες μεταφορές περιλαμβάνουν την παραλαβή και άλλων επιβατών. Οι χρόνοι αναμονής ελαχιστοποιούνται.'
    },
    hr: {
      title: 'Procijenite svoju cijenu',
      private: 'Privatni transfer',
      shared: 'Zajednički shuttle',
      route: 'Ruta',
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
      bruSharedNote: 'Zajednički shuttle dostupan je samo za rutu Brisel <-> Zračna luka Charleroi. Odaberite Privatni transfer.',
      sharedNote: 'Zajednički prijevoz uključuje preuzimanje drugih putnika. Vrijeme čekanja je svedeno na minimum.'
    }
  }[lang];

  useEffect(() => {
    if (type === 'shared' && passengers > 7) {
      setPassengers(7);
    }
  }, [type, passengers]);

  useEffect(() => {
    if (route === 'other') {
      setPrice(ui.quoteRequired);
      setNote(ui.otherNote);
      return;
    }

    if (type === 'private') {
      if (route === 'crl') {
        const crlPrices: Record<number, number> = { 1: 60, 2: 70, 3: 90, 4: 110, 5: 130, 6: 150, 7: 170, 8: 190 };
        setPrice(crlPrices[passengers] ?? 190);
        setNote(ui.crlNote);
      } else {
        if (passengers === 1) {
          setPrice('35€*');
        } else if (passengers === 2) {
          setPrice('40€*');
        } else if (passengers <= 4) {
          setPrice('45€*');
        } else {
          setPrice('55€*');
        }
        setNote(lang === 'fr' 
          ? '* Tarifs pour la dépose-minute (Drop off Area). Supplément de 5€ pour dépose au P1.' 
          : (lang === 'nl' 
              ? '* Prijzen gelden voor de Drop-off. Toeslag van 5€ voor drop-off bij P1.' 
              : (lang === 'el'
                  ? '* Οι τιμές αφορούν τη ζώνη αποβίβασης (Drop off Area). Επιπλέον χρέωση 5€ για P1.'
                  : (lang === 'hr'
                      ? '* Cijena za Drop-off zonu. Ako želite iskrcaj na P1 točki, naplaćuje se dodatna naknada od 5 €.'
                      : '* Drop-off Area price. If you wish a drop-off at P1 Point, there is an extra charge of 5€.'
                    )
                )
            )
        );
      }
    } else {
      if (route === 'bru') {
        setPrice('N/A');
        setNote(ui.bruSharedNote);
        return;
      }

      if (time === 'day') {
        const dayPrices: Record<number, number> = { 1: 25, 2: 50, 3: 75, 4: 90, 5: 110, 6: 120, 7: 130 };
        setPrice(dayPrices[passengers] || 130);
      } else {
        const nightPrices: Record<number, number> = { 1: 30, 2: 60, 3: 80, 4: 100, 5: 115, 6: 125, 7: 135 };
        setPrice(nightPrices[passengers] || 135);
      }
      setNote(ui.sharedNote);
    }
  }, [type, route, passengers, time, ui.quoteRequired, ui.otherNote, ui.crlNote, ui.bruSharedNote, ui.sharedNote]);

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
          onClick={() => setType('shared')}
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
          <option value="crl">{lang === 'fr' ? 'Bruxelles ↔ Aéroport Charleroi (CRL)' : (lang === 'nl' ? 'Brussel ↔ Luchthaven Charleroi (CRL)' : 'Brussels ↔ Charleroi Airport (CRL)')}</option>
          {type === 'private' && (
            <option value="bru">{lang === 'fr' ? 'Bruxelles ↔ Aéroport Bruxelles (BRU)' : (lang === 'nl' ? 'Brussel ↔ Luchthaven Brussel (BRU)' : 'Brussels ↔ Brussels Airport (BRU)')}</option>
          )}
          <option value="other">{lang === 'fr' ? 'Autres Villes (Sur Mesure)' : (lang === 'nl' ? 'Andere Steden (Aangepaste Route)' : 'Other Cities (Custom Route)')}</option>
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
