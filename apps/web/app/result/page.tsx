import Image from 'next/image';
import Header from '../../shared/Header';

import LayoutBoxContent from '../../entities/photo/ui/LayoutBoxContent';
import LayoutBox from '../../entities/photo/ui/LayoutBox';
import BackButton from '../../entities/photo/ui/BackButton';

export default function Result() {
  return (
    <main className="min-h-screen bg-[url('/Masklayer.png')] bg-cover bg-center bg-no-repeat flex flex-col">
      <Header textColor='white' />

      <section className='flex-1 flex flex-col lg:flex-row gap-10 justify-center items-center pr-5 pl-5'>
        <article className='lg:pr-[20px] lg:flex-1'>
          <Image
            src='https://picsum.photos/id/0/5000/3333'
            alt='result'
            width={5000}
            height={3333}
            className='w-full h-auto lg:h-full object-cover rounded-[24px]'
          />
        </article>

        <article className='flex-1 flex flex-col gap-3 items-center w-full'>
          <LayoutBox className='sm:flex-row'>
            <LayoutBoxContent title='id' content='0' />
            <LayoutBoxContent title='author' content='sss' />
          </LayoutBox>

          <LayoutBox className='sm:flex-row'>
            <LayoutBoxContent title='width' content='5000' />
            <LayoutBoxContent title='height' content='3333' />
          </LayoutBox>

          <LayoutBox isVertical={true}>
            <LayoutBoxContent title='url' content='5000' />
            <LayoutBoxContent title='download_url' content='3333' />
          </LayoutBox>

          <BackButton />
        </article>
      </section>
    </main>
  );
}
