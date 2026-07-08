import React from 'react';
import PricingClient from '@/app/pricing/PricingClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['pricing']['hr'].title,
  description: metaTranslations['pricing']['hr'].description,
    alternates: {
    canonical: 'https://helicro.be/hr/pricing',
    languages: {
      'en': 'https://helicro.be/pricing',
      'nl': 'https://helicro.be/nl/pricing',
      'fr': 'https://helicro.be/fr/pricing',
      'el': 'https://helicro.be/el/pricing',
      'hr': 'https://helicro.be/hr/pricing',
    }
  }
};

export default function Page() {
  return <PricingClient lang="hr" />;
}
