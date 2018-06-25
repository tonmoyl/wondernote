import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Toolbar extends React.Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  };

  deleteItem() {
    if (this.props.itemType === 'note' || this.props.itemType === 'note-item') {
      this.props.deleteNote(this.props.noteId);
    }
    else if (this.props.itemType === 'notebook-item') {
      this.props.deleteNotebook(this.props.notebookId).then( ()=> {
        this.props.history.push('/main/new');
      });
    }
  }

  toggleFav() {
    console.log("button worked")
  }

  render() {
    // if (this.props.display) {
      return (
        <div className="toolbar">
          <i className="fa fa-trash-o" onClick={this.deleteItem}></i>
          <i className="fa fa-star" onClick={this.toggleFav}></i>
        </div>
      )
    // } else {
    //   return null;
    // }
  }
}
