import React from 'react';
import { connect } from 'react-redux';
import Toolbar from './toolbar';
import { deleteNote } from '../../actions/note_actions';
import { deleteNotebook } from '../../actions/notebook_actions';
import { withRouter } from 'react-router-dom';
import { createFavNote, deleteFavNote } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => {

  let noteId;
  if (ownProps.noteId) { noteId = ownProps.noteId }
  else { noteId = ownProps.match.params.noteId }

  return {
    itemType: ownProps.itemType,
    noteId,
    notebookId: ownProps.notebookId,
    favoriteIds: Object.keys(state.entities.favorites),
    notes: state.entities.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id)),
    deleteNotebook: (id) => dispatch(deleteNotebook(id)),
    createFavNote: (note) => dispatch(createFavNote(note)),
    deleteFavNote: (id) => dispatch(deleteFavNote(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar));
