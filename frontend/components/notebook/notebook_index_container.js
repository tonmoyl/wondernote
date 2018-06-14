import React from 'react';
import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebooks, deleteNotebook } from '../../actions/notebook_actions';


const mapStateToProps = ({ entities }) => {
  return {
    notebooks: entities.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
