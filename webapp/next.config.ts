import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      domains: ['www.google.com', 'sourceiran.com', 'localhost',],

   },
   output: 'standalone',
   eslint: {
      // غیرفعال کردن ESLint در حین Production Build
      ignoreDuringBuilds: true,
   },
   typescript: {
      // اگر خطای TypeScript هم داری (اختیاری)
      ignoreBuildErrors: true,
   },
};

export default nextConfig;
