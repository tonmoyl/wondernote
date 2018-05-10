import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import notesReducer from './notes_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  notes: notesReducer
});

export default entitiesReducer;
