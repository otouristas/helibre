'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import VimeoPlayer from '@/components/VimeoPlayer';
import GoogleReviews from '@/components/GoogleReviews';
import HubLinks from '@/components/HubLinks';
import FareCalculator from '@/components/FareCalculator';
import styles from './home.module.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function HomeClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const ui = {
    en: {
      heroTitle: 'Premium Private Transfers & Minivans',
      heroSubtitle: 'Fixed prices from Brussels to Zaventem (from 35€* Drop-off Area) & Charleroi (from 65€). Licensed Belgian chauffeur service with 30+ years of professional experience.',
      badgeTrust: 'TRUSTED BELGIAN OPERATOR',
      whyTitle: 'Why travel with Helicro?',
      whyP1: "Helicro Transport is a fully licensed private passenger transfer operator based in Braine-l'Alleud, servicing Brussels, Wallonia, and Flanders.",
      whyP2: 'Run by Gerasimos, a driver with over 30 years of experience and a disciplined military background, we ensure safety, absolute punctuality, and high comfort for your family or corporate group.',
      f1Title: '✓ Vetted Safety',
      f1Desc: 'Military background driver, safe, defensive driving style.',
      f2Title: '✓ Multi-lingual',
      f2Desc: 'Fluent in English, Greek, and French.',
      f3Title: '✓ Fixed Pricing',
      f3Desc: 'Flat-rate quotes. No hidden luggage or traffic fees.',
      f4Title: '✓ Free Flight Tracking',
      f4Desc: 'Real-time arrivals monitoring to adjust pick-up times.',
      ratesTitle: 'Popular Flat Rates',
      ratesSubtitle: 'Check out our fixed flat rates for our spacious Ford Minivan up to 8 passengers. Perfect for families or business groups.',
      rate1Title: 'Brussels to Zaventem (BRU)',
      rate1Price: 'From 35€*',
      rate1Note: '* Prices are from Drop-off Area. Extra 5€ for P1 drop-off. Up to 8 passengers, free child booster seats, flight tracking.',
      rate2Title: 'Brussels to Charleroi (CRL)',
      rate2Price: 'From 65€',
      rate2Note: '1: 65€ • 2: 75€ • 3: 90€ • 4: 110€ • 5: 120€ • 6: 130€ • 7: 140€ • 8: 160€. Flat rate, door-to-door.',
      rate3Title: 'Private Sightseeing Tour',
      rate3Price: 'From 380€',
      rate3Note: 'Full day tours to Bruges or Ghent with personal driver.',
      meetBadge: 'MEET GERASIMOS',
      meetTitle: 'Your Professional Chauffeur',
      meetP1: 'Helicro is not a faceless booking aggregator or taxi template site. Every transfer is managed or executed by Gerasimos, an experienced Greek-Belgian driver.',
      meetP2: 'With a background in safety logistics and decades of driving on Belgian roads, Gerasimos offers a high level of professional protocol, helping with luggage, child safety seating, and recommending local landmarks and attractions along your route.',
      btnCallBe: '🇧🇪 Call Belgium',
      btnCallGr: '🇬🇷 Call Greece',
      btnReadStory: 'Read Our Story',
      overviewTitle: 'Services Overview',
      overviewSubtitle: 'We cover a broad range of passenger transportation and logistics needs across Belgium.',
      srv1Title: 'Airport Transfers',
      srv1Desc: 'Door-to-door minivans to Zaventem, Charleroi, and Lille airports.',
      srv2Title: 'Sightseeing Tours',
      srv2Desc: 'Explore Bruges, Ghent or any other city of your preference in a private comfortable vehicle.',
      srv3Title: 'Corporate Shuttles',
      srv3Desc: 'Executive transport for diplomatic staff and business groups.',
      srv4Title: 'Parcel Delivery',
      srv4Desc: 'Fast, secure local and cross-border package and document logistics.',
      testTitle: 'What Our Customers Say',
      testSubtitle: 'Read verified experiences from our passengers and why they recommend Helicro for travel in Belgium.',
      faqTitle: 'Frequently Asked Questions',
      btnBookOnline: 'Book Online',
      btnWhatsAppBe: '🇧🇪 WhatsApp Belgium',
      btnWhatsAppGr: '🇬🇷 WhatsApp Greece'
    },
    nl: {
      heroTitle: 'Premium Privé-transfers & Minivans',
      heroSubtitle: 'Vaste prijzen van Brussel naar Zaventem (vanaf 35€* Drop-off zone) & Charleroi (vanaf 65€). Gelicenseerde Belgische chauffeursdienst met meer dan 30 jaar professionele ervaring.',
      badgeTrust: 'VERTROUWDE BELGISCHE OPERATOR',
      whyTitle: 'Waarom reizen met Helicro?',
      whyP1: "Helicro Transport is een volledig gelicenseerde exploitant van privé-personenvervoer gevestigd in Braine-l'Alleud, die Brussel, Wallonië en Vlaanderen bedient.",
      whyP2: 'Geleid door Gerasimos, een chauffeur met meer dan 30 jaar ervaring en een gedisciplineerde militaire achtergrond, garanderen we veiligheid, absolute stiptheid en hoog comfort voor uw gezin of zakelijke groep.',
      f1Title: '✓ Geverifieerde Veiligheid',
      f1Desc: 'Chauffeur met militaire achtergrond, veilige, defensieve rijstijl.',
      f2Title: '✓ Meertalig',
      f2Desc: 'Vloeiend in Engels, Grieks en Frans.',
      f3Title: '✓ Vaste Prijzen',
      f3Desc: 'Vaste offertes. Geen verborgen bagage- of filekosten.',
      f4Title: '✓ Gratis Vlucht Volgen',
      f4Desc: 'Realtime monitoring van aankomsten om ophaaltijden aan te passen.',
      ratesTitle: 'Populaire Vaste Tarieven',
      ratesSubtitle: 'Bekijk onze vaste tarieven voor onze ruime Ford Minivan tot 8 passagiers. Ideaal voor gezinnen of zakelijke groepen.',
      rate1Title: 'Brussel naar Zaventem (BRU)',
      rate1Price: 'Vanaf 35€*',
      rate1Note: '* Prijzen zijn vanaf de Drop-off zone. Extra 5€ voor P1 drop-off. Tot 8 passagiers, gratis kinderzitjes, vlucht tracking.',
      rate2Title: 'Brussel naar Charleroi (CRL)',
      rate2Price: 'Vanaf 65€',
      rate2Note: '1: 65€ • 2: 75€ • 3: 90€ • 4: 110€ • 5: 120€ • 6: 130€ • 7: 140€ • 8: 160€. Vast tarief, van deur tot deur.',
      rate3Title: 'Privé Sightseeing Tour',
      rate3Price: 'Vanaf 380€',
      rate3Note: 'Dagtochten naar Brugge of Gent met privéchauffeur.',
      meetBadge: 'ONTMOET GERASIMOS',
      meetTitle: 'Uw Professionele Chauffeur',
      meetP1: 'Helicro is geen anonieme boekingsaggregator of standaard taxisite. Elke transfer wordt beheerd of uitgevoerd door Gerasimos, een ervaren Grieks-Belgische chauffeur.',
      meetP2: 'Met een achtergrond in veiligheidslogistiek en decennia rijervaring op de Belgische wegen, biedt Gerasimos een hoog niveau van professioneel protocol. Hij helpt met bagage, kinderzitjes en adviseert lokale bezienswaardigheden langs uw route.',
      btnCallBe: '🇧🇪 Bel België',
      btnCallGr: '🇬🇷 Bel Griekenland',
      btnReadStory: 'Lees Ons Verhaal',
      overviewTitle: 'Dienstenoverzicht',
      overviewSubtitle: 'Wij dekken een breed scala aan behoeften op het gebied van personenvervoer en logistiek in heel België.',
      srv1Title: 'Luchthavenvervoer',
      srv1Desc: 'Deur-tot-deur minivans naar de luchthavens van Zaventem, Charleroi en Rijsel.',
      srv2Title: 'Sightseeing Tours',
      srv2Desc: 'Verken Brugge, Gent of een andere stad van uw voorkeur in een comfortabel privévoertuig.',
      srv3Title: 'Zakelijk Vervoer',
      srv3Desc: 'Directievervoer voor diplomatiek personeel en zakelijke groepen.',
      srv4Title: 'Pakketbezorging',
      srv4Desc: 'Snelle, veilige lokale en grensoverschrijdende pakket- en documentlogistiek.',
      testTitle: 'Wat Onze Klanten Zeggen',
      testSubtitle: 'Lees geverifieerde ervaringen van onze passagiers en waarom zij Helicro aanbevelen voor reizen in België.',
      faqTitle: 'Veelgestelde Vragen',
      btnBookOnline: 'Online Boeken',
      btnWhatsAppBe: '🇧🇪 WhatsApp België',
      btnWhatsAppGr: '🇬🇷 WhatsApp Griekenland'
    },
    fr: {
      heroTitle: 'Transferts Privés & Minivans Premium',
      heroSubtitle: "Tarifs fixes de Bruxelles à Zaventem (dès 35€* Dépose-minute) & Charleroi (dès 65€). Service de chauffeur belge agréé avec plus de 30 ans d'expérience.",
      badgeTrust: 'OPÉRATEUR BELGE DE CONFIANCE',
      whyTitle: 'Pourquoi voyager avec Helicro ?',
      whyP1: "Helicro Transport is un opérateur de transport privé de personnes entièrement agréé, basé à Braine-l'Alleud, desservant Bruxelles, la Wallonie et la Flandre.",
      whyP2: "Géré par Gerasimos, un chauffeur ayant plus de 30 ans d'expérience et une formation militaire rigoureuse, nous garantissons la sécurité, une ponctualité absolue et un grand confort pour votre famille ou groupe professionnel.",
      f1Title: '✓ Sécurité Validée',
      f1Desc: 'Chauffeur issu du milieu militaire, conduite sûre et défensive.',
      f2Title: '✓ Multilingue',
      f2Desc: 'Parle couramment anglais, grec et français.',
      f3Title: '✓ Tarifs Fixes',
      f3Desc: 'Tarifs forfaitaires sans frais cachés de bagages ou de trafic.',
      f4Title: '✓ Suivi de Vol Gratuit',
      f4Desc: "Suivi des vols en temps réel pour ajuster l'heure de prise en charge.",
      ratesTitle: 'Tarifs Fixes Populaires',
      ratesSubtitle: "Découvrez nos tarifs forfaitaires fixes pour notre spacieux monospace Ford pouvant accueillir jusqu'à 8 passagers. Idéal pour les familles ou groupes d'affaires.",
      rate1Title: 'Bruxelles à Zaventem (BRU)',
      rate1Price: 'Dès 35€*',
      rate1Note: "* Les tarifs s'entendent à partir du Dépose-minute. Supplément de 5€ pour le parking P1. Jusqu'à 8 passagers, sièges enfants gratuits, suivi de vol.",
      rate2Title: 'Bruxelles à Charleroi (CRL)',
      rate2Price: 'Dès 65€',
      rate2Note: '1 : 65€ • 2 : 75€ • 3 : 90€ • 4 : 110€ • 5 : 120€ • 6 : 130€ • 7 : 140€ • 8 : 160€. Tarif fixe, porte-à-porte.',
      rate3Title: 'Excursion Privée',
      rate3Price: 'Dès 380€',
      rate3Note: "Excursions d'une journée complète à Bruges ou Gand avec chauffeur privé.",
      meetBadge: 'RENCONTREZ GERASIMOS',
      meetTitle: 'Votre Chauffeur Professionnel',
      meetP1: "Helicro n'est pas un agrégateur de réservation anonyme ni un modèle de site de taxi classique. Chaque transfert est géré ou effectué par Gerasimos, un chauffeur gréco-belge expérimenté.",
      meetP2: "Fort d'une expérience en logistique de sécurité et de décennies de conduite sur les routes belges, Gerasimos offre un protocole professionnel de haut niveau, vous aidant avec vos bagages, installant les sièges enfants et vous conseillant les lieux d'intérêt sur votre trajet.",
      btnCallBe: '🇧🇪 Appeler la Belgique',
      btnCallGr: '🇬🇷 Appeler la Grèce',
      btnReadStory: 'Notre Histoire',
      overviewTitle: 'Aperçu des Services',
      overviewSubtitle: 'Nous couvrons un large éventail de besoins en transport de passagers et logistique dans toute la Belgique.',
      srv1Title: 'Transferts Aéroport',
      srv1Desc: 'Minivans porte-à-porte vers les aéroports de Zaventem, Charleroi et Lille.',
      srv2Title: 'Visites Touristiques',
      srv2Desc: "Explorez Bruges, Gand ou toute autre ville de votre choix à bord d'un véhicule privé confortable.",
      srv3Title: "Navettes d'Entreprise",
      srv3Desc: "Transport exécutif pour le personnel diplomatique et les groupes d'affaires.",
      srv4Title: 'Livraison de Colis',
      srv4Desc: 'Logistique rapide et sécurisée de colis et documents, au niveau local et transfrontalier.',
      testTitle: 'Ce que Disent nos Clients',
      testSubtitle: 'Découvrez les témoignages vérifiés de nos passagers et pourquoi ils recommandent Helicro en Belgique.',
      faqTitle: 'Foire Aux Questions',
      btnBookOnline: 'Réserver en ligne',
      btnWhatsAppBe: '🇧🇪 WhatsApp Belgique',
      btnWhatsAppGr: '🇬🇷 WhatsApp Grèce'
    },
    el: {
      heroTitle: 'Premium Ιδιωτικές Μεταφορές & Minivans',
      heroSubtitle: 'Σταθερές τιμές από Βρυξέλλες προς Zaventem (από 35€* Drop-off Area) & Charleroi (από 65€). Πιστοποιημένη βελγική υπηρεσία σοφέρ με 30+ χρόνια επαγγελματικής εμπειρίας.',
      badgeTrust: 'ΑΞΙΟΠΙΣΤΟΣ ΒΕΛΓΟΣ ΜΕΤΑΦΟΡΕΑΣ',
      whyTitle: 'Γιατί να ταξιδέψετε με την Helicro;',
      whyP1: "Η Helicro Transport είναι ένας πλήρως αδειοδοτημένος φορέας ιδιωτικών μεταφορών με έδρα το Braine-l'Alleud, που εξυπηρετεί τις Βρυξέλλες, τη Βαλλονία και τη Φλάνδρα.",
      whyP2: 'Με επικεφαλής τον Γεράσιμο, έναν οδηγό με πάνω από 30 χρόνια εμπειρίας και πειθαρχημένο στρατιωτικό υπόβαθρο, εξασφαλίζουμε ασφάλεια, απόλυτη συνέπεια και υψηλή άνεση για την οικογένεια ή την επιχειρηματική σας ομάδα.',
      f1Title: '✓ Εγγυημένη Ασφάλεια',
      f1Desc: 'Οδηγός με στρατιωτικό υπόβαθρο, ασφαλής και αμυντικός τρόπος οδήγησης.',
      f2Title: '✓ Πολύγλωσσος',
      f2Desc: 'Άπταιστα Αγγλικά, Ελληνικά και Γαλλικά.',
      f3Title: '✓ Σταθερές Τιμές',
      f3Desc: "Κατ' αποκοπή τιμές. Χωρίς κρυφές χρεώσεις αποσκευών ή κίνησης.",
      f4Title: '✓ Δωρεάν Παρακολούθηση Πτήσης',
      f4Desc: 'Παρακολούθηση αφίξεων σε πραγματικό χρόνο για προσαρμογή της ώρας παραλαβής.',
      ratesTitle: 'Δημοφιλείς Σταθερές Τιμές',
      ratesSubtitle: 'Δείτε τις σταθερές τιμές μας για το ευρύχωρο Ford Minivan έως 8 επιβατών. Ιδανικό για οικογένειες ή επαγγελματικές ομάδες.',
      rate1Title: 'Βρυξέλλες προς Zaventem (BRU)',
      rate1Price: 'Από 35€*',
      rate1Note: '* Οι τιμές αφορούν το Drop-off Area. Επιπλέον 5€ για το P1 drop-off. Έως 8 επιβάτες, δωρεάν παιδικά καθίσματα, παρακολούθηση πτήσης.',
      rate2Title: 'Βρυξέλλες προς Charleroi (CRL)',
      rate2Price: 'Από 65€',
      rate2Note: '1: 65€ • 2: 75€ • 3: 90€ • 4: 110€ • 5: 120€ • 6: 130€ • 7: 140€ • 8: 160€. Σταθερή τιμή, πόρτα-πόρτα.',
      rate3Title: 'Ιδιωτική Περιήγηση',
      rate3Price: 'Από 380€',
      rate3Note: 'Ολοήμερες εκδρομές στη Μπριζ ή τη Γάνδη με προσωπικό οδηγό.',
      meetBadge: 'ΓΝΩΡΙΣΤΕ ΤΟΝ ΓΕΡΑΣΙΜΟ',
      meetTitle: 'Ο Επαγγελματίας Σοφέρ σας',
      meetP1: 'Η Helicro δεν είναι μια απρόσωπη πλατφόρμα κρατήσεων ή ένας ιστότοπος-πρότυπο ταξί. Κάθε μεταφορά οργανώνεται ή εκτελείται από τον Γεράσιμο, έναν έμπειρο Ελληνοβέλγο οδηγό.',
      meetP2: 'Με υπόβαθρο στην εφοδιαστική ασφάλεια και δεκαετίες οδήγησης στους βελγικούς δρόμους, ο Γεράσιμος προσφέρει υψηλού επιπέδου επαγγελματισμό, βοηθώντας με τις αποσκευές, τα παιδικά καθίσματα ασφαλείας και προτείνοντας τοπικά αξιοθέατα στη διαδρομή σας.',
      btnCallBe: '🇧🇪 Καλέστε Βέλγιο',
      btnCallGr: '🇬🇷 Καλέστε Ελλάδα',
      btnReadStory: 'Η Ιστορία μας',
      overviewTitle: 'Επισκόπηση Υπηρεσιών',
      overviewSubtitle: 'Καλύπτουμε ένα ευρύ φάσμα αναγκών μεταφοράς επιβατών και logistics σε όλο το Βέλγιο.',
      srv1Title: 'Μεταφορές Αεροδρομίου',
      srv1Desc: 'Minivans πόρτα-πόρτα προς τα αεροδρόμια Zaventem, Charleroi και Λίλλης.',
      srv2Title: 'Περιηγήσεις & Εκδρομές',
      srv2Desc: 'Εξερευνήστε τη Μπριζ, τη Γάνδη ή οποιαδήποτε άλλη πόλη της προτίμησής σας με ένα άνετο ιδιωτικό όχημα.',
      srv3Title: 'Εταιρικές Μετακινήσεις',
      srv3Desc: 'Μεταφορά στελεχών για διπλωματικό προσωπικό και επιχειρηματικές ομάδες.',
      srv4Title: 'Παράδοση Δεμάτων',
      srv4Desc: 'Γρήγορη, ασφαλής τοπική και διασυνοριακή μεταφορά πακέτων και εγγράφων.',
      testTitle: 'Τι Λένε οι Πελάτες μας',
      testSubtitle: 'Διαβάστε επιβεβαιωμένες εμπειρίες από τους επιβάτες μας και γιατί προτείνουν τη Helicro για ταξίδια στο Βέλγιο.',
      faqTitle: 'Συχνές Ερωτήσεις',
      btnBookOnline: 'Κράτηση Online',
      btnWhatsAppBe: '🇧🇪 WhatsApp Βέλγιο',
      btnWhatsAppGr: '🇬🇷 WhatsApp Ελλάδα'
    },
    hr: {
      heroTitle: 'Premium privatni transferi i kombi vozila',
      heroSubtitle: 'Fiksne cijene od Bruxellesa do Zaventema (od 35€* Drop-off zona) i Charleroia (od 65€). Licencirana belgijska usluga vozača s više od 30 godina profesionalnog iskustva.',
      badgeTrust: 'POUZDANI BELGIJSKI OPERATER',
      whyTitle: 'Zašto putovati s Helicroom?',
      whyP1: "Helicro Transport je potpuno licencirani privatni operater za prijevoz putnika sa sjedištem u Braine-l'Alleudu, koji pruža usluge u Bruxellesu, Valoniji i Flandriji.",
      whyP2: 'Vođen Gerasimosom, vozačem s više od 30 godina iskustva i discipliniranim vojnim podrijetlom, osiguravamo sigurnost, apsolutnu točnost i visoku udobnost za vašu obitelj ili poslovnu grupu.',
      f1Title: '✓ Provjerena sigurnost',
      f1Desc: 'Vozač s vojnim podrijetlom, siguran i defenzivan stil vožnje.',
      f2Title: '✓ Višejezičnost',
      f2Desc: 'Tečno govori engleski, grčki i francuski.',
      f3Title: '✓ Fiksne cijene',
      f3Desc: 'Paušalne ponude. Bez skrivenih naknada za prtljagu ili prometne gužve.',
      f4Title: '✓ Besplatno praćenje leta',
      f4Desc: 'Praćenje dolazaka u stvarnom vremenu za prilagodbu vremena preuzimanja.',
      ratesTitle: 'Popularne fiksne cijene',
      ratesSubtitle: 'Provjerite naše fiksne cijene za naš prostrani Ford kombi za do 8 putnika. Savršeno za obitelji ili poslovne grupe.',
      rate1Title: 'Bruxelles do Zaventem (BRU)',
      rate1Price: 'Od 35€*',
      rate1Note: '* Cijene su iz Drop-off zone. Dodatnih 5€ za P1 drop-off. Do 8 putnika, besplatne dječje sjedalice, praćenje leta.',
      rate2Title: 'Bruxelles do Charleroi (CRL)',
      rate2Price: 'Od 65€',
      rate2Note: '1: 65€ • 2: 75€ • 3: 90€ • 4: 110€ • 5: 120€ • 6: 130€ • 7: 140€ • 8: 160€. Fiksna cijena, od vrata do vrata.',
      rate3Title: 'Privatna turistička tura',
      rate3Price: 'Od 380€',
      rate3Note: 'Cjelodnevni izleti u Brugge ili Ghent s osobnim vozačem.',
      meetBadge: 'UPOZNAJTE GERASIMOSA',
      meetTitle: 'Vaš profesionalni vozač',
      meetP1: 'Helicro nije bezlični posrednik za rezervacije ili predložak taksi web stranice. Svakim transferom upravlja ili ga osobno obavlja Gerasimos, iskusni grčko-belgijski vozač.',
      meetP2: 'S iskustvom u sigurnosnoj logistici i desetljećima vožnje belgijskim cestama, Gerasimos nudi visoku razinu profesionalnog protokola, pomaže s prtljagom, postavlja dječje sigurnosne sjedalice te preporučuje lokalne znamenitosti duž vaše rute.',
      btnCallBe: '🇧🇪 Nazovite Belgiju',
      btnCallGr: '🇬🇷 Nazovite Grčku',
      btnReadStory: 'Pročitajte našu priču',
      overviewTitle: 'Pregled usluga',
      overviewSubtitle: 'Pokrivamo širok raspon potreba za prijevozom putnika i logistike diljem Belgije.',
      srv1Title: 'Transferi do zračne luke',
      srv1Desc: 'Kombi prijevoz od vrata do vrata do zračnih luka Zaventem, Charleroi i Lille.',
      srv2Title: 'Turistički obilasci',
      srv2Desc: 'Istražite Brugge, Ghent ili bilo koji drugi grad po vašem izboru u udobnom privatnom vozilu.',
      srv3Title: 'Korporativni prijevoz',
      srv3Desc: 'Izvršni prijevoz za diplomatsko osoblje i poslovne grupe.',
      srv4Title: 'Dostava paketa',
      srv4Desc: 'Brza, sigurna lokalna i prekogranična logistika paketa i dokumenata.',
      testTitle: 'Što kažu naši klijenti',
      testSubtitle: 'Pročitajte provjerena iskustva naših putnika i saznajte zašto preporučuju Helicro za putovanja u Belgiji.',
      faqTitle: 'Često postavljana pitanja',
      btnBookOnline: 'Rezervirajte online',
      btnWhatsAppBe: '🇧🇪 WhatsApp Belgija',
      btnWhatsAppGr: '🇬🇷 WhatsApp Grčka'
    }
  }[lang];

  const localizedFaqs: FAQItem[] = [
    {
      question: {
        en: 'How do I book an airport transfer or driver service?',
        nl: 'Hoe boek ik een luchthaventransfer of chauffeursdienst?',
        fr: 'Comment réserver un transfert aéroport ou un service de chauffeur ?',
        el: 'Πώς μπορώ να κλείσω μια μεταφορά αεροδρομίου ή υπηρεσία οδηγού;',
        hr: 'Kako mogu rezervirati transfer do zračne luke ili uslugu vozača?'
      }[lang],
      answer: {
        en: (
          <span>
            You can request a ride using our <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Online Booking Form</a>, 
            chat with us on <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp Belgium</a> or <a href="https://wa.me/306974581706" target="_blank" rel="noopener noreferrer">WhatsApp Greece</a>, 
            or call us at <a href="tel:+32472358805">+32 472 35 88 05</a> / <a href="tel:+306974581706">+30 697 458 1706</a>.
          </span>
        ),
        nl: (
          <span>
            U kunt een rit aanvragen via ons <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Online Boekingsformulier</a>, 
            met ons chatten via <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp België</a> of <a href="https://wa.me/306974581706" target="_blank" rel="noopener noreferrer">WhatsApp Griekenland</a>, 
            of ons bellen op <a href="tel:+32472358805">+32 472 35 88 05</a> / <a href="tel:+306974581706">+30 697 458 1706</a>.
          </span>
        ),
        fr: (
          <span>
            Vous pouvez demander un trajet en utilisant notre <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Formulaire de réservation en ligne</a>, 
            discuter avec nous sur <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp Belgique</a> ou <a href="https://wa.me/306974581706" target="_blank" rel="noopener noreferrer">WhatsApp Grèce</a>, 
            ou nous appeler au <a href="tel:+32472358805">+32 472 35 88 05</a> / <a href="tel:+306974581706">+30 697 458 1706</a>.
          </span>
        ),
        el: (
          <span>
            Μπορείτε να ζητήσετε μια διαδρομή χρησιμοποιώντας την <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Online Φόρμα Κράτησης</a>, 
            να συνομιλήσετε μαζί μας στο <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp Βελγίου</a> ή <a href="https://wa.me/306974581706" target="_blank" rel="noopener noreferrer">WhatsApp Ελλάδας</a>, 
            ή να μας καλέσετε στο <a href="tel:+32472358805">+32 472 35 88 05</a> / <a href="tel:+306974581706">+30 697 458 1706</a>.
          </span>
        ),
        hr: (
          <span>
            Možete zatražiti vožnju pomoću našeg <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Online obrasca za rezervaciju</a>, 
            razgovarati s nama na <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp Belgija</a> ili <a href="https://wa.me/306974581706" target="_blank" rel="noopener noreferrer">WhatsApp Grčka</a>, 
            ili nas nazvati na <a href="tel:+32472358805">+32 472 35 88 05</a> / <a href="tel:+306974581706">+30 697 458 1706</a>.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'What is your cancellation and booking change policy?',
        nl: 'Wat is jullie annulerings- en wijzigingsbeleid?',
        fr: 'Quelle is votre politique d’annulation et de modification ?',
        el: 'Ποια είναι η πολιτική ακύρωσης και αλλαγής κράτησης;',
        hr: 'Kakva su vaša pravila o otkazivanju i izmjenama rezervacija?'
      }[lang],
      answer: {
        en: (
          <span>
            Changes and cancellations are 100% free of charge up to 24 hours prior to your scheduled pickup time. 
            For last-minute emergency adjustments within 24 hours, please call us directly.
          </span>
        ),
        nl: (
          <span>
            Wijzigingen en annuleringen zijn 100% gratis tot 24 uur voor uw geplande ophaaltijd. 
            Voor last-minute noodwijzigingen binnen 24 uur kunt u ons rechtstreeks bellen.
          </span>
        ),
        fr: (
          <span>
            Les modifications et annulations sont 100% gratuites jusqu’à 24 heures avant l’heure de prise en charge prévue. 
            Pour les ajustements d’urgence de dernière minute dans les 24 heures, veuillez nous appeler directement.
          </span>
        ),
        el: (
          <span>
            Οι αλλαγές και οι ακυρώσεις είναι 100% δωρεάν έως και 24 ώρες πριν από την προγραμματισμένη ώρα παραλαβής. 
            Για έκτακτες αλλαγές της τελευταίας στιγμής εντός 24 ωρών, καλέστε μας απευθείας.
          </span>
        ),
        hr: (
          <span>
            Izmjene i otkazivanja su 100% besplatni do 24 sata prije zakazanog vremena preuzimanja. 
            Za hitne izmjene u zadnji tren unutar 24 sata, molimo nazovite nas izravno.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'What happens if my incoming flight is delayed?',
        nl: 'Wat gebeurt er als mijn inkomende vlucht vertraagd is?',
        fr: 'Que se passe-t-il si mon vol d’arrivée est retardé ?',
        el: 'Τι συμβαίνει εάν η πτήση μου καθυστερήσει;',
        hr: 'Što se događa ako moj dolazni let kasni?'
      }[lang],
      answer: {
        en: (
          <span>
            We track your flight in real time using flight numbers. If your flight is delayed or arriving early, 
            your driver will automatically adjust the pickup time. There are no waiting time surcharges for delayed flights.
          </span>
        ),
        nl: (
          <span>
            We volgen uw vlucht in realtime met behulp van vluchtnummers. Als uw vlucht vertraagd is of vroeg aankomt, 
            past uw chauffeur automatisch de ophaaltijd aan. Er zijn geen toeslagen voor wachttijd bij vertraagde vluchten.
          </span>
        ),
        fr: (
          <span>
            Nous suivons votre vol en temps réel à l’aide des numéros de vol. Si votre vol est retardé ou avance, 
            votre chauffeur adaptera automatiquement l’heure de prise en charge. Il n’y a pas de supplément d’attente pour les vols retardés.
          </span>
        ),
        el: (
          <span>
            Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο χρησιμοποιώντας τον αριθμό πτήσης. Εάν η πτήση σας καθυστερήσει ή φτάσει νωρίτερα, 
            ο οδηγός σας θα προσαρμόσει αυτόματα την ώρα παραλαβής. Δεν υπάρχουν χρεώσεις αναμονής για καθυστερημένες πτήσεις.
          </span>
        ),
        hr: (
          <span>
            Pratimo vaš let u stvarnom vremenu pomoću broja leta. Ako vaš let kasni ili stigne ranije, 
            vaš će vozač automatski prilagoditi vrijeme preuzimanja. Nema nadoplata za čekanje kod kašnjenja leta.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'Where will the driver meet me at Brussels Zaventem and Charleroi airports?',
        nl: 'Waar ontmoet de chauffeur mij op de luchthavens van Brussel Zaventem en Charleroi?',
        fr: 'Où le chauffeur m’attendra-t-il aux aéroports de Bruxelles Zaventem et de Charleroi ?',
        el: 'Πού θα με συναντήσει ο οδηγός στα αεροδρόμια Zaventem και Charleroi των Βρυξελλών;',
        hr: 'Gdje će me vozač dočekati u zračnim lukama Bruxelles Zaventem i Charleroi?'
      }[lang],
      answer: {
        en: (
          <span>
            At Brussels Zaventem (BRU), your driver will meet you in the Arrivals Hall (by the café outlet) holding a sign with your name. 
            At Brussels South Charleroi (CRL), the driver will meet you at the official passenger drop-off/pick-up zone.
          </span>
        ),
        nl: (
          <span>
            Op Brussel Zaventem (BRU) ontmoet uw chauffeur u in de aankomsthal (bij het café) met een bordje met uw naam. 
            Op Brussel Zuid Charleroi (CRL) ontmoet de chauffeur u op de officiële drop-off/pick-up zone voor passagiers.
          </span>
        ),
        fr: (
          <span>
            À Bruxelles Zaventem (BRU), votre chauffeur vous accueillera dans le hall des arrivées (près du café) muni d’un panneau à votre nom. 
            À Bruxelles Sud Charleroi (CRL), le chauffeur vous attendra à la zone officielle de dépose-minute/reprise des passagers.
          </span>
        ),
        el: (
          <span>
            Στο αεροδρόμιο Βρυξελλών Zaventem (BRU), ο οδηγός σας θα σας συναντήσει στην αίθουσα αφίξεων (κοντά στο καφέ) κρατώντας μια πινακίδα με το όνομά σας. 
            Στο αεροδρόμιο Charleroi (CRL), ο οδηγός θα σας συναντήσει στην επίσημη ζώνη αποβίβασης/παραλαβής επιβατών.
          </span>
        ),
        hr: (
          <span>
            U zračnoj luci Bruxelles Zaventem (BRU), vaš će vas vozač dočekati u dvorani za dolaske (kod kafića) držeći natpis s vašim imenom. 
            U zračnoj luci Bruxelles South Charleroi (CRL), vozač će vas dočekati na službenoj zoni za iskrcaj/ukrcaj putnika.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'Do you charge extra for night transfers or early morning pickups?',
        nl: 'Rekenen jullie extra kosten voor nachttransfers of vroege ochtendritten?',
        fr: 'Facturez-vous des suppléments pour les transferts de nuit ou de bon matin ?',
        el: 'Υπάρχει επιπλέον χρέωση για νυχτερινές μεταφορές ή νωρίς το πρωί;',
        hr: 'Naplaćujete li dodatno za noćne transfere ili ranojutarnja preuzimanja?'
      }[lang],
      answer: {
        en: (
          <span>
            For private minivan bookings, our quoted prices are flat rates and do not change. 
            Shared shuttle transfers have separate day and night tariffs as detailed in our price lists.
          </span>
        ),
        nl: (
          <span>
            Voor privé minivan boekingen zijn onze vermelde prijzen vaste tarieven en veranderen ze niet. 
            Gedeelde shuttletransfers hebben aparte dag- en nachttarieven, zoals gedetailleerd in onze prijslijsten.
          </span>
        ),
        fr: (
          <span>
            Pour les réservations de minivan privé, nos prix indiqués sont des tarifs fixes et ne changent pas. 
            Les transferts en navette partagée ont des tarifs de jour et de nuit distincts, comme détaillé dans nos listes de prix.
          </span>
        ),
        el: (
          <span>
            Για κρατήσεις ιδιωτικών minivan, οι τιμές μας είναι σταθερές και δεν αλλάζουν. 
            Οι κοινόχρηστες μεταφορές (shared shuttle) έχουν ξεχωριστά ημερήσια και νυχτερινά τιμολόγια, όπως περιγράφεται στους τιμοκαταλόγους μας.
          </span>
        ),
        hr: (
          <span>
            Za rezervacije privatnih kombija, navedene cijene su fiksne i ne mijenjaju se. 
            Zajednički prijevozi (shuttle) imaju zasebne dnevne i noćne tarife, kako je detaljno opisano u našem cjeniku.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'Are booster and infant child safety seats available?',
        nl: 'Zijn er booster- en babyzitjes beschikbaar?',
        fr: 'Des rehausseurs et des sièges bébés sont-ils disponibles ?',
        el: 'Διατίθενται παιδικά καθίσματα και booster;',
        hr: 'Jesu li dostupne dječje sjedalice i boosteri?'
      }[lang],
      answer: {
        en: (
          <span>
            Yes. We provide child and baby seats free of charge on request. Please indicate the ages and number of seats 
            required when completing your booking request.
          </span>
        ),
        nl: (
          <span>
            Ja. We leveren op verzoek gratis kinder- en babyzitjes. Geef bij het invullen van uw boekingsaanvraag de leeftijden en het aantal benodigde zitjes aan.
          </span>
        ),
        fr: (
          <span>
            Oui. Nous fournissons des sièges enfants et bébés gratuitement sur demande. Veuillez indiquer l’âge et le nombre de sièges requis lors de votre demande de réservation.
          </span>
        ),
        el: (
          <span>
            Ναι. Παρέχουμε παιδικά και βρεφικά καθίσματα δωρεάν κατόπιν αιτήματος. Παρακαλούμε δηλώστε την ηλικία και τον αριθμό των καθισμάτων που απαιτούνται κατά την υποβολή του αιτήματος κράτησής σας.
          </span>
        ),
        hr: (
          <span>
            Da. Na zahtjev besplatno osiguravamo dječje i dječje autosjedalice. Molimo navedite dob i broj potrebnih sjedalica prilikom ispunjavanja zahtjeva za rezervaciju.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'What is the luggage capacity of the Ford minivans?',
        nl: 'Wat is de bagagecapaciteit van de Ford minivans?',
        fr: 'Quelle est la capacité de bagages des minivans Ford ?',
        el: 'Ποια είναι η χωρητικότητα αποσκευών των Ford minivans;',
        hr: 'Koliki je kapacitet prtljage u Ford kombijima?'
      }[lang],
      answer: {
        en: (
          <span>
            Our Ford Transit Custom and Tourneo Custom minivans carry up to 7 or 8 passengers and easily fit 7 to 8 large suitcases 
            along with hand luggage. They are perfect for families, ski trips, or festival groups.
          </span>
        ),
        nl: (
          <span>
            Onze Ford Transit Custom en Tourneo Custom minivans vervoeren tot 7 of 8 passagiers en bieden gemakkelijk plaats aan 7 tot 8 grote koffers 
            en handbagage. Ze zijn perfect voor gezinnen, skivakanties of festivalgroepen.
          </span>
        ),
        fr: (
          <span>
            Nos minivans Ford Transit Custom et Tourneo Custom transportent jusqu’à 7 ou 8 passagers et accueillent facilement 7 à 8 grandes valises 
            ainsi que les bagages à main. Ils sont parfaits pour les familles, les séjours de ski ou les groupes de festivals.
          </span>
        ),
        el: (
          <span>
            Τα Ford Transit Custom και Tourneo Custom minivans μας μεταφέρουν έως και 7 ή 8 επιβάτες και χωρούν εύκολα 7 έως 8 μεγάλες βαλίτσες 
            μαζί με χειραποσκευές. Είναι ιδανικά για οικογένειες, εκδρομές για σκι ή παρέες για φεστιβάλ.
          </span>
        ),
        hr: (
          <span>
            Naša kombi vozila Ford Transit Custom i Tourneo Custom prevoze do 7 ili 8 putnika i lako primaju 7 do 8 velikih kofera 
            uz ručnu prtljagu. Savršeni su za obitelji, skijaške izlete ili festivalske grupe.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'Can I book a sightseeing tour or day trip in Belgium?',
        nl: 'Kan ik een sightseeing tour of dagtocht in België boeken?',
        fr: 'Puis-je réserver une excursion d’une journée ou une visite touristique en Belgique ?',
        el: 'Μπορώ να κλείσω μια περιήγηση ή ημερήσια εκδρομή στο Βέλγιο;',
        hr: 'Mogu li rezervirati turistički obilazak ili jednodnevni izlet u Belgiji?'
      }[lang],
      answer: {
        en: (
          <span>
            Yes. We offer tailored private day trips to Bruges, Ghent, and Waterloo battlefield. 
            Your driver stays with you throughout the day and accommodates any route adjustments.
          </span>
        ),
        nl: (
          <span>
            Ja. We bieden op maat gemaakte privédagtochten naar Brugge, Gent en het slagveld van Waterloo. 
            Uw chauffeur blijft de hele dag bij u en past zich aan eventuele routewijzigingen aan.
          </span>
        ),
        fr: (
          <span>
            Oui. Nous proposons des excursions privées d’une journée sur mesure à Bruges, Gand et sur le champ de bataille de Waterloo. 
            Votre chauffeur reste avec vous tout au long de la journée et s’adapte à toute modification d’itinéraire.
          </span>
        ),
        el: (
          <span>
            Ναι. Προσφέρουμε εξατομικευμένες ιδιωτικές ημερήσιες εκδρομές στη Μπριζ, τη Γάνδη και το πεδίο μάχης του Βατερλώ. 
            Ο οδηγός σας παραμένει μαζί σας καθ’ όλη τη διάρκεια της ημέρας και προσαρμόζεται σε τυχόν αλλαγές της διαδρομής.
          </span>
        ),
        hr: (
          <span>
            Da. Nudimo prilagođene privatne jednodnevne izlete u Brugge, Ghent i na bojno polje Waterloo. 
            Vaš vozač ostaje s vama tijekom cijelog dana i prilagođava se svim promjenama rute.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'How and when do I pay for my transfer?',
        nl: 'Hoe en wanneer betaal ik voor mijn transfer?',
        fr: 'Comment et quand dois-je payer mon transfert ?',
        el: 'Πώς και πότε πληρώνω για τη μεταφορά μου;',
        hr: 'Kako i kada plaćam svoj transfer?'
      }[lang],
      answer: {
        en: (
          <span>
            We accept secure online card payments, direct bank transfers, corporate invoices, or cash directly 
            to the driver at the end of your trip.
          </span>
        ),
        nl: (
          <span>
            We accepteren beveiligde online kaartbetalingen, directe bankoverschrijvingen, zakelijke facturen of contant geld rechtstreeks 
            aan de chauffeur aan het einde van uw reis.
          </span>
        ),
        fr: (
          <span>
            Nous acceptons les paiements sécurisés par carte en ligne, les virements bancaires directs, les factures d’entreprise ou les espèces directement 
            au chauffeur à la fin de votre trajet.
          </span>
        ),
        el: (
          <span>
            Δεχόμαστε ασφαλείς διαδικτυακές πληρωμές με κάρτα, απευθείας τραπεζικές μεταφορές, εταιρικά τιμολόγια ή μετρητά απευθείας 
            στον οδηγό στο τέλος του ταξιδιού σας.
          </span>
        ),
        hr: (
          <span>
            Prihvaćamo sigurno online plaćanje karticama, izravne bankovne transfere, korporativne račune ili gotovinu izravno 
            vozaču na kraju vašeg putovanja.
          </span>
        )
      }[lang],
    },
    {
      question: {
        en: 'Why is Helicro different from standard taxis or Uber?',
        nl: 'Waarom is Helicro anders dan standaard taxi’s of Uber?',
        fr: 'En quoi Helicro diffère-t-il des taxis standard ou d’Uber ?',
        el: 'Γιατί η Helicro διαφέρει από τα συνηθισμένα ταξί ή την Uber;',
        hr: 'Zašto se Helicro razlikuje od standardnog taksija ili Ubera?'
      }[lang],
      answer: {
        en: (
          <span>
            Helicro is a licensed, family-operated service run by Gerasimos, an expat driver with a military safety background 
            and 30+ years of road experience in Belgium. We offer first-name reliability, clean Ford vehicles, 
            and multi-lingual support (English, Greek, and French).
          </span>
        ),
        nl: (
          <span>
            Helicro is een gelicenseerde, door een familie gerunde service onder leiding van Gerasimos, een ervaren chauffeur met een militaire veiligheidsachtergrond 
            en 30+ jaar wegervaring in België. Wij bieden betrouwbaarheid, schone Ford-voertuigen en meertalige ondersteuning (Engels, Grieks en Frans).
          </span>
        ),
        fr: (
          <span>
            Helicro est un service agréé et familial dirigé par Gerasimos, un chauffeur expatrié avec une solide formation militaire en sécurité 
            et plus de 30 ans d’expérience sur les routes de Belgique. Nous offrons une fiabilité personnalisée, des véhicules Ford propres 
            et un support multilingue (anglais, grec et français).
          </span>
        ),
        el: (
          <span>
            Η Helicro είναι μια αδειοδοτημένη, οικογενειακή επιχείρηση που διευθύνεται από τον Γεράσιμο, έναν έμπειρο οδηγό με στρατιωτικό υπόβαθρο ασφαλείας 
            και 30+ χρόνια εμπειρίας στους δρόμους του Βελγίου. Προσφέρουμε προσωπική αξιοπιστία, καθαρά οχήματα Ford και πολύγλωσση υποστήριξη (Αγγλικά, Ελληνικά και Γαλλικά).
          </span>
        ),
        hr: (
          <span>
            Helicro je licencirana, obiteljska usluga koju vodi Gerasimos, iskusni vozač s vojnim sigurnosnim podrijetlom 
            i više od 30 godina cestovnog iskustva u Belgiji. Nudimo osobnu pouzdanost, čista Ford vozila i višejezičnu podršku (engleski, grčki i francuski).
          </span>
        )
      }[lang],
    },
  ];

  return (
    <div>
      {/* Hero Photo Section */}
      <section className={styles.hero}>
        {/* Floating Hero Text overlay */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{ui.heroTitle}</h1>
          <p className={styles.heroSubtitle}>
            {ui.heroSubtitle}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a 
              href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtn}
            >
              {ui.btnBookOnline}
            </a>
            <a 
              href="https://wa.me/32472358805"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtnSecondary}
            >
              {ui.btnWhatsAppBe}
            </a>
            <a 
              href="https://wa.me/306974581706"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtnSecondary}
            >
              {ui.btnWhatsAppGr}
            </a>
          </div>
        </div>
      </section>

      {/* Calculator & Trust Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'start' }} className="grid-cols-mobile">
            {/* Why Helicro */}
            <div>
              <span className={styles.badge}>{ui.badgeTrust}</span>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--primary-dark)' }}>
                {ui.whyTitle}
              </h2>
              <div className={styles.aboutText}>
                <p className="mb-4">
                  {ui.whyP1}
                </p>
                <p className="mb-4">
                  {ui.whyP2}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      {ui.f1Title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      {ui.f1Desc}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      {ui.f2Title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      {ui.f2Desc}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      {ui.f3Title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      {ui.f3Desc}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      {ui.f4Title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      {ui.f4Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Calculator Widget */}
            <div>
              <FareCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Live Flat Rates Grid */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            {ui.ratesTitle}
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
            {ui.ratesSubtitle}
          </p>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '24px' 
            }}
          >
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.rate1Title}
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                {ui.rate1Price}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {ui.rate1Note}
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.rate2Title}
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                {ui.rate2Price}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {ui.rate2Note}
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.rate3Title}
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                {ui.rate3Price}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {ui.rate3Note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hub-and-spoke links to landing pages */}
      <HubLinks lang={lang} />

      {/* Meet Your Driver Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }} className="grid-cols-mobile">
            <div>
              <span className={styles.badge}>{ui.meetBadge}</span>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--primary-dark)' }}>
                {ui.meetTitle}
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {ui.meetP1}
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {ui.meetP2}
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <a href="tel:+32472358805" className="btn btn-primary">{ui.btnCallBe}</a>
                <a href="tel:+306974581706" className="btn btn-outline">{ui.btnCallGr}</a>
                <Link href="/about-us" className="btn btn-outline">{ui.btnReadStory}</Link>
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img 
                src="/images/photo to the bottom of the opening page.jpg" 
                alt="Helicro Ford Chauffeur Gerasimos" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            {ui.overviewTitle}
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            {ui.overviewSubtitle}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.srv1Title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {ui.srv1Desc}
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.srv2Title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {ui.srv2Desc}
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.srv3Title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {ui.srv3Desc}
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.srv4Title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {ui.srv4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            {ui.testTitle}
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            {ui.testSubtitle}
          </p>
          
          <GoogleReviews lang={lang} variant="grid" limit={6} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-slate-50">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center text-3xl font-extrabold mb-12" style={{ color: 'var(--primary-dark)' }}>
            {ui.faqTitle}
          </h2>
          
          <div className={styles.faqContainer}>
            {localizedFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaqIndex === index ? styles.faqItemOpen : ''}`}
              >
                <button 
                  className={styles.faqHeader} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  {faq.question}
                  <svg 
                    className={styles.faqIcon} 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div 
                  className={`${styles.faqContent} ${openFaqIndex === index ? styles.faqContentOpen : ''}`}
                  style={{ maxHeight: openFaqIndex === index ? '300px' : '0' }}
                >
                  <div style={{ padding: '16px 20px', borderTop: '1px solid #f1f5f9' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS overrides for mobile grids */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .grid-cols-mobile {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}} />
    </div>
  );
}
