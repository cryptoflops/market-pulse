import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config) => {
    // Ignore optional deps from MetaMask SDK
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      "pino-pretty": false,
      "@react-native-async-storage/async-storage": false,
    };

    return config;
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;