import merge from 'lodash/merge';

import { RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS } from '../actions/notebook_actions';

const notebooksReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      return merge({}, state, action.notebooks);
    case RECEIVE_NOTEBOOKS:
      return action.notebook;
    default:
      return state;
  };
};

export default notebooksReducer;
