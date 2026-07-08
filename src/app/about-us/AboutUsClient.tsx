'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';

export default function AboutUsClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const pathname = usePathname();
  

  // Localization Dictionary for About Us
  const ui = {
    en: {
      metaTitle: 'About Helicro | Greek-Belgian Private Driver in Brussels',
      metaDesc: 'Meet Gerasimos, the professional chauffeur behind Helicro. Over 30 years of safe driving experience with a military background based in Belgium.',
      title: 'Meet the driver behind Helicro Transport',
      subtitle: 'Licensed private transfer operator with military discipline and over 30 years on the road.',
      h2Founding: 'Who We Are: The Founding Story',
      foundingDesc: 'Helicro Transport was established in Braine-l\'Alleud with a simple, clear mission: to provide families, business professionals, and event groups with a private transfer experience that places passenger safety and absolute punctuality above all else. We recognized that while Belgium has many taxi services, there was a gap for a highly personal, bilingual, and dependable driver-owner brand.',
      h2Driver: 'The Driver Behind the Wheel',
      driverDesc: 'Your driver Gerasimos spent over 30 years in a rigorous military career, specializing in defensive logistics and safety procedures. After transitioning to professional civilian driving, he brought that exact level of discipline, route preparation, and vehicle care to Helicro. When you step into our Ford minivan, you are traveling with a driver who is fully vetted and treats every kilometer with absolute attention.',
      h2Belgian: 'A Belgian Transfer Service with a Greek Heart',
      belgianDesc: 'Gerasimos is a Greek expat who has called Belgium home for decades. This blend allows us to serve the international expat community, diplomatic delegations, and local Belgian residents alike. We are proud to offer full language support in English, French, and Greek, removing all communication stress from your booking and travel.',
      h2Values: 'Our Core Values: Safety, Punctuality, and Language',
      valuesIntro: 'Every transfer we schedule is governed by three simple promises:',
      vPunctual: 'Punctuality:',
      vPunctualDesc: 'We plan routes, monitor real-time traffic, and always arrive 10 minutes early.',
      vSafety: 'Safety:',
      vSafetyDesc: 'Defensive, careful driving in high-spec Ford vehicles. Free booster and infant seats are prepared on request.',
      vTrans: 'Transparency:',
      vTransDesc: 'All price quotes are flat-rate. What we quote is exactly what you pay.',
      h2Vehicles: 'Our Vehicles',
      vehiclesDesc: 'We maintain a high-quality fleet of Ford Transit Custom and Tourneo Custom minivans, fully air-conditioned and fitted with charging terminals. These vehicles are sanitized before every pickup and comfortably hold up to 8 passengers with generous luggage storage.',
      h4Licensing: '✓ Verified Licensing & VAT',
      licensingDesc: 'Helicro is operated under Helicro SRL. We are fully registered and licensed by the Belgian transportation authority. VAT Registration: BE 0804.095.653. Address: Braine-l\'Alleud, 1420.',
      btnWhatsapp: 'Message on WhatsApp',
      btnReviews: 'Read Customer Reviews',
      btnBook: 'Book Transfer'
    },
    nl: {
      metaTitle: 'Over Helicro | Grieks-Belgische Privéchauffeur in Brussel',
      metaDesc: 'Ontmoet Gerasimos, de professionele chauffeur achter Helicro. Meer dan 30 jaar veilige rijervaring met een militaire achtergrond in België.',
      title: 'Ontmoet de chauffeur achter Helicro Transport',
      subtitle: 'Gelicentieerde chauffeur met militaire discipline en meer dan 30 jaar wegerijervaring.',
      h2Founding: 'Wie Wij Zijn: Ons Ontstaansverhaal',
      foundingDesc: 'Helicro Transport is opgericht in Braine-l\'Alleud met een duidelijke missie: gezinnen, zakelijke reizigers en groepen een privé transfer bieden waarin veiligheid en absolute stiptheid voorop staan. We merkten dat er in België behoefte was aan een zeer persoonlijke, tweetalige en betrouwbare chauffeursdienst.',
      h2Driver: 'De Chauffeur achter het Stuur',
      driverDesc: 'Uw chauffeur Gerasimos heeft ruim 30 jaar in het leger gediend, gespecialiseerd in defensieve logistiek en veiligheid. Na zijn overstap naar civiel personenvervoer bracht hij die discipline, routevoorbereiding en voertuigzorg over naar Helicro. U reist in onze Ford minivans met een ervaren professional.',
      h2Belgian: 'Een Belgische Service met een Grieks Hart',
      belgianDesc: 'Gerasimos is een Griekse expat die al decennia in België woont. Hierdoor bedienen we zowel internationale expats, diplomaten als Belgische bewoners optimaal. We spreken Engels, Frans en Grieks, wat alle stress rond communicatie wegneemt.',
      h2Values: 'Onze Kernwaarden: Veiligheid, Stiptheid en Transparantie',
      valuesIntro: 'Elke rit die we uitvoeren is gebaseerd op drie simpele beloften:',
      vPunctual: 'Stiptheid:',
      vPunctualDesc: 'We plannen vooraf en komen altijd 10 minuten te vroeg aan.',
      vSafety: 'Veiligheid:',
      vSafetyDesc: 'Defensieve rijstijl in luxe Ford wagens. Gratis kinderzitjes beschikbaar op aanvraag.',
      vTrans: 'Transparantie:',
      vTransDesc: 'Vaste prijzen. Wat we vooraf afspreken is wat u betaalt.',
      h2Vehicles: 'Onze Voertuigen',
      vehiclesDesc: 'Wij rijden met jonge Ford Transit Custom en Tourneo Custom minivans, voorzien van airconditioning en oplaadpunten. Onze minivans bieden comfortabel plaats aan 8 passagiers en veel koffers.',
      h4Licensing: '✓ Officiële Vergunning & BTW',
      licensingDesc: 'Helicro is een merk van Helicro SRL. Wij zijn geregistreerd en gelicentieerd door de Belgische overheid. BTW-nummer: BE 0804.095.653. Adres: Braine-l\'Alleud, 1420.',
      btnWhatsapp: 'Bericht op WhatsApp',
      btnReviews: 'Lees Klantenrecensies',
      btnBook: 'Boek Rit'
    },
    fr: {
      metaTitle: 'À propos de Helicro | Chauffeur Privé Belgo-Grec à Bruxelles',
      metaDesc: 'Rencontrez Gerasimos, le chauffeur professionnel d\'Helicro. Plus de 30 ans d\'expérience de conduite avec un parcours militaire en Belgique.',
      title: 'Rencontrez le chauffeur d\'Helicro Transport',
      subtitle: 'Chauffeur privé agréé avec rigueur militaire et plus de 30 ans d\'expérience.',
      h2Founding: 'Qui Nous Sommes : Notre Histoire',
      foundingDesc: 'Helicro Transport a été créé à Braine-l\'Alleud avec une mission simple : offrir aux familles, professionnels et groupes un service de transfert privé où la sécurité et la ponctualité absolue priment. Nous souhaitions apporter un service personnalisé, bilingue et hautement fiable.',
      h2Driver: 'Le Chauffeur à Votre Service',
      driverDesc: 'Votre chauffeur Gerasimos a effectué une carrière militaire de plus de 30 ans, spécialisé dans la logistique de sécurité et la conduite défensive. Il applique cette rigueur, cette préparation d\'itinéraire et ce soin des véhicules chez Helicro pour vous garantir un voyage serein.',
      h2Belgian: 'Un Service Belge avec un Cœur Grec',
      belgianDesc: 'Gerasimos est un expatrié grec vivant en Belgique depuis des décennies. Ce double profil nous permet d\'accueillir chaleureusement la communauté internationale, les délégations diplomatiques et les résidents belges. Nous parlons français, anglais et grec.',
      h2Values: 'Nos Valeurs : Sécurité, Ponctualité et Transparence',
      valuesIntro: 'Chaque transfert commandé repose sur trois engagements majeurs :',
      vPunctual: 'Ponctualité :',
      vPunctualDesc: 'Planification rigoureuse et arrivée systématique 10 minutes à l\'avance.',
      vSafety: 'Sécurité :',
      vSafetyDesc: 'Conduite défensive en van Ford haut de gamme. Sièges enfants installés gratuitement.',
      vTrans: 'Transparence :',
      vTransDesc: 'Tarifs fixes convenus à l\'avance. Pas de mauvaise surprise.',
      h2Vehicles: 'Nos Véhicules',
      vehiclesDesc: 'Nous disposons de minivans Ford Transit Custom et Tourneo Custom modernes, climatisés et équipés de ports USB. Nos véhicules sont désinfectés régulièrement et accueillent 8 passagers et leurs bagages.',
      h4Licensing: '✓ Licences Officielles & TVA',
      licensingDesc: 'Helicro est géré sous la société Helicro SRL. Nous sommes enregistrés et agréés par les autorités belges. Numéro de TVA : BE 0804.095.653. Adresse : Braine-l\'Alleud, 1420.',
      btnWhatsapp: 'Contacter sur WhatsApp',
      btnReviews: 'Lire les Avis Clients',
      btnBook: 'Réserver le Transfert'
    },
        hr: {
      metaTitle: 'O nama | Grčko-belgijski privatni vozač u Bruxellesu - Helicro',
      metaDesc: 'Upoznajte Gerasimosa, profesionalnog vozača iza Helicra. Više od 30 godina iskustva sigurne vožnje s vojnom pozadinom u Belgiji.',
      title: 'Upoznajte vozača iza Helicro Transporta',
      subtitle: 'Licencirani operater privatnog prijevoza s vojnom disciplinom i više od 30 godina na cesti.',
      h2Founding: 'Tko smo mi: Priča o osnivanju',
      foundingDesc: 'Helicro Transport osnovan je u Braine-l\'Alleudu s jednostavnom, jasnom misijom: obiteljima, poslovnim profesionalcima i grupama osigurati privatni transfer koji stavlja sigurnost putnika i apsolutnu točnost iznad svega. Prepoznali smo da iako Belgija ima mnogo taksi usluga, postoji potreba za visoko osobnim, dvojezičnim i pouzdanim brendom vlasnika-vozača.',
      h2Driver: 'Vozač za upravljačem',
      driverDesc: 'Vaš vozač Gerasimos proveo je više od 30 godina u rigoroznoj vojnoj karijeri, specijalizirajući se za obrambenu logistiku i sigurnosne postupke. Nakon prelaska na profesionalnu civilnu vožnju, prenio je tu razinu discipline, pripreme rute i njege vozila u Helicro. Kada uđete u naš Ford kombi, putujete s vozačem koji je u potpunosti provjeren i koji svakom kilometru posvećuje apsolutnu pažnju.',
      h2Belgian: 'Belgijska usluga prijevoza s grčkim srcem',
      belgianDesc: 'Gerasimos je grčki iseljenik koji već desetljećima Belgiju naziva svojim domom. Ova kombinacija omogućuje nam da podjednako služimo međunarodnoj zajednici iseljenika, diplomatskim delegacijama i lokalnim belgijskim stanovnicima. Ponosni smo što nudimo punu jezičnu podršku na engleskom, francuskom i grčkom jeziku, uklanjajući sav stres oko komunikacije pri rezervaciji i putovanju.',
      h2Values: 'Naše temeljne vrijednosti: sigurnost, točnost i jezik',
      valuesIntro: 'Svaki transfer koji zakažemo vođen je trima jednostavnim obećanjima:',
      vPunctual: 'Točnost:',
      vPunctualDesc: 'Planiramo rute, pratimo promet u stvarnom vremenu i uvijek stižemo 10 minuta ranije.',
      vSafety: 'Sigurnost:',
      vSafetyDesc: 'Obrambena, pažljiva vožnja u vrhunskim Ford vozilima. Besplatne sjedalice za bebe i djecu pripremaju se na zahtjev.',
      vTrans: 'Transparentnost:',
      vTransDesc: 'Sve ponude cijena su fiksne. Ono što navedemo je točno ono što plaćate.',
      h2Vehicles: 'Naša vozila',
      vehiclesDesc: 'Održavamo visokokvalitetnu flotu Ford Transit Custom i Tourneo Custom kombija, potpuno klimatiziranih i opremljenih priključcima za punjenje. Ova se vozila dezinficiraju prije svakog preuzimanja i udobno primaju do 8 putnika s prostranim prtljažnikom.',
      h4Licensing: '✓ Potpuno licencirano & PDV obveznik',
      licensingDesc: 'Helicro posluje pod tvrtkom Helicro SRL. Potpuno smo registrirani i licencirani od strane belgijskog prometnog tijela. PDV broj: BE 0804.095.653. Adresa: Braine-l\'Alleud, 1420.',
      btnWhatsapp: 'Poruka na WhatsAppu',
      btnReviews: 'Pročitajte recenzije kupaca',
      btnBook: 'Rezervirajte transfer'
    },
    el: {
      metaTitle: 'Σχετικά με τη Helicro | Ελληνο-Βέλγος Σοφέρ στις Βρυξέλλες',
      metaDesc: 'Γνωρίστε τον Γεράσιμο, τον επαγγελματία οδηγό της Helicro. Πάνω από 30 χρόνια εμπειρίας με στρατιωτικό υπόβαθρο στο Βέλγιο.',
      title: 'Γνωρίστε τον οδηγό της Helicro Transport',
      subtitle: 'Αδειοδοτημένος οδηγός ιδιωτικών μεταφορών με στρατιωτική πειθαρχία και 30+ χρόνια εμπειρίας.',
      h2Founding: 'Ποιοι Είμαστε: Η Ιστορία μας',
      foundingDesc: 'Η Helicro Transport ιδρύθηκε στο Braine-l\'Alleud με έναν απλό σκοπό: να παρέχει σε οικογένειες, επαγγελματίες και ομάδες μια εμπειρία μεταφοράς με απόλυτη ασφάλεια και συνέπεια. Είδαμε ότι υπήρχε κενό για μια προσωπική, πολύγλωσση και αξιόπιστη υπηρεσία σοφέρ.',
      h2Driver: 'Ο Οδηγός πίσω από το Τιμόνι',
      driverDesc: 'Ο οδηγός σας Γεράσιμος υπηρέτησε επί 30 χρόνια στον στρατό, με ειδίκευση στην ασφαλή επιμελητεία και τις διαδικασίες προστασίας. Φέρνει αυτήν την πειθαρχία και τη σωστή προετοιμασία διαδρομής στη Helicro, εξασφαλίζοντας ότι κάθε χιλιόμετρο καλύπτεται με υπευθυνότητα.',
      h2Belgian: 'Μια Βελγική Υπηρεσία με Ελληνική Καρδιά',
      belgianDesc: 'Ο Γεράσιμος είναι Ελληνας ομογενής που ζει στο Βέλγιο εδώ και δεκαετίες. Αυτό μας επιτρέπει να εξυπηρετούμε την ελληνική κοινότητα, διπλωμάτες αλλά και ντόπιους κατοίκους. Παρέχουμε πλήρη υποστήριξη στα Ελληνικά, Αγγλικά και Γαλλικά.',
      h2Values: 'Οι Αξίες μας: Ασφάλεια, Συνέπεια και Διαφάνεια',
      valuesIntro: 'Κάθε μεταφορά διέπεται από τρεις απλές υποσχέσεις:',
      vPunctual: 'Συνέπεια:',
      vPunctualDesc: 'Σχεδιάζουμε τις διαδρομές και φτάνουμε πάντα 10 λεπτά νωρίτερα.',
      vSafety: 'Ασφάλεια:',
      vSafetyDesc: 'Αμυντική οδήγηση με Ford minivans. Δωρεάν παιδικά καθίσματα κατόπιν αιτήματος.',
      vTrans: 'Διαφάνεια:',
      vTransDesc: 'Σταθερές τιμές. Αυτό που συμφωνούμε είναι ακριβώς αυτό που πληρώνετε.',
      h2Vehicles: 'Τα Οχήματά μας',
      vehiclesDesc: 'Διαθέτουμε Ford Transit Custom και Tourneo Custom minivans, πλήρως κλιματιζόμενα με θύρες φόρτισης. Καθαρίζονται σχολαστικά πριν από κάθε δρομολόγιο και χωρούν έως 8 επιβάτες με όλες τις αποσκευές τους.',
      h4Licensing: '✓ Επίσημη Αδεια & ΦΠΑ',
      licensingDesc: 'Η Helicro λειτουργεί υπό την Helicro SRL. Είμαστε πλήρως αδειοδοτημένοι από τις βελγικές αρχές μεταφορών. Αριθμός ΦΠΑ: BE 0804.095.653. Διεύθυνση: Braine-l\'Alleud, 1420.',
      btnWhatsapp: 'Μήνυμα στο WhatsApp',
      btnReviews: 'Διαβάστε Κριτικές',
      btnBook: 'Κάντε Κράτηση'
    }
  }[lang];

  // Helper to localize link paths
  const localizePath = (path: string) => {
    if (lang === 'en') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <div className="section">
      {/* Dynamic SEO Head side-effects */}
      
      

      <div className="container" style={{ maxWidth: '900px' }}>
        {/* H1 header */}
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '8px' }}>
          {ui.title}
        </h1>
        <p style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '16px', marginBottom: '32px' }}>
          {ui.subtitle}
        </p>

        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '40px' }}>
          <img 
            src="/images/aboutus-image.jpg" 
            alt="Helicro driver Gerasimos with Ford minivan" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Section 1: Story */}
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-dark)', marginTop: '40px', marginBottom: '16px' }}>
          {ui.h2Founding}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
          {ui.foundingDesc}
        </p>

        {/* Section 2: Driver */}
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-dark)', marginTop: '32px', marginBottom: '16px' }}>
          {ui.h2Driver}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
          {ui.driverDesc}
        </p>

        {/* Section 3: Story Blend */}
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-dark)', marginTop: '32px', marginBottom: '16px' }}>
          {ui.h2Belgian}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
          {ui.belgianDesc}
        </p>

        {/* Section 4: Values */}
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-dark)', marginTop: '32px', marginBottom: '16px' }}>
          {ui.h2Values}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '12px' }}>
          {ui.valuesIntro}
        </p>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15.5px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          <li><strong>{ui.vPunctual}</strong> {ui.vPunctualDesc}</li>
          <li><strong>{ui.vSafety}</strong> {ui.vSafetyDesc}</li>
          <li><strong>{ui.vTrans}</strong> {ui.vTransDesc}</li>
        </ul>

        {/* Section 5: Vehicles */}
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-dark)', marginTop: '32px', marginBottom: '16px' }}>
          {ui.h2Vehicles}
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          {ui.vehiclesDesc}
        </p>

        {/* Fleet photos */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }} className="grid-cols-mobile">
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <img src="/images/car-1.jpg" alt="Ford Transit Custom" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <img src="/images/car-3.jpg" alt="Ford Tourneo Custom" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>

        {/* Section 6: License info */}
        <div 
          style={{ 
            background: '#f8fafc', 
            border: '1px solid var(--card-border)', 
            padding: '30px', 
            borderRadius: 'var(--radius-lg)', 
            marginBottom: '48px',
            fontSize: '14.5px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}
        >
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '8px' }}>
            {ui.h4Licensing}
          </h4>
          <p>{ui.licensingDesc}</p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '14px 28px' }}>
            🇧🇪 {ui.btnWhatsapp}
          </a>
          <a href="https://wa.me/306974581706" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '14px 28px' }}>
            🇬🇷 WhatsApp Greece
          </a>
          <Link href={localizePath('/reviews')} className="btn btn-outline" style={{ padding: '14px 28px' }}>
            {ui.btnReviews}
          </Link>
          <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '14px 28px', background: 'var(--accent)', color: '#111827', borderColor: 'var(--accent)' }}>
            {ui.btnBook}
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 576px) {
          .grid-cols-mobile {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}} />
    </div>
  );
}
