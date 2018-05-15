import { RECEIVE_CURRENT_NOTE } from '../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {};
const currentNoteReducer = (state= predefinedState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_NOTE:
      return { currentNote: action.note }
    case LOGOUT_CURRENT_USER:
      return predefinedState;
    default:
      return state;
  }
}

export default currentNoteReducer;
