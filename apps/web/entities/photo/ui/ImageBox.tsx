'use client';

import Image from 'next/image';
import { usePhotoStore } from '../model/PhotoCreateStore';

export default function ImageBox() {
  const photo = usePhotoStore((state) => state);

  return (
    <article className='lg:pr-[20px] lg:flex-1'>
      <Image
        src={photo.download_url}
        alt='result'
        width={photo.width}
        height={photo.height}
        className='w-full h-auto lg:h-full object-cover rounded-[24px]'
      />
    </article>
  );
}
