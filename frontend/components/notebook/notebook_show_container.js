import React from 'react';
import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {

  const notebookId = ownProps.match.params.notebookId;
  const currentNotebook = state.entities.notebooks[notebookId];

  let currentNotes;
  if (currentNotebook) {
    currentNotes = currentNotebook.noteIds.map( noteId => {
      return state.entities.notes[noteId];
    });
  };
  return {
    currentNotes
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow));
