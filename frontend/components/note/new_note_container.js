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
    notes: state.entities.notes,
    currentNotebookId: ownProps.match.params.notebookId,
    state: state,
    history: ownProps.history
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
