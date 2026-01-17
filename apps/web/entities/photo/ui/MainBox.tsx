'use client';

import Image from 'next/image';
import { usePhotoStore } from '../model/PhotoCreateStore';
import useRedirect from '../model/useRedirectToHome';

export default function MainBox({ children }: { children: React.ReactNode }) {
  const { download_url } = usePhotoStore((state) => state);

  useRedirect();

  return (
    <main className='relative min-h-screen flex flex-col overflow-hidden'>
      {download_url && (
        <>
          <Image
            src={download_url}
            alt='background'
            fill
            priority
            className='object-cover -z-10 blur-[60px] scale-110'
          />
          <div
            className='absolute inset-0 -z-10 bg-black/10'
            aria-hidden='true'
          />
        </>
      )}
      {children}
    </main>
  );
}
