import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Toolbar extends React.Component{
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  };

  deleteItem() {
    if (this.props.itemType === 'note') {
      this.props.deleteNote(this.props.noteId);
      this.props.history.push('/main/new');
    }
  }

  render() {

    if (this.props.display) {
      return (
        <div className="toolbar">
          <i className="fa fa-trash-o" onClick={this.deleteItem}></i>
        </div>
      )
    } else {
      return null;
    }
  }
}
