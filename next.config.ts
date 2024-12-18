import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
        pathname: '/**', // Matches all paths on this domain
      },
    ],
  },
};

export default nextConfig;
