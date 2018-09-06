import React from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { createNote, fetchNotes } from '../../actions/note_actions';
import { fetchFavNotes } from '../../actions/favorite_actions';

const mapStateToProps = ({ entities }) => {
  return {
    componentType: "note-index",
    componentTitle: "NOTES",
    notes: entities.notes,
    noteIds: Object.keys(entities.notes)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: () => dispatch(createNote()),
    fetchFavNotes: () => dispatch(fetchFavNotes()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
