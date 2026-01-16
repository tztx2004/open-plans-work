'use client';

import { Button } from '@repo/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center transition-opacity duration-1000'>
        <p className='text-base font-semibold text-gray-900'>404</p>
        <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
          페이지를 찾을 수 없습니다
        </h1>
        <p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
          죄송합니다, 찾으시는 페이지가 삭제되었거나 주소가 변경되었을 수
          있습니다.
        </p>
        <div className='mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6 sm:gap-y-0'>
          <Button size='small' className='p-0 overflow-hidden'>
            <Link
              href='/'
              className='flex h-full w-full items-center justify-center px-6 py-3'
            >
              홈으로 돌아가기
            </Link>
          </Button>
          <Button
            size='small'
            onClick={() => window.history.back()}
            className='bg-white text-gray-900! border border-gray-200 hover:bg-gray-50'
          >
            이전 페이지로
          </Button>
        </div>
      </div>
    </main>
  );
}
