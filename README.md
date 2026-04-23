# Slate Exit Advisory website

Source for **slateexit.com** (and the GitHub Pages preview at https://jimcoleman1982.github.io/slate-exit-mockup/).

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind, static export
- Source Serif 4 + IBM Plex Sans + IBM Plex Mono via `next/font/google`

## Where to edit what

| Need to change | File |
|---|---|
| Visible copy (headlines, body, FAQs, cards, footer) | `src/content/homepage.json` |
| Booking / webinar / inquiry / email / LinkedIn URLs | `src/lib/links.ts` |
| Page layout, sections, structure | `src/app/page.tsx` |
| Navigation items / mobile drawer | `src/components/Nav.tsx` |
| FAQ accordion behavior | `src/components/Accordion.tsx` |
| Photos | `public/jim-hero.jpg`, `public/jim-about.jpg` |
| Colors, typography, design tokens | `src/app/globals.css` (CSS vars at top) |
| Page metadata / SEO title / OG tags | `src/app/layout.tsx` |

## Edit from anywhere (no laptop required)

1. Open this repo on github.com
2. Click any file (e.g., `src/content/homepage.json`)
3. Click the pencil icon, edit, click "Commit changes"
4. The deploy workflow auto-runs (~1 minute) and the site updates

## Edit locally

```bash
npm install
npm run dev          # local preview at http://localhost:3000
```

When done:
```bash
git add -A
git commit -m "describe the change"
git push origin main
```

The GitHub Action builds and deploys automatically.

## Deploy targets

The same source builds for two URLs:

| URL | Build env | basePath |
|---|---|---|
| https://jimcoleman1982.github.io/slate-exit-mockup/ | `DEPLOY_TARGET=gh-pages` (set by GitHub Action) | `/slate-exit-mockup` |
| https://slateexit.com (Cloudflare Pages) | (env unset) | `''` (root) |

Logic lives in `next.config.mjs` and `src/lib/links.ts`.

## Hard rules
- The ONLY price shown publicly is the $197 webinar
- Zero em dashes
- Mobile-first; test at iPhone SE width (375px)
- Warm cream background (`--slate-bg: #EEE8DC`), no white tech-startup look
