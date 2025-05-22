import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // No basePath needed for root domain deployment
  basePath: '',
  // Set to true for better trailing slash handling
  trailingSlash: true,
  // No asset prefix needed for root domain deployment
  assetPrefix: '',
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
