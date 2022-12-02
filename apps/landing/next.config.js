/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@splashsaver/ui", "@splashsaver/lib"],
  },
};

module.exports = nextConfig;
