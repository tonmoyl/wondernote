import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="sidebar">
        <h1>This is coming from the sidebar</h1>
        <div className="sidebar top-button-list">
          <div><Link to="/note/new">New Note</Link></div>
          <div>New Meeting</div>
          <div>Search</div>
          <div>Workchat</div>
        </div>

        <div className="sidebar bottom-button-list">
          <div>Shortcuts</div>
          <div>Notes</div>
          <div>Notebooks</div>
          <div>Tags</div>
        </div>


      </div>
    );
  };
};
