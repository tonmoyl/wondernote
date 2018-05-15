import React from 'react';
import { Link } from 'react-router-dom';
import NoteItem from '../note/note_item';

export default class NotebookShow extends React.Component {
  constructor(props){
    super(props);
    this.closeNav = this.closeNav.bind(this);
  };

  componentDidMount(){
    if (document.getElementById("notebook-side") &&
    document.getElementById("notebook-show")) {
      document.getElementById("notebook-side").style.width = "0px";
      document.getElementById("notebook-show").style.zIndex = "4";
    }
  }


  closeNav() {
    // if (document.getElementById("notebook-show")){
      document.getElementById("notebook-show").style.zIndex = "0";
    // }
  }

  render(){
    let currentNotes
    if (this.props.currentNotes) {
      currentNotes = this.props.currentNotes.map( (note, idx) => {
        if (note) {
          return (
            <li key={idx}>
              <NoteItem note={note} notebookId={this.props.match.params.notebookId}/>
            </li>
          );
        };
      });
    }

    return (
      <div id="notebook-show">
        <Link to={`/main/${this.props.match.params.noteId}`}>
          <div className="note-index-header">
            <h2>View all Notes</h2>
          </div>
        </Link>
        <ul>
          {currentNotes}
        </ul>
      </div>
    )
  }
};
