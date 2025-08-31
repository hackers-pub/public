import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/seoul/1",
      },
    ];
  },
  output: "export",
};

export default nextConfig;
