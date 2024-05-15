/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.weatherapi.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
