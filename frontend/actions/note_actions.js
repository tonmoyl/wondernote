import * as APIUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_CURRENT_NOTE = "RECEIVE_CURRENT_NOTE";

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

export const receiveCurrentNote = note => {
  return {
    type: RECEIVE_CURRENT_NOTE,
    note
  }
}

export const createNote = (note) => {
  return dispatch => {
    return APIUtil.createNote(note).then(note => {
      return dispatch(receiveNote(note));
    });
  };
};

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
