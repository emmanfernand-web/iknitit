import type { NextConfig } from "next";

// Untuk GitHub Pages (https://user.github.io/nama-repo) isi NEXT_PUBLIC_BASE_PATH="/nama-repo".
// Untuk Vercel / Netlify biarkan kosong.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
