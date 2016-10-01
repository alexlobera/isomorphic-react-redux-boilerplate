import photos from './photos';
import { entities, errorMessage } from './entities';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  photos,
  entities,
  errorMessage,
})

export default reducers;
