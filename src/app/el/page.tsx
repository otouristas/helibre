import React from 'react';
import HomeClient from '../HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HELICRO | ΤΑΞΙ ΑΕΡΟΔΡΟΜΙΟΥ ΒΡΥΞΕΛΛΕΣ & ΙΔΙΩΤΙΚΕΣ ΜΕΤΑΦΟΡΕΣ',
  description: 'Ιδιωτικές μεταφορές αεροδρομίου στις Βρυξέλλες με Ελληνα οδηγό. Σταθερές τιμές για Zaventem & Charleroi. Κάντε online κράτηση.',
  alternates: {
    canonical: 'https://helicro.be/el',
    languages: {
      'en': 'https://helicro.be',
      'nl': 'https://helicro.be/nl',
      'fr': 'https://helicro.be/fr',
      'el': 'https://helicro.be/el',
    }
  }
};

export default function Page() {
  return <HomeClient lang="el" />;
}
