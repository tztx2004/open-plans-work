'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { GetPhotosResponse } from '../api/getPhotos.types';

type PhotoStore = GetPhotosResponse & {
  setState: (photo: GetPhotosResponse) => void;
};

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      id: '',
      author: '',
      width: 0,
      height: 0,
      url: '',
      download_url: '',

      setState: (photo) => set(photo),
    }),
    {
      name: 'photo-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
