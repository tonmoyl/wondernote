import * as APIUtil from '../util/note_api_util';

export const receiveCurrentNote = currentNote => ({
  type: RECEIVE_CURRENT_NOTE,
  currentNote
});

export const createNote = (note) => {
  return dispatch => {
    return APIUtil.createNote(note).then(note => {
      return dispatch(receiveCurrentNote(note))
    })
  }
}
