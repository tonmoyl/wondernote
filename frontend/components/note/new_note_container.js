import { connect } from 'react-redux';
import React from 'react';
import NoteForm from './note_form';
import { createNote, fetchNote } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentNote: state.entities.currentNote.currentNote,
    formType: "Create",
    notebooks: state.entities.notebooks,
    currentNotebookId: ownProps.match.params.notebookId
  }
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(createNote(note)),
    fetchNote: (noteid) => dispatch(fetchNote(noteid)),
    fetchNotebooks: () => dispatch(fetchNotebooks())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm));
