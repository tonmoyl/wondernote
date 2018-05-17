import React from 'react';
import NotebookShow from './notebook_show';
import { Link } from 'react-router-dom';
import { toggleNav } from '../../util/ui_util';

export default class NotebookItem extends React.Component {
  constructor(props){
    super(props)
    this.notebook = this.props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNav = toggleNav.bind(this);
  }

  handleSubmit(e) {
    this.toggleNav();
  }

  render() {
    let notesLength;
    if (this.notebook.noteIds) { notesLength = this.props.notebook.noteIds.length }
    else { notesLength = 0 }

    return (
      <div>
        <Link to={`/main/${this.props.noteId}/${this.notebook.id}`} onClick={this.handleSubmit}>
          <div className="list-item notebook-item" >
            {this.notebook.title}
            <br />
            <h5>notes {notesLength}</h5>
          </div>
        </Link>
      </div>
    )
  }
}
