import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tells Next.js to produce a static export
  output: 'export',

  // 2. Configures the base path for GitHub Pages
  basePath: '/personal-website', // <--- IMPORTANT: Replace 'personal-website' with your repository name

  // 3. Disables image optimization, which is required for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
