/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;