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
  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vnba-website' : '',
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Configure path aliases explicitly
  experimental: {
    typedRoutes: true,
    esmExternals: true,
  },
};

export default nextConfig;
