import * as APIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const createNotebook = (notebook) => {
debugger
  return dispatch => {
    return APIUtil.createNotebook(notebook).then(notebook => {
      return dispatch(receiveNotebook(notebook));
    });
  };
};

export const fetchNotebooks = () => {
  return dispatch => {
    return APIUtil.fetchNotebooks().then(notebooks => {
      return dispatch(receiveNotebooks(notebooks));
    });
  };
};

export const fetchNotebook = (id) => {
  return dispatch => {
    return APIUtil.fetchNotebook(id).then(notebook => {
      return dispatch(receiveCurrentNotebook(notebook));
    });
  };
};
