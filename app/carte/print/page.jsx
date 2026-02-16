'use client';

import { useState } from 'react';
import Image from 'next/image';
import content from '../../../content.json';

function PrintItem({ item }) {
    return (
        <div className="mb-2">
            <div className="flex items-baseline gap-1">
                <span className="font-medium font-display uppercase tracking-wide text-[13.5px] leading-tight">
                    {item.name}
                </span>
                <span className="flex-1 border-b border-dotted border-gray-300 min-w-2" />
                <span className="text-gray-500 font-display text-[13.5px] whitespace-nowrap">
                    {item.price}
                </span>
            </div>
            {item.description && (
                <p className="text-[11px] text-gray-400 leading-tight mt-0.5">
                    {item.description}
                </p>
            )}
        </div>
    );
}

function PrintSection({ title, items, separator }) {
    return (
        <section className={`break-inside-avoid mb-6 ${separator ? 'border-t border-gray-200 pt-4' : ''}`}>
            <h3 className="text-xl font-[550] text-[#bf8e39] mb-2 font-serif">
                {title}
            </h3>
            <div>
                {items.map((item, j) => (
                    <PrintItem key={j} item={item} />
                ))}
            </div>
        </section>
    );
}

function PageLogo() {
    return (
        <div className="flex justify-center mb-6 break-inside-avoid">
            <Image
                src="/images/logos/BIENVENUE_Logo_PNG-cropped.png"
                alt="Bienvenue Coffee Shop"
                width={1080}
                height={1080}
                className="w-60 h-auto"
                priority
            />
        </div>
    );
}

export default function PrintMenuPage() {
    const [lang, setLang] = useState('fr');
    const t = content[lang];
    const menu = t.fullMenu;

    const allSections = [
        ...menu.sections,
        menu.supplements,
    ];

    return (
        <>
            <style>{`
                @page {
                    size: A4;
                    margin: 12mm 14mm;
                }
                @media print {
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                }
            `}</style>

            {/* Screen-only controls */}
            <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Language:</span>
                    <div className="join join-horizontal rounded-full border border-gray-300">
                        <button
                            className={`join-item btn btn-xs rounded-full border-0 text-xs font-light ${lang === 'fr' ? 'btn-active' : 'btn-ghost'}`}
                            onClick={() => setLang('fr')}
                        >
                            FR
                        </button>
                        <button
                            className={`join-item btn btn-xs rounded-full border-0 text-xs font-light ${lang === 'en' ? 'btn-active' : 'btn-ghost'}`}
                            onClick={() => setLang('en')}
                        >
                            EN
                        </button>
                    </div>
                </div>
                <span className="text-sm text-gray-400">Press ⌘P to print</span>
            </div>

            <div className="print:mt-0 mt-16 bg-white text-black w-[210mm] mx-auto px-[14mm] py-[12mm] box-border print:w-auto print:mx-0 print:px-0 print:py-0 relative">
                <Image
                    src="/images/logos/Blogo-half.png"
                    alt=""
                    width={600}
                    height={600}
                    className="fixed top-14 left-0 w-64 h-auto opacity-3 pointer-events-none select-none"
                />
                <PageLogo />
                <div className="columns-2 gap-6">
                    {allSections.map((section, i) => (
                        <PrintSection
                            key={i}
                            title={section.title}
                            items={section.items}
                            separator={section.separator}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
