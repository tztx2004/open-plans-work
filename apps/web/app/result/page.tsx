import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import Header from '@shared/ui/Header';
import { getQueryClient } from '@shared/config/getQueryClient';
import ImageBox from '@/entities/photo/ui/ImageBox';
import InfoBox from '@/entities/photo/ui/InfoBox';
import { PhotoCreateStoreProvider } from '@/entities/photo/model/PhotoCreateStore';

export default function Result() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PhotoCreateStoreProvider>
        <main className="min-h-screen bg-[url('/Masklayer.png')] bg-cover bg-center bg-no-repeat flex flex-col">
          <Header textColor='white' />

          <section className='flex-1 flex flex-col lg:flex-row gap-10 justify-center items-center pr-5 pl-5 pb-5'>
            <ImageBox />

            <InfoBox />
          </section>
        </main>
      </PhotoCreateStoreProvider>
    </HydrationBoundary>
  );
}
