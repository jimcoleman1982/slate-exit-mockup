/** @type {import('next').NextConfig} */
// Set DEPLOY_TARGET=gh-pages in CI to build for the GitHub Pages preview URL
// (jimcoleman1982.github.io/slate-exit-mockup). Leave unset for Cloudflare /
// root-domain deploys.
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repoName = 'slate-exit-mockup';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGhPages ? `/${repoName}` : '',
  assetPrefix: isGhPages ? `/${repoName}/` : '',
};

export default nextConfig;
