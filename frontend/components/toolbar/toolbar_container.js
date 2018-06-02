import React from 'react';
import { connect } from 'react-redux';
import Toolbar from './toolbar';
import { deleteNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  
  let noteId;
  if (ownProps.noteId) { noteId = ownProps.noteId }
  else { ownProps.match.params.noteId }

  return {
    itemType: ownProps.itemType,
    noteId,
    notebookId: ownProps.match.params.notebookId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar));
