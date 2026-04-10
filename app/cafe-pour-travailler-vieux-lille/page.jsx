import LandingShell from '../components/landing/LandingShell';
import {
  Hero, Strip, Intro, CardGrid, DarkFeatures, MenuCards, Rules, Testimonials, FAQ, Location, CTABanner,
} from '../components/landing/Sections';

export const metadata = {
  title: 'Café pour Travailler Vieux-Lille — WiFi & Prises | Bienvenue Coffeeshop',
  description: 'Cherchez un café pour bosser à Lille ? Bienvenue Coffeeshop dans le Vieux-Lille : WiFi rapide, prises électriques, ambiance calme, excellent café. Idéal télétravailleurs et freelances.',
  alternates: { canonical: 'https://bienvenue.cafe/cafe-pour-travailler-vieux-lille' },
};

const stripItems = [
  { emoji: '📶', text: 'WiFi inclus' },
  { emoji: '🔌', text: 'Prises électriques' },
  { emoji: '🤫', text: 'Ambiance calme' },
  { emoji: '☕', text: 'Café de spécialité' },
  { emoji: '🌅', text: 'Ouvert dès 8h' },
];

const personas = [
  { emoji: '💻', title: 'Télétravailleur', description: 'Changez de décor sans perdre en productivité. WiFi rapide, café de qualité, prises partout.' },
  { emoji: '🎨', title: 'Freelance', description: 'Votre bureau du jour avec vue sur le Vieux-Lille. Restez aussi longtemps que vous voulez.' },
  { emoji: '📚', title: 'Étudiant', description: 'Ambiance calme pour réviser, WiFi rapide, et un bon café pour tenir la distance.' },
  { emoji: '🤝', title: 'Réunion informelle', description: 'Un cadre agréable pour retrouver un client ou un collègue autour d\u2019un excellent café.' },
];

const amenities = [
  { emoji: '📶', title: 'WiFi rapide', description: 'Connexion fibre, suffisante pour les visioconférences sans coupure.' },
  { emoji: '🔌', title: 'Prises électriques', description: 'Prises accessibles à chaque table. Pas besoin de guetter la batterie.' },
  { emoji: '🤫', title: 'Ambiance calme', description: 'Musique douce, pas de TV, conversations respectueuses. Un vrai espace de concentration.' },
  { emoji: '☕', title: 'Café de spécialité', description: 'Pas du café de machine automatique. Du vrai café, tracé et préparé par un barista.' },
  { emoji: '🪑', title: 'Assises confortables', description: 'Places assises variées : banquettes, tables hautes, coins tranquilles.' },
  { emoji: '☀️', title: 'Lumière naturelle', description: 'Verrière magnifique et grandes ouvertures. Travaillez en lumière naturelle.' },
];

const drinks = [
  { emoji: '☕', name: 'Espresso double', price: '4,00€', description: 'Boost immédiat' },
  { emoji: '🥛', name: 'Flat White', price: '5,50€', description: 'Le compagnon idéal' },
  { emoji: '🫖', name: 'Café filtre V60', price: '7,00€', description: 'Pour la durée' },
  { emoji: '🧊', name: 'Cold Brew', price: '5,00€', description: 'Rafraîchissant et concentré' },
  { emoji: '🍵', name: 'Matcha Latte BIO', price: '6,50€', description: 'Concentration zen' },
  { emoji: '💧', name: 'Eau', price: '2,00€', description: 'Hydratation essentielle' },
];

const food = [
  { emoji: '🥙', name: 'Houmous & crackers', price: '—', description: 'Léger et nourrissant' },
  { emoji: '🧀', name: 'Planche fromage & charcuterie', price: '—', description: 'Pour une pause gourmande' },
  { emoji: '🥜', name: 'Mix noix & fruits secs', price: '—', description: 'Énergie pour la concentration' },
  { emoji: '🥑', name: 'Avocado toast', price: '—', description: 'Le classique' },
];

const rules = [
  { emoji: '✅', title: 'Pas de consommation minimum', description: 'Restez aussi longtemps que vous le souhaitez avec une seule boisson.' },
  { emoji: '🎧', title: 'Casque recommandé', description: 'Pour les appels et visioconférences, merci d\u2019utiliser un casque ou des écouteurs.' },
  { emoji: '🪑', title: 'Pas de réservation', description: 'Premier arrivé, premier servi. Venez tôt le matin pour le meilleur choix de places.' },
  { emoji: '♻️', title: 'Tasses réutilisables bienvenues', description: 'Apportez votre mug, on vous sert dedans avec plaisir (-0,20€).' },
];

const testimonials = [
  { name: 'Antoine B.', text: "Mon bureau préféré à Lille. WiFi rapide, bon café, et une ambiance parfaite pour coder. J'y passe 3-4 matinées par semaine.", rating: 5, role: 'Développeur freelance' },
  { name: 'Camille D.', text: "Enfin un café à Lille où on peut vraiment travailler. Prises partout, WiFi fiable, et un flat white au niveau. Mes clients adorent quand on s'y retrouve.", rating: 5, role: 'Consultante indépendante' },
  { name: 'Pauline M.', text: "J'ai quitté le Starbucks d'à côté pour Bienvenue et je ne regrette rien. L'ambiance est plus calme, le café est incomparable, et la verrière est magnifique.", rating: 5, role: 'Cheffe de projet' },
];

const faqItems = [
  { q: 'Quel est le meilleur café pour travailler dans le Vieux-Lille ?', a: 'Bienvenue Coffeeshop au 79 rue Esquermoise : WiFi rapide, prises électriques, ambiance calme, café de spécialité. Ouvert dès 8h en semaine.' },
  { q: 'Y a-t-il une consommation minimum pour rester plusieurs heures ?', a: 'Non. Aucune consommation minimum. Nous croyons que si le café est bon et l\u2019ambiance agréable, vous reviendrez naturellement.' },
  { q: 'Le WiFi est-il assez rapide pour des visioconférences ?', a: 'Oui, notre connexion fibre est largement suffisante pour les appels vidéo, le partage d\u2019écran et le travail en ligne.' },
  { q: 'Puis-je venir en groupe pour une réunion informelle ?', a: 'Bien sûr. Notre espace peut accueillir de petits groupes. Pour les grands groupes, venez en dehors des heures de pointe.' },
  { q: 'À quelle heure ouvrez-vous le matin ?', a: '8h en semaine, 9h le week-end. Parfait pour commencer la journée avec un bon café avant de se mettre au travail.' },
  { q: 'Servez-vous de la nourriture ?', a: 'Oui, des snacks et encas légers : houmous, planches, fruits secs, avocado toast. De la nourriture qui accompagne la tasse, pas de cuisine lourde.' },
];

export default function CafePourTravaillerVieuxLille() {
  return (
    <LandingShell>
      <Hero
        badge="Télétravail — Freelance — Étudiant"
        title="Le café du Vieux-Lille où vous serez vraiment productif"
        subtitle="WiFi rapide, prises électriques, ambiance calme, café de spécialité. Ouvert dès 8h."
        gradient="from-[#1A2744] to-[#0F1A2E]"
        ctas={[
          { text: 'Voir les équipements', href: '#amenities' },
          { text: 'Nous trouver', href: '#location' },
        ]}
      />

      <Strip items={stripItems} />

      <CardGrid
        title="Pour qui ?"
        subtitle="Bienvenue accueille tous ceux qui cherchent un endroit calme et agréable pour travailler."
        items={personas}
        columns={4}
        bg="bg-[#FAF7F2]"
      />

      <div id="amenities">
        <DarkFeatures
          title="Ce qu'on vous offre pour travailler"
          subtitle="Tout ce qu'il faut pour être productif, sans compromis sur la qualité du café."
          items={amenities}
          columns={3}
        />
      </div>

      <MenuCards
        title="Les boissons pour la concentration"
        subtitle="Chaque boisson est préparée par un barista avec du café de spécialité."
        items={drinks}
        columns={3}
      />

      <MenuCards
        title="Snacks & encas"
        subtitle="De la nourriture qui accompagne la tasse, pas de cuisine lourde."
        items={food}
        columns={4}
        bg="bg-[#FAF7F2]"
      />

      <Rules title="Les règles de la maison" items={rules} />

      <Testimonials title="Ils travaillent chez Bienvenue" items={testimonials} />

      <FAQ items={faqItems} />

      <div id="location">
        <Location
          title="Votre prochain bureau est dans le Vieux-Lille"
          subtitle="79 rue Esquermoise — à 5 min du métro République Beaux-Arts."
          directions="Parking Rihour à proximité. Ouvert dès 8h en semaine, 9h le week-end."
        />
      </div>

      <CTABanner
        title="Testez notre espace de travail."
        text="Si le café ne vous convainc pas, on vous l'offre. Promis."
        ctas={[{ text: 'Nous rendre visite', href: '#location' }]}
      />
    </LandingShell>
  );
}
