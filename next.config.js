/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.dunya.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dunya.com",
        pathname: "/storage/files/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
