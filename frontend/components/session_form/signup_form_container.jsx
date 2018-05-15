import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { createNotebook } from '../../actions/notebook_actions.js';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/signup">log in instead</Link>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
