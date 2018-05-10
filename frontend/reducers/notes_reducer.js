import merge from 'lodash/merge';

import { RECEIVE_NOTE, RECEIVE_NOTES } from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTES:
      return action.notes
    case RECEIVE_NOTE:
      return action.note;
    default:
      return state;
  }
};

export default notesReducer;
