import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NoteItemContainer from './note_item_container';

export default class NoteIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      order: "newest",
      noteIds: []
    }
    this.updateOrder = this.updateOrder.bind(this);
    this.sortAlphabetical = this.sortAlphabetical.bind(this);
    this.sortUpdate = this.sortUpdate.bind(this);
    this.renderOrder = this.renderOrder.bind(this);
  }

  componentWillMount(){
    if (this.props.componentType === "note-index") {
      this.props.fetchNotes();
      this.props.fetchFavNotes();
    }
  }

  componentDidUpdate() {
    let noteIds = Object.keys(this.props.notes)
    if(noteIds.length !== this.state.noteIds.length) {
      this.setState({noteIds: this.updateOrder()});
    }
  }

  renderOrder(){
    this.updateOrder();
    this.setState({});
  }

  updateOrder(){
    const order = document.getElementById("dropdown-order").value;

    switch(order){
      case "newest":
        return this.sortUpdate();
      case "oldest":
        return this.sortUpdate().reverse();
      case "alphabetical":
        return this.sortAlphabetical();
      case "reverse-alphabetical":
        return this.sortAlphabetical().reverse();
      default:
        break
    }

    this.state.order = order;
    return null;
  }

  sortAlphabetical() {
    let notes = this.props.notes;
    let sorted = [];

    for (var id in this.props.notes) {
      sorted.push([this.props.notes[id].title, id]);
    }

    function comparator(a,b) {
      if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
      if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
      if (a[0].toLowerCase() === b[0].toLowerCase()) return 0;
    }


    sorted = sorted.sort(comparator);
    sorted = sorted.map( (item) => {
      return item[1];
    });
    this.state.noteIds = sorted;
    // this.setState({noteIds: sorted});
    return sorted;
  }

  sortUpdate() {
    let notes = this.props.notes;
    let sorted = [];

    for (var id in notes) {
      let noteUpdate = Date.parse(this.props.notes[id].updated_at);

      sorted.push([noteUpdate, id]);
    }

    function comparator(a,b) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[0] === b[0]) return 0;
    }


    sorted = sorted.sort(comparator);
    sorted = sorted.map( (item) => {
      return item[1];
    });
    // this.setState({noteIds: sorted});
    this.state.noteIds = sorted;
    return sorted.reverse();
  }

  render(){
    let count = 0;
    let noteIds;

    if (this.props.componentType === "note-index") {
      noteIds = this.state.noteIds;
    } else {
      noteIds = this.props.noteIds;
    }
    let notes = noteIds.map( (id) => {
        count ++;
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
      <div id={this.props.componentType} className={this.props.componentType}>
        <select id="dropdown-order" className="notes-dropdown" onChange={this.renderOrder} defaultValue="newest">
          <option className="value-order" value="newest">Most Recent</option>
          <option className="value-order" value="oldest">Least Recent</option>
          <option className="value-order" value="alphabetical">Sort by Title (a-z)</option>
          <option className="value-order" value="reverse-alphabetical">Sort by Title (z-a)</option>
        </select>
        <div className="note-index-header">
          <h2>{this.props.componentTitle}</h2>
          <div className="noteslist-footer">
            <h4>{count} notes</h4>
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
