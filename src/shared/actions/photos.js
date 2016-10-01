import * as api from '../api/photos';
import { CALL_API } from '../middleware/api';
import Schemas from '../schemas';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos,
});

/*
export const fetchPhotos = () => (
  api.fetchPhotos().
    then(photos => receivePhotos(photos.slice(1, 20)))
  )
*/

export const PHOTOS_REQUEST = 'PHOTOS_REQUEST';
export const PHOTOS_FAILED = 'PHOTOS_FAILED';
export const PHOTOS_SUCCESS = 'PHOTOS_SUCCESS';

export const fetchPhotos = () => ({
  [CALL_API]: {
    types: [PHOTOS_REQUEST, PHOTOS_SUCCESS, PHOTOS_FAILED],
    endpoint: 'http://jsonplaceholder.typicode.com/photos/',
    schema: Schemas.PHOTOS_ARRAY,
    options: {
      method: 'GET',
    },
  }
});
