import merge from 'lodash/merge'
import { RESET_ERROR_MESSAGE } from '../actions/error';

// Updates an entity cache in response to any action with response.entities.
export const entities = (state = { photos: [] }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
export const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}
