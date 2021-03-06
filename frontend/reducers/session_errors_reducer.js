import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const predefinedState = [];
export default( state= predefinedState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case LOGOUT_CURRENT_USER:
      return predefinedState;
    default:
      return state;
  }
};
