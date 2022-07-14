/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.nike.com', 'cdn.shopify.com', 'assets.adidas.com', 'images.vans.com', 'assets.reebok.com'],
  }
}

module.exports = nextConfig
