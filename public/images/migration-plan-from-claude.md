# WordPress → React Migration Plan

**Stack:** Vite + React Router + `vite-react-ssg`, Markdown/MDX for blog content
**Hosting:** Dreamhost shared (unchanged)
**Tooling:** Claude Code for multi-file work and config generation, Cursor for in-editor edits
**Total estimated effort:** 20–30 hours of focused work, comfortably spread across 1–2 weeks part-time

---

## Summary

You'll build a static React site locally, store blog posts as Markdown files in the repo, pre-render every route to real HTML at build time with `vite-react-ssg`, and deploy the `dist/` folder to Dreamhost via rsync from GitHub Actions. WordPress gets backed up and removed; the domain stays where it is. No DNS changes, no propagation wait.

The biggest time sinks will be (a) building out your site's design and components and (b) cleaning up WordPress's exported HTML/Markdown — both are messier than they sound. Almost everything else is well-trodden and Claude Code can do most of the boilerplate.

## Phase Outline

| # | Phase | Time | Primary tool |
|---|---|---|---|
| 1 | Audit & inventory | 1–2h | Manual + browser |
| 2 | Project scaffolding | 1–2h | Claude Code |
| 3 | Content export & conversion | 2–4h | CLI + manual review |
| 4 | Site build (routes, components, design) | 8–15h | Cursor + Claude Code |
| 5 | Blog plumbing (MDX, frontmatter, SSG) | 2–4h | Claude Code |
| 6 | WP feature replacements | 2–4h | Claude Code |
| 7 | Image & font optimization | 1–2h | Claude Code |
| 8 | Dreamhost configuration | 1–2h | Manual + Claude Code |
| 9 | CI/CD via GitHub Actions | 1–2h | Claude Code |
| 10 | SEO, redirects, meta | 2–3h | Claude Code |
| 11 | Pre-cutover testing | 2–3h | Manual |
| 12 | Cutover | ~1h | Manual |
| 13 | Post-launch | week 1 active | Manual |

---

## Phase 1: Audit & Inventory (1–2 hours)

You're building the source-of-truth list of everything that exists today, before you touch anything.

**Tasks:**
- Crawl your current site and capture every URL. A tool like `wget --spider --recursive` or a free crawler like Screaming Frog (free up to 500 URLs) gives you a clean list.
- Export the URL list to a CSV with columns: old URL, new URL (fill in later), page type (home, blog post, about, etc.), notes.
- In WP admin, list active plugins. For each, note whether it does something visitors actually see (contact form, gallery, comments, related-posts widget) or is admin-only.
- Note brand details: fonts, colors, logo files. Download originals if you can (look in WP media library).
- Screenshot key pages — useful reference when rebuilding and a sanity check after.
- Check Google Search Console for top-traffic pages. These are the ones whose redirects absolutely cannot break.
- Export from WP: Tools → Export → All content. Save the XML.
- SFTP into Dreamhost and download `wp-content/uploads/` (your images).

**AI tooling:** Mostly manual. Claude Code can help parse the WP export XML to generate the URL inventory automatically — paste the XML and ask for a CSV of all post URLs with titles and publish dates.

**Pitfalls:** Forgetting non-post pages (custom pages, category archives, tag pages). Missing image URLs embedded in post HTML — your URL list should include those too if they're hotlinked from elsewhere.

---

## Phase 2: Project Scaffolding (1–2 hours)

Get a working Vite + React Router + SSG skeleton on disk.

**Tasks:**
- `npm create vite@latest my-site -- --template react-ts` (TypeScript optional, but worth it for catching mistakes later).
- Install: `react-router-dom`, `vite-react-ssg`, `@mdx-js/rollup`, `gray-matter`, `react-helmet-async`.
- Configure `vite.config.ts` for MDX + SSG. The `vite-react-ssg` docs have a template — start from it rather than building from scratch.
- Set up the folder structure:
  ```
  src/
    routes/         # route components
    components/     # reusable UI
    posts/          # *.mdx blog posts
    lib/            # post loading, helpers
    styles/
  public/           # static assets, robots.txt, favicon
  ```
- Initialize Git, push to a private GitHub repo.
- Set up linting/formatting (Prettier + ESLint) — small effort up front saves bigger pain later.

**AI tooling:** Strong fit for Claude Code. One prompt — "Set up a Vite + React + TypeScript project with React Router, vite-react-ssg, and MDX support; create the folder structure described and stub out a home route, an about route, a blog index, and a blog post route" — gets you most of the way. Review the output, then commit.

**Pitfalls:** `vite-react-ssg` requires you to enumerate dynamic routes (every blog post slug) at build time. Make sure the config is set up to read your `src/posts/` directory and produce the route list — not just rely on the React Router config.

---

## Phase 3: Content Export & Conversion (2–4 hours)

Get your WordPress posts into Markdown files in `src/posts/`.

**Tasks:**
- Run `npx wordpress-export-to-markdown` against your WP XML export. It produces one `.md` file per post with frontmatter (title, date, slug, categories) and downloads referenced images.
- Move generated `.md` files into `src/posts/` (rename to `.mdx` if you want React components inside posts).
- Move downloaded images into `public/images/posts/` or similar, and bulk-update image paths in the MDX files (find/replace).
- Spot-check 5–10 posts in a text editor. Look for: broken shortcodes (`[gallery]`, `[caption]`), raw HTML that didn't convert cleanly, embedded YouTube/Twitter that needs MDX components, footnote weirdness.
- Decide on a frontmatter schema and normalize across posts. Minimum: `title`, `date`, `slug`, `excerpt`, `coverImage`, `tags`.

**AI tooling:** Claude Code excels here. Feed it a few problematic posts and ask for a script that cleans up the common issues across all of them. For shortcodes like `[caption]`, ask Claude Code to write a regex-based codemod that replaces them with proper MDX. Also good for normalizing frontmatter across hundreds of files in one pass.

**Pitfalls:** Image paths. WP often uses absolute URLs (`https://yourdomain.com/wp-content/uploads/2023/01/foo.jpg`) in post content. You need these rewritten to local paths (`/images/posts/foo.jpg`). Do this with a script, not by hand. Also: embedded image dimensions. WP sometimes inlines width/height that look wrong in a responsive layout.

---

## Phase 4: Site Build — Routes, Components, Design (8–15 hours)

This is the biggest phase by far. Variance is mostly about how much design work you want to do.

**Tasks:**
- Build out top-level routes: `/`, `/about`, `/contact`, `/blog`, `/blog/:slug`, plus anything else from your audit.
- Build shared layout: header, nav, footer, and a content wrapper.
- Build the homepage to match (or replace) what's currently on WP.
- Build the blog index — a list of all posts sorted by date, with title, excerpt, date, cover image.
- Build the blog post layout — typography, code blocks (consider `shiki` or `rehype-pretty-code` for syntax highlighting), images, blockquotes, lists. This is where MDX shines: post-specific React components if you ever need them.
- Pick a styling approach: plain CSS modules, Tailwind, or a component library. Tailwind is the path of least resistance with AI coding tools, since they generate Tailwind classes reliably.
- Build a 404 page.

**AI tooling:** Heavy use of both tools.
- Claude Code for scaffolding entire components and pages from a description.
- Cursor for tightening up CSS, refactoring a component, or making targeted edits while you're iterating visually.
- A useful trick: take a screenshot of an existing WP page and hand it to Claude Code along with "rebuild this in React with Tailwind, matching the layout and typography as closely as you can." It won't be pixel-perfect but it gets you to 70% in five minutes.

**Pitfalls:** Over-engineering. It's tempting to redesign everything. If your goal is migration, match the current design closely and ship — redesign in a second pass once you're off WP. Also: blog post typography deserves real attention. Bad typography on long-form content is the most common giveaway of a hastily migrated site. Use `@tailwindcss/typography` (the `prose` class) as a starting point if you're using Tailwind.

---

## Phase 5: Blog Plumbing (2–4 hours)

Wire up the Markdown files to actual routes.

**Tasks:**
- Write a helper (probably `src/lib/posts.ts`) that uses `import.meta.glob('/src/posts/*.mdx', { eager: true })` to load all posts, parse frontmatter, sort by date, and expose `getAllPosts()` and `getPostBySlug(slug)`.
- Build the `/blog` index route to render the list.
- Build the `/blog/:slug` route to render a single post.
- Configure `vite-react-ssg` so the dynamic `:slug` route generates one HTML file per post at build time. This is the step that makes blog posts crawlable and shareable.
- Add an RSS feed generator. People still subscribe. `feed` (npm package) makes this a 20-line script that runs as part of the build.
- Add a sitemap generator. Same pattern — a small script that emits `dist/sitemap.xml`.

**AI tooling:** Claude Code is ideal for the helper, the SSG config, the RSS and sitemap scripts. These are the kind of small focused files where AI gets the details right the first time.

**Pitfalls:** Forgetting that `vite-react-ssg` needs to know your dynamic slugs at build time. If you add a post and the build still only renders the routes it knew before, the SSG config isn't reading your posts directory correctly. Verify by running `npm run build` and checking that `dist/blog/your-new-post/index.html` exists as a real file.

---

## Phase 6: WordPress Feature Replacements (2–4 hours)

Whatever interactive bits WP plugins were doing.

**Tasks (pick what applies):**
- **Contact form:** Sign up for Formspree (free tier is generous), add a `<form action="https://formspree.io/f/YOUR_ID" method="POST">` — done. Or Web3Forms if you prefer.
- **Newsletter:** If you had a Mailchimp/ConvertKit signup, grab their hosted form embed. Or Buttondown if you want something simpler.
- **Comments:** Giscus (uses GitHub Discussions, free, no tracking, you already have a GitHub account). Drop one component into the post layout.
- **Search:** Pagefind. Runs at build time, indexes your built HTML, ships a tiny JS widget. Works perfectly with SSG.
- **Analytics:** Plausible or Fathom (privacy-respecting, paid) or GA4 (free, more invasive). Add the script tag in your root layout.

**AI tooling:** Claude Code can build each integration end-to-end given the docs link. For each one, ask: "Add Giscus comments to the blog post layout, configured for repo X."

**Pitfalls:** Spam. Static-form services like Formspree need spam protection enabled (honeypot field, hCaptcha) or you'll get garbage. Also: read each service's data/privacy policy before adding scripts to your site — some of the "free" analytics tools are free for reasons you may not want.

---

## Phase 7: Image & Font Optimization (1–2 hours)

The performance work Vite doesn't do for you.

**Tasks:**
- **Images:** Add `vite-imagetools` or a similar plugin. Pre-process the contents of `public/images/posts/` so every image is available in WebP and multiple sizes. Update your image components (or post MDX) to use `<picture>` with a `srcset`.
- **Fonts:** Use Fontsource for self-hosted fonts. `npm install @fontsource/inter` (or whatever font), then `import '@fontsource/inter/400.css'` in your root. This avoids the third-party Google Fonts request and the FOUT/FOIT issues that come with it.
- Add `loading="lazy"` to all images below the fold (your image component should do this by default).

**AI tooling:** Claude Code can write the image-processing script and update all MDX files in one shot.

**Pitfalls:** Don't optimize the same image twice (once at processing time, once at build time) — pick one stage. And don't ship the original 4MB JPEGs alongside the optimized versions; clean up your `public/` folder.

---

## Phase 8: Dreamhost Configuration (1–2 hours)

Server-side prep before deploying anything.

**Tasks:**
- Log into the Dreamhost panel. Make sure SSH is enabled for your user account (not just SFTP).
- Generate an SSH key pair locally: `ssh-keygen -t ed25519 -f ~/.ssh/dreamhost_deploy`. Add the public key (`.pub`) to your Dreamhost user in the panel.
- Test SSH from your terminal: `ssh user@yourserver.dreamhost.com` — should log you in without a password prompt.
- Enable Let's Encrypt SSL for your domain in the panel if it isn't already.
- Create the `.htaccess` file your build will ship. Put it in `public/.htaccess` so Vite copies it to `dist/` on build:

  ```apache
  # Force HTTPS
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # SPA fallback (for routes not pre-rendered)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]

  # Cache static assets aggressively
  <FilesMatch "\.(js|css|woff2|jpg|jpeg|png|webp|svg)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  ```

  (Vite hashes filenames in production builds, so the long cache is safe.)

**AI tooling:** Claude Code is excellent for `.htaccess` — it's a fiddly mini-language with non-obvious rules, and AI gets the syntax right reliably.

**Pitfalls:** Don't deploy yet. Your domain folder still has WordPress in it. The deploy step in Phase 12 handles that swap.

---

## Phase 9: CI/CD via GitHub Actions (1–2 hours)

Automate "push to main → site updates."

**Tasks:**
- Create `.github/workflows/deploy.yml` with a job that checks out the repo, installs Node, runs `npm ci`, runs `npm run build`, and rsyncs `dist/` to your Dreamhost domain folder over SSH.
- Add three GitHub repo secrets:
  - `DREAMHOST_SSH_KEY` — the private key (`~/.ssh/dreamhost_deploy`).
  - `DREAMHOST_HOST` — your Dreamhost server hostname.
  - `DREAMHOST_USER` — your SSH username.
- Test the workflow against a staging folder first (e.g. `~/staging.yourdomain.com/`) before pointing it at your real domain folder.

**AI tooling:** Claude Code can write the entire workflow in one go — give it your specifics (Node version, target path) and a working file comes back. Verify the rsync flags carefully (`--delete` removes files in destination not in source — what you want, but worth checking).

**Pitfalls:** Forgetting `ssh-keyscan` for the known_hosts entry — the workflow will hang on the first connection without it. And don't use `--delete` against your live folder until you've tested against staging.

---

## Phase 10: SEO, Redirects, Meta (2–3 hours)

The step most migrations skip and most migrations regret.

**Tasks:**
- Go back to your URL CSV from Phase 1. For each old URL, decide the new URL and add a 301 redirect in `.htaccess`.
- For predictable patterns (e.g. `/YYYY/MM/DD/slug/` → `/blog/slug/`), use a `RewriteRule` with a regex instead of one rule per post.
- Add per-page `<title>` and `<meta name="description">` via `react-helmet-async` in every route component.
- Add Open Graph and Twitter Card meta tags for blog posts: `og:title`, `og:description`, `og:image`, `twitter:card`, etc. These are what makes shared links look good.
- Add JSON-LD article schema to blog posts — improves how Google displays them in results.
- Generate `sitemap.xml` and `robots.txt`. Submit the sitemap in Google Search Console once you're live.
- Verify Phase 5's pre-rendering actually produced HTML with the right meta tags by opening `dist/blog/some-post/index.html` in a text editor — the `<title>` and `<meta>` tags should be there as plain HTML, not requiring JS to populate.

**AI tooling:** Claude Code can generate the `.htaccess` redirect block from your CSV in one shot. Same for the JSON-LD generator and OG tag component.

**Pitfalls:** Wrong status code. A 302 (temporary redirect) doesn't pass SEO value to the new URL; you want 301 (permanent). Also: redirect chains — make sure no old URL redirects to another URL that itself redirects. One hop only.

---

## Phase 11: Pre-Cutover Testing (2–3 hours)

Catch problems while you can still fix them quietly.

**Tasks:**
- Deploy to a staging path on Dreamhost (e.g. a subdomain like `staging.yourdomain.com` or an unlinked folder).
- Click through every route. Refresh on each one (verifies SPA routing fallback).
- Test the contact form for real — including spam protection.
- Run Lighthouse against the staging site. Target: 90+ on Performance, 100 on Accessibility, 100 on Best Practices, 100 on SEO. If you're not there, find the offender (usually images or unused JS).
- Test on mobile, real device if possible.
- Paste a blog post URL into Twitter/LinkedIn's post composer to verify Open Graph previews render correctly.
- Use a redirect checker (e.g. `httpstatus.io`) on 5–10 of your top old URLs to confirm they 301 to the right places.
- Run `npm run build` locally and grep `dist/` for "TODO", lorem ipsum, or any obvious leftovers.

**AI tooling:** Cursor for fixing the inevitable bugs you find. Claude Code if you need broader changes ("the date on every blog post is showing in UTC instead of local time, fix it everywhere").

**Pitfalls:** Skipping mobile testing because the desktop site looks fine. Most blog traffic is mobile. Also: testing redirects only on the staging path — the actual `.htaccess` rules won't apply until you're deployed to the real domain folder.

---

## Phase 12: Cutover (~1 hour)

The actual swap.

**Tasks:**
- SSH into Dreamhost. Make a full backup: `mv ~/yourdomain.com ~/yourdomain.com.wp-backup-2026-05-14`.
- Also export the WP database from the Dreamhost panel (Goodies → MySQL Databases → phpMyAdmin → Export). Download the SQL file and save it locally and somewhere offsite.
- Create a fresh empty folder: `mkdir ~/yourdomain.com`.
- Trigger your GitHub Actions workflow (push to main, or manual trigger). It deploys into the new empty folder.
- In a browser, hit your domain. Verify the homepage loads. Verify HTTPS. Verify a blog post URL. Verify a redirected old URL lands on the right place.
- If something is broken, you can swap back in 30 seconds: `rm -rf ~/yourdomain.com && mv ~/yourdomain.com.wp-backup-2026-05-14 ~/yourdomain.com`.
- If everything works, keep the WP backup folder around for at least a month before deleting.

**AI tooling:** None during cutover — this is the moment for full attention.

**Pitfalls:** Cutover at a low-traffic time (evening, weekend) so a brief hiccup matters less. Don't cutover right before you're unavailable for several days — give yourself a window to monitor and fix.

---

## Phase 13: Post-Launch (Week 1 active, then occasional)

**Tasks:**
- Submit the new `sitemap.xml` in Google Search Console.
- Watch Search Console for crawl errors over the next 2–4 weeks. A few are normal; a flood means something's wrong with redirects.
- Monitor analytics for traffic anomalies. Expect a small dip in the first week as Google re-indexes; it usually recovers within a month if redirects are right.
- Cancel any WordPress-related Dreamhost add-ons (DreamPress if you had it, automated WP backups, premium WP support).
- After ~30 days of clean operation: delete the WP backup folder from Dreamhost (you still have the local DB dump and XML export as last-resort recovery).

**AI tooling:** Cursor for any post-launch tweaks. Claude Code if you decide to add features (better search, more blog metadata, etc.).

---

## Working effectively with Claude Code + Cursor

A few patterns that pay off:

- **Use Claude Code for cross-cutting changes**: anything that touches more than 2–3 files, anything generated from a spec (redirects, sitemaps, MDX cleanup scripts), and anything boilerplate-shaped (config files, GitHub workflows, components from a screenshot).
- **Use Cursor for iteration**: when you're sitting in a component tweaking spacing or colors and want fast inline edits without context-switching.
- **Commit frequently**: AI tools occasionally make changes you didn't intend. Small commits make `git diff` and `git revert` trivial.
- **Read the diff before accepting**: AI is right most of the time but wrong in interesting ways. The five seconds of scanning a diff catches the bugs that would have taken an hour to chase later.
- **Keep a `NOTES.md` in the repo**: dump decisions, gotchas, and "things to revisit" as you go. Both tools work better when they can see why something is the way it is.

---

## Total Effort Recap

- **Aggressive timeline (focused full days):** 3–4 days
- **Realistic part-time:** 1–2 weeks
- **Comfortable with buffer for design polish and surprises:** 3 weeks

The single biggest variable is Phase 4 (site build). If you accept a near-identical visual match to your current WP design, that phase is on the low end. If you redesign meaningfully during migration, double it.
