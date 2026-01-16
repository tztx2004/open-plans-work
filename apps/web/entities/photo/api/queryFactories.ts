import { queryOptions } from '@tanstack/react-query';
import getPhotos from './getPhotos';

export const queryFactories = {
  //// query key
  all: ['all'],

  photo: ['photo'],

  //// query options
  // 사진 조회 api
  getPhoto: () =>
    queryOptions({
      queryKey: [...queryFactories.all, ...queryFactories.photo],
      queryFn: () => getPhotos(),
    }),
};
