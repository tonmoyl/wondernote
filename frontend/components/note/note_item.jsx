import React from 'react';
import { Link } from 'react-router-dom';



export default class Note extends React.Component{
  constructor(props){
    super(props)
  }

  parseTime() {
    const updateTime = this.props.note.updated_at;
    const currentTime = Date.now();
    const differenceInMS = currentTime - Date.parse(updateTime);

    const sec = Math.floor((differenceInMS / 1000) % 60);
    const min = Math.floor((differenceInMS / 1000 / 60) % 60);
    const hour = Math.floor((differenceInMS / 1000 / 60 / 60) % 60);
    const days = Math.floor((differenceInMS / 1000 / 60 / 60 / 24));

    const time = [days, hour, min, sec];
    const timeStr = ["DAYS", "HOURS", "MINS", "SEC"];

    let showTime = 0;
    let idx = 0;
    let timeString = "SEC"
    while (showTime === 0) {
      idx ++;
      showTime = time[idx];
    }

    if (showTime) return `${showTime} ${timeStr[idx]} AGO`
    else {return "0 SEC AGO"};

  }

  render() {
    const renderBody = JSON.parse(this.props.note.body).plainText;
    let followLink
    if (this.props.parentComponent === "noteIndex") {
      followLink = `/main/${this.props.note.id}`;
    } else {
      followLink = `/main/${this.props.note.id}/${this.props.notebookId}`;
    }

    const timeAgo = this.parseTime();

    let selected = "unselected";
    if (this.props.currentNoteId == this.props.note.id) {
      selected = "selected";
    }

    return (
        <Link to={followLink}>
          <div className={`list-item ${selected}`}>
            <h3>{this.props.note.title}</h3>
            <h4>{timeAgo}</h4>
            <h5>{renderBody}</h5>
          </div>
        </Link>
    )
  }
}
