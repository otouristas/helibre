import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { spaMotorsportContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Spa-Francorchamps F1 & Motorsport Transfers | Private Chauffeur | Helicro',
  description:
    'Premium private transfers to Circuit de Spa-Francorchamps for Formula 1, Ferrari track days, and 24h Spa. Luxury 8-seater van from Brussels & airports.',
  alternates: {
    canonical: 'https://helicro.be/services/event-transfers/formula-1-spa-francorchamps',
    languages: {
      en: 'https://helicro.be/services/event-transfers/formula-1-spa-francorchamps',
      nl: 'https://helicro.be/nl/services/event-transfers/formula-1-spa-francorchamps',
      fr: 'https://helicro.be/fr/services/event-transfers/formula-1-spa-francorchamps',
    },
  },
  openGraph: {
    title: 'Spa-Francorchamps F1 & Motorsport Transfers | Helicro',
    description:
      'Executive 8-seater chauffeur service for Formula 1, Ferrari track days, and Spa race weekends.',
    url: 'https://helicro.be/services/event-transfers/formula-1-spa-francorchamps',
    type: 'website',
  },
};

export default function Page() {
  const content = spaMotorsportContent.en;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Spa-Francorchamps F1 & Motorsport Private Chauffeur Service',
            serviceType: 'Motorsport Private Transport',
            description:
              'Executive 8-seater chauffeur service for Formula 1 Grand Prix, Ferrari track days, and events at Circuit de Spa-Francorchamps.',
            url: '/services/event-transfers/formula-1-spa-francorchamps',
            areaServed: [
              { type: 'City', name: 'Spa' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Event Transfers', url: '/services/event-transfers' },
            {
              name: 'Spa-Francorchamps F1',
              url: '/services/event-transfers/formula-1-spa-francorchamps',
            },
          ]),
        ]}
      />
      <EventTransferPage lang="en" content={content} />
    </>
  );
}
