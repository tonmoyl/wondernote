import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  RECEIVE_CURRENT_NOTE,
  RECEIVE_NOTE_ERRORS
} from '../actions/note_actions';

const predefinedState = [];
export default( state = predefinedState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_NOTE_ERRORS:
      return action.errors;
    case RECEIVE_NOTES:
    case RECEIVE_NOTE:
    case RECEIVE_CURRENT_NOTE:
      return predefinedState;
    default:
      return state;
  }
};
