import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { eventTransfersHub } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

const PAGE_DESCRIPTION =
  'Premium private transfers to Belgium’s top festivals, Formula 1, Ferrari track days, and corporate summits. Fixed flat rates, up to 8 passengers, guaranteed late-night pickups.';

export const metadata: Metadata = {
  title: 'Private Event Transfers Belgium | Luxury 8-Seater Chauffeur | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://helicro.be/services/event-transfers',
    languages: {
      en: 'https://helicro.be/services/event-transfers',
      nl: 'https://helicro.be/nl/services/event-transfers',
      fr: 'https://helicro.be/fr/services/event-transfers',
    },
  },
  openGraph: {
    title: 'Private Event Transfers Belgium | Helicro',
    description:
      'Luxury 8-seater chauffeur transfers for festivals, F1 Spa, and corporate events across Belgium.',
    url: 'https://helicro.be/services/event-transfers',
    type: 'website',
  },
};

export default function Page() {
  const content = eventTransfersHub.en;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Premium Event Transfers & Chauffeur Services in Belgium',
            serviceType: 'Event Chauffeur & Minivan Transfer',
            description: PAGE_DESCRIPTION,
            url: '/services/event-transfers',
            areaServed: [
              { type: 'Country', name: 'Belgium' },
              { type: 'City', name: 'Brussels' },
              { type: 'City', name: 'Boom' },
              { type: 'City', name: 'Spa' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Event Transfers', url: '/services/event-transfers' },
          ]),
        ]}
      />
      <EventTransferPage lang="en" content={content} />
    </>
  );
}
