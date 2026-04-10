'use client';

import { useState } from 'react';
import content from '../../content.json';
import PageShell from '../components/PageShell';
import RichText from '../components/RichText';

export default function CartePage() {
    const [lang, setLang] = useState('fr');
    const t = content[lang];
    const menu = t.fullMenu;

    return (
        <PageShell lang={lang} setLang={setLang}>
            {/* Menu Sections */}
            <div className="mt-12 max-w-sm mx-auto">
                {menu.sections.map((section, i) => (
                    <div key={i} className={i > 0 ? 'mt-12' : ''}>
                        <RichText as="h3" className="text-xl font-[550] text-[#bf8e39]/70 mb-4 font-serif">
                            {section.title}
                        </RichText>
                        <div className="space-y-2">
                            {section.items.map((item, j) => (
                                <div key={j}>
                                    <div className="flex items-baseline gap-2">
                                        <RichText className="font-medium font-display uppercase tracking-wide text-sm">
                                            {item.name}
                                        </RichText>
                                        <span className="flex-1 border-b border-dotted border-base-300" />
                                        <span className="text-base-content/60 font-display text-sm whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </div>
                                    {item.description && (
                                        <RichText as="p" className="text-xs text-base-content/40 mt-0.5 leading-snug">
                                            {item.description}
                                        </RichText>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Supplements */}
                <div className="mt-12 pt-8 border-t border-base-300">
                    <RichText as="h3" className="text-xl font-[550] text-[#bf8e39]/70 mb-4 font-serif">
                        {menu.supplements.title}
                    </RichText>
                    <div className="space-y-2">
                        {menu.supplements.items.map((item, j) => (
                            <div key={j}>
                                <div className="flex items-baseline gap-2">
                                    <RichText className="font-medium font-display uppercase tracking-wide text-sm">
                                        {item.name}
                                    </RichText>
                                    <span className="flex-1 border-b border-dotted border-base-300" />
                                    <span className="text-base-content/60 font-display text-sm whitespace-nowrap">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description && (
                                    <RichText as="p" className="text-xs text-base-content/40 mt-0.5 leading-snug">
                                        {item.description}
                                    </RichText>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageShell>
    );
}
