import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class NoteForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      notebook_id: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render(){
    return(
      <div>
        This is coming from the note index
      </div>
    )
  }

}
