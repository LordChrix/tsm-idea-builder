/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true
  // Removed 'output: export' for Vercel - enables full Next.js features
}

module.exports = nextConfig