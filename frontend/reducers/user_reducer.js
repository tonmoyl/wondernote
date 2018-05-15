import merge from 'lodash/merge';

import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const predefinedState = {};
const usersReducer = (state = predefinedState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return predefinedState;
    default:
      return state;
  }
};

export default usersReducer;
