import { connect } from 'react-redux';
import React from 'react';
import NoteForm from './note_form';
import { updateNote, fetchNote } from '../../actions/note_actions';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  return {
    currentNote: state.entities.currentNote.currentNote,
    formType: "Update",
    notebooks: state.entities.notebooks,
    currentNotebookId: ownProps.match.params.notebookId,
    photos: state.entities.currentNote.photos
  }
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(updateNote(note)),
    fetchNote: (noteid) => dispatch(fetchNote(noteid)),
    fetchPhotos: () => dispatch(fetchPhotos()),
    createPhoto: (formData) => dispatch(createPhoto(formData))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm));
