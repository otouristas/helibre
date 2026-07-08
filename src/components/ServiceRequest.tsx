'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';

export default function ServiceRequest() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);

  const text = {
    en: {
      headline: 'Are you looking for a transfer?',
      btn: 'Request This Service'
    },
    nl: {
      headline: 'Bent u op zoek naar een transfer?',
      btn: 'Vraag Deze Dienst Aan'
    },
    fr: {
      headline: 'Vous cherchez un transfert ?',
      btn: 'Demander Ce Service'
    },
    el: {
      headline: 'Αναζητάτε μεταφορά;',
      btn: 'Αίτηση για αυτήν την Υπηρεσία'
    },
    hr: {
      headline: 'Tražite transfer?',
      btn: 'Zatražite ovu uslugu'
    }
  }[lang];

  return (
    <div 
      style={{
        backgroundColor: 'var(--primary-dark)',
        color: '#ffffff',
        padding: '48px 24px',
        textAlign: 'center',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(255,255,255,0.1)',
        margin: '40px auto 0 auto',
        maxWidth: '1000px'
      }}
    >
      <div 
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--accent)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}
      >
        {text.headline}
      </div>
      <a 
        href="https://forms.clickup.com/9015129384/f/8cnfx98-215/HYNDJD9OSRESGIPWVM"
        target="_blank"
        onFocus={() => {}}
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ fontSize: '15px', padding: '12px 32px' }}
      >
        {text.btn}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '6px' }}>
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
    </div>
  );
}
