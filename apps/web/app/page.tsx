import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Header from '@shared/ui/Header';
import { getQueryClient } from '@/shared/config/getQueryClient';

import HomeButton from '@entities/home/ui/HomeButton';

import { queryFactories } from '@/entities/photo/api/queryFactories';
import { PhotoCreateStoreProvider } from '@/entities/photo/model/PhotoCreateStore';

export default async function Home() {
  // prefetch query
  const queryClient = getQueryClient();
  await Promise.resolve([queryClient.prefetchQuery(queryFactories.getPhoto())]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PhotoCreateStoreProvider>
        <main className='flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]'>
          <Header />

          <section className='flex-1 flex flex-col items-center justify-center w-full'>
            <h2 className='text-[32px] font-semibold text-[#111111] leading-[1.4]'>
              안녕하세요 <br />
              정찬입니다.
            </h2>
          </section>

          <HomeButton />
        </main>
      </PhotoCreateStoreProvider>
    </HydrationBoundary>
  );
}
