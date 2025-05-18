import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // This is required for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/vnba-website' : '',
  // Set to true if using GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
