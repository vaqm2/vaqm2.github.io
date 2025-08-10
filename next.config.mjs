/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: '',
  assetPrefix: 'https://vaqm2.github.io/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;