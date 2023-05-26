/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'district.cdd.go.th',
      },
    ],
  }
  }

module.exports = nextConfig
