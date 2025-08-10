import type { NextConfig } from "next";

const repoName = "vaqm2.github.io"; // replace with your repo name if different

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
