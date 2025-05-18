import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  distDir: 'out',   // Set output directory to 'out' for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // GitHub Pages URL path handling
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  // For deployment redirects
  async redirects() {
    return [
      {
        source: '/',
        destination: '/comingsoon',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
