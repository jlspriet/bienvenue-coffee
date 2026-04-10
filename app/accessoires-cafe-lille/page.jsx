import LandingShell from '../components/landing/LandingShell';
import {
  Hero, Intro, CardGrid, DarkFeatures, Steps, Features, FAQ, Location, CTABanner,
} from '../components/landing/Sections';

export const metadata = {
  title: 'Accessoires Café Lille — Matériel Barista & Équipement | Bienvenue Coffeeshop',
  description: 'Trouvez les meilleurs accessoires café à Lille : dripper V60, Aeropress, moulin à café, tamper, balance de précision. Conseil barista expert au Vieux-Lille.',
  alternates: { canonical: 'https://bienvenue.cafe/accessoires-cafe-lille' },
};

const products = [
  {
    emoji: '🫖',
    title: 'Dripper V60 (Hario)',
    description: "Le classique du pour-over. Simple, élégant, résultats constants. Notre méthode favorite pour révéler les notes d'un single origin.",
    price: 'À partir de 18€',
    level: 'Débutant',
    badge: 'Notre favori',
    tags: ['Filtre', 'Pour-over', 'Débutant'],
  },
  {
    emoji: '🔬',
    title: 'Aeropress',
    description: 'Polyvalent, quasi indestructible. Un café immersif en 2 minutes, aussi à l\u2019aise en espresso qu\u2019en filtre.',
    price: '38€',
    level: 'Débutant',
    tags: ['Immersion', 'Voyage', 'Polyvalent'],
  },
  {
    emoji: '⚙️',
    title: 'Moulin à café manuel',
    description: 'Timemore ou Comandante. Mouture homogène, contrôle total du calibrage. Indispensable pour un café frais.',
    price: 'À partir de 45€',
    level: 'Intermédiaire',
    badge: 'Essentiel',
    tags: ['Mouture', 'Manuel', 'Précision'],
  },
  {
    emoji: '⏳',
    title: 'Chemex (6 tasses)',
    description: 'Design iconique, filtre épais pour un café ultra-propre. L\u2019objet le plus élégant de votre cuisine.',
    price: '65€',
    level: 'Intermédiaire',
    tags: ['Filtre', 'Design', '6 tasses'],
  },
  {
    emoji: '⚖️',
    title: 'Balance de précision',
    description: 'Timemore ou Acaia. La base d\u2019un café reproductible. Mesure au 0,1g avec timer intégré.',
    price: 'À partir de 35€',
    level: 'Indispensable',
    tags: ['Mesure', 'Timer', '0.1g'],
  },
  {
    emoji: '🫗',
    title: 'Bouilloire à col de cygne',
    description: 'Contrôle du débit et de la température. Essentielle pour le pour-over. Disponible en versions standard et électrique.',
    price: 'À partir de 55€',
    level: 'Indispensable',
    tags: ['Température', 'Pour-over', 'Col de cygne'],
  },
  {
    emoji: '🔨',
    title: 'Tamper (58mm)',
    description: 'Tassage régulier pour un espresso équilibré. Acier inoxydable, prise en main ergonomique.',
    price: 'À partir de 25€',
    level: 'Espresso',
    tags: ['Espresso', 'Tassage', '58mm'],
  },
  {
    emoji: '🧹',
    title: 'Kit nettoyage machine espresso',
    description: 'Pastilles de détartrage, brosse de groupe, chiffon microfibre. Entretien régulier = meilleur café.',
    price: 'À partir de 12€',
    level: 'Entretien',
    tags: ['Nettoyage', 'Entretien', 'Machine'],
  },
];

const methodGuide = [
  { emoji: '🫖', title: 'V60 / Pour-over', description: 'Dripper, filtres, bouilloire col de cygne, balance, moulin. Temps : 3-4 min.' },
  { emoji: '🔬', title: 'Aeropress', description: 'Aeropress, filtres, moulin, balance. Temps : 1-2 min.' },
  { emoji: '⏳', title: 'Chemex', description: 'Chemex, filtres spécifiques, bouilloire, balance, moulin. Temps : 4-5 min.' },
  { emoji: '☕', title: 'Espresso maison', description: 'Machine espresso, tamper, moulin espresso, balance. Temps : 25-30 sec.' },
  { emoji: '🏺', title: 'Cafetière à piston', description: 'Cafetière, moulin (grosse mouture), bouilloire. Temps : 4 min.' },
];

const beginnerSteps = [
  { title: 'Investissez dans un moulin', description: 'La mouture fraîche est le facteur n°1 de qualité. Un bon moulin manuel suffit pour commencer.' },
  { title: 'Achetez une balance', description: 'La précision du dosage (ratio café/eau) change tout. 15g de café pour 250ml d\u2019eau est un bon début.' },
  { title: 'Choisissez votre méthode', description: 'V60 pour la clarté, Aeropress pour la polyvalence, cafetière à piston pour la simplicité.' },
  { title: 'Contrôlez la température', description: 'Entre 92°C et 96°C pour la plupart des méthodes. Trop chaud = amertume, trop froid = café plat.' },
];

const faqItems = [
  { q: 'Où acheter des accessoires café de qualité à Lille ?', a: 'Chez Bienvenue Coffeeshop, au 79 rue Esquermoise dans le Vieux-Lille. Nous sélectionnons uniquement du matériel que nous utilisons nous-mêmes : Hario, Timemore, Comandante, Aeropress.' },
  { q: 'Quel est le premier accessoire à acheter quand on débute ?', a: 'Un moulin à café. La mouture fraîche transforme littéralement n\u2019importe quel café. Un moulin manuel Timemore est un excellent point de départ autour de 45€.' },
  { q: 'Quelle est la différence entre les meules coniques et plates ?', a: 'Les meules coniques (standard sur les moulins manuels) offrent une mouture homogène avec une belle clarté en tasse. Les meules plates (haut de gamme) donnent un profil plus uniforme, idéal pour l\u2019espresso.' },
  { q: 'Puis-je essayer les accessoires avant d\u2019acheter ?', a: 'Oui. Nos baristas font des démonstrations en boutique. Vous pouvez voir chaque accessoire en action avant de l\u2019acheter.' },
  { q: 'Proposez-vous des ateliers café ?', a: 'Des ateliers d\u2019initiation sont en préparation. En attendant, nos baristas partagent conseils et techniques à chaque visite en boutique.' },
];

export default function AccessoiresCafeLille() {
  return (
    <LandingShell>
      <Hero
        badge="Matériel barista — Vieux-Lille"
        title="Les accessoires café qui changent tout"
        subtitle="Dripper V60, moulin, balance, Aeropress — sélectionnés et testés par nos baristas. Conseil inclus."
        ctas={[
          { text: 'Voir les accessoires', href: '#products' },
          { text: 'Par où commencer ?', href: '#guide' },
        ]}
      />

      <Intro
        title="Le bon matériel fait toute la différence"
        paragraphs={[
          "L'équipement, c'est 50% du résultat en tasse. Un café de spécialité préparé avec un moulin à lames et une bouilloire standard ne donnera jamais son plein potentiel.",
          "Chez Bienvenue, nous ne vendons que ce que nous utilisons. Chaque accessoire de notre sélection a été validé par nos baristas en conditions réelles, jour après jour.",
          "Du débutant qui achète son premier moulin au passionné qui optimise sa station espresso : nous avons le matériel et le conseil pour chaque niveau.",
        ]}
        quote="Le meilleur café commence avec les bons outils."
      />

      <div id="products">
        <CardGrid
          title="Notre sélection d'accessoires"
          subtitle="Matériel testé et approuvé par nos baristas. Démonstration en boutique."
          items={products}
          columns={4}
        />
      </div>

      <DarkFeatures
        title="Guide par méthode d'extraction"
        subtitle="Chaque méthode a ses accessoires essentiels. Voici ce qu'il vous faut."
        items={methodGuide}
        columns={5}
      />

      <div id="guide">
        <Steps
          title="Guide du débutant : par où commencer ?"
          items={beginnerSteps}
        />
      </div>

      <FAQ items={faqItems} />

      <Location
        title="Venez voir et essayer"
        subtitle="Démonstration gratuite de chaque accessoire par nos baristas."
        directions="Métro Rihour ou République Beaux-Arts, à 5 minutes à pied."
      />

      <CTABanner
        title="Votre prochain café maison commence ici."
        text="Passez en boutique, essayez les accessoires, et repartez équipé."
        ctas={[{ text: 'Nous rendre visite', href: '#' }]}
      />
    </LandingShell>
  );
}
