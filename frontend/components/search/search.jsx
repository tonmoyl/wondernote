import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {


    return (
      <div id="search-form" className="dropdown">
        <input
          type="text"
          placeholder="Search Notes.."
          id="myInput"
          onkeyup="filterFunction()"
          />
      </div>
    )
  }
}
