'use client';

import React from 'react';
import GoogleReviews from '@/components/GoogleReviews';

export default function ReviewsClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const ui = {
    en: {
      title: 'Customer Reviews',
      subtitle: 'Read verified experiences from our passengers and why they recommend Helicro for travel in Belgium.',
      invite: 'Your reviews are highly appreciated. They help our company to grow and improve our services.',
      btn: 'Rate Us on Google Maps'
    },
    nl: {
      title: 'Klantbeoordelingen',
      subtitle: 'Lees geverifieerde ervaringen van onze passagiers en waarom zij Helicro aanbevelen.',
      invite: 'Uw recensies worden zeer op prijs gesteld. Ze helpen ons bedrijf te groeien en onze diensten te verbeteren.',
      btn: 'Beoordeel ons op Google Maps'
    },
    fr: {
      title: 'Avis Clients',
      subtitle: 'Découvrez les témoignages de nos passagers et pourquoi ils recommandent Helicro en Belgique.',
      invite: 'Vos avis sont précieux. Ils nous aident à grandir et à perfectionner nos services.',
      btn: 'Laissez un avis sur Google Maps'
    },
        hr: {
      title: 'Recenzije kupaca',
      subtitle: 'Pročitajte provjerena iskustva naših putnika i zašto preporučuju Helicro za putovanja u Belgiji.',
      invite: 'Izuzetno cijenimo vaše recenzije. One pomažu našoj tvrtki da raste i poboljšava usluge.',
      btn: 'Ocijenite nas na Google kartama'
    },
    el: {
      title: 'Αξιολογήσεις Πελατών',
      subtitle: 'Διαβάστε επιβεβαιωμένες εμπειρίες από τους επιβάτες μας και γιατί επιλέγουν τη Helicro.',
      invite: 'Η κριτική σας είναι πολύτιμη. Μας βοηθά να βελτιώνουμε τις υπηρεσίες μας.',
      btn: 'Βαθμολογήστε μας στο Google Maps'
    }
  }[lang];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '1440px' }}>
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {ui.title}
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
          {ui.subtitle}
        </p>

        <GoogleReviews lang={lang} variant="full" />
      </div>
    </div>
  );
}
