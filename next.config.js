/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "api.ts"],
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
