'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath, Locale } from '@/config/translations';
import styles from './AIAssistant.module.css';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  cta?: {
    label: string;
    url: string;
    type: 'whatsapp' | 'book' | 'phone';
  }[];
}

export default function AIAssistant() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname) as Locale;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // UI labels based on active language
  const ui = {
    en: {
      launcherTooltip: 'Chat with Jerry AI',
      headerTitle: 'Jerry AI Assistant',
      headerSubtitle: 'Online • Vetted Driver Agent',
      inputPlaceholder: 'Ask about rates, fleet, child seats...',
      suggestTitle: 'Suggested Questions:',
      suggestRates: '✈️ Airport transfer rates?',
      suggestFleet: '🚗 What minivans do you have?',
      suggestSeats: '👶 Are child seats free?',
      suggestLang: '🌍 What languages do you speak?',
      suggestDriver: '👨 Who is the driver?',
      botGreeting: 'Hello! I am Gerasimos\'s AI Assistant. Ask me anything about our private transfers, Mercedes minivans, fixed rates, child seats, or day trips in Belgium!',
      whatsappCta: 'Message Gerasimos on WhatsApp',
      bookCta: 'Book Transfer Online',
      phoneCta: 'Call Chauffeur Direct'
    },
    nl: {
      launcherTooltip: 'Chat met Jerry AI',
      headerTitle: 'Jerry AI Assistent',
      headerSubtitle: 'Online • Ervaren Chauffeur Agent',
      inputPlaceholder: 'Vraag naar tarieven, wagens, kinderzitjes...',
      suggestTitle: 'Voorgestelde Vragen:',
      suggestRates: '✈️ Luchthaven tarieven?',
      suggestFleet: '🚗 Welke minivans zijn er?',
      suggestSeats: '👶 Zijn kinderzitjes gratis?',
      suggestLang: '🌍 Welke talen spreekt u?',
      suggestDriver: '👨 Wie is de chauffeur?',
      botGreeting: 'Hallo! Ik ben de AI-assistent van Gerasimos. Vraag me alles over onze privé-transfers, Mercedes minivans, vaste tarieven, kinderzitjes of dagtochten in België!',
      whatsappCta: 'Stuur Gerasimos een WhatsApp',
      bookCta: 'Online Rit Boeken',
      phoneCta: 'Direct Chauffeur Bellen'
    },
    fr: {
      launcherTooltip: 'Discutez avec Jerry AI',
      headerTitle: 'Assistant Jerry AI',
      headerSubtitle: 'En ligne • Agent Chauffeur Agréé',
      inputPlaceholder: 'Tarifs, flotte, sièges enfants...',
      suggestTitle: 'Suggestions :',
      suggestRates: '✈️ Tarifs navette aéroport ?',
      suggestFleet: '🚗 Quels minivans proposez-vous ?',
      suggestSeats: '👶 Sièges enfants gratuits ?',
      suggestLang: '🌍 Quelles langues parlez-vous ?',
      suggestDriver: '👨 Qui est le chauffeur ?',
      botGreeting: 'Bonjour ! Je suis l\'assistant IA de Gerasimos. Posez-moi vos questions sur nos transferts privés, nos minivans Mercedes, nos prix fixes, nos sièges enfants ou nos excursions en Belgique !',
      whatsappCta: 'Contacter Gerasimos sur WhatsApp',
      bookCta: 'Réserver en ligne',
      phoneCta: 'Appeler le Chauffeur Direct'
    },
    el: {
      launcherTooltip: 'Συνομιλία με Jerry AI',
      headerTitle: 'Jerry AI Βοηθός',
      headerSubtitle: 'Συνδεδεμένος • Εκπρόσωπος Οδηγού',
      inputPlaceholder: 'Ρωτήστε για τιμές, στόλο, παιδικά καθίσματα...',
      suggestTitle: 'Προτεινόμενες Ερωτήσεις:',
      suggestRates: '✈️ Τιμές για αεροδρόμια;',
      suggestFleet: '🚗 Τι minivans διαθέτετε;',
      suggestSeats: '👶 Είναι δωρεάν τα παιδικά καθίσματα;',
      suggestLang: '🌍 Ποιες γλώσσες μιλάτε;',
      suggestDriver: '👨 Ποιος είναι ο οδηγός;',
      botGreeting: 'Γεια σας! Είμαι ο AI βοηθός του Γεράσιμου. Ρωτήστε με ό,τι θέλετε για τις ιδιωτικές μεταφορές, τα Mercedes minivans, τις σταθερές τιμές, τα παιδικά καθίσματα ή τις εκδρομές μας στο Βέλγιο!',
      whatsappCta: 'Μήνυμα στον Γεράσιμο στο WhatsApp',
      bookCta: 'Online Κράτηση Μεταφοράς',
      phoneCta: 'Καλέστε τον Οδηγό Απευθείας'
    }
  }[lang];

  // Helper links
  const links = {
    whatsapp: 'https://wa.me/32472358805',
    book: 'https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM',
    phone: 'tel:+32472358805'
  };

  useEffect(() => {
    // Set initial greeting
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: ui.botGreeting
      }
    ]);

    // Show tooltip reminder shortly after mount
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [lang]);

  useEffect(() => {
    // Auto scroll chat to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Process reply
    setTimeout(() => {
      const reply = generateAIResponse(text.toLowerCase());
      setMessages((prev) => [...prev, reply]);
    }, 6000 * 0.1); // Quick 600ms typing delay
  };

  // Simple client-side NLP matcher to answer questions using site database
  const generateAIResponse = (query: string): Message => {
    const id = Date.now().toString();
    const defaultCtas: Message['cta'] = [
      { label: ui.bookCta, url: links.book, type: 'book' },
      { label: ui.whatsappCta, url: links.whatsapp, type: 'whatsapp' }
    ];

    // 1. Check for rates keywords
    if (
      query.includes('rate') || query.includes('price') || query.includes('fare') || query.includes('cost') ||
      query.includes('tarief') || query.includes('tarif') || query.includes('harga') ||
      query.includes('τιμη') || query.includes('τιμες') || query.includes('κοστος') ||
      query.includes('charleroi') || query.includes('zaventem') || query.includes('bru') || query.includes('crl')
    ) {
      const texts = {
        en: "Our private minivan airport transfers from Brussels are strictly flat-rate with no night or luggage surcharges:\n• **Brussels to Zaventem (BRU):** From 40€\n• **Brussels to Charleroi (CRL):** From 70€\n• **Day Trips (Bruges, Ghent):** From 450€\n\nInfant & child booster seats are provided completely free of charge upon request.",
        nl: "Onze privé minivan luchthaventransfers vanuit Brussel hebben vaste all-in tarieven:\n• **Brussel naar Zaventem (BRU):** Vanaf 40€\n• **Brussel naar Charleroi (CRL):** Vanaf 70€\n• **Dagtochten (Brugge, Gent):** Vanaf 450€\n\nKinderzitjes en Maxi-Cosi's zijn geheel gratis op aanvraag bij uw boeking.",
        fr: "Nos navettes aéroport privées en minivan au départ de Bruxelles sont à tarifs fixes :\n• **Bruxelles vers Zaventem (BRU) :** À partir de 40€\n• **Bruxelles vers Charleroi (CRL) :** À partir de 70€\n• **Excursions (Bruges, Gand) :** À partir de 450€\n\nLes sièges bébés et rehausseurs sont installés gratuitement sur simple demande.",
        el: "Οι ιδιωτικές μεταφορές με minivan από τις Βρυξέλλες προς τα αεροδρόμια είναι με σταθερές τιμές, χωρίς νυχτερινές χρεώσεις:\n• **Βρυξέλλες προς Zaventem (BRU):** Από 40€\n• **Βρυξέλλες προς Charleroi (CRL):** Από 70€\n• **Ημερήσιες Εκδρομές (Μπρυζ, Γάνδη):** Από 450€\n\nΤα παιδικά καθίσματα παρέχονται εντελώς δωρεάν κατόπιν αιτήματος."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    // 2. Check for child safety seats
    if (
      query.includes('child') || query.includes('baby') || query.includes('booster') || query.includes('seat') ||
      query.includes('infant') || query.includes('maxi') || query.includes('kinderzitje') ||
      query.includes('siege') || query.includes('rehausseur') || query.includes('παιδικο') || query.includes('καθισμα')
    ) {
      const texts = {
        en: "Yes, we provide premium baby car seats and child safety booster seats **completely free of charge**! Please specify the number and ages of children when making your online booking so Gerasimos can prepare them in the Mercedes minivan.",
        nl: "Ja! Wij verstrekken babyzitjes en kinderboosterzitjes **geheel gratis**! Geef de leeftijden en het aantal kinderen door bij uw reservering, zodat Gerasimos de Mercedes minivan hierop kan voorbereiden.",
        fr: "Oui ! Nous fournissons des sièges bébés et rehausseurs adaptés **entièrement gratuitement**. Veuillez préciser le nombre et l'âge des enfants lors de votre réservation afin que Gerasimos puisse les installer dans le van Mercedes.",
        el: "Ναι, παρέχουμε εγκεκριμένα παιδικά καθίσματα και booster **εντελώς δωρεάν**! Παρακαλούμε δηλώστε την ηλικία και τον αριθμό των παιδιών κατά την κράτηση, ώστε ο Γεράσιμος να τα προετοιμάσει στο Mercedes minivan."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    // 3. Check for fleet / vehicles
    if (
      query.includes('fleet') || query.includes('car') || query.includes('vehicle') || query.includes('mercedes') ||
      query.includes('vito') || query.includes('v-class') || query.includes('pax') || query.includes('passenger') ||
      query.includes('bag') || query.includes('suitcase') || query.includes('wagenpark') || query.includes('flotte') ||
      query.includes('στολος') || query.includes('οχηματα') || query.includes('αυτοκινητα') || query.includes('βαν')
    ) {
      const texts = {
        en: "We operate a high-quality fleet of professional Mercedes-Benz minivans:\n• **Mercedes-Benz Vito Tourer:** Fits up to 8 passengers and 8 large suitcases. Ideal for families and festival groups.\n• **Mercedes-Benz V-Class:** Fits up to 7 passengers and 7 large suitcases. Features premium face-to-face leather seats, perfect for business meetings, diplomatic transport, and premium tours.\n\nBoth vehicles are fully air-conditioned, clean, and equipped with phone chargers.",
        nl: "Wij rijden met jonge en professionele Mercedes-Benz minivans:\n• **Mercedes-Benz Vito Tourer:** Tot 8 passagiers en 8 grote koffers. Ideaal voor gezinnen en festivalgroepen.\n• **Mercedes-Benz V-Klasse:** Tot 7 passagiers en 7 grote koffers. Uitgerust met luxe lederen stoelen tegenover elkaar, ideaar voor VIP's, diplomaten en zakelijk vervoer.\n\nAl onze voertuigen hebben airco en USB-oplaadpunten.",
        fr: "Nous disposons d'une flotte moderne de minivans Mercedes-Benz :\n• **Mercedes-Benz Vito Tourer :** Jusqu'à 8 passagers et 8 grandes valises. Parfait pour les familles et groupes de festivals.\n• **Mercedes-Benz Classe V :** Jusqu'à 7 passagers et 7 grandes valises. Équipé de sièges en cuir en salon face-à-face, parfait pour les rendez-vous professionnels, délégations et voyages VIP.\n\nTous nos vans sont climatisés, nettoyés et équipés de prises de recharge.",
        el: "Διαθέτουμε έναν εξαιρετικό στόλο από Mercedes-Benz minivans:\n• **Mercedes-Benz Vito Tourer:** Έως 8 επιβάτες και 8 μεγάλες αποσκευές. Ιδανικό για οικογένειες και παρέες.\n• **Mercedes-Benz V-Class:** Έως 7 επιβάτες και 7 μεγάλες αποσκευές. Διαθέτει πολυτελή δερμάτινα καθίσματα συνεδριάσεων (αντιμέτωπα), ιδανικό για VIP, διπλωμάτες και εταιρικές μετακινήσεις.\n\nΚαι τα δύο οχήματα είναι κλιματιζόμενα, καθαρά και διαθέτουν φορτιστές USB."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    // 4. Check for languages
    if (
      query.includes('lang') || query.includes('speak') || query.includes('greek') || query.includes('french') ||
      query.includes('dutch') || query.includes('english') || query.includes('taal') || query.includes('talen') ||
      query.includes('langue') || query.includes('parle') || query.includes('γλωσσα') || query.includes('ελληνικα') || query.includes('γλωσσες')
    ) {
      const texts = {
        en: "Gerasimos (Jerry) and his driving team provide full multilingual chauffeur support. We speak fluent **English, Greek, French, and Dutch**, making your communication during booking and travel completely stress-free.",
        nl: "Gerasimos (Jerry) en zijn team bieden volledige meertalige ondersteuning. Wij spreken vloeiend **Nederlands, Engels, Frans en Grieks**, waardoor de communicatie tijdens uw reis vlekkeloos verloopt.",
        fr: "Gerasimos (Jerry) et son équipe de chauffeurs parlent couramment **Français, Anglais, Néerlandais et Grec** afin de faciliter tous vos échanges et de rendre votre voyage agréable.",
        el: "Ο Γεράσιμος (Jerry) και οι συνεργάτες του παρέχουν πλήρη υποστήριξη σε πολλές γλώσσες. Μιλάμε άπταιστα **Ελληνικά, Αγγλικά, Γαλλικά και Ολλανδικά**, εξασφαλίζοντας άνετη επικοινωνία."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    // 5. Check for driver / Gerasimos info
    if (
      query.includes('driver') || query.includes('gerasimos') || query.includes('jerry') || query.includes('who') ||
      query.includes('experience') || query.includes('military') || query.includes('background') ||
      query.includes('chauffeur') || query.includes('οδηγος') || query.includes('γερασιμος') || query.includes('ποιος')
    ) {
      const texts = {
        en: "Your driver is **Gerasimos (Jerry)**, a licensed private transfer operator based in Braine-l'Alleud. Gerasimos has a disciplined military background, specializing in logistics and defensive driving safety. With **over 30 years of accident-free driving** on Belgian and European roads, you are in exceptionally safe hands.",
        nl: "Uw chauffeur is **Gerasimos (Jerry)**, een erkende privévervoerder gevestigd in Braine-l'Alleud. Gerasimos heeft een gedisciplineerde militaire achtergrond en is gespecialiseerd in defensief rijden. Met **meer dan 30 jaar ongevalvrije wegerijervaring** in België reist u in alle veiligheid.",
        fr: "Votre chauffeur est **Gerasimos (Jerry)**, exploitant de transport privé agréé basé à Braine-l'Alleud. Gerasimos a une solide formation militaire, spécialisé dans la logistique de sécurité et la conduite préventive. Fort de **plus de 30 ans de conduite sans accident**, il vous garantit un trajet serein.",
        el: "Ο οδηγός σας είναι ο **Γεράσιμος (Jerry)**, αδειοδοτημένος οδηγός ιδιωτικών μεταφορών με έδρα το Braine-l'Alleud. Ο Γεράσιμος έχει στρατιωτικό υπόβαθρο, με ειδίκευση στην ασφαλή επιμελητεία και την αμυντική οδήγηση. Με **πάνω από 30 χρόνια εμπειρίας χωρίς ατυχήματα** στους ευρωπαϊκούς δρόμους, είστε σε απόλυτα ασφαλή χέρια."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    // 6. Check for sightseeing / day trips
    if (
      query.includes('sight') || query.includes('tour') || query.includes('trip') || query.includes('bruges') ||
      query.includes('ghent') || query.includes('dinant') || query.includes('durbuy') || query.includes('daytrip') ||
      query.includes('excursion') || query.includes('εκδρομη') || query.includes('εκδρομες') || query.includes('μπρυζ') || query.includes('γανδη')
    ) {
      const texts = {
        en: "We arrange premium private day trips from Brussels starting from 450€, with a dedicated minivan and driver at your disposal for the whole day:\n• **Bruges Tour:** Medieval belfry, Lake of Love, canals.\n• **Ghent Tour:** Gravensteen castle, St. Bavo Cathedral.\n• **Dinant Tour:** Citadel of Dinant, Meuse valley, Saxophone bridge.\n• **Durbuy Tour:** The smallest city in the world nestled in Ardennes.\n\nYou can set your own pace and route stops as you travel.",
        nl: "Wij organiseren luxe privédagtochten vanuit Brussel vanaf 450€, waarbij de minivan en chauffeur de hele dag tot uw beschikking staan:\n• **Brugge Tour:** Middeleeuws belfort, Minnewater, grachten.\n• **Gent Tour:** Gravensteen kasteel, Sint-Baafskathedraal.\n• **Dinant Tour:** Citadel van Dinant, Maasvallei, Saxofoonbrug.\n• **Durbuy Tour:** Het kleinste stadje ter wereld in de Ardennen.\n\nU kunt uw eigen tempo bepalen en tussenstops in overleg plannen.",
        fr: "Nous organisons des excursions privées d'une journée au départ de Bruxelles à partir de 450€, avec véhicule et chauffeur à votre entière disposition :\n• **Circuit Bruges :** Beffroi médiéval, lac d'Amour, canaux.\n• **Circuit Gand :** Château des Comtes, Cathédrale Saint-Bavon.\n• **Circuit Dinant :** Citadelle, vallée de la Meuse, pont des Saxophones.\n• **Circuit Durbuy :** La plus petite ville du monde dans les Ardennes.\n\nVous êtes libre de définir vos escales et votre rythme de visite.",
        el: "Διοργανώνουμε ιδιωτικές ημερήσιες εκδρομές από τις Βρυξέλλες από 450€, με το minivan και τον οδηγό στη διάθεσή σας για όλη τη μέρα:\n• **Εκδρομή στη Μπρυζ:** Μεσαιωνικό καμπαναριό, Λίμνη της Αγάπης, κανάλια.\n• **Εκδρομή στη Γάνδη:** Κάστρο Gravensteen, Καθεδρικός Ναός Αγίου Βονιφατίου.\n• **Εκδρομή στο Ντινάντ:** Ακρόπολη, κοιλάδα του ποταμού Meuse, γέφυρα σαξοφώνων.\n• **Εκδρομή στο Ντυρμπουί:** Η μικρότερη πόλη του κόσμου στις Αρδέννες.\n\nΜπορείτε να ορίσετε τον δικό σας ρυθμό και τις στάσεις σας."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    // 7. Check for payment method / cancellation policy
    if (
      query.includes('cancel') || query.includes('refund') || query.includes('change') || query.includes('policy') ||
      query.includes('pay') || query.includes('card') || query.includes('cash') || query.includes('invoice') ||
      query.includes('ακυρωση') || query.includes('πληρωμη') || query.includes('καρτα') || query.includes('μετρητα')
    ) {
      const texts = {
        en: "• **Cancellation Policy:** 100% free cancellation or booking changes up to 24 hours prior to the transfer.\n• **Payment Methods:** We accept secure online credit/debit card payments, bank transfers, corporate invoices, or cash directly to the driver at the end of the trip.",
        nl: "• **Annuleringsvoorwaarden:** 100% gratis annuleren of wijzigen tot 24 uur voor aanvang.\n• **Betaalwijzen:** Wij accepteren beveiligde online kaartbetalingen, bankoverschrijvingen, facturen of contant geld rechtstreeks aan de chauffeur bij aankomst.",
        fr: "• **Conditions d'annulation :** Modifications et annulations 100% gratuites jusqu'à 24 heures avant la prise en charge.\n• **Moyens de paiement :** Paiement en ligne sécurisé par carte, virement bancaire, facturation d'entreprise ou espèces directement au chauffeur.",
        el: "• **Πολιτική Ακύρωσης:** 100% δωρεάν ακύρωση ή αλλαγές έως και 24 ώρες πριν την παραλαβή.\n• **Τρόποι Πληρωμής:** Δεχόμαστε online πληρωμές με κάρτα, τραπεζικά εμβάσματα, εταιρικά τιμολόγια ή μετρητά απευθείας στον οδηγό στο τέλος της διαδρομής."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    // Default Fallback response
    const fallbackTexts = {
      en: "I'm not sure about that particular detail, but Gerasimos or our dispatch team can answer you directly! Please message us on WhatsApp or call us right now.",
      nl: "Ik ben niet helemaal zeker over dit specifieke detail, maar Gerasimos of onze dispatch kan u direct antwoorden! Stuur ons een WhatsApp of bel ons nu.",
      fr: "Je ne suis pas certain de ce détail, mais Gerasimos ou notre équipe de répartition peuvent vous répondre directement ! Écrivez-nous sur WhatsApp ou appelez-nous.",
      el: "Δεν είμαι απόλυτα σίγουρος για αυτή τη λεπτομέρεια, αλλά ο Γεράσιμος ή η ομάδα μας μπορεί να σας απαντήσει αμέσως! Στείλτε μας μήνυμα στο WhatsApp ή καλέστε μας τώρα."
    }[lang];

    const fallbackCtas: Message['cta'] = [
      { label: ui.whatsappCta, url: links.whatsapp, type: 'whatsapp' },
      { label: ui.phoneCta, url: links.phone, type: 'phone' }
    ];

    return { id, sender: 'bot', text: fallbackTexts, cta: fallbackCtas };
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button 
        className={`${styles.launcher} ${isOpen ? styles.launcherOpen : ''}`} 
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        aria-label="Toggle AI assistant"
      >
        {isOpen ? (
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className={styles.aiBadgeGlow}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className={styles.pulseDot}></span>
          </div>
        )}
      </button>

      {/* Floating Tooltip Alert */}
      {showTooltip && !isOpen && (
        <div className={styles.tooltip} onClick={() => {
          setIsOpen(true);
          setShowTooltip(false);
        }}>
          <span className={styles.tooltipClose} onClick={(e) => {
            e.stopPropagation();
            setShowTooltip(false);
          }}>&times;</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className={styles.tooltipDot}></span>
            <span>{ui.launcherTooltip}</span>
          </div>
        </div>
      )}

      {/* Assistant Chat Panel */}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        {/* Header */}
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className={styles.avatarContainer}>
              <img src="/images/gerasimos-portrait.jpg" alt="Driver Gerasimos" className={styles.avatar} />
              <span className={styles.onlineBadge}></span>
            </div>
            <div>
              <h3 className={styles.headerTitle}>{ui.headerTitle}</h3>
              <p className={styles.headerSubtitle}>{ui.headerSubtitle}</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Message Feed */}
        <div className={styles.feed}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.bubbleWrapper} ${msg.sender === 'user' ? styles.bubbleUserWrapper : styles.bubbleBotWrapper}`}>
              <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.bubbleUser : styles.bubbleBot}`}>
                <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                
                {/* Embedded CTAs */}
                {msg.cta && msg.cta.length > 0 && (
                  <div className={styles.ctaContainer}>
                    {msg.cta.map((c, i) => (
                      <a 
                        key={i} 
                        href={c.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles.ctaBtn} ${styles[`ctaBtn_${c.type}`]}`}
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className={styles.suggestionsBlock}>
          <p className={styles.suggestLabel}>{ui.suggestTitle}</p>
          <div className={styles.suggestionsList}>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestRates)}>{ui.suggestRates}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestFleet)}>{ui.suggestFleet}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestSeats)}>{ui.suggestSeats}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestLang)}>{ui.suggestLang}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestDriver)}>{ui.suggestDriver}</button>
          </div>
        </div>

        {/* Input Form */}
        <form 
          className={styles.inputArea} 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
        >
          <input 
            type="text" 
            className={styles.input} 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={ui.inputPlaceholder}
            aria-label="Message to AI assistant"
          />
          <button type="submit" className={styles.sendBtn} aria-label="Send message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
