import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NoteItem from './note_item'

export default class NoteIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchNotes();
  }

  render(){
    const notes = Object.keys(this.props.notes).map( (id) => {
      return (
        <li key={id}>
          <NoteItem note={this.props.notes[id]}/>
        </li>
      )
    })

    return(
      <div className="note-index">
        <div className="note-index-header">
          <h2>NOTES</h2>
          <div className="noteslist-footer">
            <h4>7 notes</h4>
            <div className="options-list">
              <h4>Options</h4>
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
