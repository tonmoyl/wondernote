import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar));
