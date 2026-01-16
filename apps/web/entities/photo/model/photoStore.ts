'use client';

import { createStore } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { GetPhotosResponse } from '../api/getPhotos.types';

export type PhotoState = GetPhotosResponse & {
  isView: boolean;
};

export type PhotoActions = {
  setState: (photo: GetPhotosResponse) => void;
  setIsView: (isView: boolean) => void;
};

export type PhotoStore = PhotoState & PhotoActions;

export const defaultInitState: PhotoState = {
  id: '',
  author: '',
  width: 0,
  height: 0,
  url: '',
  download_url: '',
  isView: false,
};

export default function createPhotoStore(
  initState: PhotoState = defaultInitState
) {
  return createStore<PhotoStore>()(
    persist(
      (set) => ({
        ...initState,
        setState: (photo) => set(photo),
        setIsView: (isView) => set({ isView }),
      }),
      {
        name: 'photo-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
}
