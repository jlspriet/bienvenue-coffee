'use client';

import { useState } from 'react';
import Image from 'next/image';
import content from '../content.json';

const photos = [
    { src: '/images/logo.png', alt: 'Bienvenue Coffee Shop storefront at 79 rue Esquermoise' },
    { src: '/images/photo-1.jpg', alt: 'Interior seating area with skylight and signature B logo' },
    { src: '/images/photo-6.jpg', alt: 'View from upstairs mezzanine' },
    { src: '/images/photo-2.jpg', alt: 'Counter bar seating area' },
    { src: '/images/photo-3.jpg', alt: 'Counter and menu board' },
    { src: '/images/photo-4.jpg', alt: 'Building exterior on rue Esquermoise' },
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
    const t = content[lang];

    return (
        <div className="min-h-screen bg-base-100 text-base-content px-6 py-16 sm:px-8 relative">
            {/* Language Toggle */}
            <div className="fixed top-4 right-4 z-10">
                <div className="join">
                    <button
                        className={`join-item btn btn-sm ${lang === 'fr' ? 'btn-active' : 'btn-ghost'}`}
                        onClick={() => setLang('fr')}
                    >
                        FR
                    </button>
                    <button
                        className={`join-item btn btn-sm ${lang === 'en' ? 'btn-active' : 'btn-ghost'}`}
                        onClick={() => setLang('en')}
                    >
                        EN
                    </button>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-base-200 border border-base-300 flex items-center justify-center text-base-content/40 text-sm">
                        Logo
                    </div>
                </div>

                {/* Title */}
                <h1 className="mt-8 text-center text-5xl sm:text-6xl font-light tracking-tight">
                    Bienvenue
                </h1>
                <p className="mt-2 text-center text-lg sm:text-xl text-base-content/50 tracking-widest uppercase">
                    Coffee Shop
                </p>

                {/* Photo Grid */}
                <section className="mt-16">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {photos.map((photo, i) => (
                            <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover"
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
                <section className="mt-16">
                    <h2 className="text-center text-2xl font-light tracking-wide mb-8">
                        {t.menu.title}
                    </h2>

                    {t.menu.sections.map((section, i) => (
                        <div key={i} className={i > 0 ? 'mt-8' : ''}>
                            <h3 className="text-sm font-semibold tracking-widest uppercase text-base-content/40 mb-4">
                                {section.title}
                            </h3>
                            <div className="space-y-3">
                                {section.items.map((item, j) => (
                                    <div key={j} className="flex items-baseline gap-2">
                                        <span className="font-medium">{item.name}</span>
                                        <span className="flex-1 border-b border-dotted border-base-300" />
                                        <span className="text-base-content/60">{item.price}</span>
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
                    <div>
                        {content.address.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
}
