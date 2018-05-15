import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = {
    //   sidebar: "closed"
    // };
    this.openNav = this.openNav.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push(`/login`);
  }

  // openNav() {
  //   if (this.state.sidebar === "closed") {
  //     document.getElementById("notebook-side").style.width = "430px";
  //     this.setState({sidebar: "opened"});
  //   } else {
  //     document.getElementById("notebook-side").style.width = "0px";
  //     this.setState({sidebar: "closed"});
  //   }
  // }

  openNav() {
    const sidebarWidth = document.getElementById("notebook-side").style.width;
    if (sidebarWidth === "0px") {
      document.getElementById("notebook-side").style.width = "430px";
    } else {
      document.getElementById("notebook-side").style.width = "0px";
    }
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
          <div className="notes-btn"></div>
          <div className="notebooks-btn" onClick={this.openNav}></div>
          <div className="tags-btn"></div>
        </div>

        <div className="button-list" onClick={this.handleSubmit}>
          <div className="logout"></div>
        </div>


      </div>
    );
  };
};
