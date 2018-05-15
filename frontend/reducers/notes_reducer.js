import merge from 'lodash/merge';

import { RECEIVE_NOTE, RECEIVE_NOTES, REMOVE_NOTE } from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      const newNote = { [action.note.id]: action.note };
      return merge({}, state, newNote);
    case REMOVE_NOTE:
      const newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
