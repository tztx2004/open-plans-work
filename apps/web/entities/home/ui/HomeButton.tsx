'use client';

import { queryFactories } from '@/entities/photo/api/queryFactories';
import { usePhotoStore } from '@/entities/photo/model/usePhotoStore';
import { Button } from '@repo/ui/button';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function HomeButton() {
  const router = useRouter();

  const { data: photo } = useSuspenseQuery(queryFactories.getPhoto());
  const { setState } = usePhotoStore();

  const handleClick = useCallback(() => {
    try {
      if (photo) {
        setState(photo);
        router.push('/result');
      }
    } catch {
      alert('에러가 발생했습니다.');
    }
  }, [photo]);

  return (
    <div className='flex gap-4 w-full justify-center pt-10 pb-10'>
      <Button onClick={handleClick}>다음</Button>
    </div>
  );
}
