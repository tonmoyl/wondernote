import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  var allNoteIds = Object.keys(state.entities.notes)
  return {
    noteId: ownProps.match.params.noteId,
    lastNoteId: allNoteIds[allNoteIds.length-1]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar));
