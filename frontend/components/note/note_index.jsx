import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NoteItemContainer from './note_item_container';

export default class NoteIndex extends React.Component{
  constructor(props) {
    super(props);

  }

  componentWillMount(){
    this.props.fetchNotes();
    this.props.fetchFavNotes();
  }

  render(){
    let count = 0;
    const notes = this.props.noteIds.map( (id) => {
      count ++
      return (
        <li key={id}>
          <NoteItemContainer
            note={this.props.notes[id]}
            prevLink={"noteIndex"}
            parentComponent="noteIndex"/>
        </li>
      );
    });

    return(
      <div className={this.props.componentType}>
        <div className="note-index-header">
          <h2>NOTES {this.props.componentType}</h2>
          <div className="noteslist-footer">
            <h4>{count} notes</h4>
            <div className="options-list">

            </div>
          </div>
        </div>
        <div className="note-list">
          <ul>
            {notes}
          </ul>
        </div>
      </div>
    )
  }

}
