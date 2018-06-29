import React from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';

const mapStateToProps = ({ entities }) => {
  return {
    componentType: "favorite-index",
    notes: entities.notes,
    noteIds: Object.keys(entities.favorites),
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
