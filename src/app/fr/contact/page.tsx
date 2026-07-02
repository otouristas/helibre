import React from 'react';
import ContactClient from '@/app/contact/ContactClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['contact']['fr'].title,
  description: metaTranslations['contact']['fr'].description,
  alternates: {
    canonical: 'https://helicro.be/fr/contact',
    languages: {
      'en': 'https://helicro.be/contact',
      'nl': 'https://helicro.be/nl/contact',
      'fr': 'https://helicro.be/fr/contact',
      'el': 'https://helicro.be/el/contact',
    }
  }
};

export default function Page() {
  return <ContactClient lang="fr" />;
}
