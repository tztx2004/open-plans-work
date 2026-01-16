import { Button } from '@repo/ui/button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]'>
      <section className='pt-4 pb-4'>
        <h1 className='text-[15px] leading-[1.4] text-[#1A1A1A]'>정찬</h1>
      </section>

      <section className='flex-1 flex flex-col items-center justify-center'>
        <h2 className='text-[32px] font-semibold text-[#111111] leading-[1.4]'>
          안녕하세요 <br />
          정찬입니다.
        </h2>
      </section>

      <div className='flex gap-4 w-full justify-center pt-10! pb-10!'>
        <Button>다음</Button>
      </div>
    </main>
  );
}
