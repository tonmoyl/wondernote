import { connect } from 'react-redux';
import React from 'react';
import NewNote from './new_note';
import { createNote } from '../../actions/note_actions';

// const mapStateToProps = ({  }) => {
//   return {
//
//   }
// }
const mapStateToProps = null;


const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(createNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
