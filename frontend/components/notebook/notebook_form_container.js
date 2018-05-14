import { connect } from 'react-redux';
import React from 'react';
import NotebookForm from './notebook_form';
import { createNotebook, fetchNotebook } from '../../actions/notebook_actions';
// import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    processForm: (note) => dispatch(createNotebook(note))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookForm);
