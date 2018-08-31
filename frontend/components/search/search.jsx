import React from 'react';
import { Link } from 'react-router-dom';
import { toggleSearch } from '../../util/ui_util';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: "",
      noteIds: [],
      input: "",
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    this.setState({ input: e.target.value }, this.filterFunction);
  }

  filterFunction() {
    let newNoteIds = []
    this.state.noteIds.forEach((id) => {
      if (this.props.notes[id].title.toLowerCase().includes(this.state.input.toLowerCase())) {
        newNoteIds.push(id);
      }
    });
    this.setState({noteIds: newNoteIds});
  }

  componentDidUpdate() {
    this.state.notes = this.props.notes;
    this.state.noteIds = Object.keys(this.props.notes)
  }

  render() {
    let renderNotes = this.state.noteIds.map( (id) => {
      // if statement is when a note is deleted, it will not have a value in this.props.notes
      if (this.props.notes[id]) {
        return (
          <li key={id} className="search-item">
            <Link to={`/main/${id}`} onClick={toggleSearch}>{this.props.notes[id].title}</Link>
          </li>
        );
      }
    })

    return (
      <div id="search-form" className="search-side dropdown">
        <input
          type="text"
          placeholder="Search Notes..."
          id="myInput"
          className="search-input"
          onChange={this.updateInput}
          ></input>
        <ul className="search-list">
          {renderNotes}
        </ul>
      </div>
    )
  }
}
