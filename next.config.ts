import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
  },
  // GitHub Pages URL path handling
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
};

export default nextConfig;
