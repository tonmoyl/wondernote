import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NoteItemContainer from './note_item_container';

export default class NoteIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      order: "update",
      noteIds: this.props.noteIds
    }
    this.updateOrder = this.updateOrder.bind(this);
    this.sortAlphabetical = this.sortAlphabetical.bind(this);
  }

  componentWillMount(){
    if (this.props.componentType === "note-index") {
      this.props.fetchNotes();
      this.props.fetchFavNotes();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.state.noteIds = nextProps.noteIds;
    return true;
  }

  updateOrder(){
    const order = document.getElementById("dropdown-order").value;

    switch(order){
      case "update":
        console.log("hit switch update");
        break
      case "alphabetical":
        console.log("hit asdl");
        this.sortAlphabetical()
        break
      case "reverse-alphabetical":
        console.log("saddsad");
        break
      default:
        console.log("default");
        break
    }
    this.state.order = order;
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
    this.setState({noteIds: sorted});
    console.log(this.state.noteIds);
  }

  render(){
    let count = 0;
    let notes = this.state.noteIds.map( (id) => {
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
        <select id="dropdown-order" className="dropdown-order" onChange={this.updateOrder}>
          <option className="value-order" value="update">Last Updated</option>
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
