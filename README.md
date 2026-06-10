[![Netlify Status](https://api.netlify.com/api/v1/badges/334b3241-e8b8-4a2d-9275-b10d68e9b71a/deploy-status)](https://app.netlify.com/sites/stance-pilates/deploys)

# Stance Pilates Website

Marketing site for [Stance Pilates](https://stancepilates.com), a private Pilates
studio in Southwest Las Vegas. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com), deployed on Netlify.

## Tech stack

- **Astro 5** — static site generator (no client framework; the few interactive
  bits use small vanilla `<script>` tags).
- **Tailwind CSS 4** — styling, via the `@tailwindcss/vite` plugin. Design tokens
  (colors, fonts) live in `src/styles/global.css` under `@theme`.
- **pnpm** — package manager.

## Commands

| Command             | Action                                   |
| ------------------- | ---------------------------------------- |
| `pnpm install`      | Install dependencies                     |
| `pnpm dev`          | Start the dev server at `localhost:4321` |
| `pnpm build`        | Build the production site to `./dist/`   |
| `pnpm preview`      | Preview the production build locally     |
| `pnpm format:write` | Format with Prettier                     |

## Project structure

```
public/              static assets served as-is (favicon, manifest, icons, robots)
src/
  assets/            images (imported + bundled by Astro)
  components/        reusable .astro components (+ icons/)
  layouts/           BaseLayout (document shell + page chrome), BlogArticleLayout
  pages/             file-based routes (.astro)
  styles/global.css  Tailwind import, design tokens, base + custom CSS
  constants.ts       site-wide constants (booking URL, contact info, GA id)
```

## Deployment

Netlify builds with `pnpm build` and publishes `dist/` (see `netlify.toml`).
Booking is handled externally by [Jane App](https://stancepilates.janeapp.com);
analytics via Google Analytics (GA4).
