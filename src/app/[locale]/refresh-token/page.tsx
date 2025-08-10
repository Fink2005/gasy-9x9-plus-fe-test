import Loading from '@/app/[locale]/loading';
import RefreshToken from '@/app/[locale]/refresh-token/refresh-token';
import { getCookie } from '@/app/actions/cookie';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Refresh token redirect',
  description: 'Refresh token redirect',
  robots: {
    index: false
  }
};

export default async function RefreshTokenPage() {
  const refreshToken = await getCookie('refreshToken9x9');

  return (
    <Suspense fallback={<Loading />}>
      <RefreshToken refreshToken={refreshToken} />
    </Suspense>
  );
}
