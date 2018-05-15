import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './note_form';
import { fetchNote } from '../../actions/note_actions';

const mapStateToProps = () => {
  return {
    formType: "note_show",

  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(createNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
