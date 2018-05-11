import { connect } from 'react-redux';
import React from 'react';
import NoteForm from './note_form';
import { fetchNote } from '../../actions/note_actions';

const mapStateToProps = () => {
  return {
    formType: "note_show",
    
  }
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(createNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm)
