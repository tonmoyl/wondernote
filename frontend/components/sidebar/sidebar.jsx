import React from 'react';
import { Link } from 'react-router-dom';
import { toggleNav } from '../../util/ui_util';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNav = toggleNav.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push(`/login`);
    this.toggleNav;
  }

  render(){


    return(
      <div className="sidebar">
        <div className="button-list top">
            <Link  to="/main/new">
              <div className="new-note-btn" />
            </Link>
          <div className="new-meeting-btn"></div>
          <div className="search-btn"></div>
          <div className="workchat-btn"></div>
        </div>

        <div className="button-list bottom">
          <div className="shortcuts-btn"></div>
            <Link to={`/main/${this.props.match.params.noteId}`}>
              <div className="notes-btn"></div>
            </Link>
          <div className="notebooks-btn" onClick={this.toggleNav}></div>
          <div className="tags-btn"></div>
        </div>

        <div className="button-list" onClick={this.handleSubmit}>
          <div className="logout"></div>
        </div>


      </div>
    );
  };
};
