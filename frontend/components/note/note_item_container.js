import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoteItem from './note_item';

const mapStateToProps = (state, ownProps) => {
  return {
    currentNoteId: ownProps.match.params.noteId
  }
}

const mapDispatchToProps = null;

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteItem));
