import React from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';

const mapStateToProps = ({ entities }) => {
  let noteIds = Object.keys(entities.favorites).reverse() || [];

  return {
    componentType: "favorite-index",
    componentTitle: "FAVORITES",
    notes: entities.notes,
    noteIds
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
