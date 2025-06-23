import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*env: {
    WP_DOMAIN: process.env.WP_DOMAIN,

  }
    */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.WORDPRESS_HOSTNAME}`,
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${process.env.WORDPRESS_URL}/wp-admin`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
