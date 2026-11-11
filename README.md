# pauline-portfolio

Single-page portfolio built with Next.js App Router + Tailwind CSS.

## Getting started

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Open `http://localhost:3000`

## Content editing

All copy and data live in `/data/*.ts` files. Each file has a `// CONTENT:` marker at the top.

## Project structure

- `/app` App Router entry points
- `/components` UI components
- `/data` Content and data models
- `/public` Static assets

## Build

- `npm run build`
- `npm run start`

## Portfolio v3

The single page is composed in `app/page.tsx`. `PortfolioTabs` handles hash navigation
(`#work`, `#build`, `#community`, `#life`, `#about`) and arrow/Home/End keyboard navigation.
Work is the default tab. Most content renders on the server; only tabs and the bookshelf
category toggle require client state. Design tokens live in `tailwind.config.ts`.

| Content | Edit here |
| --- | --- |
| Name, introduction, footer links, About and places | `data/site.ts` |
| Work roles, dates, descriptions | `data/work.ts` |
| Featured project, other projects, original URLs | `data/projects.ts` |
| Community roles and View more list | `data/community.ts` |
| Lately photos and captions | `data/lately.ts` |
| Substack highlight, past posts and profile URL | `data/posts.ts` |
| Books, genres, category, cover images and Goodreads URLs | `data/books.json` |

Writing copy and all 36 books are explicitly labeled placeholders. Replace their titles,
authors and destination URLs when ready. Writing links currently open the supplied Substack
profile. Book links currently open Goodreads. Set `coverImage` to a local `/public` asset
path (such as `/books/example.jpg`) or leave it null for a tinted cover.

`flowproof.png` was absent from the supplied repository. The featured project displays
a labeled placeholder. To use the real screenshot, add `public/flowproof.png` and set
FlowProof's `images` to `['/flowproof.png']` in `data/projects.ts`.

Inter and Instrument Serif are loaded with `next/font/google`; the initial production
build requires access to Google Fonts. No dependencies or hosting settings were changed.
