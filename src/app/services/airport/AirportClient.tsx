'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import ServiceTemplate from '@/components/ServiceTemplate';
import YouTubePlayer from '@/components/YouTubePlayer';
import ServiceRequest from '@/components/ServiceRequest';

export default function AirportClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const pathname = usePathname();
  

  // Localization Dictionary for Airport Service
  const ui = {
    en: {
      metaTitle: 'Airport Transfer Brussels | Fixed Price Zaventem & Charleroi',
      metaDesc: 'Pre-book a private Ford minivan transfer to Brussels Zaventem (BRU) or Charleroi (CRL). Vetted drivers, 24/7 dispatcher, child seats included.',
      title: 'Brussels Airport Transfer (Zaventem) - Fixed Price',
      p1: 'If you have booked a trip that requires you to be at Zaventem, Charleroi, or Lille airports early in the morning, we are always ready. We do our best to organize orders in the most efficient manner.',
      p2: 'We offer our passengers clear, fixed, and competitive rates – no unpleasant surprises and no hidden expenses.',
      guideTitle: 'Airport Pickup Guides',
      crlPickup: 'Charleroi Airport Pickup Point',
      bruPickup: 'Brussels Airport Pickup Point'
    },
    nl: {
      metaTitle: 'Luchthavenvervoer Brussel | Vaste Prijs Zaventem & Charleroi',
      metaDesc: 'Boek vooraf uw privé Ford minivan transfer naar luchthaven Zaventem (BRU) of Charleroi (CRL). Punctueel, 24/7 beschikbaar en gratis kinderzitjes.',
      title: 'Luchthavenvervoer Brussel - Vaste Tarieven',
      p1: 'Als u een reis heeft geboekt waardoor u vroeg in de ochtend op de luchthavens van Zaventem, Charleroi of Rijsel (Lille) moet zijn, staan wij voor u klaar. Wij organiseren ritten uiterst efficiënt.',
      p2: 'Wij bieden onze reizigers duidelijke, vaste en concurrerende tarieven – geen onaangename verrassingen of verborgen kosten.',
      guideTitle: 'Luchthaven Ophaalgidsen (Video)',
      crlPickup: 'Ophaalpunt Luchthaven Charleroi',
      bruPickup: 'Ophaalpunt Luchthaven Brussel'
    },
    fr: {
      metaTitle: 'Navette Aéroport Bruxelles | Tarif Fixe Zaventem & Charleroi',
      metaDesc: 'Réservez à l\'avance votre transfert en monospace Ford vers Bruxelles-Zaventem ou Charleroi. Chauffeurs agréés, suivi de vol, sièges bébés inclus.',
      title: 'Transferts Aéroport de Bruxelles - Prix Fixe',
      p1: 'Si vous devez vous rendre tôt le matin aux aéroports de Zaventem, Charleroi ou Lille, nous répondons présents. Nous optimisons nos plannings pour garantir une ponctualité absolue.',
      p2: 'Nous garantissons à nos passagers des prix clairs, fixes et compétitifs – sans frais de bagages ou mauvaise surprise.',
      guideTitle: 'Guides de Prise en Charge Aéroport (Vidéo)',
      crlPickup: 'Point de Rendez-vous Aéroport de Charleroi',
      bruPickup: 'Point de Rendez-vous Aéroport de Bruxelles'
    },
        hr: {
      metaTitle: 'Prijevoz do zračne luke Bruxelles | Fiksna cijena Zaventem i Charleroi',
      metaDesc: 'Rezervirajte privatni Ford kombi prijevoz do zračne luke Bruxelles Zaventem (BRU) ili Charleroi (CRL). Profesionalni vozači, 24/7 dispečer, uključene dječje sjedalice.',
      title: 'Prijevoz do zračne luke Bruxelles (Zaventem) - Fiksna cijena',
      p1: 'Ako ste rezervirali putovanje koje zahtijeva da rano ujutro budete u zračnim lukama Zaventem, Charleroi ili Lille, uvijek smo spremni. Dajemo sve od sebe kako bismo organizirali narudžbe na najučinkovitiji način.',
      p2: 'Našim putnicima nudimo jasne, fiksne i konkurentne cijene – bez neugodnih iznenađenja i skrivenih troškova.',
      guideTitle: 'Vodiči za preuzimanje u zračnoj luci',
      crlPickup: 'Mjesto preuzimanja u zračnoj luci Charleroi',
      bruPickup: 'Mjesto preuzimanja u zračnoj luci Bruxelles'
    },
    el: {
      metaTitle: 'Μεταφορές Αεροδρομίου Βρυξέλλες | Σταθερές Τιμές Zaventem & Charleroi',
      metaDesc: 'Κάντε κράτηση για ιδιωτικό minivan Ford προς τα αεροδρόμια Zaventem (BRU) & Charleroi (CRL). Επαγγελματίες οδηγοί, live flight tracking.',
      title: 'Μεταφορές Αεροδρομίου Βρυξελλών - Σταθερή Τιμή',
      p1: 'Αν έχετε προγραμματίσει ταξίδι και πρέπει να βρίσκεστε στα αεροδρόμια Zaventem, Charleroi ή Lille νωρίς το πρωί, είμαστε πάντα έτοιμοι. Οργανώνουμε τα δρομολόγια με τον πιο αποτελεσματικό τρόπο.',
      p2: 'Προσφέρουμε σαφείς, σταθερές και ανταγωνιστικές τιμές – χωρίς δυσάρεστες εκπλήξεις και κρυφά έξοδα.',
      guideTitle: 'Οδηγοί Παραλαβής από το Αεροδρόμιο',
      crlPickup: 'Σημείο Παραλαβής στο Αεροδρόμιο Charleroi',
      bruPickup: 'Σημείο Παραλαβής στο Αεροδρόμιο Zaventem'
    }
  }[lang];

  return (
    <div className="section">
      
      

      <ServiceTemplate 
        img="/images/airport-2.jpg" 
        title={ui.title}
      >
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          <p className="mb-4">
            {ui.p1}
          </p>
          <p className="mb-4">
            {ui.p2}
          </p>
        </div>

        {/* Video pickup guides */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--primary-dark)' }}>
          {ui.guideTitle}
        </h2>
        
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '30px', 
            marginBottom: '40px' 
          }}
          className="grid-cols-mobile"
        >
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>
              {ui.crlPickup}
            </h3>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <YouTubePlayer videoId="P_lmGccjkjU" />
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>
              {ui.bruPickup}
            </h3>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <YouTubePlayer videoId="9-6260p40fc" />
            </div>
          </div>
        </div>

        <p style={{ marginBottom: '24px', fontSize: '15px' }}>
          <a href={lang === 'en' ? '/services/event-transfers' : `/${lang}/services/event-transfers`} style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>
            {lang === 'nl' ? 'Evenemententransfers (Tomorrowland, F1 Spa) →' : lang === 'fr' ? 'Transferts événementiels (Tomorrowland, F1 Spa) →' : 'Event Transfers (Tomorrowland, F1 Spa) →'}
          </a>
        </p>

        <ServiceRequest />

        {/* CSS workaround for mobile grid */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .grid-cols-mobile {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}} />
      </ServiceTemplate>
    </div>
  );
}
