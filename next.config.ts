import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure trailing slash for consistency
  trailingSlash: true,
};

export default nextConfig;
