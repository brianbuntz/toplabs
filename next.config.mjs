// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ELASTICSEARCH_URL: "http://localhost:9200",
  },
  images: {
    unoptimized: true, // Add this to disable optimization for GIFs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rdworldonline.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "media-rd.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true, // Add this for additional format support
    contentDispositionType: 'attachment', // Add this to help with image handling
  },
  // Add cache headers
  async headers() {
    return [
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Add these options
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Add this to suppress development warnings
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
