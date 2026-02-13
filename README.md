# Bienvenue Coffee Shop

Single-page website for [Bienvenue Coffee Shop](https://instagram.com/bienvenue_coffeeshop) — a specialty coffee shop at 79 rue Esquermoise, Lille, France.

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4** + **DaisyUI 5**
- Deployed on **Netlify**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All text content (menu, prices, hours, statement) lives in **`content.json`** at the project root. The site supports **English** and **French** — users can toggle between them via a button in the top-right corner.

### Structure

```
content.json
├── links          # Instagram and European Coffee Trip URLs
├── address        # Shared across both languages
├── en             # English text
│   ├── statement  # About/statement paragraph
│   ├── menu       # Menu title, sections (with items + prices), footer
│   └── hours      # Opening hours
└── fr             # French text (same structure as en)
```

To update menu items or prices, edit `content.json` — no code changes needed.

## Build

```bash
npm run build
```

Use `CHECK_BUILD=1 npm run build` to build to a separate `.next-check` directory (avoids conflicts with a running dev server).
