import LandingShell from '../components/landing/LandingShell';
import {
  Hero, Intro, CardGrid, DarkFeatures, Features, FAQ, Location, CTABanner,
} from '../components/landing/Sections';

export const metadata = {
  title: 'Café en Grains Lille — Spécialité & Origine | Bienvenue Coffeeshop',
  description: "Achetez du café en grains de spécialité à Lille, Vieux-Lille. Sélection d'origines uniques, torréfaction artisanale. À déguster sur place ou à emporter. Ici, tout commence par la tasse.",
  alternates: { canonical: 'https://bienvenue.cafe/cafe-en-grains-lille' },
};

const products = [
  {
    emoji: '🫘',
    title: 'Naturel Éthiopien',
    description: 'Yirgacheffe — Myrtille, jasmin, sucre de canne.',
    price: 'À partir de 14€ / 250g',
    badge: 'Coup de cœur',
    tags: ['Éthiopie', 'Naturel', 'Fruité'],
  },
  {
    emoji: '🫘',
    title: 'Washed Colombien',
    description: 'Huila — Caramel, noisette, orange sanguine.',
    price: 'À partir de 13€ / 250g',
    tags: ['Colombie', 'Lavé', 'Équilibré'],
  },
  {
    emoji: '🫘',
    title: 'Kenya AA',
    description: 'Kirinyaga — Cassis, tomate mûre, panela.',
    price: 'À partir de 16€ / 250g',
    badge: 'Saisonnier',
    tags: ['Kenya', 'Lavé', 'Complexe'],
  },
  {
    emoji: '🫘',
    title: 'Blend Espresso Maison',
    description: 'Brésil Cerrado — Chocolat noir, amande, caramel beurre salé.',
    price: 'À partir de 11€ / 250g',
    tags: ['Brésil', 'Blend', 'Doux'],
  },
];

const methods = [
  { emoji: '☕', title: 'Espresso', description: 'Corps intense, crema onctueuse. Mouture très fine.' },
  { emoji: '🫖', title: 'Filtre V60', description: 'Clarté aromatique et notes fruitées. Mouture moyenne.' },
  { emoji: '🔬', title: 'Aeropress', description: 'Polyvalent et immersif. Mouture moyenne-fine.' },
  { emoji: '⏳', title: 'Chemex', description: 'Café propre et délicat. Mouture moyenne-grosse.' },
  { emoji: '🏺', title: 'Cafetière à piston', description: 'Corps généreux, immersion totale. Mouture grosse.' },
];

const whyUs = [
  { emoji: '🔍', title: 'Traçabilité complète', description: 'Chaque café est sourcé avec transparence : pays, région, producteur, altitude, process.' },
  { emoji: '👨‍🍳', title: 'Conseil barista', description: 'Nos baristas vous guident pour trouver le grain parfait selon votre méthode et vos goûts.' },
  { emoji: '📦', title: 'Fraîcheur garantie', description: 'Nos grains sont torréfiés en petits lots et renouvelés régulièrement.' },
  { emoji: '🌱', title: 'Sourcing responsable', description: 'Nous travaillons avec des torréfacteurs engagés auprès des producteurs.' },
  { emoji: '👅', title: 'Dégustation avant achat', description: 'Goûtez avant de choisir. Chaque origine est disponible en dégustation.' },
  { emoji: '📍', title: 'Au cœur du Vieux-Lille', description: 'Boutique accessible, cadre unique avec moulures et verrière.' },
];

const faqItems = [
  { q: 'Où acheter du café en grains de qualité à Lille ?', a: 'Chez Bienvenue Coffeeshop, au 79 rue Esquermoise dans le Vieux-Lille. Nous proposons une sélection de cafés de spécialité en grains, sourcés avec traçabilité complète, notés 82+ au cupping.' },
  { q: 'Quelle est la différence entre un café de spécialité et un café classique ?', a: "Un café de spécialité obtient un score de 82/100 minimum au cupping (évaluation sensorielle). Il est tracé de la ferme à la tasse, torréfié artisanalement et offre des notes aromatiques complexes et distinctes — loin de l'amertume du café industriel." },
  { q: 'Pouvez-vous moudre le café pour ma machine ?', a: 'Oui, nous moulons gratuitement vos grains sur place, calibré pour votre méthode : espresso, filtre, Aeropress, cafetière italienne, piston...' },
  { q: 'Vendez-vous du café en grains en ligne ?', a: 'Notre boutique en ligne est en cours de développement. En attendant, rendez-nous visite au 79 rue Esquermoise pour découvrir et acheter nos cafés.' },
  { q: 'Comment bien conserver son café en grains ?', a: "Dans un contenant hermétique, à l'abri de la lumière et de l'humidité, à température ambiante. Évitez le réfrigérateur. Consommez idéalement dans les 4 semaines après torréfaction." },
  { q: 'Quelles origines sont disponibles en ce moment ?', a: 'Notre sélection change selon les saisons et les arrivages. Actuellement : Éthiopie, Colombie, Kenya et notre blend maison. Passez en boutique pour découvrir les dernières nouveautés.' },
];

export default function CafeEnGrainsLille() {
  return (
    <LandingShell>
      <Hero
        badge="Café de spécialité — Vieux-Lille"
        title="Des cafés en grains qui racontent une histoire"
        subtitle="Sélection d'origines uniques, traçabilité complète, conseil barista. Au 79 rue Esquermoise."
        ctas={[
          { text: 'Voir notre sélection', href: '#selection' },
          { text: 'Nous rendre visite', href: '#location' },
        ]}
      />

      <Intro
        title="Le meilleur café en grains à Lille commence ici"
        paragraphs={[
          "Chez Bienvenue, chaque grain a un nom, une région, un producteur. Nous sélectionnons exclusivement des cafés de spécialité notés 82+ au cupping, sourcés auprès de petites exploitations engagées dans une agriculture durable.",
          "La traçabilité n'est pas un argument marketing : c'est notre exigence. Du Yirgacheffe éthiopien aux hautes terres du Huila colombien, nous choisissons des lots qui expriment un terroir, un savoir-faire, une intention.",
          "Nos grains sont torréfiés en petits lots par des artisans torréfacteurs partenaires, puis proposés en sachets de 250g ou 500g. Mouture gratuite sur demande, calibrée pour votre méthode.",
        ]}
        quote="Le bon café, c'est celui dont on connaît l'histoire."
      />

      <div id="selection">
        <CardGrid
          title="Notre sélection du moment"
          subtitle="Sachets 250g et 500g disponibles. Mouture gratuite sur demande."
          items={products}
          columns={4}
        />
      </div>

      <DarkFeatures
        title="Pour chaque méthode, le bon grain"
        subtitle="Nous vous guidons vers la mouture et le profil adaptés à votre manière de préparer le café."
        items={methods}
        columns={5}
      />

      <Features
        title="Pourquoi acheter votre café chez Bienvenue"
        items={whyUs}
        columns={3}
      />

      <FAQ items={faqItems} />

      <div id="location">
        <Location
          title="Venez choisir vos grains"
          subtitle="Conseil barista inclus — goûtez avant d'acheter."
          directions="Métro Rihour ou République Beaux-Arts, à 5 minutes à pied."
        />
      </div>

      <CTABanner
        title="Ici, tout commence par la tasse."
        text="Passez à la boutique, goûtez, puis repartez avec vos grains préférés."
        ctas={[{ text: 'Nous rendre visite', href: '#location' }]}
      />
    </LandingShell>
  );
}
