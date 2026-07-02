'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import ServiceTemplate from '@/components/ServiceTemplate';
import ServiceRequest from '@/components/ServiceRequest';

interface CityTour {
  name: string;
  img: string;
  description: string;
}

export default function SightseeingClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' }) {
  const pathname = usePathname();
  

  // Localization Dictionary for Sightseeing
  const ui = {
    en: {
      metaTitle: 'Private Sightseeing Belgium | Chauffeur Day Tours from Brussels',
      metaDesc: 'Custom day trips to Bruges, Ghent and Durbuy with private Mercedes minivans. Set your own pace, choose stops and travel in comfort.',
      title: 'Private Sightseeing Car Ride',
      p1: 'Get to the city\'s main landmarks by a premium air-conditioned minivan with your hand-picked local driver. Choose the stops, visit the attractions, and don\'t waste any time waiting for public transports or buses.',
      
      bruTourName: 'Brussels',
      bruTourDesc: 'Get a quick feel of the city considered the heart of the European Union and discover its charms with your personal English-Greek speaking driver. Just inform your driver about your preferences before the ride.',
      
      ghentTourName: 'Ghent',
      ghentTourDesc: 'Day Trip to Ghent. Explore a Flemish jewel of a city rich in medieval architecture, canals, and culture with your English-speaking driver. Just inform your driver about your route choice before the ride.',
      
      brugesTourName: 'Bruges',
      brugesTourDesc: 'Explore the "Venice of the North" on a day trip of Bruges, with round-trip transfers from Brussels. Visit one of the most fascinating medieval cities in Europe, check out the Lake of Love, and enjoy Belgian chocolates.',
      
      durbuyTourName: 'Durbuy',
      durbuyTourDesc: 'Explore Durbuy, a beautiful Belgian village in the province of Luxembourg in Wallonia. Known historically as the "smallest city in the world," it features charming stone houses, cobbled streets, and stunning Ardennes scenery.'
    },
    nl: {
      metaTitle: 'Privé Rondritten België | Dagtochten Brugge & Gent vanuit Brussel',
      metaDesc: 'Boek een luxe dagtocht met chauffeur naar Brugge, Gent of Durbuy. Bepaal uw eigen route, reisschema en stops in comfortabele minivans.',
      title: 'Privé Sightseeing & Rondritten',
      p1: 'Ontdek de mooiste bezienswaardigheden in een luxe Mercedes minivan met uw persoonlijke chauffeur. Bepaal zelf uw stops, bezoek attracties en verlies geen tijd met het openbaar vervoer.',
      
      bruTourName: 'Brussel',
      bruTourDesc: 'Verken het hart van de Europese Unie en ontdek haar historische pleinen en charme met uw meertalige chauffeur. Geef vooraf uw persoonlijke voorkeuren door.',
      
      ghentTourName: 'Gent',
      ghentTourDesc: 'Dagtocht naar Gent. Verken dit Vlaamse juweel met prachtige middeleeuwse gildehuizen, grachten en rijke cultuur samen met uw privéchauffeur.',
      
      brugesTourName: 'Brugge',
      brugesTourDesc: 'Verken het &apos;Venetië van het Noorden&apos; tijdens een dagtocht naar Brugge met retour vanuit Brussel. Bezoek het Minnewater, het belfort en proef Belgische pralines.',
      
      durbuyTourName: 'Durbuy',
      durbuyTourDesc: 'Ontdek Durbuy, een prachtig Ardens stadje in Wallonië. Historisch bekend als de &apos;kleinste stad ter wereld&apos;, met charmante stenen huizen en kasseistraten.'
    },
    fr: {
      metaTitle: 'Circuit Touristique Privé Belgique | Excursions Bruges & Gand',
      metaDesc: 'Visites guidées d\'une journée à Bruges, Gand ou Durbuy en van Mercedes privé depuis Bruxelles. Planifiez vos arrêts à votre rythme.',
      title: 'Excursions Touristiques Privées',
      p1: 'Visitez les hauts lieux touristiques belges à bord d\'un minivan climatisé de standing avec chauffeur privé. Choisissez vos escales et évitez l\'attente des bus publics.',
      
      bruTourName: 'Bruxelles',
      bruTourDesc: 'Découvrez les charmes de la capitale européenne et ses monuments avec votre chauffeur. Indiquez vos préférences avant le départ pour un circuit sur mesure.',
      
      ghentTourName: 'Gand',
      ghentTourDesc: 'Excursion à Gand. Explorez ce joyau médiéval flamand, ses canaux et sa vie culturelle intense en toute décontraction avec votre chauffeur privé.',
      
      brugesTourName: 'Bruges',
      brugesTourDesc: 'Explorez la &apos;Venise du Nord&apos; lors d\'une escapade à Bruges. Visitez son centre historique préservé, le lac d\'Amour et dégustez de délicieux chocolats.',
      
      durbuyTourName: 'Durbuy',
      durbuyTourDesc: 'Visitez Durbuy, perle de la province de Luxembourg dans les Ardennes. Historiquement labellisée la &apos;plus petite ville du monde&apos;, avec ses ruelles pavées pittoresques.'
    },
    el: {
      metaTitle: 'Ιδιωτικές Περιηγήσεις Βέλγιο | Ημερήσιες Εκδρομές Μπρυζ & Γάνδη',
      metaDesc: 'Ημερήσιες εκδρομές σε Μπρυζ, Γάνδη και Durbuy με ιδιωτικό minivan Mercedes. Επιλέξτε τις στάσεις σας και ταξιδέψτε με άνεση.',
      title: 'Ιδιωτικές Περιηγήσεις με Αυτοκίνητο',
      p1: 'Επισκεφθείτε τα κυριότερα αξιοθέατα των πόλεων με ένα premium κλιματιζόμενο minivan και τον προσωπικό σας οδηγό. Επιλέξτε τις στάσεις και μην χάνετε χρόνο στα μέσα μαζικής μεταφοράς.',
      
      bruTourName: 'Βρυξέλλες',
      bruTourDesc: 'Γνωρίστε την καρδιά της Ευρωπαϊκής Ενωσης και ανακαλύψτε τις ομορφιές της με τον προσωπικό σας οδηγό. Ενημερώστε τον οδηγό για τις προτιμήσεις σας πριν τη διαδρομή.',
      
      ghentTourName: 'Γάνδη',
      ghentTourDesc: 'Ημερήσια εκδρομή στη Γάνδη. Εξερευνήστε ένα φλαμανδικό κόσμημα πλούσιο σε μεσαιωνική αρχιτεκτονική, κανάλια και πολιτισμό με τον οδηγό σας.',
      
      brugesTourName: 'Μπρυζ',
      brugesTourDesc: 'Εξερευνήστε τη «Βενετία του Βορρά» σε μια ημερήσια εκδρομή στη Μπρυζ με επιστροφή στις Βρυξέλλες. Δείτε τη Λίμνη της Αγάπης και απολαύστε σοκολάτες.',
      
      durbuyTourName: 'Durbuy',
      durbuyTourDesc: 'Εξερευνήστε το Durbuy, ένα πανέμορφο βελγικό χωριό στην επαρχία του Λουξεμβούργου στη Βαλονία. Γνωστό ως η «μικρότερη πόλη του κόσμου».'
    }
  }[lang];

  const tours: CityTour[] = [
    {
      name: ui.bruTourName,
      img: '/images/brussels-sightseeing.jpg',
      description: ui.bruTourDesc
    },
    {
      name: ui.ghentTourName,
      img: '/images/shightseeing-ghent.jpg',
      description: ui.ghentTourDesc
    },
    {
      name: ui.brugesTourName,
      img: '/images/shightseeing-bruges.jpg',
      description: ui.brugesTourDesc
    },
    {
      name: ui.durbuyTourName,
      img: '/images/shightseeing-durbuy.jpg',
      description: ui.durbuyTourDesc
    }
  ];

  return (
    <div className="section">
      
      

      <ServiceTemplate 
        img="/images/brussels-must-see-travelstyle.jpg" 
        title={ui.title}
      >
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          <p>
            {ui.p1}
          </p>
        </div>

        {/* City Tours Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}
        >
          {tours.map((tour, index) => (
            <div 
              key={index}
              style={{
                background: '#ffffff',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="tour-card"
            >
              <div style={{ height: '180px', width: '100%', position: 'relative' }}>
                <img 
                  src={tour.img} 
                  alt={tour.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '10px' }}>
                  {tour.name}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)', flexGrow: 1 }}>
                  {tour.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ServiceRequest />

        {/* Custom CSS overrides for hover transition */}
        <style dangerouslySetInnerHTML={{__html: `
          .tour-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg) !important;
            border-color: rgba(0, 62, 113, 0.15) !important;
          }
        `}} />
      </ServiceTemplate>
    </div>
  );
}
