import React from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { createNote, fetchNotes } from '../../actions/note_actions';

const mapStateToProps = ({ entities }) => {
  return {
    note: entities.note,
    notes: entities.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: (noteParams) => dispatch(createNote(noteParams)),
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
