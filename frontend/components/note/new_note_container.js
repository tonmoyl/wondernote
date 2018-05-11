import { connect } from 'react-redux';
import React from 'react';
import NoteForm from './note_form';
import { createNote, fetchNote } from '../../actions/note_actions';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.noteId)s
  return {
    currentNote: state.entities.currentNote.currentNote,
    formType: "create_note",
    globalstate: state
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
