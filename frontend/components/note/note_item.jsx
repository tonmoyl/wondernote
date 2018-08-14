import React from 'react';
import { Link } from 'react-router-dom';
import ToolbarContainer from '../toolbar/toolbar_container';

export default class Note extends React.Component{
  constructor(props){
    super(props)
    this.parseTime = this.parseTime.bind(this);
  }

  parseTime() {
    const updateTime = this.props.note.updated_at;
    const currentTime = Date.now();
    const differenceInMS = 1 + currentTime - Date.parse(updateTime);

    const sec = Math.floor((differenceInMS / 1000) % 60);
    const min = Math.floor((differenceInMS / 1000 / 60) % 60);
    const hour = Math.floor((differenceInMS / 1000 / 60 / 60) % 60);
    const days = Math.floor((differenceInMS / 1000 / 60 / 60 / 24));

    const time = [days, hour, min, sec];
    const timeStr = ["DAYS", "HOURS", "MINS", "SEC"];

    let showTime = time[0];
    let idx = 0;
  
    while (showTime === 0) {
      idx ++;
      showTime = time[idx];
    }
    // debugger
    if (showTime) {
      return `${showTime} ${timeStr[idx]} AGO`;
    } else {
      return "0 SEC AGO"
    };


    // if (showTime) return `${showTime} ${timeStr[idx]} AGO`
    // else {return "0 SEC AGO"};

  }

  render() {

    let followLink;

    //Weird issue where note-item is rendering but this.props.note is not defined
    //When issue is fixed, can delete the if/else statement
    if (this.props.note){
      let renderBody = JSON.parse(this.props.note.body).plainText;

      if (this.props.parentComponent === "noteIndex") {
        followLink = `/main/${this.props.note.id}`;
      } else {
        followLink = `/main/${this.props.note.id}/${this.props.notebookId}`;
      }

      let timeAgo = this.parseTime();
      let title = this.props.note.title;
      let selected = "unselected";

      if (this.props.currentNoteId == this.props.note.id) {
        selected = "selected";
      }

      return (
        <div className="note-item">
          <ToolbarContainer itemType="note-item" display="false" noteId={`${this.props.note.id}`}/>
          <Link to={followLink}>
            <div className={`list-item ${selected}`}>
              <h3>{title}</h3>
              <h4>{timeAgo}</h4>
              <h5>{renderBody}</h5>
            </div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="note-item">
        </div>
      )
    }


  }
}
