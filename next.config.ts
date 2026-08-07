import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev` only.
// Calling during `next build` can hang/fail under some environments (EPIPE from wrangler proxy).
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
if (process.argv.includes("dev")) {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}
