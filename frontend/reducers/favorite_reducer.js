import merge from 'lodash/merge';

import { RECEIVE_FAVS, REMOVE_FAV } from '../actions/favorite_actions';

const predefinedState = {};
const favoriteReducer = ( state = predefinedState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVS:
      return merge({}, state, action.notes);
    case REMOVE_FAV:
      debugger
    default:
      return state;
  }
}


export default favoriteReducer;
