import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // This is required for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/vnba-website' : '',
  // Set to true if using GitHub Pages
  trailingSlash: true,
  // Disable image optimization for static exports
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vnba-website' : '',
  // Ensure fonts are properly loaded in static export
  optimizeFonts: true,
};

export default nextConfig;
