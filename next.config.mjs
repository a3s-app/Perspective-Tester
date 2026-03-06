/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "/Perspective-Tester";

const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? repoName : "",
  assetPrefix: isGitHubPages ? repoName : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
