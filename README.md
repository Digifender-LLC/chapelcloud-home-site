# home-site

A personal website built with [SvelteKit](https://svelte.dev/docs/kit) and
[Tailwind CSS](https://tailwindcss.com), deployed to
[Cloudflare Pages](https://developers.cloudflare.com/pages/) via
`@sveltejs/adapter-cloudflare`.

## Tech stack

- **SvelteKit** (Svelte 5, runes) + **Vite**
- **Tailwind CSS v4** (with `@tailwindcss/typography` and `@tailwindcss/forms`)
- **TypeScript**
- **Cloudflare Pages** adapter + **Wrangler**
- **ESLint** + **Prettier**

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
# or open the browser automatically
npm run dev -- --open
```

The site runs at http://localhost:5173.

## Useful scripts

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                               |
| `npm run build`   | Generate Cloudflare types and build for production      |
| `npm run preview` | Preview the production build with Wrangler Pages        |
| `npm run check`   | Run `svelte-check` type checking                        |
| `npm run lint`    | Check formatting (Prettier) and lint (ESLint)           |
| `npm run format`  | Format the codebase with Prettier                       |
| `npm run gen`     | Regenerate Cloudflare `worker-configuration.d.ts` types |

## Deploying to Cloudflare Pages

The build output is written to `.svelte-kit/cloudflare` (configured in
`wrangler.jsonc`). Connect the repository to Cloudflare Pages and use:

- **Build command:** `npm run build`
- **Build output directory:** `.svelte-kit/cloudflare`
