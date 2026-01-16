'use client';

import { createContext, useContext, useState } from 'react';
import { useStore } from 'zustand';

import createPhotoStore, { PhotoStore } from './photoStore';

export const PhotoStoreContext = createContext<ReturnType<
  typeof createPhotoStore
> | null>(null);

export function PhotoCreateStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(() => createPhotoStore());

  return (
    <PhotoStoreContext.Provider value={store}>
      {children}
    </PhotoStoreContext.Provider>
  );
}

export const usePhotoStore = <T, _>(selector: (store: PhotoStore) => T): T => {
  const photoStoreContext = useContext(PhotoStoreContext);
  if (!photoStoreContext) {
    throw new Error(`usePhotoStore must be used within PhotoStoreProvider`);
  }

  return useStore(photoStoreContext, selector);
};
