import React from 'react';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.filterFunction.bind(this);
  }

  filterFunction() {

  }

  render() {
    var notes = this.props.notes;
    let renderNotes = Object.keys(this.props.notes).map( (id) => {
      return (
        <li key={id}>
          <Link to={`/main/${id}`}>{this.props.notes[id].title}</Link>
        </li>
      );
    })

    return (
      <div id="search-form" className="dropdown">
        <input
          type="text"
          placeholder="Search Notes.."
          id="myInput"
          ></input>
        <ul>
          {renderNotes}
        </ul>
      </div>
    )
  }
}
