'use client';

import { checkAndRefreshToken } from '@/libs/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const UNAUTHENTICATED_PATHS = [
  '/login',
  '/refresh-token',
  '/welcome',
  '/introduction',
  '/policy-terms',
  '/verify-email',
  '/verified',
  '/kyc',
];

const RefreshToken = () => {
  const pathname = usePathname();
  const router = useRouter();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Skip token refresh for unauthenticated paths
    if (UNAUTHENTICATED_PATHS.includes(pathname)) {
      return;
    }

    const handleRefreshToken = async () => {
      try {
        await checkAndRefreshToken({
          onError: () => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            router.push('/login');
          },
        });
      } catch (error) {
        console.error('Token refresh failed:', error);
      }
    };

    // Initial token refresh
    handleRefreshToken();

    // Set up interval for periodic token refresh
    const TIMEOUT = 15000; // 15 seconds
    intervalRef.current = setInterval(() => handleRefreshToken(), TIMEOUT);

    // Cleanup interval on component unmount or pathname change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [pathname, router]);

  return null;
};

export default RefreshToken;
