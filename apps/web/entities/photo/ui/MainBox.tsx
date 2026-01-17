'use client';

import Image from 'next/image';
import { usePhotoStore } from '../model/PhotoCreateStore';

export default function MainBox({ children }: { children: React.ReactNode }) {
  const { download_url } = usePhotoStore((state) => state);

  return (
    <main className='relative min-h-screen flex flex-col overflow-hidden'>
      {download_url && (
        <>
          <Image
            src={download_url}
            alt='background'
            fill
            priority
            className='object-cover -z-10'
          />
          <div
            className='absolute inset-0 -z-10 backdrop-blur-[100px] bg-black/10'
            aria-hidden='true'
          />
        </>
      )}
      {children}
    </main>
  );
}
