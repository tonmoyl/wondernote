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

    console.log(this.props.notes)
    return(
      <div className="note-index">
        This is coming from the index
        <h1>Notes: </h1>
          <ul>
            {notes}
          </ul>
      </div>
    )
  }

}
