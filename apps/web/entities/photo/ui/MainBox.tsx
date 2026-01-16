'use client';

import { usePhotoStore } from '../model/PhotoCreateStore';

export default function MainBox({ children }: { children: React.ReactNode }) {
  const { download_url } = usePhotoStore((state) => state);

  return (
    <main
      className='min-h-screen bg-cover bg-center bg-no-repeat flex flex-col'
      style={{
        backgroundImage: `url('${download_url}')`,
        backdropFilter: 'blur(100px)',
      }}
    >
      {children}
    </main>
  );
}
