import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { tomorrowlandContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

const PAGE_DESCRIPTION =
  'Transferts VIP privés 8 places vers Tomorrowland à Boom. Prise en charge directe depuis Bruxelles Airport (BRU), Charleroi (CRL) et hôtels. Tarifs fixes & retours de nuit garantis.';

export const metadata: Metadata = {
  title: 'Transferts Privés Tomorrowland | Bruxelles–Boom Chauffeur | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://helicro.be/fr/services/event-transfers/tomorrowland',
    languages: {
      en: 'https://helicro.be/services/event-transfers/tomorrowland',
      nl: 'https://helicro.be/nl/services/event-transfers/tomorrowland',
      fr: 'https://helicro.be/fr/services/event-transfers/tomorrowland',
    },
  },
};

export default function Page() {
  const content = tomorrowlandContent.fr;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Transfert VIP privé Tomorrowland & chauffeur',
            serviceType: 'Event Chauffeur & Minivan Transfer',
            description: PAGE_DESCRIPTION,
            url: '/fr/services/event-transfers/tomorrowland',
            areaServed: [
              { type: 'City', name: 'Boom' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Accueil', url: '/fr' },
            { name: 'Transferts événementiels', url: '/fr/services/event-transfers' },
            { name: 'Tomorrowland', url: '/fr/services/event-transfers/tomorrowland' },
          ]),
        ]}
      />
      <EventTransferPage lang="fr" content={content} />
    </>
  );
}
