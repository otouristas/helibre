'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import { seoPages, SEOPage } from '@/config/seoPages';
import FareCalculator from '@/components/FareCalculator';
import ServiceRequest from '@/components/ServiceRequest';
import styles from './DynamicSEOPage.module.css';

interface DynamicSEOPageProps {
  url: string;
}

export default function DynamicSEOPage({ url }: DynamicSEOPageProps) {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);

  // Find page data
  const page = seoPages.find((p) => p.url === url) || {
    type: 'Service',
    url,
    h1: 'Airport Transfer Route',
    keyword: 'airport transfer',
    title: 'Airport Transfer | Helicro',
    description: 'Private airport transfers in Belgium.',
    priority: 'MEDIUM'
  };

  // UI Translation helper
  const ui = {
    en: {
      home: 'Home',
      related: 'Related Services & Routes:',
      targeted: 'Target Keyword:',
      priority: 'Priority:',
      meetingTitle: 'Meeting Point & Pickup Instructions',
      whyTitle: 'Why Choose Helicro?',
      routeTitle: 'Route & Travel Information',
      areaTitle: 'Premium Chauffeur Services in',
      communeTitle: 'Local Chauffeur Advantages',
      sightTitle: 'Bruges, Ghent & Dinant Sights & Itinerary',
      festTitle: 'Hassle-Free Festival Transfer',
      serviceTitle: 'Service Details'
    },
    nl: {
      home: 'Home',
      related: 'Gerelateerde Diensten & Routes:',
      targeted: 'Doelzoekwoord:',
      priority: 'Prioriteit:',
      meetingTitle: 'Ontmoetingspunt & Ophaalinstructies',
      whyTitle: 'Waarom Kiezen voor Helicro?',
      routeTitle: 'Route- & Reisinformatie',
      areaTitle: 'Premium Chauffeursdiensten in',
      communeTitle: 'Voordelen van een Lokale Chauffeur',
      sightTitle: 'Brugge, Gent & Dinant Bezienswaardigheden',
      festTitle: 'Zorgeloos Festival Vervoer',
      serviceTitle: 'Details van de Dienst'
    },
    fr: {
      home: 'Accueil',
      related: 'Services & Navettes Connexes :',
      targeted: 'Mot-clé Ciblé :',
      priority: 'Priorité :',
      meetingTitle: 'Point de Rencontre & Instructions de Prise en Charge',
      whyTitle: 'Pourquoi Choisir Helicro ?',
      routeTitle: 'Informations de Trajet & Route',
      areaTitle: 'Service de Chauffeur de Standing à',
      communeTitle: 'Avantages d\'un Chauffeur Local',
      sightTitle: 'Visites & Itinéraire Bruges, Gand & Dinant',
      festTitle: 'Transfert Festival Sans Stress',
      serviceTitle: 'Détails du Service'
    },
    el: {
      home: 'ΑΡΧΙΚΗ',
      related: 'ΣΧΕΤΙΚΕΣ ΥΠΗΡΕΣΙΕΣ & ΔΙΑΔΡΟΜΕΣ:',
      targeted: 'ΛΕΞΗ-ΚΛΕΙΔΙ ΣΤΟΧΟΣ:',
      priority: 'ΠΡΟΤΕΡΑΙΟΤΗΤΑ:',
      meetingTitle: 'ΣΗΜΕΙΟ ΣΥΝΑΝΤΗΣΗΣ & ΟΔΗΓΙΕΣ ΠΑΡΑΛΑΒΗΣ',
      whyTitle: 'ΓΙΑΤΙ ΝΑ ΕΠΙΛΕΞΕΤΕ ΤΗ HELICRO;',
      routeTitle: 'ΠΛΗΡΟΦΟΡΙΕΣ ΔΙΑΔΡΟΜΗΣ & ΤΑΞΙΔΙΟΥ',
      areaTitle: 'PREMIUM ΥΠΗΡΕΣΙΕΣ ΣΟΦΕΡ ΣΕ',
      communeTitle: 'ΠΛΕΟΝΕΚΤΗΜΑΤΑ ΤΟΠΙΚΟΥ ΟΔΗΓΟΥ',
      sightTitle: 'ΑΞΙΟΘΕΑΤΑ & ΔΙΑΔΡΟΜΕΣ ΣΕ ΜΠΡΥΖ, ΓΑΝΔΗ & ΝΤΙΝΑΝΤ',
      festTitle: 'ΜΕΤΑΦΟΡΑ ΣΕ ΦΕΣΤΙΒΑΛ ΧΩΡΙΣ ΑΓΧΟΣ',
      serviceTitle: 'ΛΕΠΤΟΜΕΡΕΙΕΣ ΥΠΗΡΕΣΙΑΣ'
    }
  }[lang];

  const localizePath = (path: string) => {
    if (lang === 'en') return path;
    return `/${lang}${path}`;
  };

  // 1. Generate Custom Content based on Page Type, Slugs, and language
  const generateRichContent = (page: SEOPage) => {
    const title = page.h1;
    
    switch (page.type) {
      case 'Airport hub':
        const isCharleroi = url.includes('charleroi');
        
        if (lang === 'nl') {
          const airportName = isCharleroi ? 'Brussels South Charleroi Airport (CRL)' : 'Brussels Zaventem Airport (BRU)';
          const pickupInstructions = isCharleroi
            ? 'Uw chauffeur ontmoet u bij de officiële kiss & ride ophaalzone of in de terminal met een Helicro naambordje. Wij controleren uw vluchttijden live.'
            : 'Uw chauffeur ontmoet u in de aankomsthal ter hoogte van het café met een naambordje. Een snelle en comfortabele overstap naar uw Mercedes minivan.';
          return (
            <>
              <p className="mb-6">
                Welkom bij de luchthavenvervoerdienst van Helicro. Wij bieden comfortabele privé minivan transfers met vaste tarieven van en naar <strong>{airportName}</strong>. 
                Of u nu vroeg in de ochtend vertrekt of laat in de nacht landt, onze 24/7 ophaalservice staat voor u klaar.
              </p>
              <h2 className={styles.sectionHeading}>{ui.meetingTitle}</h2>
              <p className="mb-4">{pickupInstructions}</p>
              <h2 className={styles.sectionHeading}>{ui.whyTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Mercedes wagenpark:</strong> Nette, geklimatiseerde minivans (tot 8 passagiers) met ruime bagagekoffers.</li>
                <li><strong>Vaste flat rates:</strong> Geen surge pricing, geen toeslagen voor bagage of nachttarief.</li>
                <li><strong>Vluchtmonitoring:</strong> We passen de ophaaltijd kosteloos aan op basis van uw werkelijke aankomsttijd.</li>
                <li><strong>Meertalige chauffeurs:</strong> Vloeiend in het Engels, Nederlands, Frans en Grieks.</li>
              </ul>
            </>
          );
        } else if (lang === 'fr') {
          const airportName = isCharleroi ? 'Aéroport de Bruxelles-Sud Charleroi (CRL)' : 'Aéroport de Bruxelles-Zaventem (BRU)';
          const pickupInstructions = isCharleroi
            ? 'Votre chauffeur vous accueillera à la zone de dépose-minute officielle ou dans le terminal, muni d\'un panneau Helicro. Nous suivons l\'état des vols low-cost.'
            : 'Votre chauffeur vous attendra directement dans le Hall des Arrivées devant le café, muni d\'un panneau à votre nom. Sortie rapide vers votre minivan Mercedes.';
          return (
            <>
              <p className="mb-6">
                Bienvenue chez Helicro. Nous proposons des navettes privées et confortables en minivan à prix fixe vers et depuis <strong>{airportName}</strong>. 
                Que votre vol décolle à l&apos;aube ou atterrisse tard dans la nuit, notre chauffeur assure votre trajet 24h/24 et 7j/7.
              </p>
              <h2 className={styles.sectionHeading}>{ui.meetingTitle}</h2>
              <p className="mb-4">{pickupInstructions}</p>
              <h2 className={styles.sectionHeading}>{ui.whyTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Flotte Mercedes :</strong> Minivans modernes climatisés accueillant jusqu&apos;à 8 passagers et de nombreuses valises.</li>
                <li><strong>Tarifs fixes :</strong> Aucun supplément surprise pour les bagages, le trafic ou les trajets nocturnes.</li>
                <li><strong>Suivi des vols gratuit :</strong> Nous réajustons automatiquement l&apos;heure de rendez-vous en cas de retard.</li>
                <li><strong>Chauffeur bilingue :</strong> Assistance cordiale en français, anglais, néerlandais et grec.</li>
              </ul>
            </>
          );
        } else if (lang === 'el') {
          const airportName = isCharleroi ? 'Αεροδρόμιο Brussels South Charleroi (CRL)' : 'Αεροδρόμιο Brussels Zaventem (BRU)';
          const pickupInstructions = isCharleroi
            ? 'Ο οδηγός σας θα σας συναντήσει στην επίσημη ζώνη Kiss & Ride ή εντός του τερματικού σταθμού, κρατώντας μια πινακίδα Helicro. Παρακολουθούμε ζωντανά την πτήση σας για τυχόν καθυστερήσεις.'
            : 'Ο οδηγός σας θα σας συναντήσει απευθείας στην έξοδο της αίθουσας αφίξεων, μπροστά από το καφέ, κρατώντας μια πινακίδα με το όνομά σας. Γρήγορη και άνετη επιβίβαση στο Mercedes minivan.';
          return (
            <>
              <p className="mb-6">
                Καλώς ορίσατε στην υπηρεσία μεταφοράς αεροδρομίου της Helicro. Παρέχουμε απευθείας, ιδιωτικές μετακινήσεις με minivan με σταθερές τιμές από και προς το <strong>{airportName}</strong>. 
                Είτε φτάνετε νωρίς το πρωί είτε landάρετε αργά το βράδυ, οι οδηγοί μας είναι έτοιμοι να σας εξυπηρετήσουν 24/7.
              </p>
              <h2 className={styles.sectionHeading}>{ui.meetingTitle}</h2>
              <p className="mb-4">{pickupInstructions}</p>
              <h2 className={styles.sectionHeading}>{ui.whyTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Στόλος Mercedes:</strong> Καθαρά, άνετα, κλιματιζόμενα minivans (έως 8 επιβάτες) με μεγάλους χώρους αποσκευών.</li>
                <li><strong>Σταθερές τιμές:</strong> Χωρίς αυξήσεις τιμών, χωρίς επιπλέον χρεώσεις αποσκευών ή νυχτερινά τιμολόγια.</li>
                <li><strong>Δωρεάν παρακολούθηση πτήσης:</strong> Ο οδηγός προσαρμόζει αυτόματα την ώρα παραλαβής βάσει της πραγματικής ώρας άφιξης.</li>
                <li><strong>Γλωσσική υποστήριξη:</strong> Οι οδηγοί μας μιλούν άπταιστα Ελληνικά, Αγγλικά, Γαλλικά και Ολλανδικά.</li>
              </ul>
            </>
          );
        } else {
          // English (Default)
          const airportName = isCharleroi ? 'Brussels South Charleroi Airport (CRL)' : 'Brussels Zaventem Airport (BRU)';
          const pickupInstructions = isCharleroi
            ? 'Your chauffeur will meet you at the official passenger pick-up zone or inside the terminal, holding a Helicro sign. We monitor your flight live for budget airline delays.'
            : 'Your chauffeur will meet you directly at the Arrivals Hall exit, right in front of the café, holding a name card. Smooth, fast exit to your Mercedes minivan.';
          return (
            <>
              <p className="mb-6">
                Welcome to Helicro&apos;s premium airport transfer service. We provide direct, fixed-price private minivan rides to and from <strong>{airportName}</strong>. 
                Whether you are arriving on an early morning flight or landing late at night, our 24/7 dispatch ensures your English-speaking chauffeur is waiting for you.
              </p>
              <h2 className={styles.sectionHeading}>{ui.meetingTitle}</h2>
              <p className="mb-4">{pickupInstructions}</p>
              <h2 className={styles.sectionHeading}>{ui.whyTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Mercedes fleet:</strong> Clean, comfortable air-conditioned minivans fitting up to 8 passengers with generous luggage capacity.</li>
                <li><strong>Fixed Prices:</strong> No surge pricing, no luggage surcharges, and no surprise toll fees.</li>
                <li><strong>Free Flight Tracking:</strong> Your driver adjusts the pickup time automatically based on real-time flight data.</li>
                <li><strong>Language Support:</strong> Drivers speak fluent English, Greek, French, and Dutch.</li>
              </ul>
            </>
          );
        }

      case 'Route':
        const origin = title.split(' to ')[0] || 'Brussels';
        const destination = title.split(' to ')[1]?.replace(' airport transfer', '') || 'Zaventem Airport';
        
        if (lang === 'nl') {
          return (
            <>
              <p className="mb-6">
                Betrouwbaar privévervoer nodig van <strong>{origin}</strong> naar <strong>{destination}</strong>? 
                Helicro biedt comfortabel, direct en veilig deur-tot-deur minivan vervoer aan tegen vaste tarieven. 
                Geen stress met treinschema&apos;s, zware koffers of onvoorspelbare taxi-meters.
              </p>
              <h2 className={styles.sectionHeading}>{ui.routeTitle}</h2>
              <p className="mb-4">
                Onze transfers van {origin} naar {destination} zijn geoptimaliseerd voor een vlotte en veilige reis. 
                Uw chauffeur helpt u met uw bagage en haalt u direct voor de deur op.
              </p>
              <ul className={styles.ul}>
                <li><strong>Mercedes minivans:</strong> Stille en comfortabele ritten voor gezinnen en zakelijke groepen.</li>
                <li><strong>Kinderzitjes:</strong> Altijd gratis beschikbaar op aanvraag bij uw boeking.</li>
                <li><strong>Vluchttijden controle:</strong> Wij controleren uw vluchttijden live.</li>
              </ul>
            </>
          );
        } else if (lang === 'fr') {
          return (
            <>
              <p className="mb-6">
                Besoin d&apos;un transfert fiable entre <strong>{origin}</strong> et <strong>{destination}</strong> ? 
                Helicro propose des trajets de porte-à-porte en minivan privé et confortable à prix fixe. 
                Évitex la fatigue des trains ou des compteurs de taxi imprévisibles.
              </p>
              <h2 className={styles.sectionHeading}>{ui.routeTitle}</h2>
              <p className="mb-4">
                Nos navettes reliant {origin} à {destination} sont pensées pour votre confort. 
                Votre chauffeur vous accueille à l&apos;adresse de votre choix et s&apos;occupe du chargement de vos bagages.
              </p>
              <ul className={styles.ul}>
                <li><strong>Minivans Mercedes :</strong> Idéal pour les déplacements de familles, vacances ou voyages d&apos;affaires.</li>
                <li><strong>Sièges enfants :</strong> Rehausseurs et sièges bébés fournis gratuitement sur simple demande.</li>
                <li><strong>Suivi de vol :</strong> Prise en charge adaptée à l&apos;horaire réel de votre avion.</li>
              </ul>
            </>
          );
        } else if (lang === 'el') {
          return (
            <>
              <p className="mb-6">
                Χρειάζεστε μια αξιόπιστη μεταφορά από <strong>{origin}</strong> προς <strong>{destination}</strong>; 
                Η Helicro προσφέρει άνετες, ιδιωτικές μεταφορές από πόρτα σε πόρτα με minivan με σταθερές τιμές. 
                Αποφύγετε το άγχος των δρομολογίων τρένων, των βαριών αποσκευών ή των αστάθμητων χρεώσεων ταξί.
              </p>
              <h2 className={styles.sectionHeading}>{ui.routeTitle}</h2>
              <p className="mb-4">
                Οι μεταφορές μας από {origin} προς {destination} είναι βελτιστοποιημένες για ταχύτητα, ασφάλεια και άνεση. 
                Ο οδηγός σας θα σας παραλάβει απευθείας από την πόρτα σας (ξενοδοχείο, γραφείο ή κατοικία) και θα σας βοηθήσει με τις αποσκευές σας.
              </p>
              <ul className={styles.ul}>
                <li><strong>Mercedes minivans:</strong> Ήσυχες διαδρομές με άφθονο χώρο για οικογένειες ή επαγγελματίες.</li>
                <li><strong>Παιδικά καθίσματα:</strong> Διαθέσιμα δωρεάν κατόπιν αιτήματος κατά την κράτηση.</li>
                <li><strong>Παρακολούθηση πτήσης:</strong> Αυτόματη προσαρμογή βάσει των δρομολογίων των αεροπορικών εταιρειών.</li>
              </ul>
            </>
          );
        } else {
          // English
          return (
            <>
              <p className="mb-6">
                Need a reliable transfer from <strong>{origin}</strong> to <strong>{destination}</strong>? 
                Helicro offers comfortable, fixed-price door-to-door private transfers in our modern minivans. 
                Skip the stress of train timetables, heavy luggage transfers, or unpredictable ride-hailing fees.
              </p>
              <h2 className={styles.sectionHeading}>{ui.routeTitle}</h2>
              <p className="mb-4">
                Our transfers from {origin} to {destination} are optimized for speed, safety, and comfort. 
                Your driver will pick you up directly from your doorstep (hotel, office, or residence) and assist with loading your luggage.
              </p>
              <ul className={styles.ul}>
                <li><strong>Mercedes minivans:</strong> Quiet rides with plenty of room for family groups or business associates.</li>
                <li><strong>Child seats:</strong> Available upon request during booking.</li>
                <li><strong>Flight tracking:</strong> Auto-adjustment to airline schedules.</li>
              </ul>
            </>
          );
        }

      case 'City service area':
        const cityName = title.replace('Private driver and airport transfer in ', '').replace('Chauffeur privé et navette aéroport à ', '');
        
        if (lang === 'nl') {
          return (
            <>
              <p className="mb-6">
                Helicro biedt een professionele chauffeursdienst en luchthavenvervoer aan in de regio <strong>{cityName}</strong>. 
                Wij verbinden {cityName} rechtstreeks met Brussels Airport (BRU), Charleroi (CRL) en Lille (LIL).
              </p>
              <h2 className={styles.sectionHeading}>{ui.areaTitle} {cityName}</h2>
              <p className="mb-4">
                Onze comfortabele minivans staan klaar voor zowel zakelijke reizigers als gezinnen en toeristische groepen. 
                Wij bieden ritten van A naar B, uurtarief-verhuur voor vergaderingen en dagtochten vanuit {cityName}.
              </p>
              <ul className={styles.ul}>
                <li>Deur-tot-deur service in heel {cityName} en omgeving.</li>
                <li>Voordelige vaste tarieven naar alle grote luchthavens.</li>
                <li>Ervaren chauffeurs met een betrouwbare militaire achtergrond.</li>
              </ul>
            </>
          );
        } else if (lang === 'fr') {
          return (
            <>
              <p className="mb-6">
                Helicro propose un service de chauffeur privé et de navette aéroport dédié dans la région de <strong>{cityName}</strong>. 
                Nous relions {cityName} directement aux aéroports de Bruxelles-Zaventem (BRU), Charleroi (CRL) et Lille (LIL).
              </p>
              <h2 className={styles.sectionHeading}>{ui.areaTitle} {cityName}</h2>
              <p className="mb-4">
                Nos minivans de standing répondent aux besoins des professionnels comme des familles. 
                Nous assurons des navettes directes, des mises à disposition à l&apos;heure et des circuits touristiques au départ de {cityName}.
              </p>
              <ul className={styles.ul}>
                <li>Prise en charge de porte-à-porte partout à {cityName}.</li>
                <li>Fares compétitifs fixes vers les aéroports de Belgique.</li>
                <li>Chauffeurs professionnels discrets avec protocole militaire.</li>
              </ul>
            </>
          );
        } else if (lang === 'el') {
          return (
            <>
              <p className="mb-6">
                Η Helicro παρέχει επαγγελματικές υπηρεσίες σοφέρ και μεταφορές αεροδρομίου στην περιοχή <strong>{cityName}</strong>. 
                Συνδέουμε το {cityName} απευθείας με τα αεροδρόμια των Βρυξελλών (BRU), Charleroi (CRL) και Lille (LIL).
              </p>
              <h2 className={styles.sectionHeading}>{ui.areaTitle} {cityName}</h2>
              <p className="mb-4">
                Οι υπηρεσίες minivan μας καλύπτουν εταιρικούς ταξιδιώτες, οικογενειακές διακοπές και τουριστικές ομάδες. 
                Προσφέρουμε απλές μεταφορές, ενοικίαση με την ώρα και ημερήσιες εκδρομές με αφετηρία το {cityName}.
              </p>
              <ul className={styles.ul}>
                <li>Μεταφορά από πόρτα σε πόρτα σε όλο το {cityName} και τις γύρω περιοχές.</li>
                <li>Ανταγωνιστικές σταθερές τιμές προς όλα τα μεγάλα αεροδρόμια.</li>
                <li>Επαγγελματίες οδηγοί με αξιόπιστο στρατιωτικό υπόβαθρο.</li>
              </ul>
            </>
          );
        } else {
          // English
          return (
            <>
              <p className="mb-6">
                Helicro Transport operates a dedicated private chauffeur and airport transfer service in the <strong>{cityName}</strong> service area. 
                We connect {cityName} province directly to Brussels Zaventem (BRU), Brussels South Charleroi (CRL), and Lille (LIL) airports.
              </p>
              <h2 className={styles.sectionHeading}>{ui.areaTitle} {cityName}</h2>
              <p className="mb-4">
                Our professional minivan service serves corporate travelers, holidaying families, and sightseeing groups. 
                We offer point-to-point transfers, hourly hires for meetings, and tailored day trips starting directly from your location in {cityName}.
              </p>
              <ul className={styles.ul}>
                <li>Door-to-door convenience anywhere in {cityName}.</li>
                <li>Competitive flat rates to Brussels and Charleroi airports.</li>
                <li>Professional vetted drivers with military background.</li>
              </ul>
            </>
          );
        }

      case 'Local commune':
        const communeName = title.replace('Taxi et navette aéroport à ', '').replace('Taxi et chauffeur privé à ', '').replace('Taxi en luchthavenvervoer in ', '');
        
        if (lang === 'fr') {
          return (
            <>
              <p className="mb-6">
                Helicro est basé à proximité de <strong>{communeName}</strong>. Nous proposons un service de taxi privé et de navette aéroport haut de gamme 24h/24 et 7j/7 pour tous les résidents de {communeName} et des environs.
              </p>
              <h2 className={styles.sectionHeading}>{ui.communeTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Plein confort :</strong> Mercedes Minivans climatisés, parfaits pour les groupes jusqu&apos;à 8 personnes.</li>
                <li><strong>Chauffeur bilingue :</strong> Service courtois en Anglais, Français, Grec et Néerlandais.</li>
                <li><strong>Tarifs fixes :</strong> Aucun frais de bagages ou supplément surprise.</li>
              </ul>
            </>
          );
        } else if (lang === 'nl') {
          return (
            <>
              <p className="mb-6">
                Helicro is gevestigd nabij <strong>{communeName}</strong>. Wij bieden een premium taxi- en luchthavenshuttleservice 24/7 voor alle inwoners van {communeName} en omliggende gemeenten.
              </p>
              <h2 className={styles.sectionHeading}>{ui.communeTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Optimaal Comfort:</strong> Mercedes minivans met airco, geschikt voor groepen tot 8 personen.</li>
                <li><strong>Bilinguale Chauffeur:</strong> Vriendelijke service in het Nederlands, Engels, Frans en Grieks.</li>
                <li><strong>Vaste Tarieven:</strong> Geen bagagetoeslagen of verrassingen achteraf.</li>
              </ul>
            </>
          );
        } else if (lang === 'el') {
          return (
            <>
              <p className="mb-6">
                Η Helicro εδρεύει κοντά στο <strong>{communeName}</strong>. Παρέχουμε premium υπηρεσίες ταξί και μεταφορές αεροδρομίου 24/7 για όλους τους κατοίκους του {communeName} και των γύρω περιοχών.
              </p>
              <h2 className={styles.sectionHeading}>{ui.communeTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Απόλυτη άνεση:</strong> Κλιματιζόμενα Mercedes Minivans, ιδανικά για ομάδες έως 8 ατόμων.</li>
                <li><strong>Πολύγλωσσος οδηγός:</strong> Φιλική εξυπηρέτηση στα Ελληνικά, Αγγλικά, Γαλλικά και Ολλανδικά.</li>
                <li><strong>Σταθερές τιμές:</strong> Χωρίς κρυφές χρεώσεις ή επιπλέον έξοδα αποσκευών.</li>
              </ul>
            </>
          );
        } else {
          // English
          return (
            <>
              <p className="mb-6">
                Helicro provides premium taxi and private airport shuttle services in the <strong>{communeName}</strong> commune. Operating 24/7, we connect your address directly to Brussels and Charleroi airports.
              </p>
              <h2 className={styles.sectionHeading}>{ui.communeTitle}</h2>
              <ul className={styles.ul}>
                <li><strong>Premium Comfort:</strong> Mercedes Minivans, perfect for groups up to 8 passengers.</li>
                <li><strong>Multilingual Driver:</strong> Courteous service in English, French, Greek and Dutch.</li>
                <li><strong>Fixed Fares:</strong> No luggage fees or surprise surcharges.</li>
              </ul>
            </>
          );
        }

      case 'Sightseeing':
        const tourDestination = title.replace('Private ', '').replace(' day trip from Brussels', '').replace('Visite privée de ', '').replace(' d\'une journée au départ de Bruxelles', '');
        
        if (lang === 'nl') {
          return (
            <>
              <p className="mb-6">
                Ontdek de historische steden, grachten en cultuur van <strong>{tourDestination}</strong> met een comfortabele privé dagtour met chauffeur vanuit Brussel. 
                Met een persoonlijke chauffeur kunt u uw eigen tempo bepalen en onderweg stoppen waar u wilt.
              </p>
              <h2 className={styles.sectionHeading}>{ui.sightTitle}</h2>
              <ul className={styles.ul}>
                <li>Bezoek historische markten, begijnhoven en middeleeuwse belforten.</li>
                <li>Aanbevelingen voor lokale restaurants en verborgen juweeltjes van uw chauffeur.</li>
                <li>Flexibele vertrektijden en stops in overleg.</li>
              </ul>
            </>
          );
        } else if (lang === 'fr') {
          return (
            <>
              <p className="mb-6">
                Découvrez les monuments historiques, les canaux et le charme de <strong>{tourDestination}</strong> lors d&apos;une excursion privée d&apos;une journée au départ de Bruxelles. 
                Avec un chauffeur privé à votre disposition, planifiez vos étapes et profitez d&apos;un circuit sur mesure.
              </p>
              <h2 className={styles.sectionHeading}>{ui.sightTitle}</h2>
              <ul className={styles.ul}>
                <li>Beffrois, places médiévales, balades sur les canaux et quartiers pittoresques.</li>
                <li>Conseils personnalisés de votre chauffeur local pour les restaurants et visites.</li>
                <li>Horaires flexibles et escales selon vos souhaits.</li>
              </ul>
            </>
          );
        } else if (lang === 'el') {
          return (
            <>
              <p className="mb-6">
                Ανακαλύψτε τα ιστορικά αξιοθέατα, τα πολιτιστικά μνημεία και τη γραφική ομορφιά της περιοχής <strong>{tourDestination}</strong> με μια ιδιωτική ημερήσια εκδρομή από τις Βρυξέλλες. 
                Με τον προσωπικό σας οδηγό, μπορείτε να ορίσετε τον δικό σας ρυθμό και να επιλέξετε τις στάσεις σας.
              </p>
              <h2 className={styles.sectionHeading}>{ui.sightTitle}</h2>
              <ul className={styles.ul}>
                <li>Μεσαιωνικές πλατείες, καμπαναριά, κανάλια και γραφικά τοπία.</li>
                <li>Προτάσεις για εστιατόρια και τοπικές γεύσεις από τον οδηγό σας.</li>
                <li>Ευέλικτες ώρες αναχώρησης και προαιρετικές στάσεις κατά τη διαδρομή.</li>
              </ul>
            </>
          );
        } else {
          // English
          return (
            <>
              <p className="mb-6">
                Discover the historic sights, cultural landmarks, and scenic beauty of <strong>{tourDestination}</strong> on a private day tour from Brussels. 
                With a personal driver at your disposal, you can set your own pace, choose your own stops, and enjoy an immersive private tour.
              </p>
              <h2 className={styles.sectionHeading}>{ui.sightTitle}</h2>
              <ul className={styles.ul}>
                <li>Medieval town squares, belfries, and scenic attractions.</li>
                <li>Hand-picked lunch spots and recommendations from your local driver.</li>
                <li>Flexible departure times and optional stops along the route.</li>
              </ul>
            </>
          );
        }

      case 'Festival':
        const festivalName = title.replace(' private transfer from Brussels', '').split(' ')[0] || 'Festival';
        
        if (lang === 'nl') {
          return (
            <>
              <p className="mb-6">
                Op weg naar <strong>{festivalName}</strong>? Boek uw groepsvervoer met Helicro. 
                Wij bieden rechtstreekse privé transfers met minivans vanaf de luchthavens of uw verblijf in Brussel rechtstreeks naar de festivalingang.
              </p>
              <h2 className={styles.sectionHeading}>{ui.festTitle}</h2>
              <ul className={styles.ul}>
                <li>Ruime bagagekoffer voor al uw kampeerspullen.</li>
                <li>Nachtritten afgestemd op de sluitingstijden van het festival.</li>
                <li>Flat-rate tarieven eenvoudig te delen onder vrienden.</li>
              </ul>
            </>
          );
        } else if (lang === 'fr') {
          return (
            <>
              <p className="mb-6">
                Vous allez à <strong>{festivalName}</strong> ? Réservez une navette privée de groupe sans stress avec Helicro. 
                Nous assurons des trajets en minivan depuis les aéroports ou votre hôtel à Bruxelles directement jusqu&apos;à l&apos;entrée du festival.
              </p>
              <h2 className={styles.sectionHeading}>{ui.festTitle}</h2>
              <ul className={styles.ul}>
                <li>Grand espace de rangement pour les tentes et sacs à dos.</li>
                <li>Retours nocturnes coordonnés avec les heures de fin de concert.</li>
                <li>Tarif forfaitaire facilement partageable entre amis.</li>
              </ul>
            </>
          );
        } else if (lang === 'el') {
          return (
            <>
              <p className="mb-6">
                Πηγαίνετε στο <strong>{festivalName}</strong>; Εξασφαλίστε μια άνετη, ιδιωτική μεταφορά με minivan με τη Helicro. 
                Σας μεταφέρουμε απευθείας από τα αεροδρόμια ή το ξενοδοχείο σας στην είσοδο του φεστιβάλ.
              </p>
              <h2 className={styles.sectionHeading}>{ui.festTitle}</h2>
              <ul className={styles.ul}>
                <li>Μεγάλος χώρος αποσκευών για σκηνές, sleeping bags και εξοπλισμό.</li>
                <li>Νυχτερινές επιστροφές συντονισμένες με τις ώρες λήξης του φεστιβάλ.</li>
                <li>Σταθερές τιμές που μοιράζονται εύκολα με την παρέα σας.</li>
              </ul>
            </>
          );
        } else {
          // English
          return (
            <>
              <p className="mb-6">
                Heading to <strong>{festivalName}</strong>? Secure a hassle-free, premium group transfer with Helicro. 
                We offer direct private minivan transfers from Brussels Zaventem Airport, Brussels South Charleroi Airport, 
                or any Brussels address straight to the festival grounds.
              </p>
              <h2 className={styles.sectionHeading}>{ui.festTitle}</h2>
              <ul className={styles.ul}>
                <li>Luggage space for camping gear and backpacks.</li>
                <li>Late-night return slots coordinated with festival exit timings.</li>
                <li>Flat-rate pricing split easily among your friends.</li>
              </ul>
            </>
          );
        }

      default:
        // Verticals and default pages
        if (lang === 'nl') {
          return (
            <>
              <p className="mb-6">
                Helicro Transport biedt professioneel privévervoer aan in heel België. 
                Onze chauffeurs zijn meertalig, discreet en beschikken over comfortabele Mercedes minivans.
              </p>
              <h2 className={styles.sectionHeading}>{ui.serviceTitle}</h2>
              <p className="mb-4">
                Wij verzorgen speciale ritten voor trouwpartijen, ambassades, cruisehavens en ritten met Grieks sprekende chauffeurs.
              </p>
            </>
          );
        } else if (lang === 'fr') {
          return (
            <>
              <p className="mb-6">
                Helicro Transport propose un service de transfert privé professionnel partout en Belgique. 
                Nos chauffeurs certifiés et multilingues pilotent des monospaces Mercedes de standing.
              </p>
              <h2 className={styles.sectionHeading}>{ui.serviceTitle}</h2>
              <p className="mb-4">
                Nous prenons en charge les cérémonies de mariage, les déplacements diplomatiques, les ports de croisière et les navettes en langue grecque.
              </p>
            </>
          );
        } else if (lang === 'el') {
          return (
            <>
              <p className="mb-6">
                Η Helicro Transport παρέχει επαγγελματικές υπηρεσίες ιδιωτικών μεταφορών σε όλο το Βέλγιο. 
                Οι οδηγοί μας είναι έμπειροι, πολύγλωσσοι και προσφέρουν έναν άνετο στόλο Mercedes minivan.
              </p>
              <h2 className={styles.sectionHeading}>{ui.serviceTitle}</h2>
              <p className="mb-4">
                Καλύπτουμε εξειδικευμένες ανάγκες μεταφοράς, όπως διπλωματικές αποστολές, γάμους, μεταφορές από λιμάνια κρουαζιέρας και μεταφορές με Ελληνα οδηγό.
              </p>
            </>
          );
        } else {
          // English
          return (
            <>
              <p className="mb-6">
                Helicro Transport provides professional private transfer services across Belgium. 
                Our drivers are vetted, speak multiple languages, and offer a comfortable fleet of Mercedes minivans.
              </p>
              <h2 className={styles.sectionHeading}>{ui.serviceTitle}</h2>
              <p className="mb-4">
                We cater to specialized transport requests including embassy transport, wedding parties, cruise transfers, 
                and Greek-speaking driver requirements.
              </p>
            </>
          );
        }
    }
  };

  // 2. Generate Sibling Internal Links (Targeting SEO Internal Linking map)
  const getInternalLinks = (page: SEOPage) => {
    // Find sibling pages of the same type and active language
    const pathPrefix = url.substring(0, 4); // '/en/', '/nl/', '/fr/', '/el/'
    const siblings = seoPages
      .filter((p) => p.type === page.type && p.url !== page.url && p.url.startsWith(pathPrefix))
      .slice(0, 4);

    return siblings;
  };

  const siblings = getInternalLinks(page);

  return (
    <div className="section">
      <div className="container">
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <Link href={localizePath('/')}>{ui.home}</Link>
          <span className={styles.separator}>/</span>
          {page.type && (
            <>
              <span className={styles.crumbType}>{page.type}</span>
              <span className={styles.separator}>/</span>
            </>
          )}
          <span className={styles.activeCrumb}>{page.h1}</span>
        </div>

        {/* Dynamic Header */}
        <h1 className={styles.h1}>{page.h1}</h1>
        
        {/* Target Keyword Tag */}
        <div style={{ marginBottom: '32px' }}>
          <span className={styles.keywordTag}>
            🎯 {ui.targeted} <strong>{page.keyword}</strong>
          </span>
          <span className={styles.priorityTag} style={{ 
            backgroundColor: page.priority === 'HIGH' ? '#fee2e2' : '#fef3c7',
            color: page.priority === 'HIGH' ? '#991b1b' : '#92400e'
          }}>
            {ui.priority} {page.priority}
          </span>
        </div>

        {/* Content Body Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.4fr 1fr', 
            gap: '50px',
            alignItems: 'start'
          }}
          className="grid-cols-mobile"
        >
          {/* Main rich copy content */}
          <div className={styles.contentBody}>
            {generateRichContent(page)}

            {/* Internal Linking Block */}
            {siblings.length > 0 && (
              <div className={styles.internalLinksBlock}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>
                  {ui.related}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {siblings.map((sib, i) => (
                    <Link key={i} href={sib.url} className={styles.sibLink}>
                      &rarr; {sib.title || sib.h1}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Calculator Widget CTA Sidebar */}
          <div>
            <div style={{ position: 'sticky', top: '100px' }}>
              <FareCalculator />
              <ServiceRequest />
            </div>
          </div>
        </div>

        {/* Custom CSS overrides for mobile grids */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 992px) {
            .grid-cols-mobile {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}} />
      </div>
    </div>
  );
}
