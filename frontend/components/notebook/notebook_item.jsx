import React from 'react';
import { Link } from 'react-router-dom';
import { toggleNav } from '../../util/ui_util';
import ToolbarContainer from '../toolbar/toolbar_container';

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
      <div className="notebook-item">
        <ToolbarContainer itemType="notebook-item" notebookId={this.props.notebook.id}/>
        <Link to={`/main/${this.props.noteId}/${this.notebook.id}`} onClick={this.handleSubmit}>
          <div className="list-item" >
            {this.notebook.title}
            <br />
            <h5>notes {notesLength}</h5>
          </div>
        </Link>
      </div>
    )
  }
}
