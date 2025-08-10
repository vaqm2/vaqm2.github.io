/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: '',
  assetPrefix: './_next/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
