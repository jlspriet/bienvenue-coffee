'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import content from '../../content.json';

export default function PageShell({ lang, setLang, children }) {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const heroLogoRef = useRef(null);
    const t = content[lang];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setScrolled(!entry.isIntersecting),
            { threshold: 0 }
        );
        if (heroLogoRef.current) observer.observe(heroLogoRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#FCFCFC] text-base-content px-6 pt-4 pb-16 sm:px-8">
            <Image
                src="/images/logos/Blogo-half.png"
                alt=""
                width={600}
                height={600}
                className="fixed top-14 left-0 w-64 h-auto opacity-3 pointer-events-none select-none"
                priority
            />
            {/* Sticky Top Bar — full width */}
            <div className={`sticky top-0 z-10 h-14 -mx-6 px-6 sm:-mx-8 sm:px-8 transition-colors duration-200 ${scrolled ? 'bg-[#FCFCFC]' : ''}`}>
                <div className="max-w-2xl mx-auto h-full flex items-center justify-between">
                    <nav className="flex items-center gap-1">
                        {[
                            { href: '/', label: t.nav.home },
                            { href: '/carte', label: t.nav.menu },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`btn btn-xs btn-ghost rounded-full text-xs font-light px-3 ${pathname === href ? 'border border-base-300 font-medium' : ''}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <div className={`transition-opacity duration-200 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                            src="/images/logos/BIENVENUE_Isotype_colored-cropped.png"
                            alt="Bienvenue"
                            width={1080}
                            height={1080}
                            className="w-10 h-10"
                        />
                    </div>
                    <div
                        className="relative flex items-center rounded-full border border-base-300 cursor-pointer h-6 w-[68px] bg-base-100"
                        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLang(lang === 'fr' ? 'en' : 'fr'); }}
                    >
                        <div
                            className="absolute top-0.5 bottom-0.5 w-[30px] rounded-full bg-base-300 transition-transform duration-200 ease-in-out"
                            style={{ left: 2, transform: lang === 'en' ? 'translateX(32px)' : 'translateX(0)' }}
                        />
                        <span className={`relative z-[1] flex-1 text-center text-xs font-light transition-opacity duration-200 ${lang === 'fr' ? 'opacity-100 font-medium' : 'opacity-40'}`}>
                            FR
                        </span>
                        <span className={`relative z-[1] flex-1 text-center text-xs font-light transition-opacity duration-200 ${lang === 'en' ? 'opacity-100 font-medium' : 'opacity-40'}`}>
                            EN
                        </span>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                {/* Hero Logo */}
                <div ref={heroLogoRef} className="flex justify-center">
                    <Image
                        src="/images/logos/BIENVENUE_Logo_PNG-cropped.png"
                        alt="Bienvenue Coffee Shop"
                        width={1080}
                        height={1080}
                        className="w-72 sm:w-[22rem] h-auto"
                        priority
                    />
                </div>

                {children}

                {/* Hours & Address */}
                <footer className="mt-16 text-center text-base-content/50 text-sm pb-8 space-y-4">
                    <div>
                        {t.hours.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                    <a
                        href="https://maps.google.com/?q=79+rue+Esquermoise,+59800+Lille,+France"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-base-content/70 transition-colors"
                    >
                        <span>📍</span>
                        <span>{content.address.join(', ')}</span>
                    </a>
                </footer>
            </div>
        </div>
    );
}
