import React from 'react';

export default class NotebookItem extends React.Component {
  constructor(props){
    super(props)
    this.notebook = this.props.notebook;
  }

  render() {

    return (

      <div>
        <h3>{this.notebook.title}</h3>
      </div>
    )
  }
}
