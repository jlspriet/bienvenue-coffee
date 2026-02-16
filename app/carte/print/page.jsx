'use client';

import { useState } from 'react';
import Image from 'next/image';
import content from '../../../content.json';

function splitHalf(arr) {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
}

function PrintItem({ item, compact }) {
    return (
        <div className={compact ? 'mb-1' : 'mb-2'}>
            <div className="flex items-baseline gap-1">
                <span className="font-medium font-display uppercase tracking-wide text-[9px] leading-tight">
                    {item.name}
                </span>
                <span className="flex-1 border-b border-dotted border-gray-300 min-w-2" />
                <span className="text-gray-500 font-display text-[9px] whitespace-nowrap">
                    {item.price}
                </span>
            </div>
            {item.description && (
                <p className="text-[7.5px] text-gray-400 leading-tight mt-0.5">
                    {item.description}
                </p>
            )}
        </div>
    );
}

function SectionTitle({ children }) {
    return (
        <h3 className="text-sm font-[550] text-[#bf8e39] mb-2 font-serif uppercase tracking-wider">
            {children}
        </h3>
    );
}

function PageLogo() {
    return (
        <div className="flex justify-center mb-6">
            <Image
                src="/images/logos/BIENVENUE_Logo_PNG-cropped.png"
                alt="Bienvenue Coffee Shop"
                width={1080}
                height={1080}
                className="w-40 h-auto"
                priority
            />
        </div>
    );
}

export default function PrintMenuPage() {
    const [lang, setLang] = useState('fr');
    const t = content[lang];
    const menu = t.fullMenu;

    const whiteCoffees = menu.sections.find(s => s.title === 'White Coffees');
    const nonCoffee = menu.sections.find(s => s.title === 'Non-Coffee');
    const expressos = menu.sections.find(s => s.title === 'Expressos');
    const slowCoffee = menu.sections.find(s => s.title.startsWith('Slow Coffee'));
    const comptoir = menu.sections.find(s => s.title.startsWith('Café au'));
    const favorites = menu.sections.find(s => s.title.startsWith('Et ceux'));
    const supplements = menu.supplements;

    const [wcLeft, wcRight] = splitHalf(whiteCoffees?.items || []);
    const [ncLeft, ncRight] = splitHalf(nonCoffee?.items || []);

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
                <span className="text-sm text-gray-400">Press ⌘P to print</span>
            </div>

            <div className="print:mt-0 mt-16 bg-white text-black">
                {/* ===== PAGE 1 ===== */}
                <div className="page-1 w-[210mm] min-h-[297mm] mx-auto px-[14mm] py-[12mm] box-border print:w-auto print:min-h-0 print:mx-0 print:px-0 print:py-0">
                    <PageLogo />

                    {/* White Coffees */}
                    <section className="mb-6">
                        <SectionTitle>{whiteCoffees?.title}</SectionTitle>
                        <div className="grid grid-cols-2 gap-x-6">
                            <div>
                                {wcLeft.map((item, j) => (
                                    <PrintItem key={j} item={item} />
                                ))}
                            </div>
                            <div>
                                {wcRight.map((item, j) => (
                                    <PrintItem key={j} item={item} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Non-Coffee */}
                    <section className="mb-6">
                        <SectionTitle>{nonCoffee?.title}</SectionTitle>
                        <div className="grid grid-cols-2 gap-x-6">
                            <div>
                                {ncLeft.map((item, j) => (
                                    <PrintItem key={j} item={item} />
                                ))}
                            </div>
                            <div>
                                {ncRight.map((item, j) => (
                                    <PrintItem key={j} item={item} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Supplements */}
                    <section className="border-t border-gray-200 pt-4">
                        <SectionTitle>{supplements?.title}</SectionTitle>
                        <div className="space-y-1">
                            {supplements?.items.map((item, j) => (
                                <div key={j} className="flex items-baseline gap-1">
                                    <span className="font-medium font-display uppercase tracking-wide text-[9px]">
                                        {item.name}
                                    </span>
                                    {item.description && (
                                        <span className="text-[7.5px] text-gray-400">
                                            : {item.description}
                                        </span>
                                    )}
                                    <span className="flex-1" />
                                    <span className="text-gray-500 font-display text-[9px] whitespace-nowrap">
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Page break */}
                <div className="break-after-page" />

                {/* ===== PAGE 2 ===== */}
                <div className="page-2 w-[210mm] min-h-[297mm] mx-auto px-[14mm] py-[12mm] box-border print:w-auto print:min-h-0 print:mx-0 print:px-0 print:py-0">
                    <PageLogo />

                    {/* Expressos (left) | Slow Coffee (right) */}
                    <div className="grid grid-cols-2 gap-x-6 mb-8">
                        <section>
                            <SectionTitle>{expressos?.title}</SectionTitle>
                            <div>
                                {expressos?.items.map((item, j) => (
                                    <PrintItem key={j} item={item} />
                                ))}
                            </div>
                        </section>
                        <section>
                            <SectionTitle>{slowCoffee?.title}</SectionTitle>
                            <div>
                                {slowCoffee?.items.map((item, j) => (
                                    <PrintItem key={j} item={item} />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Café au Comptoir (left) | Et ceux qu'on aime bcp (right) */}
                    <div className="grid grid-cols-2 gap-x-6">
                        <section>
                            <SectionTitle>{comptoir?.title}</SectionTitle>
                            <div>
                                {comptoir?.items.map((item, j) => (
                                    <PrintItem key={j} item={item} compact />
                                ))}
                            </div>
                        </section>
                        <section>
                            <SectionTitle>{favorites?.title}</SectionTitle>
                            <div>
                                {favorites?.items.map((item, j) => (
                                    <PrintItem key={j} item={item} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
