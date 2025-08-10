import { sfPro } from '@/app/fonts/sfPro';
import TanstackProviders from '@/components/providers/TanstackProvider';
import RefreshToken from '@/components/refresh-token';
import TransactionHash from '@/components/TransactionHash';
import { Toaster } from '@/components/ui/sonner';
import { routing } from '@/libs/i18nRouting';
import '@/styles/global.css';
import RootTemplate from '@/templates/RootTemplate';
import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gasy-9x9-plus-fe.vercel.app/'), // Replace with your actual domain
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icon0.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  openGraph: {
    title: '9x9 Plus',
    description: 'HÀNH TRÌNH LAN TOẢ GIÁ TRỊ BẮT ĐẦU TỪ ĐÂY',
    url: 'https://gasy-9x9-plus-fe.vercel.app/',
    siteName: '9x9 Plus',
    images: [
      {
        url: '/apple-icon.png',
        width: 1200,
        height: 630,
        alt: '9x9 Plus Logo',
      },
    ],
    type: 'website',
  },
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={sfPro.variable}>
      <body className="min-h-screen">
        <head>
          <meta name="apple-mobile-web-app-title" content="9x9plus" />
        </head>
        <NextIntlClientProvider>
          <RefreshToken />
          <TransactionHash />
          <TanstackProviders>
            <RootTemplate>
              {props.children}
            </RootTemplate>
          </TanstackProviders>
          <Toaster position="top-center" toastOptions={{ style: { color: 'white', background: 'linear-gradient(180deg, #68DAF2 0%, #1C5BB9 95.1%)', }, }} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
