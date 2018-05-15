import React from 'react';
import NotebookShow from './notebook_show';
import { Link } from 'react-router-dom';

export default class NotebookItem extends React.Component {
  constructor(props){
    super(props)
    this.notebook = this.props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // e.preventDefault();
    // document.getElementById("notebook-side").style.width = "0px";
    // document.getElementById("notebook-show").style.zIndex = "4";
    // debugger
  }

  render() {
    return (
      <div>
        <Link to={`/main/${this.props.noteId}/${this.notebook.id}`}>
          <div className="list-item notebook-item" >
            {this.notebook.title}
          </div>
        </Link>
      </div>
    )
  }
}
