import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.renderFavorite = this.renderFavorite.bind(this);
  };

  renderFavorite() {

    // Render on note-items and note; Not on notebook-item
    if (this.props.itemType != 'notebook-item') {
      if (this.props.favoriteIds && this.props.favoriteIds.includes(this.props.noteId)){
        this.favorite = <i className="fa fa-star favorite-item" onClick={this.toggleFav}></i>
      } else {
        this.favorite = <i className="fa fa-star" onClick={this.toggleFav}></i>
      }
    }
  }

  deleteItem() {
    if (this.props.itemType === 'note' || this.props.itemType === 'note-item') {
      this.props.deleteNote(this.props.noteId).then( ()=> {
        this.props.history.push('/main/new');
      });
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
    this.renderFavorite();

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
