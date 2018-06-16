import merge from 'lodash/merge';

import { RECEIVE_NOTE, RECEIVE_NOTES, REMOVE_NOTE } from '../actions/note_actions';
import { DELETE_NOTEBOOK } from '../actions/notebook_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {};
const notesReducer = (state = predefinedState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      const newNote = { [action.note.id]: action.note };
      return merge({}, state, newNote);
    case REMOVE_NOTE:
      newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return predefinedState;
    case DELETE_NOTEBOOK:
      newState = merge({}, state);
      Object.keys(newState).forEach( (noteId) => {
        if (newState[noteId].notebook_id === action.notebookID) {
          delete newState[noteId];
        }
      })
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
