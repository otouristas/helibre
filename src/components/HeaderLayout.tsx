'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';

const BANNER = {
  en: { text: '🎉 Special offer: earn free rides with our loyalty programme.', cta: 'Learn more' },
  nl: { text: '🎉 Speciale actie: verdien gratis ritten met ons loyaliteitsprogramma.', cta: 'Meer info' },
  fr: { text: '🎉 Offre spéciale : gagnez des trajets gratuits avec notre programme de fidélité.', cta: 'En savoir plus' },
  el: { text: '🎉 Ειδική προσφορά: κερδίστε δωρεάν διαδρομές με το πρόγραμμα επιβράβευσης.', cta: 'Μάθετε περισσότερα' },
  hr: { text: '🎉 Posebna ponuda: osvojite besplatne vožnje uz naš program vjernosti.', cta: 'Saznajte više' },
} as const;

export default function HeaderLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);
  const banner = BANNER[lang];
  const offersHref = lang === 'en' ? '/special-offers' : `/${lang}/special-offers`;

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* 1. Special Offer Banner - Sits at the very top (scrolls away) */}
      <div 
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, #fee83d 0%, #ffb300 100%)',
          color: '#1a1a1a',
          fontWeight: '700',
          fontSize: '0.9rem',
          textAlign: 'center',
          padding: '10px 16px',
          cursor: 'pointer',
          letterSpacing: '0.5px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          position: 'relative',
          zIndex: 101,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link 
          href={offersHref} 
          style={{ 
            color: 'inherit', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <span>{banner.text}</span>
          <span style={{ color: '#d32f2f', textDecoration: 'underline', fontWeight: 800 }}>{banner.cta}</span>
        </Link>
      </div>

      {/* 2. Main Navigation Shell (includes Topbar and Navbar) */}
      <Navbar onOpenMobileMenu={openDrawer} />

      {/* 3. Mobile Navigation Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
