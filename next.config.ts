import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // GitHub Pages URL path handling
  trailingSlash: true,
};

export default nextConfig;
