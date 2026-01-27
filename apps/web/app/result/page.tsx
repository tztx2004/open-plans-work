import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import Header from '@shared/ui/Header';
import { getQueryClient } from '@shared/config/getQueryClient';
import { PhotoCreateStoreProvider } from '@/entities/photo/model/PhotoCreateStore';

import ImageBox from '@/entities/photo/ui/ImageBox';
import InfoBox from '@/entities/photo/ui/InfoBox';
import MainBox from '@/entities/photo/ui/MainBox';
import { Suspense } from 'react';
import InfoBoxSkeleton from '@/entities/photo/ui/InfoBoxSkeleton';

export default async function Result() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PhotoCreateStoreProvider>
        <MainBox>
          <Header textColor='white' />

          <section className='flex-1 flex flex-col lg:flex-row gap-10 justify-center items-center pr-5 pl-5 pb-5'>
            <Suspense fallback={<Skeleton />}>
              <ImageBox />

              <InfoBox />
            </Suspense>
          </section>
        </MainBox>
      </PhotoCreateStoreProvider>
    </HydrationBoundary>
  );
}

function Skeleton() {
  return (
    <div className='flex-1 flex flex-col lg:flex-row gap-10 justify-center items-center pr-5 pl-5 pb-5'>
      <div className='lg:pr-5 lg:flex-1' />
      <InfoBoxSkeleton />
    </div>
  );
}
