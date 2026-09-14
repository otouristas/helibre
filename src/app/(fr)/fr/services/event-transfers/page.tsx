import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { eventTransfersHub } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'Transferts privés premium vers les festivals belges, Formule 1, Ferrari track days et sommets corporate. Tarifs forfaitaires, jusqu’à 8 passagers, retours de nuit garantis.';

export const metadata: Metadata = pageMetadata({
  lang: 'fr',
  title: 'Transferts Événementiels Belgique | Chauffeur Minivan 8 Places | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: sharedPathAlternates('/services/event-transfers', ['en', 'nl', 'fr']),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = eventTransfersHub.fr;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Transferts événementiels premium & chauffeur privé en Belgique',
            serviceType: 'Event Chauffeur & Minivan Transfer',
            description: PAGE_DESCRIPTION,
            url: '/fr/services/event-transfers',
            areaServed: [
              { type: 'Country', name: 'Belgium' },
              { type: 'City', name: 'Brussels' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Accueil', url: '/fr' },
            { name: 'Transferts événementiels', url: '/fr/services/event-transfers' },
          ]),
        ]}
      />
      <EventTransferPage lang="fr" content={content} />
    </>
  );
}
