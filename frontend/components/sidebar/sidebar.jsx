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
    let new_selected;
    let note_selected;
    if (this.props.noteId === "new") {
      new_selected = "selected";
    } else if (parseInt(this.props.noteId)) {
      note_selected = "selected";
    }


    return(
      <div className="sidebar">
        <div className="button-list sidebar-top">
            <Link  to="/main/new" onClick={this.closeOtherWindows}>
              <div className={`new-note-btn ${new_selected}`} >
                <i className="material-icons">note_add</i>
                <span>New</span>
              </div>
            </Link>

            <div className="search-btn" id="search-side" onClick={toggleSearch}>
              <i className="material-icons">search</i>
              <span>Search</span>
            </div>
        </div>

        <div className="button-list sidebar-middle">
            <Link to={`/main/${this.props.lastNoteId}`}  onClick={this.closeOtherWindows}>
              <div className={`notes-btn ${note_selected}`}>
                <i className="material-icons">library_books</i>
                <span>Notes</span>
              </div>
            </Link>
          <div className="notebooks-btn" id="books-side" onClick={toggleNavNotebook}>
            <i className="material-icons">book</i>
            <span>Books</span>
          </div>
          <div className="shortcuts-btn" id="favorite-side" onClick={toggleFavorites}>
            <i className="material-icons">star</i>
            <span>Saved</span>
          </div>
        </div>

        <div className="button-list sidebar-bottom">
          <a href="http://lifazul.com">
            <div>
              <i className="material-icons">public</i>
              <span>web</span>
            </div>
          </a>
          <div>
            <a href="https://github.com/tonmoyl">
              <i className="material-icons">code</i>
              <span>github</span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/lifazultonmoy/">
              <i className="material-icons">people_outline</i>
              <span>linkedin</span>
            </a>
          </div>
          <div className="logout" onClick={this.handleSubmit}>
            <i className="material-icons">motorcycle</i>
            <span>Logout</span>
          </div>
        </div>


      </div>
    );
  };
};
