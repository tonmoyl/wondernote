import { RECEIVE_CURRENT_NOTE } from '../actions/note_actions';

const currentNoteReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_NOTE:
      return { currentNote: action.note }
    default:
      return state;
  }
}

export default currentNoteReducer;
