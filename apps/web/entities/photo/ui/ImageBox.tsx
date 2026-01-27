import Image from 'next/image';
import { getQueryClient } from '@/shared/config/getQueryClient';
import { queryFactories } from '../api/queryFactories';

export default async function ImageBox() {
  const queryClient = getQueryClient();
  const photo = await queryClient.fetchQuery(queryFactories.getPhoto());

  return (
    <article className='lg:pr-5 lg:flex-1'>
      <Image
        src={photo.download_url}
        alt='result'
        width={photo.width}
        height={photo.height}
        className='w-full h-auto lg:h-full object-cover rounded-6'
      />
    </article>
  );
}
