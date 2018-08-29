import merge from 'lodash/merge';

import { RECEIVE_CURRENT_NOTE } from '../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';

const predefinedState = {
  currentNote: null,
  photos: null
};

const currentNoteReducer = (state = predefinedState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_NOTE:
      newState = merge( {}, state)
      newState.currentNote = action.note
      return newState
    case LOGOUT_CURRENT_USER:
      return predefinedState;
    case RECEIVE_PHOTOS:
      newState = merge( {}, state )
      newState.photos = action.photos
      return newState
    case RECEIVE_PHOTO:
      newState = merge( {}, state )
      newState.photos.push(action.photo);
      return newState;
    default:
      return state;
  }
}

export default currentNoteReducer;
