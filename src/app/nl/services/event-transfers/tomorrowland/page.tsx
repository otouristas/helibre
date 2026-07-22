import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { tomorrowlandContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

const PAGE_DESCRIPTION =
  'Privé VIP-transfers met 8-zitter naar Tomorrowland in Boom. Directe ophaling vanaf Brussels Airport (BRU), Charleroi (CRL) en hotels. Vaste tarieven & gegarandeerde nachtritten.';

export const metadata: Metadata = {
  title: 'Tomorrowland Privétransfers | Brussel naar Boom Chauffeur | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://helicro.be/nl/services/event-transfers/tomorrowland',
    languages: {
      en: 'https://helicro.be/services/event-transfers/tomorrowland',
      nl: 'https://helicro.be/nl/services/event-transfers/tomorrowland',
      fr: 'https://helicro.be/fr/services/event-transfers/tomorrowland',
    },
  },
};

export default function Page() {
  const content = tomorrowlandContent.nl;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Tomorrowland VIP privétransfer & chauffeursdienst',
            serviceType: 'Event Chauffeur & Minivan Transfer',
            description: PAGE_DESCRIPTION,
            url: '/nl/services/event-transfers/tomorrowland',
            areaServed: [
              { type: 'City', name: 'Boom' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/nl' },
            { name: 'Evenemententransfers', url: '/nl/services/event-transfers' },
            { name: 'Tomorrowland', url: '/nl/services/event-transfers/tomorrowland' },
          ]),
        ]}
      />
      <EventTransferPage lang="nl" content={content} />
    </>
  );
}
