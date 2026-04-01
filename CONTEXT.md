# Project Context: portfolio-2026

## Purpose

`portfolio-2026` is a React + Vite case-study website for a UX strategist. The design employs online maps visual metaphor to suggest clarity and successful process.

The first page currently focuses on "Data Platform Product Integration". It presents a product/platform narrative using structured sections:
- Situation
- Obstacles
- Action
- Result

## Stack

- React 18
- Vite 5
- CSS (no utility framework)
- ESLint for linting

## Key Entry Points

- `index.html` loads `src/main.jsx`
- `src/main.jsx` renders `App`
- `src/App.jsx` sets up routes: `/` → `PortfolioHome`, `/content` → `ContentPage`
- `src/ContentPage.jsx` is the main UI composition
- `src/styles/fonts.css` loads Google Fonts (Arvo, Raleway, Inter)
- `src/styles/index.css` imports `fonts.css` then global base styles
- `src/styles/ContentPage.css` contains page styles
- `src/contentData.js` is the primary content source

## Content Model (`src/contentData.js`)

### `contentTags`
Top tag pills shown under the main page title.

### `summaryColumns`
Four short columns shown under tags and above the timeline/map-pin section.
- `heading` (string)
- `text` (optional string)
- `bulletPoints` (optional string[])

Rendering behavior in `ContentPage.jsx`:
- if `bulletPoints` exists and has items, render as `<ul>`
- else render `text` paragraph

### `contentData`
Main vertical case-study sections array. Typical fields:
- `heading`
- `paragraph`
- `bulletPoints`
- `imageLabel`
- `imagePath` / `imageOverlay`
- `images` (array of image objects)
- `actionPhases` (for Action 2x2 phase grid)

## Current Notable UI Behavior

- A summary 4-column grid appears below tags.
- Action section supports an `actionPhases` 2x2 grid.
- In summary columns, lists use `<ul>` with bullets hidden via CSS (paragraph-like appearance).

## Styling Conventions

- Heading font: `Arvo` (see `src/styles/fonts.css`)
- Body/list font: `Raleway`
- Base UI font: `Inter` (via `:root` in `index.css`)
- Palette uses dark grays for text and muted backgrounds for placeholders.
- Responsive behavior:
  - summary grid collapses to one column on small screens
  - action phases grid collapses to one column under `768px`

## Images

Images are served from `public/images/` and referenced with `/images/...` paths in data.

## Dev Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Notes For Future Edits

- Prefer updating copy and structure in `src/contentData.js` before editing component markup.
- Keep `ContentPage.jsx` mostly data-driven (map over arrays where possible).
- After edits, run `npm run lint`.
- Avoid writing new text for the project. When adding text or placeholders, always use the word "placeholder" or Lorum Ipsum copy.
