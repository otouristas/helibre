import React from 'react';
import CorporateClient from '@/app/services/corporate/CorporateClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['services/corporate']['nl'].title,
  description: metaTranslations['services/corporate']['nl'].description,
  alternates: {
    canonical: 'https://helicro.be/nl/services/corporate',
    languages: {
      'en': 'https://helicro.be/services/corporate',
      'nl': 'https://helicro.be/nl/services/corporate',
      'fr': 'https://helicro.be/fr/services/corporate',
      'el': 'https://helicro.be/el/services/corporate',
    }
  }
};

export default function Page() {
  return <CorporateClient lang="nl" />;
}
