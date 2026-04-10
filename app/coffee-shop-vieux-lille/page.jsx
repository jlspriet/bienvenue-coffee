import LandingShell from '../components/landing/LandingShell';
import {
  SplitHero, Intro, MenuCards, DarkFeatures, Comparison, Testimonials, FAQ, Location, CTABanner,
} from '../components/landing/Sections';

export const metadata = {
  title: 'Coffee Shop Vieux-Lille — Café de Spécialité | Bienvenue Coffeeshop',
  description: 'Le meilleur coffee shop du Vieux-Lille. Café de spécialité, flat white, cappuccino, café filtre. Alternative calme et authentique. Ici, tout commence par la tasse.',
  alternates: { canonical: 'https://bienvenue.cafe/coffee-shop-vieux-lille' },
};

const menuItems = [
  { emoji: '☕', name: 'Espresso', price: '2,50€ / 3€', description: 'Simple ou double' },
  { emoji: '🥛', name: 'Flat White', price: '5,50€', description: 'Double espresso, 150ml lait' },
  { emoji: '☁️', name: 'Cappuccino', price: '5,00€', description: 'Espresso, lait, mousse' },
  { emoji: '🥤', name: 'Latte', price: '5,00€', description: '30ml espresso, 240ml lait' },
  { emoji: '🫖', name: 'Café filtre V60', price: '7,00€', description: 'Single origin, préparé minute' },
  { emoji: '🧊', name: 'Cold Brew', price: '5,00€', description: 'Infusé à froid pendant la nuit' },
  { emoji: '🍵', name: 'Matcha Latte BIO', price: '6,50€', description: 'Matcha de cérémonie' },
  { emoji: '🍫', name: 'Chocolat chaud Valrhona', price: '5,50€', description: '180ml lait, chocolat' },
];

const differentiators = [
  { emoji: '🔍', title: 'Grains tracés', description: 'Chaque café a un nom, une région, un producteur. Pas de blend industriel.' },
  { emoji: '🚫', title: 'Pas de sirops artificiels', description: 'Nos sirops sont maison, réalisés avec de la cassonade. Le goût du vrai.' },
  { emoji: '👨‍🍳', title: 'Baristas formés', description: 'Pas des serveurs qui appuient sur un bouton. De vrais artisans du café.' },
  { emoji: '🤫', title: 'Ambiance calme', description: 'Musique douce, espace aéré. Un café où on revient pour l\u2019atmosphère.' },
  { emoji: '🫘', title: 'On vend ce qu\u2019on sert', description: 'Chaque café en tasse est disponible en grains à emporter.' },
  { emoji: '🏛️', title: 'Ancré dans le Vieux-Lille', description: 'Boutique emblématique avec moulures et verrière. Un écrin unique.' },
];

const comparisonRows = [
  ['Origine tracée', '✓ Toujours', '✗ Rarement'],
  ['Score de qualité', '82+ au cupping', '60-70 (industriel)'],
  ['Ambiance calme', '✓ Oui', '~ Variable'],
  ['WiFi gratuit', '✓ Oui', '✓ Oui'],
  ['Café à emporter', '✓ Oui', '✓ Oui'],
  ['Vente de grains', '✓ En boutique', '✗ Non'],
  ['Conseil barista', '✓ Personnalisé', '✗ Non'],
  ['Latte art', '✓ Systématique', '~ Parfois'],
];

const testimonials = [
  { name: 'Marie L.', text: "Le meilleur flat white de Lille, sans discussion. L'ambiance est parfaite pour se poser un samedi matin. Les baristas sont adorables et connaissent vraiment leur sujet.", rating: 5, role: 'Avis Google' },
  { name: 'Thomas G.', text: "Enfin un vrai coffee shop à Lille ! Café de spécialité, cadre magnifique avec la verrière, et des conseils pointus sur les origines. On sent la passion.", rating: 5, role: 'Avis Google' },
  { name: 'Sarah D.', text: "J'ai découvert le café filtre ici et je ne peux plus m'en passer. La sélection change régulièrement et c'est toujours une belle surprise. Mon QG du Vieux-Lille.", rating: 5, role: 'Avis Google' },
];

const faqItems = [
  { q: 'Où se trouve Bienvenue dans le Vieux-Lille ?', a: 'Au 79 rue Esquermoise, 59800 Lille. En plein cœur du Vieux-Lille, à 5 minutes à pied du métro République Beaux-Arts.' },
  { q: 'Proposez-vous le café à emporter ?', a: 'Oui, tous nos cafés sont disponibles à emporter dans des cups compostables. Réduction de 0,20€ si vous apportez votre tasse réutilisable.' },
  { q: 'Y a-t-il le WiFi et des prises électriques ?', a: 'Oui, WiFi gratuit et prises électriques disponibles. Bienvenue est un excellent endroit pour travailler tout en savourant un bon café.' },
  { q: 'Quelle est la différence entre un flat white et un latte ?', a: 'Le flat white utilise un double espresso avec 150ml de lait pour garder une note de café prononcée. Le latte est plus généreux en lait (240ml) pour une boisson plus douce.' },
  { q: 'Proposez-vous des laits végétaux ?', a: 'Oui : avoine, amande et noix de coco. Supplément de 0,50€. Le lait d\u2019avoine est notre recommandation pour les lattés.' },
  { q: 'Quel est le meilleur coffee shop du Vieux-Lille ?', a: 'Bienvenue Coffeeshop est le seul café de spécialité du Vieux-Lille avec une traçabilité complète, des baristas formés et un cadre exceptionnel. Venez vous faire votre propre opinion !' },
];

export default function CoffeeShopVieuxLille() {
  return (
    <LandingShell>
      <SplitHero
        badge="Café de spécialité — Vieux-Lille"
        title="Le coffee shop du Vieux-Lille qui fait la différence"
        subtitle="Café de spécialité, baristas passionnés, cadre exceptionnel. Au 79 rue Esquermoise."
        ctas={[
          { text: 'Découvrir notre carte', href: '/carte' },
          { text: 'Nous trouver', href: '#location' },
        ]}
        sideContent={
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-sm space-y-4">
            <h3 className="font-display font-semibold text-lg">Horaires d'ouverture</h3>
            <div className="space-y-1 text-white/80">
              <p>Lundi – Vendredi : 8h – 18h</p>
              <p>Samedi – Dimanche : 9h – 18h</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['WiFi', 'Prises électriques', 'Café à emporter', 'Vente de grains', 'Accessoires'].map(tag => (
                <span key={tag} className="text-xs bg-white/10 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        }
      />

      <Intro
        title="Ici, tout commence par la tasse."
        paragraphs={[
          "Bienvenue est né d'une conviction : le café mérite mieux que la médiocrité industrielle. Nous sommes un café de spécialité au cœur du Vieux-Lille, dans une boutique emblématique avec moulures et verrière.",
          "Chaque tasse est préparée avec un café tracé, torréfié artisanalement, et servi par des baristas qui connaissent l'histoire de chaque grain. Pas de capsules, pas de café anonyme : ici, le café a un nom.",
          "Que vous veniez pour un espresso rapide au comptoir ou un V60 à déguster tranquillement, vous trouverez toujours un café à la hauteur de vos attentes.",
        ]}
      />

      <MenuCards
        title="Nos boissons"
        subtitle="Café de spécialité, chocolat Valrhona, matcha de cérémonie. Laits végétaux +0,50€."
        items={menuItems}
        columns={4}
        note="Décaféiné disponible. Carte complète en boutique."
      />

      <DarkFeatures
        title="Ce qui nous différencie"
        subtitle="Six raisons de choisir Bienvenue plutôt qu'une chaîne."
        items={differentiators}
        columns={3}
      />

      <Comparison
        title="Bienvenue vs. les chaînes nationales"
        headers={['Critère', 'Bienvenue', 'Chaînes nationales']}
        rows={comparisonRows}
      />

      <Testimonials title="Ce qu'en disent nos clients" items={testimonials} />

      <FAQ items={faqItems} />

      <div id="location">
        <Location
          title="Nous trouver dans le Vieux-Lille"
          subtitle="79 rue Esquermoise — à 5 min du métro République Beaux-Arts."
          directions="Parking Rihour à proximité. Station V'Lille à 2 minutes."
        />
      </div>

      <CTABanner
        title="Venez vous faire une opinion."
        text="Le meilleur argument, c'est la tasse. On vous attend au 79 rue Esquermoise."
        ctas={[{ text: 'Voir notre carte', href: '/carte' }]}
      />
    </LandingShell>
  );
}
