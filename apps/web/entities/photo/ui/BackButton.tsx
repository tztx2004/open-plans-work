'use client';

import { Button } from '@repo/ui/button';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      size='default'
      className='w-full sm:max-w-[154px]'
      onClick={() => router.back()}
    >
      이전
    </Button>
  );
}
