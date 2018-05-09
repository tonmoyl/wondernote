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
          <div className="new-note">
            <Link to="/note/new">
              ""
            </Link>
          </div>
          <div>New Meeting</div>
          <div>Search</div>
          <div>Workchat</div>
        </div>

        <div className="button-list bottom">
          <div>Shortcuts</div>
          <div>Notes</div>
          <div>Notebooks</div>
          <div>Tags</div>
        </div>


      </div>
    );
  };
};
