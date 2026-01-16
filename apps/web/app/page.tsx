import Header from '../shared/Header';
import HomeButton from '../entities/home/ui/HomeButton';

export default function Home() {
  return (
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
  );
}
