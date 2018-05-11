import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import notesReducer from './notes_reducer';
import currentNoteReducer from './current_note_reducer';


const entitiesReducer = combineReducers({
  users: userReducer,
  notes: notesReducer,
  currentNote: currentNoteReducer
});

export default entitiesReducer;
