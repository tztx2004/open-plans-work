import Image from 'next/image';
import Header from '../../shared/Header';
import { Button } from '@repo/ui/button';

import LayoutBoxContent from '../../entities/photo/ui/LayoutBoxContent';
import LayoutBox from '../../entities/photo/ui/LayoutBox';

export default function Result() {
  return (
    <main className="min-h-screen bg-[url('/Masklayer.png')] bg-cover bg-center bg-no-repeat flex flex-col">
      <Header textColor='white' />

      <section className='flex-1 flex gap-10 justify-center items-center pr-5 pl-5'>
        <article className='flex-1 pr-[20px]'>
          <Image
            src='https://picsum.photos/id/0/5000/3333'
            alt='result'
            width={5000}
            height={3333}
            className='w-full h-full object-cover rounded-[24px]'
          />
        </article>

        <article className='flex-1 flex flex-col gap-3 items-center'>
          <LayoutBox>
            <LayoutBoxContent title='id' content='0' />
            <LayoutBoxContent title='author' content='sss' />
          </LayoutBox>

          <LayoutBox>
            <LayoutBoxContent title='width' content='5000' />
            <LayoutBoxContent title='height' content='3333' />
          </LayoutBox>

          <LayoutBox isFlex={false}>
            <LayoutBoxContent title='width' content='5000' />
            <LayoutBoxContent title='height' content='3333' />
          </LayoutBox>

          <Button size='small'>이전</Button>
        </article>
      </section>
    </main>
  );
}
