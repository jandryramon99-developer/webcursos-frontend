import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators:false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webcursosalmacenamiento.blob.core.windows.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
