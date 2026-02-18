# AGENTS

## Repo conventions

- One-page layout. Sections are composed in `/app/page.tsx`.
- Content lives in `/data/*.ts` and is referenced by components. Update copy there.
- Components include `// CONTENT:` markers that point to the source data file.
- Tailwind is the styling source of truth. Avoid ad-hoc inline styles unless necessary.
- Keep client components small and only where state/DOM APIs are required.

## Commands

- Dev server: `npm run dev`
- Production build: `npm run build`
- Start production: `npm run start`
- Lint: `npm run lint`

## Where to edit content

- Global links + hero subline + version line: `/data/site.ts`
- Projects (Build section): `/data/projects.ts`
- Leadership cards: `/data/leadership.ts`
- Lately scrapbook carousel: `/data/lately.ts`
- Places (map + reflections): `/data/places.ts`

## Notes

- Static map asset: `/public/world-map.svg`
- App shell + section order: `/app/page.tsx`
