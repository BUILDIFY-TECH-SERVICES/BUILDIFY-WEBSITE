# Deploy on Cloudflare Pages (static)

This site uses **static export** (`output: "export"`). Do **not** use Wrangler Worker deploy or OpenNext unless you add full Workers setup.

## Cloudflare dashboard settings

| Setting | Value |
|--------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` |
| **Deploy command** | *(leave empty — do not use `wrangler deploy`)* |
| **Environment variable** | `NODE_VERSION` = `20` |
| **Framework preset** | None (or Static) |

## If you see `WORKER_SELF_REFERENCE` / `buildify-3d-tech` not found

Cloudflare is trying to deploy a **Worker** (Next.js + Wrangler preset). Fix:

1. Project → **Settings** → **Build**
2. Remove any **Deploy command** (e.g. `npx wrangler deploy`)
3. Set **Build output directory** to `out` (not `.vercel/output/static`)
4. Set **Build command** to `npm run build` only
5. Save and **Retry deployment**

## Custom domain

Workers & Pages → your project → **Custom domains** → add domain.
