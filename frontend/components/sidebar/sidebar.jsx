import React from 'react';
import { Link } from 'react-router-dom';
import { toggleNavNotebook, toggleSearch, toggleFavorites } from '../../util/ui_util';
import { fetchFavNotes } from '../../actions/favorite_actions';

export default class Sidebar extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.toggleNavNotebook = toggleNavNotebook.bind(this);
    // this.toggleSearch = toggleSearch.bind(this);
    // this.openNotebookIndex = this.openNotebookIndex.bind(this);
  };

  componentDidMount() {
    document.getElementById("search-form").style.width = "0px";
    document.getElementById("notebook-side").style.width = "0px";
    document.getElementById("favorite-index").style.width = "0px";

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    // this.props.history.push(`/login`);
    // this.toggleNavNotebook();
  }

  closeOtherWindows() {
    const sidebarSearch = document.getElementById("search-form").style.width;
    if (sidebarSearch === "100%") {
      document.getElementById("search-form").style.width = "0px";
      // document.getElementById("search-form").style.visibility = "hidden";
    }
  }

  // openNotebookIndex(){
  //   this.toggleNavNotebook();
  // }

  render(){

    // buttons to include:
    // <div className="new-meeting-btn"></div>
    // <div className="workchat-btn"></div>

    // <div className="tags-btn"></div>



    return(
      <div className="sidebar">
        <div className="button-list sidebar-top">
            <Link  to="/main/new" onClick={this.closeOtherWindows}>
              <div className="new-note-btn" >
                <i class="material-icons">note_add</i>
                New
              </div>
            </Link>

            <div className="search-btn" onClick={toggleSearch}>
              <i class="material-icons">search</i>
              Search
            </div>
        </div>

        <div className="button-list sidebar-middle">
            <Link to={`/main/${this.props.match.params.noteId}`}  onClick={this.closeOtherWindows}>
              <div className="notes-btn">
                <i class="material-icons">library_books</i>
                Notes
              </div>
            </Link>
          <div className="notebooks-btn" onClick={toggleNavNotebook}>
            <i class="material-icons">book</i>
            Books
          </div>
          <div className="shortcuts-btn" onClick={toggleFavorites}>
            <i class="material-icons">bookmark</i>
            Saved
          </div>
        </div>

        <div className="button-list sidebar-bottom">
          <a href="http://lifazul.com">
            <div>
              <i class="material-icons">public</i>
              web
            </div>
          </a>
          <div>
            <a href="https://github.com/tonmoyl">
              <i class="material-icons">code</i>
              github
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/lifazultonmoy/">
              <i class="material-icons">people_outline</i>
              linkedin
            </a>
          </div>
          <div className="logout" onClick={this.handleSubmit}>
            <i class="material-icons">motorcycle</i>
            Logout
          </div>
        </div>


      </div>
    );
  };
};
