'use client';

import Image from 'next/image';
import { usePhotoStore } from '../model/usePhotoStore';

export default function ImageBox() {
  const { download_url, width, height } = usePhotoStore();

  return (
    <article className='lg:pr-[20px] lg:flex-1'>
      <Image
        src={download_url}
        alt='result'
        width={width}
        height={height}
        className='w-full h-auto lg:h-full object-cover rounded-[24px]'
      />
    </article>
  );
}
