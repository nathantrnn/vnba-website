import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repoName = 'vnba-website';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the basePath for GitHub Pages deployment
  basePath: isGithubPages ? `/${repoName}` : '',
  // Set the asset prefix for GitHub Pages
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  // Configure trailing slash for consistency
  trailingSlash: true,
};

export default nextConfig;
