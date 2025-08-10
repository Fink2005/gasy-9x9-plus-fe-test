import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

const baseConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: false,
};

const config = withNextIntl(baseConfig);

// ✅ Attach rewrites AFTER plugin
const finalConfig = {
  ...config,
  async rewrites() {
    console.log('✅ Rewrites function called'); // <--- Add this!
    return [
      {
        source: '/request/:path*',
        destination: `${process.env.API_BASE_SERVER}/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*', // Áp dụng cho tất cả các route
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default finalConfig;
