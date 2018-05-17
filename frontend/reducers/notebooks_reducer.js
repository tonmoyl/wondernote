import merge from 'lodash/merge';

import { RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS } from '../actions/notebook_actions';
import { RECEIVE_NOTE } from '../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {};
const notebooksReducer = ( state = predefinedState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      return merge({}, state, {[action.notebook.id]: action.notebook});
    case RECEIVE_NOTEBOOKS:
      return merge({}, state, action.notebooks);
    case RECEIVE_NOTE:
      const newState = merge({}, state);
      if (!newState[action.note.notebook_id].noteIds.includes(action.note.id)) {
        newState[action.note.notebook_id].noteIds.shift(action.note.id)
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return predefinedState;
    default:
      return state;
  };
};

export default notebooksReducer;
