'use server';

import { GetPhotosResponse } from './getPhotos.types';

export default async function getPhotos(): Promise<GetPhotosResponse> {
  const response = await fetch(`https://picsum.photos/id/0/info`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}
