import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import notesErrorsReducer from './notes_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  notes: notesErrorsReducer
});

export default errorsReducer;
