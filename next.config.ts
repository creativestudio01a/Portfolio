import type { NextConfig } from "next";

const repoName = "Portfolio";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : ""
  },
  images: {
    unoptimized: true
  },
  output: "export",
  trailingSlash: true,
  ...(isGithubPages
    ? {
        assetPrefix: `/${repoName}/`,
        basePath: `/${repoName}`
      }
    : {})
};

export default nextConfig;
