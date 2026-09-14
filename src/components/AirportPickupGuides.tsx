'use client';

import React from 'react';
import YouTubePlayer from '@/components/YouTubePlayer';
import type { Locale } from '@/lib/seo';

const T: Record<Locale, { title: string; intro: string; crl: string; bru: string }> = {
  en: { title: 'Airport pickup guides (video)', intro: 'Two short videos show exactly where your driver waits at each airport, so you can walk straight from baggage reclaim to the minivan.', crl: 'Charleroi Airport pickup point', bru: 'Brussels Airport pickup point' },
  nl: { title: 'Ophaalgidsen luchthaven (video)', intro: 'Twee korte video’s tonen precies waar uw chauffeur op elke luchthaven wacht, zodat u van de bagageband rechtstreeks naar de minivan stapt.', crl: 'Ophaalpunt luchthaven Charleroi', bru: 'Ophaalpunt Brussels Airport' },
  fr: { title: 'Guides de prise en charge (vidéo)', intro: 'Deux courtes vidéos montrent exactement où votre chauffeur vous attend dans chaque aéroport, pour aller directement de la livraison des bagages au minivan.', crl: 'Point de rencontre aéroport de Charleroi', bru: 'Point de rencontre Brussels Airport' },
  el: { title: 'Οδηγοί παραλαβής στο αεροδρόμιο (βίντεο)', intro: 'Δύο σύντομα βίντεο δείχνουν ακριβώς πού σας περιμένει ο οδηγός σε κάθε αεροδρόμιο, ώστε να πάτε κατευθείαν από τις αποσκευές στο minivan.', crl: 'Σημείο παραλαβής αεροδρόμιο Charleroi', bru: 'Σημείο παραλαβής Brussels Airport' },
  hr: { title: 'Vodiči za preuzimanje u zračnoj luci (video)', intro: 'Dva kratka videa pokazuju točno gdje vas vozač čeka u svakoj zračnoj luci, kako biste od preuzimanja prtljage otišli izravno do kombija.', crl: 'Mjesto preuzimanja zračna luka Charleroi', bru: 'Mjesto preuzimanja Brussels Airport' },
};

export default function AirportPickupGuides({ lang }: { lang: Locale }) {
  const t = T[lang];
  return (
    <section style={{ marginTop: '36px' }}>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '10px' }}>{t.title}</h2>
      <p style={{ marginBottom: '18px' }}>{t.intro}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '12px' }}>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', color: 'var(--primary-dark)' }}>{t.crl}</h3>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <YouTubePlayer videoId="P_lmGccjkjU" />
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', color: 'var(--primary-dark)' }}>{t.bru}</h3>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <YouTubePlayer videoId="9-6260p40fc" />
          </div>
        </div>
      </div>
    </section>
  );
}
