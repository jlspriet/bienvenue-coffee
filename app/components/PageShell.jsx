'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import content from '../../content.json';

export default function PageShell({ lang, setLang, children }) {
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
                    <div className="w-[68px]" />
                    <div className={`transition-opacity duration-200 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                            src="/images/logos/BIENVENUE_Isotype_colored-cropped.png"
                            alt="Bienvenue"
                            width={1080}
                            height={1080}
                            className="w-10 h-10"
                        />
                    </div>
                    <div className="join join-horizontal rounded-full border border-base-300">
                        <button
                            className={`join-item btn btn-xs rounded-full border-0 text-xs font-light ${lang === 'fr' ? 'btn-active' : 'btn-ghost'}`}
                            onClick={() => setLang('fr')}
                        >
                            fr
                        </button>
                        <button
                            className={`join-item btn btn-xs rounded-full border-0 text-xs font-light ${lang === 'en' ? 'btn-active' : 'btn-ghost'}`}
                            onClick={() => setLang('en')}
                        >
                            en
                        </button>
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
