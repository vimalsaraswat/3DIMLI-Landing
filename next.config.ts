import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.3dimli.com",
      },
      {
        protocol: "https",
        hostname: "media.cgvizstudio.com",
      },
    ],
  },
};

export default nextConfig;
