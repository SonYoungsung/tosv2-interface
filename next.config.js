/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MODE: process.env.NEXT_PUBLIC_MODE,
  },
  output: "export",
  basePath: "/tosv2-interface",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
