import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { spaMotorsportContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';

const PAGE_DESCRIPTION =
  'Premium privétransfers naar Circuit de Spa-Francorchamps voor Formule 1, Ferrari track days en 24u Spa. Luxe 8-zitter vanuit Brussel & luchthavens.';

export const metadata: Metadata = {
  title: 'Spa-Francorchamps F1 & Motorsport Transfers | Privéchauffeur | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://helicro.be/nl/services/event-transfers/formula-1-spa-francorchamps',
    languages: {
      en: 'https://helicro.be/services/event-transfers/formula-1-spa-francorchamps',
      nl: 'https://helicro.be/nl/services/event-transfers/formula-1-spa-francorchamps',
      fr: 'https://helicro.be/fr/services/event-transfers/formula-1-spa-francorchamps',
    },
  },
};

export default function Page() {
  const content = spaMotorsportContent.nl;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Spa-Francorchamps F1 & motorsport privéchauffeur',
            serviceType: 'Motorsport Private Transport',
            description: PAGE_DESCRIPTION,
            url: '/nl/services/event-transfers/formula-1-spa-francorchamps',
            areaServed: [
              { type: 'City', name: 'Spa' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/nl' },
            { name: 'Evenemententransfers', url: '/nl/services/event-transfers' },
            {
              name: 'Spa-Francorchamps F1',
              url: '/nl/services/event-transfers/formula-1-spa-francorchamps',
            },
          ]),
        ]}
      />
      <EventTransferPage lang="nl" content={content} />
    </>
  );
}
