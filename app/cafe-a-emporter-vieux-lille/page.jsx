import LandingShell from '../components/landing/LandingShell';
import {
  SplitHero, Strip, Intro, MenuCards, Comparison, Steps, FAQ, Location, CTABanner,
} from '../components/landing/Sections';

export const metadata = {
  title: 'Café à Emporter Vieux-Lille — Coffee To Go | Bienvenue Coffeeshop',
  description: 'Café à emporter dans le Vieux-Lille dès 8h. Flat white, espresso, café filtre, cold brew — préparés minute, en cup réutilisable ou compostable. Qualité spécialité, vitesse garantie.',
  alternates: { canonical: 'https://bienvenue.cafe/cafe-a-emporter-vieux-lille' },
};

const stripItems = [
  { emoji: '⚡', text: 'Prêt en moins de 2 minutes' },
  { emoji: '🌅', text: 'Ouvert dès 8h' },
  { emoji: '♻️', text: 'Cup réutilisable acceptée' },
  { emoji: '☕', text: 'Café de spécialité' },
];

const menuItems = [
  { emoji: '☕', name: 'Espresso', price: '2,80€ / 4,00€', description: 'Simple ou double', time: '~45 sec' },
  { emoji: '🥛', name: 'Flat White', price: '5,50€', description: 'Double espresso, 150ml lait', time: '~1 min' },
  { emoji: '☁️', name: 'Cappuccino', price: '5,00€', description: 'Espresso, lait, mousse', time: '~1 min' },
  { emoji: '🥤', name: 'Latte', price: '5,00€', description: '30ml espresso, 240ml lait', time: '~1 min' },
  { emoji: '🫖', name: 'Café filtre', price: '3,80€', description: 'Batch brew, prêt à servir', time: 'Immédiat' },
  { emoji: '🧊', name: 'Cold Brew', price: '5,00€', description: 'Infusé à froid', time: 'Immédiat' },
  { emoji: '🍵', name: 'Matcha Latte BIO', price: '6,50€', description: 'Matcha de cérémonie', time: '~1 min' },
  { emoji: '🔄', name: 'Décaféiné', price: '+0,30€', description: 'Disponible sur tous les cafés', time: '~1 min' },
];

const comparisonRows = [
  ['Origine tracée', '✓ Toujours', '✗ Jamais'],
  ['Préparé minute', '✓ Par un barista', '~ Machine auto'],
  ['Cup réutilisable', '✓ -0,20€', '~ Variable'],
  ['Temps d\u2019attente', '< 2 min', '~ 3-5 min'],
  ['Latte art', '✓ Oui', '✗ Non'],
  ['Sirops maison', '✓ Cassonade', '✗ Industriels'],
  ['Ouverture', '8h', '~ 7h30-8h'],
];

const morningSteps = [
  { title: 'Passez devant', description: '79 rue Esquermoise, en plein Vieux-Lille. Sur votre chemin vers le bureau ou le métro.' },
  { title: 'Commandez', description: 'Au comptoir, choisissez votre café. Nos baristas vous guident si vous hésitez.' },
  { title: 'On prépare', description: 'Votre café est préparé en moins de 2 minutes. Fraîchement moulu, extrait minute.' },
  { title: 'Vous repartez', description: 'Cup compostable ou dans votre tasse réutilisable (-0,20€). Le meilleur café de votre journée.' },
];

const snacks = [
  { emoji: '🥐', name: 'Croissant', price: '1,80€', description: 'Beurre, livré frais chaque matin' },
  { emoji: '🥑', name: 'Tartine avocat', price: '4,50€', description: 'Pain artisanal, avocat frais' },
  { emoji: '🥜', name: 'Mix noix & dattes', price: '3,00€', description: 'Énergie pour la route' },
  { emoji: '🥙', name: 'Houmous & crackers', price: '4,00€', description: 'Léger et nourrissant' },
];

const faqItems = [
  { q: 'À quelle heure ouvrez-vous pour le café à emporter ?', a: '8h en semaine, 9h le week-end. Parfait pour attraper un café avant le bureau.' },
  { q: 'Combien de temps dois-je attendre ?', a: 'Moins de 2 minutes pour la plupart des boissons. Le café filtre et le cold brew sont immédiats. Un espresso prend 45 secondes.' },
  { q: 'Acceptez-vous les tasses réutilisables ?', a: 'Oui, et on vous fait une réduction de 0,20€. Apportez votre mug, thermos ou KeepCup.' },
  { q: 'Vos cups à emporter sont-elles éco-responsables ?', a: 'Oui, nous utilisons des cups compostables. Mais la meilleure option reste votre propre tasse réutilisable.' },
  { q: 'Puis-je commander à l\u2019avance ?', a: 'Pas encore de commande en ligne, mais avec un temps de préparation de moins de 2 minutes, vous n\u2019aurez pas le temps de regarder votre téléphone.' },
  { q: 'Où se trouve Bienvenue pour un café à emporter ?', a: '79 rue Esquermoise, Vieux-Lille. À 5 minutes à pied du métro République Beaux-Arts. Vous ne pouvez pas nous rater.' },
];

export default function CafeAEmporterVieuxLille() {
  return (
    <LandingShell>
      <SplitHero
        badge="Coffee to go — Dès 8h — Vieux-Lille"
        title="Un café à emporter qui mérite votre détour du matin"
        subtitle="Café de spécialité, préparé minute, en cup compostable ou réutilisable. Au 79 rue Esquermoise."
        gradient="from-[#8B3A00] to-[#5C2700]"
        ctas={[
          { text: 'Voir la carte à emporter', href: '#menu' },
          { text: 'Nous trouver', href: '#location' },
        ]}
        sideContent={
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-sm space-y-3">
            <h3 className="font-display font-semibold text-lg">Temps de préparation</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex justify-between"><span>Espresso</span><span>~45 sec</span></div>
              <div className="flex justify-between"><span>Flat White / Latte</span><span>~1 min</span></div>
              <div className="flex justify-between"><span>Café filtre</span><span>Immédiat</span></div>
              <div className="flex justify-between"><span>Cold Brew</span><span>Immédiat</span></div>
            </div>
            <p className="text-[#D4A84B] font-medium pt-2">Ouvert dès 8h en semaine</p>
          </div>
        }
      />

      <Strip items={stripItems} />

      <Intro
        title="Le café à emporter le plus honnête du Vieux-Lille"
        paragraphs={[
          "À 20 mètres de Starbucks, on vous propose l\u2019inverse : un café dont vous connaissez l\u2019origine, préparé par un barista qui sait ce qu\u2019il fait, dans une cup compostable.",
          "Même qualité sur place ou à emporter. Pas de version dégradée pour le to-go : votre flat white du matin est préparé avec le même soin, le même grain, le même barista.",
          "Le détour vaut 1 minute de marche. Le goût vaut toute la journée.",
        ]}
      />

      <div id="menu">
        <MenuCards
          title="La carte à emporter"
          subtitle="Préparé minute par nos baristas. Laits végétaux +0,50€. Cup réutilisable -0,20€."
          items={menuItems}
          columns={4}
        />
      </div>

      <Comparison
        title="Bienvenue vs. les grandes chaînes"
        headers={['Critère', 'Bienvenue', 'Grandes chaînes']}
        rows={comparisonRows}
      />

      <Steps
        title="Votre routine du matin"
        items={morningSteps}
      />

      <MenuCards
        title="Snacks à emporter"
        subtitle="De quoi accompagner votre café sur la route."
        items={snacks}
        columns={4}
        bg="bg-[#FAF7F2]"
      />

      <CTABanner
        title="Même qualité sur place ou à emporter."
        text="Votre flat white du matin mérite mieux qu'une machine automatique."
        bg="bg-[#D4500A]"
        ctas={[]}
      />

      <FAQ items={faqItems} />

      <div id="location">
        <Location
          title="Facile à trouver, difficile d'oublier."
          subtitle="79 rue Esquermoise, Vieux-Lille — sur votre chemin."
          directions="Métro République Beaux-Arts, 5 min à pied. Parking Rihour à proximité."
        />
      </div>

      <CTABanner
        title="Demain matin, faites le détour."
        text="1 minute de marche, une journée de meilleur café."
        ctas={[{ text: 'Nous trouver', href: '#location' }]}
      />
    </LandingShell>
  );
}
