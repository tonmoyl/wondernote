import React from 'react';
import { Link } from 'react-router-dom';
import { toggleNav } from '../../util/ui_util';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNav = toggleNav.bind(this);
    this.openNotebookIndex = this.openNotebookIndex.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push(`/login`);
    this.toggleNav();
  }

  openNotebookIndex(){
    // document.getElementById("modal").style.display = "block";
    this.toggleNav();
  }

  render(){

    // buttons to include:
    // <div className="new-meeting-btn"></div>
    // <div className="search-btn"></div>
    // <div className="workchat-btn"></div>

    // <div className="shortcuts-btn"></div>
    // <div className="tags-btn"></div>

    return(
      <div className="sidebar">
        <div className="button-list sidebar-top">
            <Link  to="/main/new">
              <div className="new-note-btn" />
            </Link>

        </div>

        <div className="button-list sidebar-middle">
            <Link to={`/main/${this.props.match.params.noteId}`}>
              <div className="notes-btn"></div>
            </Link>
          <div className="notebooks-btn" onClick={this.openNotebookIndex}></div>
        </div>

        <div className="button-list sidebar-bottom" onClick={this.handleSubmit}>
          <div className="logout"></div>
        </div>
      </div>
    );
  };
};
