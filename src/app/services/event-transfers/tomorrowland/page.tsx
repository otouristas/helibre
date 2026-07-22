import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { tomorrowlandContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Tomorrowland Private Transfers | Brussels to Boom Chauffeur Van | Helicro',
  description:
    'Private 8-seater VIP transfers to Tomorrowland in Boom. Direct pickups from Brussels Airport (BRU), Charleroi (CRL), and hotels. Fixed rates & guaranteed night rides.',
  alternates: {
    canonical: 'https://helicro.be/services/event-transfers/tomorrowland',
    languages: {
      en: 'https://helicro.be/services/event-transfers/tomorrowland',
      nl: 'https://helicro.be/nl/services/event-transfers/tomorrowland',
      fr: 'https://helicro.be/fr/services/event-transfers/tomorrowland',
    },
  },
  openGraph: {
    title: 'Tomorrowland Private Transfers | Helicro',
    description:
      'VIP private minivan transfers from Brussels airports and hotels to Tomorrowland Boom.',
    url: 'https://helicro.be/services/event-transfers/tomorrowland',
    type: 'website',
  },
};

export default function Page() {
  const content = tomorrowlandContent.en;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Tomorrowland VIP Private Transfer & Chauffeur Service',
            serviceType: 'Event Chauffeur & Minivan Transfer',
            description:
              'Luxury 8-passenger private minivan transfers from Brussels airports and hotels directly to Tomorrowland festival in Boom.',
            url: '/services/event-transfers/tomorrowland',
            areaServed: [
              { type: 'City', name: 'Boom' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Event Transfers', url: '/services/event-transfers' },
            { name: 'Tomorrowland', url: '/services/event-transfers/tomorrowland' },
          ]),
        ]}
      />
      <EventTransferPage lang="en" content={content} />
    </>
  );
}
