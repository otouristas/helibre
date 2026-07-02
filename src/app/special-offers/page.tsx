'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';

export default function SpecialOffers() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);

  // Localization Dictionary for Special Offers
  const ui = {
    en: {
      metaTitle: 'Special Offers & Loyalty Card | Helicro Chauffeur Brussels',
      metaDesc: 'Get a free private transfer for every 8 completed airport transfers in Brussels. Ask your driver for your physical stamp card today.',
      title: 'Special Offers & Rewards',
      subtitle: 'Earn complimentary rides and travel perks with our loyalty programs.',
      badge: 'Loyalty Program',
      h2: 'Loyalty Reward Program',
      p1: 'As a token of our appreciation, we are pleased to offer you a free ride for every 8 single airport transfers completed with our company, between Brussels and either Charleroi Airport or Brussels International Airport.',
      p2: 'Your 9th ride is on us!',
      p3: '* Ask your driver for a physical stamp card to start tracking your rides.',
      cardTitle: 'HELICRO CARD',
      cardType: 'Stamp Card',
      freeSlot: 'FREE',
      footerNote: 'Valid on all transfers to Zaventem & Charleroi airports. Fares are marked upon trip validation.'
    },
    nl: {
      metaTitle: 'Speciale Aanbiedingen & Klantenkaart | Helicro Brussel',
      metaDesc: 'Ontvang een gratis privé transfer voor elke 8 voltooide luchthavenritten in Brussel. Vraag vandaag nog uw fysieke spaarkaart aan.',
      title: 'Speciale Aanbiedingen & Beloningen',
      subtitle: 'Spaar voor gratis ritten en reisvoordelen met onze getrouwheidsprogramma\'s.',
      badge: 'Spaarprogramma',
      h2: 'Getrouwheidsprogramma',
      p1: 'Als blijk van onze waardering bieden wij u graag een gratis rit aan voor elke 8 enkele luchthaventransfers die u met ons maakt, tussen Brussel en de luchthaven van Zaventem of Charleroi.',
      p2: 'Uw 9de rit is helemaal gratis!',
      p3: '* Vraag uw chauffeur om een fysieke stempelkaart om uw ritten bij te houden.',
      cardTitle: 'HELICRO CARD',
      cardType: 'Stempelkaart',
      freeSlot: 'GRATIS',
      footerNote: 'Geldig voor alle ritten naar de luchthavens van Zaventem & Charleroi. Stempels worden gezet bij ritvalidatie.'
    },
    fr: {
      metaTitle: 'Offres Spéciales & Carte Fidélité | Chauffeur Helicro Bruxelles',
      metaDesc: 'Bénéficiez d\'un trajet privé gratuit tous les 8 transferts aéroport effectués à Bruxelles. Demandez votre carte physique à votre chauffeur.',
      title: 'Offres Spéciales & Fidélité',
      subtitle: 'Gagnez des trajets gratuits et des avantages exclusifs grâce à nos programmes.',
      badge: 'Programme Fidélité',
      h2: 'Programme de Récompense',
      p1: 'Pour vous remercier de votre confiance, nous avons le plaisir de vous offrir un trajet gratuit toutes les 8 navettes aéroport simples effectuées avec notre société, entre Bruxelles et les aéroports de Charleroi ou de Bruxelles-Zaventem.',
      p2: 'Votre 9ème trajet est offert !',
      p3: '* Demandez votre carte de fidélité physique à votre chauffeur lors de votre prochain trajet.',
      cardTitle: 'CARTE HELICRO',
      cardType: 'Carte Fidélité',
      freeSlot: 'OFFERT',
      footerNote: 'Valable sur tous les transferts vers les aéroports de Zaventem & Charleroi. Tampon appliqué lors de la validation du trajet.'
    },
    el: {
      metaTitle: 'Ειδικές Προσφορές & Κάρτα Πιστότητας | Helicro Brussels',
      metaDesc: 'Κερδίστε μια δωρεάν ιδιωτική μεταφορά για κάθε 8 ολοκληρωμένες διαδρομές αεροδρομίου. Ζητήστε την κάρτα σας από τον οδηγό.',
      title: 'Ειδικές Προσφορές & Επιβραβεύσεις',
      subtitle: 'Κερδίστε δωρεάν διαδρομές και ταξιδιωτικά προνόμια με το πρόγραμμα πιστότητας.',
      badge: 'Πρόγραμμα Πιστότητας',
      h2: 'Πρόγραμμα Επιβράβευσης',
      p1: 'Ως ένδειξη εκτίμησης για την εμπιστοσύνη σας, σας προσφέρουμε μια δωρεάν μεταφορά για κάθε 8 μονές διαδρομές που ολοκληρώνετε με την εταιρεία μας, μεταξύ Βρυξελλών και των αεροδρομίων Zaventem ή Charleroi.',
      p2: 'Η 9η διαδρομή σας είναι δωρεάν!',
      p3: '* Ζητήστε από τον οδηγό σας τη φυσική κάρτα σφραγίδων για να ξεκινήσετε.',
      cardTitle: 'ΚΑΡΤΑ HELICRO',
      cardType: 'Κάρτα Σφραγίδων',
      freeSlot: 'ΔΩΡΕΑΝ',
      footerNote: 'Ισχύει για όλες τις μεταφορές προς τα αεροδρόμια Zaventem & Charleroi. Οι σφραγίδες τοποθετούνται κατά την ολοκλήρωση.'
    }
  }[lang];

  const stamps = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="section">
      <title>{ui.metaTitle}</title>
      <meta name="description" content={ui.metaDesc} />

      <div className="container">
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {ui.title}
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          {ui.subtitle}
        </p>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '50px', 
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          className="grid-cols-mobile"
        >
          {/* Visual description */}
          <div>
            <span 
              style={{ 
                background: 'rgba(0, 62, 113, 0.1)', 
                color: 'var(--primary)', 
                fontSize: '12px', 
                fontWeight: 700, 
                padding: '6px 12px', 
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {ui.badge}
            </span>
            <h2 className="text-3xl font-extrabold mt-4 mb-6" style={{ color: 'var(--primary-dark)', lineHeight: '1.25' }}>
              {ui.h2}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              {ui.p1}
            </p>
            <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary-light)', marginBottom: '8px' }}>
              {ui.p2}
            </p>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              {ui.p3}
            </p>
          </div>

          {/* Graphical Stamp Card representation */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))', 
              borderRadius: 'var(--radius-lg)', 
              padding: '32px',
              color: '#ffffff',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '1px', color: 'var(--accent)' }}>
                {ui.cardTitle}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                {ui.cardType}
              </div>
            </div>

            {/* Stamp Slots Grid */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '16px',
                justifyItems: 'center',
                marginBottom: '24px'
              }}
            >
              {stamps.map((num) => (
                <div 
                  key={num} 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: 'var(--radius-full)', 
                    border: '2px dashed rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.4)',
                    background: 'rgba(255, 255, 255, 0.03)'
                  }}
                >
                  {num}
                </div>
              ))}
              
              {/* 9th Ride (FREE) Slot */}
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: 'var(--radius-full)', 
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '11px',
                  color: '#111827',
                  background: 'var(--accent)',
                  boxShadow: '0 0 10px rgba(254, 232, 61, 0.5)'
                }}
              >
                {ui.freeSlot}
              </div>
            </div>

            <div style={{ fontSize: '12px', textAlign: 'center', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>
              {ui.footerNote}
            </div>
          </div>
        </div>

        {/* CSS workaround for mobile grid */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
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
