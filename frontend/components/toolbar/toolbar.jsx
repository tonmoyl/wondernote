import React from 'react';

export default class Toolbar extends React.Component{
  constructor(props){
    super(props);
    this.delete = this.deleteItem.bind(this);
  };

  deleteItem() {

  }

  render() {
    return (
      <div className="toolbar">
        <div className="delete-button" onClick={this.deleteItem}>Delete</div>
      </div>
    )
  }
}
