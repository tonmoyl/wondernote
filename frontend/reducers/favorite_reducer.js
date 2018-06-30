import merge from 'lodash/merge';

import { RECEIVE_FAVS, RECEIVE_FAV, REMOVE_FAV } from '../actions/favorite_actions';
import { REMOVE_NOTE } from '../actions/note_actions';

const predefinedState = {};
const favoriteReducer = ( state = predefinedState, action ) => {
  Object.freeze(state);
  let newState
  switch (action.type) {
    case RECEIVE_FAVS:
      return merge({}, state, action.notes);
    case RECEIVE_FAV:
      const newNote = { [action.note.note_id]: action.note }
      return merge({}, state, newNote);
    case REMOVE_FAV:
      newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    case REMOVE_NOTE:
      newState = merge({}, state);
      if (Object.keys(state).includes(action.noteId)) {
        delete newState[action.noteId];
      }
      return newState;
    default:
      return state;
  }
}


export default favoriteReducer;
