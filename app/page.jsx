'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import content from '../content.json';

const photos = [
    { src: '/images/photo/DSC04533.jpg', alt: 'Bienvenue Coffee Shop' },
    { src: '/images/photo/DSC04606.jpg', alt: 'Bienvenue Coffee Shop' },
    { src: '/images/photo/DSC04669.jpg', alt: 'Bienvenue Coffee Shop' },
    { src: '/images/photo/P1.jpg', alt: 'Bienvenue Coffee Shop' },
    { src: '/images/photo/P5.jpg', alt: 'Bienvenue Coffee Shop' },
    { src: '/images/photo/DSC04530.jpg', alt: 'Bienvenue Coffee Shop' },
];

function InstagramIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Home() {
    const [lang, setLang] = useState('fr');
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
        <div className="min-h-screen bg-[#F9F9F9] text-base-content px-6 pt-4 pb-16 sm:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Sticky Top Bar */}
                <div className="sticky top-0 z-10 flex items-center justify-between py-2 bg-[#F9F9F9]">
                    <div className="w-[72px]" />
                    <div className={`transition-opacity duration-200 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                            src="/images/logos/BIENVENUE_Isotype_colored.png"
                            alt="Bienvenue"
                            width={1080}
                            height={1080}
                            className="w-[4.5rem] h-[4.5rem]"
                        />
                    </div>
                    <div className="join join-horizontal rounded-full border border-base-300">
                        <button
                            className={`join-item btn btn-sm rounded-full border-0 ${lang === 'fr' ? 'btn-active' : 'btn-ghost'}`}
                            onClick={() => setLang('fr')}
                        >
                            FR
                        </button>
                        <button
                            className={`join-item btn btn-sm rounded-full border-0 ${lang === 'en' ? 'btn-active' : 'btn-ghost'}`}
                            onClick={() => setLang('en')}
                        >
                            EN
                        </button>
                    </div>
                </div>
                {/* Logo */}
                <div ref={heroLogoRef} className="flex justify-center">
                    <Image
                        src="/images/logos/BIENVENUE_Logo_PNG.png"
                        alt="Bienvenue Coffee Shop"
                        width={1080}
                        height={1080}
                        className="w-72 sm:w-[22rem] h-auto"
                        priority
                    />
                </div>

                {/* Photo Grid */}
                <section className="mt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {photos.map((photo, i) => (
                            <div
                                key={i}
                                className="aspect-square relative overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Statement */}
                <section className="mt-16 text-center">
                    <p className="text-base-content/70 leading-relaxed">
                        {t.statement}
                    </p>
                </section>

                {/* Menu */}
                <section className="mt-16 max-w-md mx-auto">
                    {t.menu.sections.map((section, i) => (
                        <div key={i} className={i > 0 ? 'mt-10' : ''}>
                            <h3 className="text-xl font-[550] text-[#bf8e39]/70 mb-4 font-serif">
                                {section.title}
                            </h3>
                            <div className="space-y-0">
                                {section.items.map((item, j) => (
                                    <div key={j} className="flex items-baseline gap-2">
                                        <span className="font-medium font-display uppercase tracking-wide text-sm">{item.name}</span>
                                        <span className="flex-1 border-b border-dotted border-base-300" />
                                        <span className="text-base-content/60 font-display text-sm">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <p className="text-sm text-base-content/40 mt-6 italic">
                        {t.menu.footer}
                    </p>
                </section>

                {/* Links */}
                <section className="mt-16 flex justify-center items-center gap-8">
                    <a
                        href={content.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-50 hover:opacity-80 transition-opacity"
                    >
                        <InstagramIcon className="w-8 h-8" />
                    </a>
                    <a
                        href={content.links.ect}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-50 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/images/ect-logo.png"
                            alt="European Coffee Trip"
                            width={138}
                            height={41}
                            className="h-8 w-auto invert"
                        />
                    </a>
                </section>

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
