import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NoteItem from './note_item';

export default class NoteIndex extends React.Component{
  constructor(props) {
    super(props);

  }

  componentWillMount(){
    this.props.fetchNotes();
  }

  render(){
    let count = 0;
    const notes = Object.keys(this.props.notes).map( (id) => {
      count ++
      return (
        <li key={id}>
          <NoteItem
            note={this.props.notes[id]}
            prevLink={"noteIndex"}
            parentComponent="noteIndex"/>
        </li>
      );
    });

    return(
      <div className="note-index">
        <div className="note-index-header">
          <h2>NOTES</h2>
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
