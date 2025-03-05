import type { NextConfig } from "next";

const isGitHubPages = process.env.NODE_ENV === 'production';
const repoName = "web-portfolio"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}` : "",
};

export default nextConfig;
