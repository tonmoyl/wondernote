import * as APIUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_CURRENT_NOTE = "RECEIVE_CURRENT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const receiveNotes = notes => {
  return {
    type: RECEIVE_NOTES,
    notes
  };
};

export const removeNote = noteId => {
  return {
    type: REMOVE_NOTE,
    noteId
  }
}

export const receiveCurrentNote = note => {
  return {
    type: RECEIVE_CURRENT_NOTE,
    note
  }
}

export const receiveErrors = errors => {
  return {
    type: RECEIVE_NOTE_ERRORS,
    errors
  }
}

// export const createNote = (note) => {
//   return dispatch => {
//     return APIUtil.createNote(note).then(note => {
//       return dispatch(receiveNote(note));
//     });
//   };
// };

export const createNote = note => dispatch => (
  APIUtil.createNote(note).then(note => (
    dispatch(receiveNote(note))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateNote = (note) => {
  return dispatch => {
    return APIUtil.updateNote(note).then(note => {
      return dispatch(receiveNote(note));
    })
  }
}

export const fetchNotes = () => {
  return dispatch => {
    return APIUtil.fetchNotes().then(notes => {
      return dispatch(receiveNotes(notes));
    });
  };
};

export const fetchNote = (id) => {
  return dispatch => {
    return APIUtil.fetchNote(id).then(note => {
      return dispatch(receiveCurrentNote(note));
    });
  };
};

export const deleteNote = (id) => {
  return dispatch => {
    return APIUtil.deleteNote(id).then(() => {
      return dispatch(removeNote(id));
    });
  };
};
