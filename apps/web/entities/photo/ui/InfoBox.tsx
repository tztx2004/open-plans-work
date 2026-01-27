import { queryFactories } from '../api/queryFactories';
import BackButton from './BackButton';

import LayoutBox from './LayoutBox';
import LayoutBoxContent from './LayoutBoxContent';
import { getQueryClient } from '@/shared/config/getQueryClient';

export default async function InfoBox() {
  const queryClient = getQueryClient();
  const photo = await queryClient.fetchQuery(queryFactories.getPhoto());
  const { id, author, width, height, url, download_url } = photo;

  return (
    <article className='flex-1 flex flex-col gap-3 items-center w-full'>
      <LayoutBox className='sm:flex-row'>
        <LayoutBoxContent title='id' content={id} />
        <LayoutBoxContent title='author' content={author} />
      </LayoutBox>

      <LayoutBox className='sm:flex-row'>
        <LayoutBoxContent title='width' content={width} />
        <LayoutBoxContent title='height' content={height} />
      </LayoutBox>

      <LayoutBox isVertical={true}>
        <LayoutBoxContent title='url' content={url} />
        <LayoutBoxContent title='download_url' content={download_url} />
      </LayoutBox>

      <BackButton />
    </article>
  );
}
