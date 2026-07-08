'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import styles from './faq.module.css';

interface FAQCategory {
  title: string;
  items: {
    q: string;
    a: string;
  }[];
}

export default function FaqClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const pathname = usePathname();
  
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (catIndex: number, itemIndex: number) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const ui = {
    en: {
      metaTitle: 'FAQ | Helicro Airport Transfers and Chauffeur Services',
      metaDesc: 'Frequently asked questions about booking, payments, cancellations, delays, and child safety booster seats for private transfers in Brussels.',
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions regarding bookings, payments, flight delays, and our Ford minivan fleet.'
    },
    nl: {
      metaTitle: 'Veelgestelde Vragen | Helicro Luchthavenvervoer',
      metaDesc: 'Veelgestelde vragen over boekingen, betalingen, annuleringen, vluchtvertragingen en kinderzitjes voor privévervoer in Brussel.',
      title: 'Veelgestelde Vragen (FAQ)',
      subtitle: 'Vind antwoorden op veelgestelde vragen over boekingen, betalingen, vluchtvertragingen en ons Ford-wagenpark.'
    },
    fr: {
      metaTitle: 'FAQ | Helicro Navette Aéroport et Chauffeur Privé',
      metaDesc: 'Foire aux questions sur les réservations, paiements, annulations, retards de vol et sièges enfants à Bruxelles.',
      title: 'Foire Aux Questions (FAQ)',
      subtitle: 'Retrouvez les réponses à vos questions concernant les réservations, les tarifs, les retards de vol et nos minivans Ford.'
    },
    el: {
      metaTitle: 'Συχνές Ερωτήσεις | Helicro Μεταφορές Αεροδρομίου',
      metaDesc: 'Συχνές ερωτήσεις σχετικά με κρατήσεις, πληρωμές, ακυρώσεις, καθυστερήσεις πτήσεων και παιδικά καθίσματα στις Βρυξέλλες.',
      title: 'Συχνές Ερωτήσεις',
      subtitle: 'Βρείτε απαντήσεις σε συνήθεις απορίες για κρατήσεις, τρόπους πληρωμής, καθυστερήσεις πτήσεων και τον στόλο μας.'
    },
    hr: {
      metaTitle: 'Česta pitanja | Helicro privatni transferi',
      metaDesc: 'Odgovori na uobičajena pitanja o rezervacijama, plaćanjima, otkazivanjima i dječjim autosjedalicama za privatne transfere u Briselu.',
      title: 'Česta pitanja',
      subtitle: 'Imate li pitanja o našim uslugama? Ovdje su odgovori na najčešće upite naših klijenata.'
    }
  }[lang];

  // Localized FAQ categories data
  const categories: FAQCategory[] = {
    en: [
      {
        title: 'Booking & Cancellations',
        items: [
          {
            q: 'How do I request a private transfer or service?',
            a: 'You can easily request a transfer by filling out our online booking form, contacting us via WhatsApp, sending a text message, or emailing us directly. You will receive a confirmation quote soon after.'
          },
          {
            q: 'What is your cancellation and refund policy?',
            a: 'Cancellations and booking changes are completely free of charge up to 24 hours before your scheduled pickup. Within 24 hours, please call our emergency dispatch line directly.'
          },
          {
            q: 'What happens if my flight is delayed or cancelled?',
            a: 'We monitor arriving flights in real-time. If your flight is delayed, your pickup time is adjusted automatically. If the flight is cancelled, please notify us as soon as possible.'
          }
        ]
      },
      {
        title: 'Rates & Payments',
        items: [
          {
            q: 'Are your prices fixed or metered?',
            a: 'All our fares are fixed and pre-arranged. The price you see on your quote is what you pay. There are no hidden fees, luggage surcharges, or toll expenses.'
          },
          {
            q: 'What payment options do you support?',
            a: 'We support flexible billing methods. You can pay securely online, by direct bank transfer, or invoice (for corporate partners). Cash payments to the driver are also accepted.'
          },
          {
            q: 'Do you charge extra for night transfers?',
            a: 'Our private transfer prices are flat rates. However, shared shuttle routes have day and night rates as listed in our pricing table.'
          }
        ]
      },
      {
        title: 'Fleet & Service Details',
        items: [
          {
            q: 'What vehicles make up the Helicro fleet?',
            a: 'Our fleet comprises clean, modern Ford minivans (Transit Custom and Tourneo Custom) that fit up to 8 passengers comfortably, with large luggage storage space.'
          },
          {
            q: 'Do you provide baby and child seats?',
            a: 'Yes, child safety seats and booster cushions are available on request at no extra cost. Please indicate the quantity and ages of your children when requesting a ride.'
          },
          {
            q: 'Is driver language support available?',
            a: 'Yes, our main chauffeur Gerasimos speaks fluent English, Greek, and French, ensuring seamless, clear communication.'
          }
        ]
      }
    ],
    nl: [
      {
        title: 'Boekingen & Annuleringen',
        items: [
          {
            q: 'Hoe vraag ik een privé transfer of dienst aan?',
            a: 'U kunt eenvoudig een transfer aanvragen door ons online formulier in te vullen, ons te contacteren via WhatsApp, SMS of een e-mail te sturen. U ontvangt snel daarna een bevestiging met het tarief.'
          },
          {
            q: 'Wat zijn de annuleringsvoorwaarden?',
            a: 'Annuleringen en wijzigingen zijn 100% gratis tot 24 uur voor de geplande rit. Binnen 24 uur vragen we u direct contact op te nemen via onze noodlijn.'
          },
          {
            q: 'Wat gebeurt er als mijn vlucht vertraagd of geannuleerd is?',
            a: 'Wij monitoren vluchten live. Als uw vlucht vertraging heeft, passen we de ophaaltijd automatisch aan. Als de vlucht geannuleerd is, laat het ons dan zo snel mogelijk weten.'
          }
        ]
      },
      {
        title: 'Tarieven & Betalingen',
        items: [
          {
            q: 'Zijn uw prijzen vast of op de taximeter?',
            a: 'Al onze tarieven zijn vast en vooraf afgesproken. De prijs op de offerte is het bedrag dat u betaalt. Geen verrassingen achteraf voor bagage of tolwegen.'
          },
          {
            q: 'Welke betalingsmethoden accepteert u?',
            a: 'Wij bieden flexibele betalingsmogelijkheden: veilig online betalen, bankoverschrijving, maandelijkse factuur (voor bedrijven) of contant bij aankomst aan de chauffeur.'
          },
          {
            q: 'Geldt er een toeslag voor nachtritten?',
            a: 'Onze privé transfers hebben vaste all-in tarieven (dag & nacht). Gedeelde shuttles daarentegen werken wel met dag- en nachttarieven.'
          }
        ]
      },
      {
        title: 'Voertuigen & Diensten',
        items: [
          {
            q: 'Welke voertuigen heeft Helicro?',
            a: 'Ons wagenpark bestaat uit nette, jonge Ford Transit Custom en Tourneo Custom minivans voor maximaal 8 personen en ruime bagageruimte.'
          },
          {
            q: 'Levert u kinderstoeltjes en Maxi-Cosi?',
            a: 'Ja, kinderzitjes en verhogers zijn geheel gratis leverbaar. Geef het aantal en de leeftijd door bij uw reservering.'
          },
          {
            q: 'Welke talen spreekt de chauffeur?',
            a: 'Onze hoofdchauffeur Gerasimos spreekt vloeiend Engels, Grieks en Frans.'
          }
        ]
      }
    ],
    fr: [
      {
        title: 'Réservations & Annulations',
        items: [
          {
            q: 'Comment faire une demande de transfert privé ?',
            a: 'Vous pouvez faire votre demande facilement via notre formulaire en ligne, par WhatsApp, par SMS ou par e-mail. Vous recevrez une confirmation de tarif fixe rapidement.'
          },
          {
            q: 'Quelle est votre politique d&apos;annulation ?',
            a: 'Les annulations et modifications sont gratuites jusqu&apos;à 24 heures avant l&apos;heure de prise en charge prévue. Moins de 24 heures avant, contactez notre ligne d&apos;urgence directement.'
          },
          {
            q: 'Que se passe-t-il si mon vol est en retard ou annulé ?',
            a: 'Nous suivons l&apos;état des vols en direct. En cas de retard, l&apos;heure d&apos;arrivée du chauffeur est réajustée gratuitement. En cas d&apos;annulation, merci de nous prévenir au plus vite.'
          }
        ]
      },
      {
        title: 'Tarifs & Paiements',
        items: [
          {
            q: 'Vos tarifs sont-ils fixes ou au compteur ?',
            a: 'Tous nos prix sont forfaitaires et fixes. Le prix indiqué sur votre devis est celui que vous payez. Pas de frais supplémentaires pour les bagages ou les péages.'
          },
          {
            q: 'Quels sont les moyens de paiement acceptés ?',
            a: 'Nous acceptons les paiements sécurisés par carte en ligne, virement bancaire, facturation mensuelle (pour les entreprises) ou espèces directement auprès du chauffeur.'
          },
          {
            q: 'Y a-t-il un supplément pour les transferts de nuit ?',
            a: 'Nos prix pour les transferts privés sont forfaitaires 24h/24. Seules les navettes partagées disposent de grilles tarifaires différenciées jour/nuit.'
          }
        ]
      },
      {
        title: 'Véhicules & Services',
        items: [
          {
            q: 'Quels véhicules compose la flotte d&apos;Helicro ?',
            a: 'Notre flotte est constituée de minivans Ford Transit Custom et Classe V récents, climatisés, pouvant accueillir jusqu&apos;à 8 passagers et de nombreuses valises.'
          },
          {
            q: 'Fournissez-vous des sièges bébé et rehausseurs ?',
            a: 'Oui, nous mettons à votre disposition des sièges auto et des rehausseurs gratuitement sur simple demande. Précisez l&apos;âge des enfants lors de la réservation.'
          },
          {
            q: 'Quelles langues parle le chauffeur ?',
            a: 'Votre chauffeur principal Gerasimos parle couramment le français, l&apos;anglais, le grec et le néerlandais.'
          }
        ]
      }
    ],
    el: [
      {
        title: 'Κρατήσεις & Ακυρώσεις',
        items: [
          {
            q: 'Πώς μπορώ να κάνω αίτηση κράτησης;',
            a: 'Μπορείτε να κάνετε αίτηση κράτησης συμπληρώνοντας την online φόρμα μας, στέλνοντας μήνυμα στο WhatsApp ή στέλνοντας email. Θα λάβετε άμεσα επιβεβαίωση της τιμής.'
          },
          {
            q: 'Ποια είναι η πολιτική ακύρωσης;',
            a: 'Οι ακυρώσεις και οι αλλαγές είναι εντελώς δωρεάν έως και 24 ώρες πριν από το προγραμματισμένο ραντεβού. Για αλλαγές της τελευταίας στιγμής, καλέστε μας απευθείας στο τηλέφωνο.'
          },
          {
            q: 'Τι συμβαίνει σε περίπτωση καθυστέρησης της πτήσης μου;',
            a: 'Παρακολουθούμε τις πτήσεις σε πραγματικό χρόνο. Αν η πτήση σας καθυστερήσει, η ώρα παραλαβής προσαρμόζεται αυτόματα χωρίς καμία επιπλέον χρέωση.'
          }
        ]
      },
      {
        title: 'Τιμές & Πληρωμές',
        items: [
          {
            q: 'Οι τιμές είναι σταθερές ή με ταξίμετρο;',
            a: 'Όλες οι τιμές μας είναι σταθερές και συμφωνημένες εκ των προτέρων. Η τιμή που αναφέρεται στην προσφορά σας είναι η τελική. Δεν υπάρχουν κρυφές χρεώσεις ή επιπλέον έξοδα για αποσκευές.'
          },
          {
            q: 'Ποιους τρόπους πληρωμής υποστηρίζετε;',
            a: 'Υποστηρίζουμε πληρωμές online με κάρτα, τραπεζική μεταφορά, τιμολόγηση για εταιρείες ή πληρωμή με μετρητά απευθείας στον οδηγό κατά την άφιξη.'
          },
          {
            q: 'Υπάρχει επιπλέον χρέωση για νυχτερινές διαδρομές;',
            a: 'Οι τιμές των ιδιωτικών μεταφορών μας είναι σταθερές (flat rates) όλο το 24ωρο. Μόνο τα κοινόχρηστα δρομολόγια (shared shuttles) έχουν διαφορά ημέρας/νύχτας.'
          }
        ]
      },
      {
        title: 'Οχήματα & Υπηρεσίες',
        items: [
          {
            q: 'Από τι οχήματα αποτελείται ο στόλος σας;',
            a: 'Ο στόλος μας αποτελείται από σύγχρονα και καθαρά Ford Transit Custom και Tourneo Custom minivans, χωρητικότητας έως 8 επιβατών, με μεγάλους χώρους αποσκευών.'
          },
          {
            q: 'Παρέχετε παιδικά καθίσματα ασφαλείας;',
            a: 'Ναι, παιδικά καθίσματα και reboosters παρέχονται εντελώς δωρεάν. Παρακαλούμε να το αναφέρετε κατά τη διαδικασία της κράτησής σας.'
          },
          {
            q: 'Σε ποιες γλώσσες εξυπηρετεί ο οδηγός;',
            a: 'Ο βασικός μας οδηγός Γεράσιμος μιλάει άπταιστα Ελληνικά, Αγγλικά και Γαλλικά.'
          }
        ]
      }
    ],
    hr: [
        {
          title: 'Rezervacije i otkazivanja',
          items: [
            {
              q: 'Kako mogu zatražiti privatni transfer ili uslugu?',
              a: 'Možete jednostavno zatražiti transfer ispunjavanjem našeg online obrasca za rezervaciju, kontaktiranjem putem WhatsAppa, slanjem SMS-a ili e-poštom. Ubrzo nakon toga primit ćete potvrdu cijene.'
            },
            {
              q: 'Kakva je vaša politika otkazivanja i povrata novca?',
              a: 'Otkazivanja i promjene rezervacija potpuno su besplatni do 24 sata prije zakazanog preuzimanja. Unutar 24 sata molimo da izravno nazovete našu hitnu dispečersku liniju.'
            },
            {
              q: 'Što se događa ako moj let kasni ili bude otkazan?',
              a: 'Pratimo dolazne letove u stvarnom vremenu. Ako vaš let kasni, vrijeme preuzimanja se automatski prilagođava. Ako je let otkazan, obavijestite nas što je prije moguće.'
            }
          ]
        },
        {
          title: 'Cijene i plaćanja',
          items: [
            {
              q: 'Jesu li vaše cijene fiksne ili se mjere taksimetrom?',
              a: 'Sve naše cijene su fiksne i unaprijed dogovorene. Cijena koju vidite na ponudi je ono što plaćate. Nema skrivenih naknada, doplate za prtljagu ili troškova cestarine.'
            },
            {
              q: 'Koje načine plaćanja podržavate?',
              a: 'Podržavamo fleksibilne načine plaćanja. Možete sigurno platiti online, izravnim bankovnim transferom ili računom (za korporativne partnere). Također prihvaćamo gotovinsko plaćanje vozaču.'
            },
            {
              q: 'Naplaćujete li dodatno za noćne transfere?',
              a: 'Naše cijene privatnih transfera su fiksne — noćni doplatak se ne primjenjuje. Za rezervacije zajedničkog shuttlea, dnevne cijene vrijede od 06:00 do 22:00, a noćne od 22:00 do 06:00, kako je navedeno u našoj tablici cijena.'
            }
          ]
        },
        {
          title: 'Detalji o voznom parku i uslugama',
          items: [
            {
              q: 'Koja vozila čine vozni park Helicra?',
              a: 'Naš vozni park čine čisti, moderni Ford minivani (Transit Custom i Tourneo Custom) u koje se udobno može smjestiti do 8 putnika, s velikim prostorom za prtljagu.'
            },
            {
              q: 'Nudite li dječje sjedalice i boostere?',
              a: 'Da, dječje autosjedalice i booster sjedalice dostupne su na zahtjev bez dodatnih troškova. Molimo navedite količinu i dob djece pri rezervaciji.'
            },
            {
              q: 'Govori li vozač strane jezike?',
              a: 'Da, naš glavni vozač Gerasimos tečno govori engleski, grčki i francuski, što osigurava jednostavnu i jasnu komunikaciju.'
            }
          ]
        }
      ]
    }[lang];

  return (
    <div className="section">
      
      

      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {ui.title}
        </h1>
        <p className="text-center text-slate-500 mb-12">
          {ui.subtitle}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-light)', marginBottom: '16px', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>
                {cat.title}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cat.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div 
                      key={itemIdx} 
                      className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                    >
                      <button 
                        className={styles.header} 
                        onClick={() => toggleAccordion(catIdx, itemIdx)}
                        aria-expanded={isOpen}
                      >
                        {item.q}
                        <svg 
                          className={styles.icon} 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      <div 
                        className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
                        style={{ maxHeight: isOpen ? '250px' : '0' }}
                      >
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
