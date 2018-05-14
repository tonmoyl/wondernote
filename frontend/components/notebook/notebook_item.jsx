import React from 'react';

export default class NotebookItem extends React.Component {
  constructor(props){
    super(props)
    this.notebook = this.props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('clicked');
  }

  render() {
    return (
      <div className="list-item notebook-item" onClick={this.handleSubmit}>
        {this.notebook.title}
      </div>
    )
  }
}
