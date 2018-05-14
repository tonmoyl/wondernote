import React from 'react';
import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = ({ entities }) => {
  debugger
  return {
    notebooks: entities.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
