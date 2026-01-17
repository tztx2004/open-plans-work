'use client';

import { useRouter } from 'next/navigation';
import { usePhotoStore } from './PhotoCreateStore';
import { useEffect } from 'react';

export default function useRedirectToHome() {
  const { isView } = usePhotoStore((state) => state);

  const router = useRouter();

  useEffect(() => {
    const navigation = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;

    const isDirectAccess = navigation && navigation.type !== 'reload';
    const isReload = navigation && navigation.type === 'reload';

    if (isReload && !localStorage.getItem('photo-storage')) {
      router.push('/');
    }

    if (isDirectAccess && !isView) {
      router.push('/');
    }
  }, [isView]);

  return null;
}
