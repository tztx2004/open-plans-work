'use client';

import getPhotos from '@/entities/photo/api/getPhotos';
import { usePhotoStore } from '@/entities/photo/model/PhotoCreateStore';
import Spinner from '@/shared/ui/Spinner';
import { Button } from '@repo/ui/button';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function HomeButton() {
  const router = useRouter();

  const photoStore = usePhotoStore((state) => state);
  const { setState, setIsView } = photoStore;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: getPhotos,
  });

  const handleClick = useCallback(async () => {
    try {
      const photo = await mutateAsync();

      if (photo) {
        setState(photo);
        setIsView(true);
        router.push('/result');
      }
    } catch {
      alert('에러가 발생했습니다.');
    }
  }, []);

  return (
    <div className='flex gap-4 w-full justify-center pt-10 pb-10'>
      <Button onClick={handleClick} disabled={isPending}>
        {isPending ? <Spinner size='small' /> : '다음'}
      </Button>
    </div>
  );
}
