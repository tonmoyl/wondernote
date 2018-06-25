import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVS = "RECEIVE_FAVS";
export const REMOVE_FAV = "REMOVE_FAV";

export const receiveFavNote = note => {
  return {
    type: RECEIVE_FAVS,
    note
  };
};

export const receiveFavNotes = notes => {
  console.log('receiveFavNotes from actions')
  return {
    type: RECEIVE_FAVS,
    notes
  };
};

export const removeFav = noteId => {
  return {
    type: REMOVE_FAV,
    noteId
  };
};

export const createFavNote = note => dispatch => {
  return dispatch => {
    return APIUtil.createFavNote(note).then( note => {
      return dispatch(receiveFavNote(note));
    });
  };
};

export const deleteFavNote = id => dispatch => {
  return dispatch => {
    return APIUtil.deleteFavNote(id).then( () => {
      return dispatch(removeFav(id));
    });
  };
};

export const fetchFavNotes = () => {
  return dispatch => {
    return APIUtil.fetchFavNotes().then(notes => {
      return dispatch(receiveFavNotes(notes));
    });
  };
};
