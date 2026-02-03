import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimizations for performance */
  reactStrictMode: true,
  
  /* Security - hide Next.js version */
  poweredByHeader: false,
  
  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  /* Compiler options for better performance */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  /* Experimental features for optimization */
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
