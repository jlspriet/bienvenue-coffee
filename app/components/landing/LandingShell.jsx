import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/cafe-en-grains-lille', label: 'Cafés en grains' },
  { href: '/accessoires-cafe-lille', label: 'Accessoires' },
  { href: '/coffee-shop-vieux-lille', label: 'Notre café' },
  { href: '/cafe-pour-travailler-vieux-lille', label: 'Travailler ici' },
];

const footerLinks = [
  { href: '/cafe-en-grains-lille', label: 'Café en grains à Lille' },
  { href: '/accessoires-cafe-lille', label: 'Accessoires café' },
  { href: '/coffee-shop-vieux-lille', label: 'Coffee shop Vieux-Lille' },
  { href: '/cafe-pour-travailler-vieux-lille', label: 'Café pour travailler' },
  { href: '/cafe-a-emporter-vieux-lille', label: 'Café à emporter' },
];

export default function LandingShell({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1209]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#1A1209]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-serif italic text-[#D4A84B] text-lg">
            Bienvenue Coffeeshop
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="bg-[#1A1209] text-white/60 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <p className="font-serif italic text-[#D4A84B] text-lg">Bienvenue Coffeeshop</p>
              <p className="text-sm mt-1">Ici, tout commence par la tasse.</p>
            </div>
            <div className="flex flex-col gap-2">
              {footerLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs text-center">
            © 2026 Bienvenue Coffeeshop. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
