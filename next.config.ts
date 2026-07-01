import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig