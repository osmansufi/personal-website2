import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "duw6mv93b79ij.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
