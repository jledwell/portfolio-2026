# Joshua Ledwell — Personal Brand Design System

A warm, editorial personal brand for **Joshua Ledwell, Principal Designer**. The system pairs
earthy warm tones (terracotta, coral, sand) with a calm green family (sage, forest, mint) on a
soft off-white page. Headlines are set in **Arvo** (a friendly slab serif); body copy in
**Atkinson Hyperlegible**, chosen for maximum readability. The mood is *clean, visionary,
inclusive, authoritative, sharp* — minimalist, generous with white space, quietly confident.

> This is a personal portfolio brand, not a product company. The "products" here are the surfaces
> of Joshua's personal site: a link hub, a process/workflow diagram, conference name badges, and a
> live style guide.

## Sources

This system was reconstructed from materials supplied by the author. You may not have access, but
they are recorded here so you can explore further:

- **Figma:** "PersonalBrandLibrary.fig" — brand logo (sample *Embergale Studios* lockup), a
  forest-green **Nametag** pill, and a set of filled HIG-style glyphs (cloud, complete, unavailable,
  cursor). Plus a 334-icon Apple HIG icon page used as reference.
- **GitHub:** [`jledwell/Personalbrand`](https://github.com/jledwell/Personalbrand) — the React +
  Tailwind v4 brand board (`CONTEXT.md`, `src/styles/theme.css`, and the page surfaces:
  `Home`, `Workflow`, `Badge`, `StyleGuide`, `Resume`). The design tokens and type styles in this
  system are lifted directly from that repo's `CONTEXT.md`. Browse it for the original
  implementation and the full shadcn/ui component set it ships.

---

## Content fundamentals

How the brand writes:

- **Voice:** first-person, warm but precise. Reads like a confident designer talking about their
  craft — *"Seeking a principal designer role at an enterprise B2B firm building data-rich
  platforms for expert professionals."*
- **Person:** "I"/implied-I for personal statements; "you/your" when addressing the visitor in UI
  helper text (*"As it appears on your badge"*).
- **Casing:** Title Case for headings and link labels (*View work*, *Conference Badges*).
  **UPPERCASE** with wide tracking for overlines/badges (*PROCESS DIAGRAM*, *BADGE DESIGNS*) and
  for badge metadata (*MAY 15–17, 2026 · SAN FRANCISCO, CA*). Sentence case for body copy.
- **Tone:** calm, declarative, no hype. Short lead paragraphs that state intent plainly.
- **Emoji:** avoid in product surfaces. (The repo's style-guide demo used a few decorative emoji in
  sample cards; replace those with Lucide icons in real work — this system does.)
- **Punctuation:** real typographic dashes/quotes; en-dash for ranges (15–17).
- **Vibe:** editorial, human, accessible. Readability is a brand value, not an afterthought.

---

## Visual foundations

- **Palette.** Warm primary = **Terracotta `#D4704D`** (CTAs, emphasis, the avatar ring). Warm
  secondary = **Coral `#E89A7F`** (arrows, soft accents). **Sand `#F5EDE4`** is the warm tint
  surface. Greens carry the secondary/identity weight: **Sage `#7A9D7E`** (secondary buttons, badge
  footers), **Forest `#4A6B4E`** (nametags, authority), **Mint `#C8DCC8`** (light surfaces). Text is
  warm brown — **`#2C2520`** headings, **`#6B5D52`** body. Page is **off-white `#FDFBF7`**; cards are
  pure white.
- **Type.** Arvo slab serif for all headings — H1 56px/400 with −0.02em tracking, H2 32px/400, H3
  24px/600. Atkinson Hyperlegible for body at a generous **1.7 line-height**; 18 / 16 / 14 / 12px
  steps. Overlines: 12–14px, semibold, uppercase, 0.1em tracking.
- **Backgrounds.** Flat warm off-white. **No gradients, no photographic hero washes, no textures.**
  Color comes from solid brand fills (terracotta/sage badge headers, sand panels). Tinted panels use
  sand or mint, never a gradient.
- **Cards.** White, `1px` `#E8E5E1` border, **12px** radius (`rounded-xl`), `shadow-sm` at rest.
  Interactive cards **lift** on hover (`translateY(-2px)` to `-8px`) and deepen to `shadow-md`/`lg`.
  Large panels use 16px radius; pills/badges/avatars are fully round.
- **Borders.** Hairline `#E8E5E1` for dividers and card edges. **2px brand-colored borders**
  (terracotta) signal "object" surfaces — badges, the logo frame, workflow nodes.
- **Shadows.** Soft and warm-tinted (`rgba(44,37,32,…)`): `sm` rest → `md` hover → `lg` raised. The
  Nametag pill keeps its original Figma drop shadow `0 4px 4px rgba(0,0,0,.25)`.
- **Motion.** Subtle and quick — `0.2–0.3s` `cubic-bezier(.4,0,.2,1)`. Hover = shadow + slight rise;
  CTA arrows **fade in** on card hover. Press = `translateY(1px)`. No bounces, no infinite loops.
- **Hover/press states.** Buttons: shadow lift + ~3% brightness drop on hover, 1px depress on press.
  Outline/ghost: fill with sand on hover. Icon chips: gain `shadow-md`. Links: underline on hover.
- **Focus.** 3px terracotta glow (`rgba(212,112,77,.35)` on buttons, `.15` on inputs).
- **Layout.** Centered `max-width: 1280px` container, 24px gutters (32px on large). Sections breathe
  with `py-20` (80px). Gaps: 48 between sections, 24 between cards, 16 between related elements.
  Sub-pages use an 80px sticky white header with a circular back button + title.
- **Transparency / blur.** Used sparingly — only very low-opacity brand washes behind badges
  (`mint @ 8%`). No glassmorphism, no backdrop blur.
- **Imagery.** Warm and natural. Profile photo is circular with a 3px terracotta ring; this system
  uses a `JL` initials avatar as a privacy-safe stand-in (swap in a real photo via `Avatar src=`).

---

## Iconography

- **Primary system: [Lucide](https://lucide.dev)** line icons — exactly what the source repo uses
  (`lucide-react`). Clean 1.5–2px strokes, rounded joins. In HTML, load the Lucide UMD build from CDN
  and render `<i data-lucide="briefcase"></i>`, then call `lucide.createIcons()`. The UI kit does
  this. Common glyphs in the brand: `arrow-right`, `arrow-left`, `arrow-down`, `briefcase`, `music`,
  `user`, `book`, `database`, `building-2`, `qr-code`, `linkedin`, `instagram`, `bird`, `sparkles`,
  `eye`, `shield-check`.
- **Brand glyphs (supplementary).** A handful of **solid/filled** marks from the Figma library live
  in `assets/icons/` (`cloud`, `complete`, `unavailable`, `mouse-pointer`). These are reserved for
  status or illustrative accents and are tinted with the status palette — not for general UI, where
  Lucide rules.
- **No emoji** in product surfaces. No Unicode-character icons. No hand-drawn SVG — copy real assets.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import-only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`, `components.css`.
- `assets/` — `logo/embergale-logo.png` (sample lockup), `icons/*.svg` (brand glyphs).
- `SKILL.md` — Agent-Skills entry point.

**Components** (`window.JoshuaLedwellDesignSystem_cb2884`)
- `components/core/` — **Button**, **Badge**, **Card**, **Nametag**, **Avatar**
- `components/forms/` — **Input**
- `components/feedback/` — **Alert**

**UI kit**
- `ui_kits/personal-site/` — interactive recreation of the personal brand site: Home hub →
  Workflow chart, Conference badges, Style guide. Composes the components above; icons via Lucide.

**Foundation cards** (`guidelines/*.card.html`) — Colors (warm, green, neutrals, status), Type
(display, body, overline), Spacing (scale, radii, shadows), Brand (logo, glyphs).

---

## Font note

Both fonts (**Arvo**, **Atkinson Hyperlegible**) are free on Google Fonts and loaded via `@import` in
`tokens/fonts.css` — no substitution was needed. If you want self-hosted binaries for offline/perf,
drop them in `assets/fonts/` and swap the `@import` for `@font-face` rules.
