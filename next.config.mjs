/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    webpack(config, { dev }) {
      if (!dev) {
        config.devtool = false;
      }
      return config;
    },
    images: {
      // domains: ["shopfg.quangnm-api.name.vn"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "http",
          hostname: "**",
        },
      ],
    },
    publicRuntimeConfig: {
      manifest: "/manifest.json", // Đường dẫn tới manifest
    },
  };
  
  export default nextConfig;
  