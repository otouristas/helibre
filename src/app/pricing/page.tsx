'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import FareCalculator from '@/components/FareCalculator';

export default function Pricing() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);

  // Localization Dictionary for Pricing Page
  const ui = {
    en: {
      title: 'Helicro Transport pricing for airport transfers and private rides',
      subtitle: 'Completely transparent flat rates with no hidden fees. All prices include toll taxes, airport greeting, and child booster seats.',
      h2Calc: '1. Calculate Your Price Instantly',
      h2Rates: '2. Fixed Airport Transfer Flat Rates (Brussels Origins)',
      minivanFares: 'Private Minivan • Flat Fares',
      zaventemTitle: 'Brussels to Zaventem (BRU)',
      charleroiTitle: 'Brussels to Charleroi (CRL)',
      pax12: '1 - 2 Passengers',
      pax34: '3 - 4 Passengers',
      pax58: '5 - 8 Passengers',
      from: 'From',
      
      h3Included: '3. What is Included in the Fare?',
      incTrack: 'Flight Tracking:',
      incTrackDesc: 'Live monitoring of arrival times. We adjust pickups at no cost.',
      incMeet: 'Meet & Greet:',
      incMeetDesc: 'Driver meets you inside arrivals holding a name sign.',
      incTolls: 'All Tolls & Fees:',
      incTollsDesc: 'Road taxes and airport entry fees are fully covered.',
      incSeats: 'Infant & Safety Seats:',
      incSeatsDesc: 'Provided free of charge on request.',
      incLuggage: 'Generous Luggage:',
      incLuggageDesc: 'Room for all bags with no surcharges.',

      h3Surcharge: '4. Surcharge Policy',
      surchargeIntro: 'For standard pre-booked private transfers, our prices are strictly flat. Surcharges are only applied in specific cases:',
      surchargeNight: 'Night Rates:',
      surchargeNightDesc: 'Only applicable to shared shuttle bookings (between 21:30 and 07:00).',
      surchargeWait: 'Extra Waiting Time:',
      surchargeWaitDesc: 'First 60 minutes after flight landing is free. Thereafter, billing is 30€/hour.',
      surchargeDetour: 'Detours:',
      surchargeDetourDesc: 'Extra pickups/dropoffs along the route are billed at a flat 10€ per stop.',

      h4Cancel: '5. Cancellation Policy',
      cancelDesc: 'Cancellations and updates are 100% free of charge up to 24 hours prior to the transfer. Inside 24 hours, last-minute changes are subject to dispatch availability.',
      
      h4Loyalty: '6. Loyalty Discounts',
      loyaltyDesc: 'We offer preferred contract billing and discounts for frequent business commuters, corporate shuttle needs, embassy logistics, and repeat clients.',
      
      h4Payment: '7. Payment Options',
      paymentDesc: 'Pay securely via bank transfer, online card payment, corporate monthly invoice billing, or cash directly to the driver at completion.',

      h3Faq: '8. Pricing FAQs',
      q1: 'How do I know my exact price quote?',
      a1: 'Simply fill in your destination, date, and passenger count in our on-site estimator above, or complete our request form. We will verify the details and email/text you a final fixed-price quote.',
      q2: 'Are there additional charges for child booster seats?',
      a2: 'No. All infant and child safety booster seats are provided completely free of charge. Please mention them during the booking process.',
      q3: 'Do we pay tolls or airport parking separately?',
      a3: 'No. Airport parking fees (for the greeting time) and motorway toll fees (like the Liefkenshoek tunnel) are 100% included in the initial flat rate quote.',

      btnQuote: 'Request Fixed Quote',
      btnWhatsapp: 'Chat on WhatsApp'
    },
    nl: {
      title: 'Tarieven van Helicro Transport voor luchthavenvervoer en privé ritten',
      subtitle: 'Volledig transparante vaste tarieven zonder verborgen kosten. Alle prijzen inclusief tolwegen, terminal ontmoeting en kinderzitjes.',
      h2Calc: '1. Bereken Uw Ritprijs Direct',
      h2Rates: '2. Vaste Tarieven Luchthavenvervoer (Vanuit Brussel)',
      minivanFares: 'Privé Minivan • Vaste Tarieven',
      zaventemTitle: 'Brussel naar Zaventem (BRU)',
      charleroiTitle: 'Brussel naar Charleroi (CRL)',
      pax12: '1 - 2 Passagiers',
      pax34: '3 - 4 Passagiers',
      pax58: '5 - 8 Passagiers',
      from: 'Vanaf',
      
      h3Included: '3. Wat is Inbegrepen in de Prijs?',
      incTrack: 'Vluchtmonitoring:',
      incTrackDesc: 'Live controle van aankomsttijden. Wij passen de ophaaltijd gratis aan.',
      incMeet: 'Ontmoeting in Terminal:',
      incMeetDesc: 'De chauffeur wacht u op in de aankomsthal met een naambordje.',
      incTolls: 'Alle Tolwegen & Toeslagen:',
      incTollsDesc: 'Wegentaksen en parkeerkosten voor het ophalen zijn inbegrepen.',
      incSeats: 'Kinderzitjes & Maxi-Cosi:',
      incSeatsDesc: 'Geheel gratis beschikbaar op aanvraag bij boeking.',
      incLuggage: 'Ruime Bagage:',
      incLuggageDesc: 'Plaats voor al uw koffers zonder extra kosten.',

      h3Surcharge: '4. Toeslagenbeleid',
      surchargeIntro: 'Voor standaard vooraf geboekte privé transfers gelden vaste prijzen. Extra toeslagen gelden alleen bij:',
      surchargeNight: 'Nachttarief:',
      surchargeNightDesc: 'Alleen van toepassing op gedeelde shuttles (tussen 21:30 en 07:00 uur).',
      surchargeWait: 'Extra Wachttijd:',
      surchargeWaitDesc: 'Eerste 60 minuten na landing zijn gratis. Daarna 30€ per uur.',
      surchargeDetour: 'Extra Tussenstop:',
      surchargeDetourDesc: 'Tussenstops op de route worden gefactureerd aan 10€ per stop.',

      h4Cancel: '5. Annuleringsvoorwaarden',
      cancelDesc: 'Annuleren en wijzigen is 100% gratis tot 24 uur voor aanvang. Binnen 24 uur zijn wijzigingen afhankelijk van beschikbaarheid.',
      
      h4Loyalty: '6. Klantenkorting',
      loyaltyDesc: 'Wij bieden contracten en kortingen voor frequente zakelijke reizigers, zakelijke shuttles, ambassades en trouwe klanten.',
      
      h4Payment: '7. Betalingsmogelijkheden',
      paymentDesc: 'Betaal veilig via bankoverschrijving, online kaartbetaling, maandelijkse facturatie of contant aan de chauffeur.',

      h3Faq: '8. Veelgestelde Vragen over Tarieven',
      q1: 'Hoe ken ik mijn exacte prijs?',
      a1: 'Vul uw bestemming, datum en aantal passagiers in op onze calculator hierboven, of vul het aanvraagformulier in. We sturen u snel een definitieve vaste offerte.',
      q2: 'Zijn er extra kosten voor kinderzitjes?',
      a2: 'Nee. Alle baby- en kinderzitjes worden gratis verstrekt. Geef dit wel aan bij uw reservering.',
      q3: 'Moeten we tolgeld of parkeerkosten apart betalen?',
      a3: 'Nee. Parkeergelden (voor de chauffeur bij aankomst) en snelwegtollen (zoals de Liefkenshoektunnel) zijn inbegrepen.',

      btnQuote: 'Vraag Vaste Offerte Aan',
      btnWhatsapp: 'Chat op WhatsApp'
    },
    fr: {
      title: 'Tarifs de Helicro Transport pour navettes aéroport et trajets privés',
      subtitle: 'Des tarifs forfaitaires transparents, sans frais cachés. Péages, accueil en terminal et sièges enfants inclus.',
      h2Calc: '1. Calculez Votre Prix Instantanément',
      h2Rates: '2. Tarifs Forfaitaires Aéroport (Départs de Bruxelles)',
      minivanFares: 'Minivan Privé • Tarifs Fixes',
      zaventemTitle: 'Bruxelles vers Zaventem (BRU)',
      charleroiTitle: 'Bruxelles vers Charleroi (CRL)',
      pax12: '1 - 2 Passagers',
      pax34: '3 - 4 Passagers',
      pax58: '5 - 8 Passagers',
      from: 'À partir de',
      
      h3Included: '3. Qu&apos;est-ce qui est Inclus dans le Tarif ?',
      incTrack: 'Suivi des Vols :',
      incTrackDesc: 'Suivi en temps réel des horaires. Nous ajustons l&apos;heure de prise en charge sans frais.',
      incMeet: 'Accueil Personnalisé :',
      incMeetDesc: 'Le chauffeur vous attend dans le hall des arrivées avec un panneau à votre nom.',
      incTolls: 'Péages & Taxes Routières :',
      incTollsDesc: 'Toutes les taxes d&apos;autoroute et d&apos;accès aéroport sont incluses.',
      incSeats: 'Sièges & Rehausseurs Bébé :',
      incSeatsDesc: 'Fournis gratuitement sur simple demande.',
      incLuggage: 'Bagages Volumineux :',
      incLuggageDesc: 'Espace suffisant pour tous vos bagages sans supplément.',

      h3Surcharge: '4. Politique de Suppléments',
      surchargeIntro: 'Pour les transferts privés pré-réservés, nos tarifs sont fixes. Des frais supplémentaires s&apos;appliquent uniquement pour :',
      surchargeNight: 'Tarifs Nuit :',
      surchargeNightDesc: 'Applicable uniquement aux réservations de navettes partagées (entre 21h30 et 7h00).',
      surchargeWait: 'Temps d&apos;Attente Supplémentaire :',
      surchargeWaitDesc: 'Les 60 premières minutes après atterrissage sont gratuites. Ensuite, 30€/heure.',
      surchargeDetour: 'Détours :',
      surchargeDetourDesc: 'Les arrêts supplémentaires sur le trajet sont facturés 10€ par arrêt.',

      h4Cancel: '5. Conditions d&apos;Annulation',
      cancelDesc: 'Les annulations et modifications sont 100% gratuites jusqu&apos;à 24h avant le trajet. Moins de 24h avant, les changements dépendent des disponibilités.',
      
      h4Loyalty: '6. Tarifs Préférentiels',
      loyaltyDesc: 'Nous proposons une facturation contractuelle et des remises pour les voyageurs d&apos;affaires fréquents, navettes d&apos;entreprise et ambassades.',
      
      h4Payment: '7. Options de Paiement',
      paymentDesc: 'Payez en toute sécurité par virement, carte en ligne, facturation mensuelle d&apos;entreprise ou espèces au chauffeur.',

      h3Faq: '8. Questions Fréquentes sur les Tarifs',
      q1: 'Comment connaître mon tarif exact ?',
      a1: 'Utilisez notre estimateur ci-dessus ou remplissez notre formulaire. Nous vérifierons les détails et vous enverrons une confirmation de prix fixe.',
      q2: 'Y a-t-il des frais pour les sièges enfants ?',
      a2: 'Non. Tous les rehausseurs et sièges de sécurité pour bébés sont mis à disposition gratuitement. Veuillez le préciser lors de la commande.',
      q3: 'Faut-il payer le péage ou le parking de l&apos;aéroport ?',
      a3: 'Non. Les frais de parking aéroport et les péages routiers (comme le tunnel Liefkenshoek) sont intégralement compris dans le tarif.'
    },
    el: {
      title: 'Τιμολογιακή πολιτική της Helicro Transport για ιδιωτικές μετακινήσεις',
      subtitle: 'Απόλυτα διαφανείς σταθερές τιμές χωρίς κρυφές χρεώσεις. Περιλαμβάνονται διόδια, υποδοχή στο αεροδρόμιο και παιδικά καθίσματα.',
      h2Calc: '1. ΥΠΟΛΟΓΙΣΤΕ ΤΗΝ ΤΙΜΗ ΣΑΣ ΑΜΕΣΑ',
      h2Rates: '2. ΣΤΑΘΕΡΕΣ ΤΙΜΕΣ ΜΕΤΑΦΟΡΑΣ ΑΕΡΟΔΡΟΜΙΟΥ (ΑΠΟ ΒΡΥΞΕΛΛΕΣ)',
      minivanFares: 'ΙΔΙΩΤΙΚΟ MINIVAN • ΣΤΑΘΕΡΕΣ ΤΙΜΕΣ',
      zaventemTitle: 'ΒΡΥΞΕΛΛΕΣ ΠΡΟΣ ZAVENTEM (BRU)',
      charleroiTitle: 'ΒΡΥΞΕΛΛΕΣ ΠΡΟΣ CHARLEROI (CRL)',
      pax12: '1 - 2 ΕΠΙΒΑΤΕΣ',
      pax34: '3 - 4 ΕΠΙΒΑΤΕΣ',
      pax58: '5 - 8 ΕΠΙΒΑΤΕΣ',
      from: 'ΑΠΟ',
      
      h3Included: '3. ΤΙ ΠΕΡΙΛΑΜΒΑΝΕΤΑΙ ΣΤΗΝ ΤΙΜΗ;',
      incTrack: 'Flight Tracking:',
      incTrackDesc: 'Παρακολούθηση της πτήσης σας σε πραγματικό χρόνο. Προσαρμογή ώρας χωρίς χρέωση.',
      incMeet: 'Υποδοχή με Πινακίδα:',
      incMeetDesc: 'Ο οδηγός σας συναντά στις αφίξεις με ταμπέλα με το όνομά σας.',
      incTolls: 'Διόδια & Τέλη Αεροδρομίου:',
      incTollsDesc: 'Ολα τα έξοδα διοδίων και εισόδου στο αεροδρόμιο καλύπτονται πλήρως.',
      incSeats: 'Παιδικά Καθίσματα Ασφαλείας:',
      incSeatsDesc: 'Παρέχονται εντελώς δωρεάν κατόπιν αιτήματος κατά την κράτηση.',
      incLuggage: 'Ευρύχωρο Πορτμπαγκάζ:',
      incLuggageDesc: 'Χώρος για όλες τις αποσκευές σας χωρίς επιπλέον χρεώσεις.',

      h3Surcharge: '4. ΠΟΛΙΤΙΚΗ ΕΠΙΠΛΕΟΝ ΧΡΕΩΣΕΩΝ',
      surchargeIntro: 'Για τις προγραμματισμένες ιδιωτικές μεταφορές, οι τιμές είναι σταθερές. Επιπλέον χρεώσεις ισχύουν μόνο για:',
      surchargeNight: 'Νυχτερινές Διαδρομές:',
      surchargeNightDesc: 'Ισχύει μόνο για κρατήσεις κοινόχρηστων shuttles (μεταξύ 21:30 και 07:00).',
      surchargeWait: 'Επιπλέον Χρόνος Αναμονής:',
      surchargeWaitDesc: 'Τα πρώτα 60 λεπτά μετά την προσγείωση είναι δωρεάν. Μετά, η χρέωση είναι 30€/ώρα.',
      surchargeDetour: 'Παρακάμψεις:',
      surchargeDetourDesc: 'Οι επιπλέον στάσεις κατά μήκος της διαδρομής χρεώνονται με σταθερά 10€ ανά στάση.',

      h4Cancel: '5. ΠΟΛΙΤΙΚΗ ΑΚΥΡΩΣΗΣ',
      cancelDesc: 'Οι ακυρώσεις και οι αλλαγές είναι 100% δωρεάν έως και 24 ώρες πριν από τη μεταφορά. Εντός 24 ωρών, οι αλλαγές εξαρτώνται από τη διαθεσιμότητα.',
      
      h4Loyalty: '6. ΕΚΠΤΩΣΕΙΣ ΣΥΧΝΩΝ ΠΕΛΑΤΩΝ',
      loyaltyDesc: 'Προσφέρουμε προνομιακές τιμές και εκπτώσεις για συχνούς επαγγελματίες ταξιδιώτες, εταιρικές ανάγκες, διπλωματικές αποστολές και σταθερούς πελάτες.',
      
      h4Payment: '7. ΤΡΟΠΟΙ ΠΛΗΡΩΜΗΣ',
      paymentDesc: 'Πληρώστε με ασφάλεια μέσω τραπεζικής μεταφοράς, online πληρωμής με κάρτα, εταιρικής τιμολόγησης ή με μετρητά απευθείας στον οδηγό.',

      h3Faq: '8. ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ ΓΙΑ ΤΙΣ ΤΙΜΕΣ',
      q1: 'Πώς μπορώ να μάθω την ακριβή τιμή;',
      a1: 'Απλά εισαγάγετε τον προορισμό, την ημερομηνία και τον αριθμό των επιβατών στον υπολογιστή μας παραπάνω, ή συμπληρώστε την αίτηση. Θα επιβεβαιώσουμε τις λεπτομέρειες και θα σας στείλουμε την τελική σταθερή προσφορά.',
      q2: 'Υπάρχουν επιπλέον χρεώσεις για παιδικά καθίσματα;',
      a2: 'Οχι. Ολα τα βρεφικά και παιδικά καθίσματα ασφαλείας παρέχονται εντελώς δωρεάν. Παρακαλούμε να το αναφέρετε κατά τη διαδικασία της κράτησης.',
      q3: 'Πληρώνουμε διόδια ή πάρκινγκ αεροδρομίου ξεχωριστά;',
      a3: 'Οχι. Τα τέλη στάθμευσης στο αεροδρόμιο (για τον χρόνο υποδοχής) και τα διόδια αυτοκινητοδρόμων περιλαμβάνονται 100% στην αρχική τιμή.',

      btnQuote: 'ΑΙΤΗΣΗ ΓΙΑ ΣΤΑΘΕΡΗ ΤΙΜΗ',
      btnWhatsapp: 'ΣΥΝΟΜΙΛΙΑ ΣΤΟ WHATSAPP'
    }
  }[lang];

  return (
    <div className="section">
      <div className="container">
        {/* H1 header */}
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {ui.title}
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          {ui.subtitle}
        </p>

        {/* 1. Instant Quote Calculator */}
        <div style={{ marginBottom: '60px' }}>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--primary-dark)' }}>
            {ui.h2Calc}
          </h2>
          <FareCalculator />
        </div>

        {/* 2. Airport Price Table by origin */}
        <div style={{ marginBottom: '60px' }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--primary-dark)' }}>
            {ui.h2Rates}
          </h2>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '30px' 
            }}
          >
            {/* Zaventem */}
            <div style={{ background: '#ffffff', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-lg)', padding: '30px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.zaventemTitle}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>
                {ui.minivanFares}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span>{ui.pax12}</span>
                  <strong style={{ color: 'var(--primary)' }}>{ui.from} 40€</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span>{ui.pax34}</span>
                  <strong style={{ color: 'var(--primary)' }}>{ui.from} 50€</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span>{ui.pax58}</span>
                  <strong style={{ color: 'var(--primary)' }}>{ui.from} 60€</strong>
                </li>
              </ul>
            </div>

            {/* Charleroi */}
            <div style={{ background: '#ffffff', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-lg)', padding: '30px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {ui.charleroiTitle}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>
                {ui.minivanFares}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span>{ui.pax12}</span>
                  <strong style={{ color: 'var(--primary)' }}>{ui.from} 70€</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span>{ui.pax34}</span>
                  <strong style={{ color: 'var(--primary)' }}>{ui.from} 90€</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span>{ui.pax58}</span>
                  <strong style={{ color: 'var(--primary)' }}>{ui.from} 110€</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 & 4. What is included & Surcharges */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }} className="grid-cols-mobile">
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '16px' }}>
              {ui.h3Included}
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
              <li><strong>✓ {ui.incTrack}</strong> {ui.incTrackDesc}</li>
              <li><strong>✓ {ui.incMeet}</strong> {ui.incMeetDesc}</li>
              <li><strong>✓ {ui.incTolls}</strong> {ui.incTollsDesc}</li>
              <li><strong>✓ {ui.incSeats}</strong> {ui.incSeatsDesc}</li>
              <li><strong>✓ {ui.incLuggage}</strong> {ui.incLuggageDesc}</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '16px' }}>
              {ui.h3Surcharge}
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              {ui.surchargeIntro}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
              <li><strong>{ui.surchargeNight}</strong> {ui.surchargeNightDesc}</li>
              <li><strong>{ui.surchargeWait}</strong> {ui.surchargeWaitDesc}</li>
              <li><strong>{ui.surchargeDetour}</strong> {ui.surchargeDetourDesc}</li>
            </ul>
          </div>
        </div>

        {/* 5, 6 & 7. Cancellation, Loyalty & Payment */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', marginBottom: '60px' }} className="grid-cols-mobile">
          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
              {ui.h4Cancel}
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {ui.cancelDesc}
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
              {ui.h4Loyalty}
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {ui.loyaltyDesc}
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
              {ui.h4Payment}
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {ui.paymentDesc}
            </p>
          </div>
        </div>

        {/* 8. Pricing FAQ */}
        <div style={{ background: '#ffffff', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--card-border)', boxShadow: 'var(--shadow)', marginBottom: '48px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '24px', textAlign: 'center' }}>
            {ui.h3Faq}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h4 style={{ fontWeight: 'bold', fontSize: '15px', color: 'var(--primary)', marginBottom: '6px' }}>
                {ui.q1}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {ui.a1}
              </p>
            </div>
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
              <h4 style={{ fontWeight: 'bold', fontSize: '15px', color: 'var(--primary)', marginBottom: '6px' }}>
                {ui.q2}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {ui.a2}
              </p>
            </div>
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
              <h4 style={{ fontWeight: 'bold', fontSize: '15px', color: 'var(--primary)', marginBottom: '6px' }}>
                {ui.q3}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {ui.a3}
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            {ui.btnQuote}
          </a>
          <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '14px 32px' }}>
            {ui.btnWhatsapp}
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .grid-cols-mobile {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}} />
    </div>
  );
}
