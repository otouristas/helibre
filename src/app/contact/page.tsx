import React from 'react';
import ContactClient from './ContactClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['contact']['en'].title,
  description: metaTranslations['contact']['en'].description,
  alternates: {
    canonical: 'https://helicro.be/contact',
    languages: {
      'en': 'https://helicro.be/contact',
      'nl': 'https://helicro.be/nl/contact',
      'fr': 'https://helicro.be/fr/contact',
      'el': 'https://helicro.be/el/contact',
    }
  }
};

export default function Page() {
  return <ContactClient lang="en" />;
}
