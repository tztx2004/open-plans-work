import { Button } from '@repo/ui/button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-4'>
      <h1 className='text-4xl font-bold'>Web App with Shared UI</h1>

      <div className='flex gap-4'>
        {/* Tailwind 클래스가 적용된 버튼 사용 */}
        <Button>Button from Package</Button>

        <Button className='rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700'>
          Another Button
        </Button>
      </div>
    </main>
  );
}
