import Link from 'next/link';

/* ─── Hero Section ─── */
export function Hero({ badge, title, subtitle, ctas = [], gradient = 'from-[#2C1D0E] to-[#1A1209]' }) {
  return (
    <section className={`relative bg-gradient-to-br ${gradient} text-white py-20 sm:py-28 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <span className="inline-block text-xs uppercase tracking-widest text-[#D4A84B] border border-[#D4A84B]/30 rounded-full px-4 py-1.5 mb-6">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-5xl font-display font-bold leading-tight mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">{subtitle}</p>}
        {ctas.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {ctas.map((cta, i) => (
              <Link
                key={i}
                href={cta.href || '#'}
                className={i === 0
                  ? 'bg-[#D4A84B] text-[#1A1209] font-semibold px-6 py-3 rounded-full hover:bg-[#C4933F] transition-colors text-sm'
                  : 'border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm'
                }
              >
                {cta.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Split Hero (pages 3, 5) ─── */
export function SplitHero({ badge, title, subtitle, ctas = [], gradient = 'from-[#2C1D0E] to-[#1A1209]', sideContent }) {
  return (
    <section className={`relative bg-gradient-to-br ${gradient} text-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          {badge && (
            <span className="inline-block text-xs uppercase tracking-widest text-[#D4A84B] border border-[#D4A84B]/30 rounded-full px-4 py-1.5 mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-display font-bold leading-tight mb-4">{title}</h1>
          {subtitle && <p className="text-lg text-white/70 mb-8">{subtitle}</p>}
          {ctas.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {ctas.map((cta, i) => (
                <Link
                  key={i}
                  href={cta.href || '#'}
                  className={i === 0
                    ? 'bg-[#D4A84B] text-[#1A1209] font-semibold px-6 py-3 rounded-full hover:bg-[#C4933F] transition-colors text-sm'
                    : 'border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm'
                  }
                >
                  {cta.text}
                </Link>
              ))}
            </div>
          )}
        </div>
        {sideContent && <div>{sideContent}</div>}
      </div>
    </section>
  );
}

/* ─── Feature Strip ─── */
export function Strip({ items, bg = 'bg-[#D4A84B]', textColor = 'text-[#1A1209]' }) {
  return (
    <div className={`${bg} ${textColor} py-4`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Text Intro Section ─── */
export function Intro({ title, paragraphs = [], quote, children, bg = 'bg-[#FAF7F2]' }) {
  return (
    <section className={`${bg} py-16 sm:py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8">{title}</h2>}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[#6B5E4F] leading-relaxed">{p}</p>
            ))}
            {children}
          </div>
          {quote && (
            <div className="bg-[#2C1D0E] text-white p-8 rounded-2xl">
              <p className="font-serif italic text-lg leading-relaxed">&ldquo;{quote}&rdquo;</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Card Grid ─── */
export function CardGrid({ title, subtitle, items = [], columns = 4, bg = 'bg-[#F0EDE8]', renderCard }) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className={`${bg} py-16 sm:py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-center">{title}</h2>}
        {subtitle && <p className="text-[#6B5E4F] text-center mb-10 max-w-2xl mx-auto">{subtitle}</p>}
        <div className={`grid ${colClass} gap-6`}>
          {items.map((item, i) => renderCard ? renderCard(item, i) : (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              {item.badge && (
                <span className="inline-block text-xs bg-[#D4A84B]/10 text-[#C4933F] px-2.5 py-0.5 rounded-full mb-3 font-medium">
                  {item.badge}
                </span>
              )}
              {item.emoji && <div className="text-3xl mb-3">{item.emoji}</div>}
              <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
              {item.description && <p className="text-[#6B5E4F] text-sm mb-3">{item.description}</p>}
              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-[#F0EDE8] px-2 py-0.5 rounded-full text-[#6B5E4F]">{tag}</span>
                  ))}
                </div>
              )}
              {item.price && <p className="font-display font-semibold text-[#C4933F]">{item.price}</p>}
              {item.level && <p className="text-xs text-[#6B5E4F] mt-1">{item.level}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features Grid (icons + text) ─── */
export function Features({ title, subtitle, items = [], columns = 3, bg = 'bg-[#FAF7F2]' }) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-3 lg:grid-cols-5',
    6: 'sm:grid-cols-2 lg:grid-cols-3',
  }[columns] || 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={`${bg} py-16 sm:py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-center">{title}</h2>}
        {subtitle && <p className="text-[#6B5E4F] text-center mb-10 max-w-2xl mx-auto">{subtitle}</p>}
        <div className={`grid ${colClass} gap-6`}>
          {items.map((item, i) => (
            <div key={i} className="text-center p-6">
              {item.emoji && <div className="text-3xl mb-3">{item.emoji}</div>}
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              {item.description && <p className="text-[#6B5E4F] text-sm">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Dark Features Section ─── */
export function DarkFeatures({ title, subtitle, items = [], columns = 3 }) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    5: 'sm:grid-cols-3 lg:grid-cols-5',
    6: 'sm:grid-cols-2 lg:grid-cols-3',
  }[columns] || 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="bg-[#2C1D0E] text-white py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-center">{title}</h2>}
        {subtitle && <p className="text-white/60 text-center mb-10 max-w-2xl mx-auto">{subtitle}</p>}
        <div className={`grid ${colClass} gap-6`}>
          {items.map((item, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-xl">
              {item.emoji && <div className="text-3xl mb-3">{item.emoji}</div>}
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              {item.description && <p className="text-white/60 text-sm">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Numbered Steps ─── */
export function Steps({ title, items = [], bg = 'bg-[#FAF7F2]' }) {
  return (
    <section className={`${bg} py-16 sm:py-20 px-4`}>
      <div className="max-w-4xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-10 text-center">{title}</h2>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 bg-[#D4A84B] text-[#1A1209] rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              {item.description && <p className="text-[#6B5E4F] text-sm">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table ─── */
export function Comparison({ title, headers, rows, bg = 'bg-[#2C1D0E]' }) {
  return (
    <section className={`${bg} ${bg.includes('2C1D0E') || bg.includes('1A1209') ? 'text-white' : ''} py-16 sm:py-20 px-4`}>
      <div className="max-w-4xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-10 text-center">{title}</h2>}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 font-display">{headers[0]}</th>
                <th className="text-center py-3 px-4 font-display text-[#D4A84B]">{headers[1]}</th>
                <th className="text-center py-3 px-4 font-display opacity-60">{headers[2]}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="py-3 px-4">{row[0]}</td>
                  <td className="text-center py-3 px-4">{row[1]}</td>
                  <td className="text-center py-3 px-4 opacity-50">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
export function Testimonials({ title, items = [], bg = 'bg-[#F0EDE8]' }) {
  return (
    <section className={`${bg} py-16 sm:py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-10 text-center">{title}</h2>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-[#D4A84B] mb-3">{'★'.repeat(item.rating || 5)}</div>
              <p className="text-[#6B5E4F] text-sm mb-4 italic">&ldquo;{item.text}&rdquo;</p>
              <div>
                <p className="font-display font-semibold text-sm">{item.name}</p>
                {item.role && <p className="text-xs text-[#6B5E4F]">{item.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
export function FAQ({ title = 'Questions fréquentes', items = [] }) {
  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-10 text-center">{title}</h2>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="border-b border-[#E8DCC8] pb-6">
              <h3 className="font-display font-semibold mb-2">{item.q}</h3>
              <p className="text-[#6B5E4F] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Location Section ─── */
export function Location({ title = 'Nous trouver', subtitle, directions }) {
  return (
    <section className="bg-[#F0EDE8] py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-[#6B5E4F] mb-8">{subtitle}</p>}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <p className="font-display font-semibold mb-1">Bienvenue Coffeeshop</p>
          <p className="text-[#6B5E4F] text-sm">79 rue Esquermoise, 59800 Lille</p>
          <div className="mt-4 text-sm text-[#6B5E4F] space-y-1">
            <p>Lundi – Vendredi : 8h – 18h</p>
            <p>Samedi – Dimanche : 9h – 18h</p>
          </div>
          {directions && <p className="mt-4 text-sm text-[#6B5E4F]">{directions}</p>}
          <a
            href="https://maps.google.com/?q=79+rue+Esquermoise,+59800+Lille,+France"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#D4A84B] text-[#1A1209] font-semibold px-6 py-3 rounded-full hover:bg-[#C4933F] transition-colors text-sm"
          >
            Voir sur Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
export function CTABanner({ title, text, ctas = [], bg = 'bg-[#D4A84B]' }) {
  const isDark = bg.includes('D4A84B') || bg.includes('C4933F');
  return (
    <section className={`${bg} py-16 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-2xl sm:text-3xl font-display font-bold mb-3 ${isDark ? 'text-[#1A1209]' : 'text-white'}`}>{title}</h2>
        {text && <p className={`mb-8 ${isDark ? 'text-[#1A1209]/70' : 'text-white/70'}`}>{text}</p>}
        {ctas.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {ctas.map((cta, i) => (
              <Link
                key={i}
                href={cta.href || '#'}
                className={isDark
                  ? 'bg-[#1A1209] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2C1D0E] transition-colors text-sm'
                  : 'bg-white text-[#1A1209] font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors text-sm'
                }
              >
                {cta.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Menu Cards ─── */
export function MenuCards({ title, subtitle, items = [], note, columns = 4, bg = 'bg-[#F0EDE8]' }) {
  const colClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section className={`${bg} py-16 sm:py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-center">{title}</h2>}
        {subtitle && <p className="text-[#6B5E4F] text-center mb-10 max-w-2xl mx-auto">{subtitle}</p>}
        <div className={`grid ${colClass} gap-4`}>
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
              {item.emoji && <div className="text-2xl mb-2">{item.emoji}</div>}
              <h3 className="font-display font-semibold text-sm">{item.name}</h3>
              {item.description && <p className="text-[#6B5E4F] text-xs mt-1">{item.description}</p>}
              <div className="mt-auto pt-3 flex items-baseline justify-between">
                <span className="font-display font-semibold text-[#C4933F]">{item.price}</span>
                {item.time && <span className="text-xs text-[#6B5E4F]">{item.time}</span>}
              </div>
            </div>
          ))}
        </div>
        {note && <p className="text-center text-sm text-[#6B5E4F] mt-6">{note}</p>}
      </div>
    </section>
  );
}

/* ─── Rules / List Section ─── */
export function Rules({ title, items = [], bg = 'bg-[#FAF7F2]' }) {
  return (
    <section className={`${bg} py-16 sm:py-20 px-4`}>
      <div className="max-w-3xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-center">{title}</h2>}
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                <p className="text-[#6B5E4F] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
