/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@acme/ui", "lodash-es"],
  },
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
