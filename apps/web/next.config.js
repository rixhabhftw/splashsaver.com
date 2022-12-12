/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  runtime: "experimental-edge",
  experimental: {
    allowMiddlewareResponseBody: true,
    transpilePackages: [
      "@splashsaver/ui",
      "@splashsaver/lib",
      "@splashsaver/prisma",
    ],
  },
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
