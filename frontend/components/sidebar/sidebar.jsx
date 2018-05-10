import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push(`/login`);
  }

  render(){
    return(
      <div className="sidebar">
        <div className="button-list top">
            <Link  to="/note/new">
              <div className="new-note-btn" />
            </Link>
          <div className="new-meeting-btn"></div>
          <div className="search-btn"></div>
          <div className="workchat-btn"></div>
        </div>

        <div className="button-list bottom">
          <div className="shortcuts-btn">Shortcuts</div>
          <div className="notes-btn">Notes</div>
          <div className="notebooks-btn">Notebooks</div>
          <div className="tags-btn">Tags</div>
        </div>

        <div className="button-list" onClick={this.handleSubmit}>
          <div className="logout"></div>
        </div>


      </div>
    );
  };
};
