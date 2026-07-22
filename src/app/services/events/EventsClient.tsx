'use client';

import React from 'react';
import Link from 'next/link';
import ServiceTemplate from '@/components/ServiceTemplate';
import ServiceRequest from '@/components/ServiceRequest';

export default function EventsClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const localizePath = (path: string) => {
    if (lang === 'en') return path;
    return `/${lang}${path}`;
  };

  const ui = {
    en: {
      title: 'Wedding & Private Party Transportation',
      p1: 'Planning a wedding, private celebration, or guest shuttle between venues? Helicro coordinates seamless group logistics so your guests arrive on time, together, and in comfort.',
      p2: 'Our 8-passenger executive minivans are ideal for bridal parties, hotel-to-venue guest fleets, late-night returns after receptions, and multi-stop celebration itineraries across Belgium.',
      p3: 'Every booking includes a named professional chauffeur, fixed flat rates, and multilingual service in English, French, and Greek.',
      p4: 'Looking for major festivals or motorsport instead? See our dedicated Event Transfers for Tomorrowland, Spa-Francorchamps F1, and corporate summits.',
      festLink: 'Explore Festival & Motorsport Transfers →',
      weddingLink: 'Also see Wedding Transport Belgium →',
    },
    nl: {
      title: 'Trouw- & privéfeestvervoer',
      p1: 'Plant u een huwelijk, privéfeest of gastenshuttle tussen locaties? Helicro regelt vlekkeloze groepslogistiek zodat uw gasten samen, op tijd en comfortabel aankomen.',
      p2: 'Onze executive minivans voor 8 personen zijn ideaal voor bridal parties, hotel-naar-locatie gastenvervoer, late retourritten na recepties en multi-stop vieringen in België.',
      p3: 'Elke boeking omvat een vaste professionele chauffeur, forfaitaire tarieven en meertalige service in Engels, Frans en Grieks.',
      p4: 'Op zoek naar grote festivals of motorsport? Bekijk onze Evenemententransfers voor Tomorrowland, Spa-Francorchamps F1 en bedrijfstoppen.',
      festLink: 'Festival- & motorsporttransfers ontdekken →',
      weddingLink: 'Ook: Wedding Transport Belgium →',
    },
    fr: {
      title: 'Transport mariage & soirées privées',
      p1: 'Vous organisez un mariage, une célébration privée ou une navette d’invités entre lieux ? Helicro coordonne une logistique de groupe fluide pour que vos invités arrivent à l’heure, ensemble et dans le confort.',
      p2: 'Nos minivans exécutifs 8 places sont idéaux pour cortèges, flottes hôtel–lieu de réception, retours de nuit et itinéraires multi-arrêts en Belgique.',
      p3: 'Chaque réservation inclut un chauffeur professionnel nommé, des tarifs forfaitaires et un service multilingue (anglais, français, grec).',
      p4: 'Vous cherchez festivals ou motorsport ? Consultez nos Transferts événementiels pour Tomorrowland, F1 Spa-Francorchamps et sommets corporate.',
      festLink: 'Découvrir les transferts festival & motorsport →',
      weddingLink: 'Voir aussi Wedding Transport Belgium →',
    },
    hr: {
      title: 'Prijevoz za vjenčanja i privatne zabave',
      p1: 'Organizirate vjenčanje, privatnu proslavu ili shuttle gostiju između lokacija? Helicro koordinira besprijekornu grupnu logistiku.',
      p2: 'Naši executive kombiji za 8 putnika idealni su za bridal party, prijevoz gostiju hotel–lokacija i kasne povratke nakon proslave.',
      p3: 'Svaka rezervacija uključuje imenovanog profesionalnog vozača, fiksne cijene i višejezičnu uslugu.',
      p4: 'Tražite festivale ili motorsport? Pogledajte naše Event Transfers stranice.',
      festLink: 'Istražite festival i motorsport transfere →',
      weddingLink: 'Također: Wedding Transport Belgium →',
    },
    el: {
      title: 'Μεταφορές γάμων & ιδιωτικών εκδηλώσεων',
      p1: 'Οργανώνετε γάμο, ιδιωτική γιορτή ή shuttle καλεσμένων; Η Helicro συντονίζει άψογη ομαδική μετακίνηση.',
      p2: 'Τα executive minivans 8 θέσεων είναι ιδανικά για bridal party, μεταφορές ξενοδοχείο–χώρος δεξίωσης και αργινές επιστροφές.',
      p3: 'Κάθε κράτηση περιλαμβάνει επώνυμο επαγγελματία σοφέρ, σταθερές τιμές και πολύγλωσση εξυπηρέτηση.',
      p4: 'Ψάχνετε φεστιβάλ ή motorsport; Δείτε τις σελίδες Event Transfers.',
      festLink: 'Εξερευνήστε μεταφορές φεστιβάλ & motorsport →',
      weddingLink: 'Δείτε επίσης Wedding Transport Belgium →',
    },
  }[lang];

  return (
    <div className="section">
      <ServiceTemplate img="/images/event-service.jpg" title={ui.title}>
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p className="mb-4">{ui.p1}</p>
          <p className="mb-4">{ui.p2}</p>
          <p className="mb-4">{ui.p3}</p>
          <p className="mb-4">{ui.p4}</p>
          <p className="mb-4">
            <Link href={localizePath('/services/event-transfers')} style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>
              {ui.festLink}
            </Link>
          </p>
          <p className="mb-6">
            <Link href="/en/wedding-transport-belgium" style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>
              {ui.weddingLink}
            </Link>
          </p>
        </div>
        <ServiceRequest />
      </ServiceTemplate>
    </div>
  );
}
