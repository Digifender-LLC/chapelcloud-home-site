/* eslint-disable */
// Generated locally via `npm run cf-typegen` when possible.
// Minimal bindings matching wrangler.jsonc for editor/typechecking.

interface CloudflareEnv {
  ASSETS: Fetcher;
  IMAGES: ImagesBinding;
  WORKER_SELF_REFERENCE: Fetcher;
  NEXTJS_ENV?: string;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXTJS_ENV?: string;
  }
}
