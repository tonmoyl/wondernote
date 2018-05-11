import React from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { createNote, fetchNotes } from '../../actions/note_actions';

const mapStateToProps = ({ entities }) => {
  return {
    notes: entities.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
