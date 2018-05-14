import React from 'react';
import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = ({ entities }) => {
  return {
    notebooks: entities.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);
