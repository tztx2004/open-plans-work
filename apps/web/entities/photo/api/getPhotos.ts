'use server';

import { GetPhotosResponse } from './getPhotos.types';

export default async function getPhotos(): Promise<GetPhotosResponse> {
  try {
    const response = await fetch(`https://picsum.photos/id/0/info`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch photos:', error);
    // 빌드 타임 에러 방지를 위한 Fallback 데이터 반환
    return {
      id: '',
      author: '',
      width: 0,
      height: 0,
      url: '',
      download_url: '',
    };
  }
}
