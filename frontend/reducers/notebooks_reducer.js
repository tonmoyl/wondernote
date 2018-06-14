import merge from 'lodash/merge';

import { RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS, DELETE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_NOTE } from '../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {};
const notebooksReducer = ( state = predefinedState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      return merge({}, state, {[action.notebook.id]: action.notebook});
    case RECEIVE_NOTEBOOKS:
      return merge({}, state, action.notebooks);
    case RECEIVE_NOTE:
      newState = merge({}, state);
      let returnState;
      if (newState[action.note.notebook_id]){
        // if (!newState[action.note.notebook_id].noteIds.includes(action.note.id)) {
        //   newState[action.note.notebook_id].noteIds.unshift(action.note.id)
        // }
        let allIds = newState[action.note.notebook_id].noteIds;
        if (allIds) {
          for (let i = 0; i < allIds.length; i++) {
            if (allIds[i] === action.note.id) {
              returnState = allIds.splice(i,1);
            }
          }
          newState[action.note.notebook_id].noteIds.unshift(action.note.id);
        }
      }
      // newState[action.note.notebook_id].noteIds.shift(action.note.id)
      // newState[action.note.notebook_id].noteIds = returnState
      return newState;
    case LOGOUT_CURRENT_USER:
      return predefinedState;
    case DELETE_NOTEBOOK:
      newState = merge({}, state);
      delete newState[action.notebookID];
      return newState;
      debugger
    default:
      return state;
  };
};

export default notebooksReducer;
