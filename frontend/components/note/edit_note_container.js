import { connect } from 'react-redux';
import React from 'react';
import NoteForm from './note_form';
import { updateNote, fetchNote } from '../../actions/note_actions';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // ownProps.match.params.noteId
  // console.log(ownProps.match.params.noteId)
  return {
    currentNote: state.entities.currentNote.currentNote,
    formType: "Update",
    globalstate: state
  }
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(updateNote(note)),
    fetchNote: (noteid) => dispatch(fetchNote(noteid))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm));
