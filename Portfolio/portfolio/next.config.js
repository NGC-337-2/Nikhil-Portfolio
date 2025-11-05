/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://nikhil.dev',
  },
}

module.exports = nextConfig