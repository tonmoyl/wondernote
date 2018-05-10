import merge from 'lodash/merge';

import { RECEIVE_NOTE, RECEIVE_NOTES } from '../actions/notes';

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
