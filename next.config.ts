import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: false,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",     // 👈 required
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",     // 👈 required
        hostname: "res.cloudinary.com", // 👈 ADD THIS
      },
    ],
  },
};

export default nextConfig;
