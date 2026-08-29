# ChapelCloud — home site

Marketing site for [chapel.cloud](https://chapel.cloud). Next.js on Cloudflare via OpenNext.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion
- Deployed with `@opennextjs/cloudflare` + Wrangler

## Brand

Design tokens, logos, and voice come from [`../brand`](../brand):

- **Display:** Newsreader · **Body:** Source Sans 3
- **Colors:** presence `#2a4054`, witness `#b8923f`, cloud/mist surfaces
- **Mark:** crest with witness star (`public/logo.svg`)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
npm run deploy
```

See `wrangler.jsonc` for Cloudflare worker configuration.

## Structure

| Path | Purpose |
|------|---------|
| `app/` | Routes (home, product pages) |
| `components/` | Page sections and product layouts |
| `lib/` | Nav, product data, site constants |
| `public/` | Logos, OG image, static assets |
