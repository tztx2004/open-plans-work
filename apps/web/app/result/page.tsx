import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import Header from '@shared/ui/Header';
import { getQueryClient } from '@shared/config/getQueryClient';
import { PhotoCreateStoreProvider } from '@/entities/photo/model/PhotoCreateStore';

import ImageBox from '@/entities/photo/ui/ImageBox';
import InfoBox from '@/entities/photo/ui/InfoBox';
import MainBox from '@/entities/photo/ui/MainBox';
import { queryFactories } from '@/entities/photo/api/queryFactories';

export default async function Result() {
  const queryClient = getQueryClient();
  const photoData = await queryClient.fetchQuery(queryFactories.getPhoto());

  const initialStoreData = {
    ...photoData,
    isView: false,
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PhotoCreateStoreProvider initialData={initialStoreData}>
        <MainBox>
          <Header textColor='white' />

          <section className='flex-1 flex flex-col lg:flex-row gap-10 justify-center items-center pr-5 pl-5 pb-5'>
            <ImageBox />

            <InfoBox />
          </section>
        </MainBox>
      </PhotoCreateStoreProvider>
    </HydrationBoundary>
  );
}
