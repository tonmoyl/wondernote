import * as NotebooksAPIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const DELETE_NOTEBOOK = "DELETE_NOTEBOOK";

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebookID => ({
  type: DELETE_NOTEBOOK,
  notebookID
})

export const createNotebook = (notebook) => {
  return dispatch => {
    return NotebooksAPIUtil.createNotebook(notebook).then(notebook => {
      return dispatch(receiveNotebook(notebook));
    });
  };
};

export const fetchNotebooks = () => {
  return dispatch => {
    return NotebooksAPIUtil.fetchNotebooks().then(notebooks => {
      return dispatch(receiveNotebooks(notebooks));
    });
  };
};

export const fetchNotebook = (id) => {
  return dispatch => {
    return NotebooksAPIUtil.fetchNotebook(id).then(notebook => {
      return dispatch(receiveCurrentNotebook(notebook));
    });
  };
};

export const deleteNotebook = (id) => {
  return dispatch => {
    return NotebooksAPIUtil.deleteNotebook(id).then(notebookID => {
      return dispatch(removeNotebook(notebookId));
    })
  }
}
