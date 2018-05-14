import React from 'react';
import NotebookShow from './notebook_show';

export default class NotebookItem extends React.Component {
  constructor(props){
    super(props)
    this.notebook = this.props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('clicked');
    document.getElementById("notebook-side").style.width = "0px";
    document.getElementById("notebook-show").style.zIndex = "4";
  }

  render() {
    return (
      <div className="list-item notebook-item" onClick={this.handleSubmit}>
        {this.notebook.title}
      </div>
    )
  }
}
