import * as api from '../api/photos'; 

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos,
});

export const fetchPhotos = () => (
  api.fetchPhotos().
    then(photos => receivePhotos(photos.slice(1, 20)))
  )
