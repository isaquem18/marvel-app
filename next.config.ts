import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.awsli.com.br",
        port: "",
      },
    ],
  },
};

export default nextConfig;
