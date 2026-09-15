import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  agentRules: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
