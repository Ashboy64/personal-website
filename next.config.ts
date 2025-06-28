import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 1. Tells Next.js to produce a static export.
  output: 'export',

  // 2. Configures the base path for GitHub Pages.
  basePath: isProd ? '/personal-website' : '',

  // 3. Disables image optimization, which is required for static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
