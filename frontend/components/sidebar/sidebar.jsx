import React from 'react';
import { Link } from 'react-router-dom';
import { toggleNavNotebook, toggleSearch, toggleFavorites } from '../../util/ui_util';
import { fetchFavNotes } from '../../actions/favorite_actions';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    document.getElementById("search-form").style.width = "0px";
    document.getElementById("notebook-side").style.width = "0px";
    document.getElementById("favorite-index").style.width = "0px";

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  closeOtherWindows() {
    const sidebarSearch = document.getElementById("search-form").style.width;
    if (sidebarSearch === "100%") {
      document.getElementById("search-form").style.width = "0px";
    }
  }

  render(){

    return(
      <div className="sidebar">
        <div className="button-list sidebar-top">
            <Link  to="/main/new" onClick={this.closeOtherWindows}>
              <div className="new-note-btn" >
                <i className="material-icons">note_add</i>
                New
              </div>
            </Link>

            <div className="search-btn" onClick={toggleSearch}>
              <i className="material-icons">search</i>
              Search
            </div>
        </div>

        <div className="button-list sidebar-middle">
            <Link to={`/main/${this.props.match.params.noteId}`}  onClick={this.closeOtherWindows}>
              <div className="notes-btn">
                <i className="material-icons">library_books</i>
                Notes
              </div>
            </Link>
          <div className="notebooks-btn" onClick={toggleNavNotebook}>
            <i className="material-icons">book</i>
            Books
          </div>
          <div className="shortcuts-btn" onClick={toggleFavorites}>
            <i className="material-icons">star</i>
            Saved
          </div>
        </div>

        <div className="button-list sidebar-bottom">
          <a href="http://lifazul.com">
            <div>
              <i className="material-icons">public</i>
              web
            </div>
          </a>
          <div>
            <a href="https://github.com/tonmoyl">
              <i className="material-icons">code</i>
              github
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/lifazultonmoy/">
              <i className="material-icons">people_outline</i>
              linkedin
            </a>
          </div>
          <div className="logout" onClick={this.handleSubmit}>
            <i className="material-icons">motorcycle</i>
            Logout
          </div>
        </div>


      </div>
    );
  };
};
