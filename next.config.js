/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: [
      "upload.wikimedia.org",
      "commons.wikimedia.org",
      "coffee.alexflipnote.dev",
      "static.vecteezy.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
