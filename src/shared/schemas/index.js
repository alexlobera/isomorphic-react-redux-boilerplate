import { Schema, arrayOf } from 'normalizr';

const PHOTOS = new Schema('photos');

const Schemas = {
  PHOTOS,
  PHOTOS_ARRAY: arrayOf(PHOTOS),
};

export default Schemas;
