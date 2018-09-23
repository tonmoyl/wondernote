import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    noteId: ownProps.match.params.noteId
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
