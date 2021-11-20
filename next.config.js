/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/wp-content/:slug*",
        destination: "https://gtals.ru/wp-content/:slug*",
      },
    ];
  },
  images: {
    domains: ["gtals.ru", "via.placeholder.com"],
  },
};
