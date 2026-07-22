import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { eventTransfersHub } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

const PAGE_DESCRIPTION =
  'Premium privétransfers naar festivals, Formule 1, Ferrari track days en bedrijfstoppen in België. Vaste tarieven, tot 8 passagiers, gegarandeerde late retourritten.';

export const metadata: Metadata = {
  title: 'Privé Evenemententransfers België | Luxe 8-Zitter Chauffeur | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://helicro.be/nl/services/event-transfers',
    languages: {
      en: 'https://helicro.be/services/event-transfers',
      nl: 'https://helicro.be/nl/services/event-transfers',
      fr: 'https://helicro.be/fr/services/event-transfers',
    },
  },
};

export default function Page() {
  const content = eventTransfersHub.nl;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Premium evenemententransfers & chauffeursdiensten in België',
            serviceType: 'Event Chauffeur & Minivan Transfer',
            description: PAGE_DESCRIPTION,
            url: '/nl/services/event-transfers',
            areaServed: [
              { type: 'Country', name: 'Belgium' },
              { type: 'City', name: 'Brussels' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/nl' },
            { name: 'Evenemententransfers', url: '/nl/services/event-transfers' },
          ]),
        ]}
      />
      <EventTransferPage lang="nl" content={content} />
    </>
  );
}
