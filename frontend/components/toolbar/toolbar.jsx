import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Toolbar extends React.Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    if (this.props.itemType === 'note' || this.props.itemType === 'note-item') {
      this.favorite = <i className="fa fa-star" onClick={this.toggleFav}></i>
    }
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
  };

  toggleFav() {
    if (this.props.favoriteIds.includes(this.props.noteId)) {
      this.props.deleteFavNote(this.props.noteId);
    } else {
      const newFavNote = this.props.notes[this.props.noteId];
      this.props.createFavNote(newFavNote);
    }
  }

  render() {
    // if (this.props.display) {

      return (
        <div className="toolbar">
          <i className="fa fa-trash-o" onClick={this.deleteItem}></i>
          {this.favorite}
        </div>
      )
    // } else {
    //   return null;
    // }
  }
}
