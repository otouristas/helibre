import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { spaMotorsportContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

const PAGE_DESCRIPTION =
  'Transferts privés premium vers le Circuit de Spa-Francorchamps pour Formule 1, Ferrari track days et 24h Spa. Minivan luxe 8 places depuis Bruxelles et aéroports.';

export const metadata: Metadata = {
  title: 'Transferts F1 Spa-Francorchamps & Motorsport | Chauffeur Privé | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://helicro.be/fr/services/event-transfers/formula-1-spa-francorchamps',
    languages: {
      en: 'https://helicro.be/services/event-transfers/formula-1-spa-francorchamps',
      nl: 'https://helicro.be/nl/services/event-transfers/formula-1-spa-francorchamps',
      fr: 'https://helicro.be/fr/services/event-transfers/formula-1-spa-francorchamps',
    },
  },
};

export default function Page() {
  const content = spaMotorsportContent.fr;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Chauffeur privé F1 & motorsport Spa-Francorchamps',
            serviceType: 'Motorsport Private Transport',
            description: PAGE_DESCRIPTION,
            url: '/fr/services/event-transfers/formula-1-spa-francorchamps',
            areaServed: [
              { type: 'City', name: 'Spa' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Accueil', url: '/fr' },
            { name: 'Transferts événementiels', url: '/fr/services/event-transfers' },
            {
              name: 'Spa-Francorchamps F1',
              url: '/fr/services/event-transfers/formula-1-spa-francorchamps',
            },
          ]),
        ]}
      />
      <EventTransferPage lang="fr" content={content} />
    </>
  );
}
