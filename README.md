# portfolio-2026
Work examples portfolio website

## Getting Started

This is a React application built with Vite.

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Typography

Google Fonts are loaded in `src/styles/fonts.css` (imported from `src/styles/index.css`):

- **Headings:** Arvo
- **Body / lists (case study):** Raleway
- **Base UI:** Inter (fallbacks: system-ui, sans-serif)

## Project Structure

```
portfolio-2026/
├── src/
│   ├── styles/
│   │   ├── fonts.css       # Google Fonts (@import)
│   │   ├── index.css       # Global styles (+ imports fonts.css)
│   │   ├── App.css
│   │   ├── ContentPage.css
│   │   └── PortfolioHome.css
│   ├── App.jsx             # Routes (home + content)
│   ├── main.jsx            # React entry point
│   └── ...
├── index.html              # HTML template (font preconnect only)
├── vite.config.js
├── package.json
└── README.md
```
