import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
   dest: "public",
   register: true,
   skipWaiting: true,
   disable: process.env.NODE_ENV === "development",
});
const nextConfig: NextConfig = withPWA({
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
});

export default nextConfig;
