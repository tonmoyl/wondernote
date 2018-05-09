import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
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


      </div>
    );
  };
};
