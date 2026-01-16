'use client';

import { Button } from '@repo/ui/button';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function HomeButton() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push('/result');
  }, []);
  return (
    <div className='flex gap-4 w-full justify-center pt-10 pb-10'>
      <Button onClick={handleClick}>다음</Button>
    </div>
  );
}
