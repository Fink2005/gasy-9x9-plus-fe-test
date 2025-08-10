'use client';

import { checkAndRefreshToken } from '@/libs/utils';

import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  refreshToken?: string;
};
export default function RefreshToken({ refreshToken }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refreshTokenFromUrl = searchParams.get('refreshToken');
  const redirectPathname = searchParams.get('redirect');
  useEffect(() => {
    if (
      refreshTokenFromUrl
      && refreshTokenFromUrl === refreshToken
    ) {
      checkAndRefreshToken({
        onSuccess: () => {
          router.replace(redirectPathname || '/');
        }
      });
    } else {
      router.push('/');
    }
  }, [router, refreshTokenFromUrl, redirectPathname, refreshToken]);
  return (
    <div className="h-screen text-white flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  );
}
