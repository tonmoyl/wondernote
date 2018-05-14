import { connect } from 'react-redux';
import React from 'react';
import NoteForm from './note_form';
import { createNote, fetchNote } from '../../actions/note_actions';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  // ownProps.match.params.noteId
  // console.log(ownProps.match.params.noteId)

  return {
    currentNote: state.entities.currentNote.currentNote,
    formType: "Create",
    notebooks: state.entities.notebooks
  }
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(createNote(note)),
    fetchNote: (noteid) => dispatch(fetchNote(noteid))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm));
