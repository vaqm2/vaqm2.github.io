/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: '',
  assetPrefix: 'https://vaqm2.github.io/static-assets/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
