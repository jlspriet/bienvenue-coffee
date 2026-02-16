'use client';

import { useState } from 'react';
import content from '../../content.json';
import PageShell from '../components/PageShell';

export default function CartePage() {
    const [lang, setLang] = useState('fr');
    const t = content[lang];
    const menu = t.fullMenu;

    return (
        <PageShell lang={lang} setLang={setLang}>
            {/* Page Title */}
            <h1 className="mt-12 text-center text-2xl font-serif font-[550] text-[#bf8e39]/70">
                {menu.pageTitle}
            </h1>

            {/* Menu Sections */}
            <div className="mt-10 max-w-sm mx-auto">
                {menu.sections.map((section, i) => (
                    <div key={i} className={i > 0 ? 'mt-12' : ''}>
                        <h3 className="text-xl font-[550] text-[#bf8e39]/70 mb-4 font-serif">
                            {section.title}
                        </h3>
                        <div className="space-y-2">
                            {section.items.map((item, j) => (
                                <div key={j}>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-medium font-display uppercase tracking-wide text-sm">
                                            {item.name}
                                        </span>
                                        <span className="flex-1 border-b border-dotted border-base-300" />
                                        <span className="text-base-content/60 font-display text-sm whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </div>
                                    {item.description && (
                                        <p className="text-xs text-base-content/40 mt-0.5 leading-snug">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Supplements */}
                <div className="mt-12 pt-8 border-t border-base-300">
                    <h3 className="text-xl font-[550] text-[#bf8e39]/70 mb-4 font-serif">
                        {menu.supplements.title}
                    </h3>
                    <div className="space-y-2">
                        {menu.supplements.items.map((item, j) => (
                            <div key={j}>
                                <div className="flex items-baseline gap-2">
                                    <span className="font-medium font-display uppercase tracking-wide text-sm">
                                        {item.name}
                                    </span>
                                    <span className="flex-1 border-b border-dotted border-base-300" />
                                    <span className="text-base-content/60 font-display text-sm whitespace-nowrap">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description && (
                                    <p className="text-xs text-base-content/40 mt-0.5 leading-snug">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageShell>
    );
}
