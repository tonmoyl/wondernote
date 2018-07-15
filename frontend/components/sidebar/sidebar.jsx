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
    console.log("no error")
    document.getElementById("search-form").style.width = "0px";
    document.getElementById("notebook-side").style.width = "0px";
    document.getElementById("favorite-index").style.width = "0px";

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push(`/login`);
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
              <div className="new-note-btn" />
            </Link>

            <div className="search-btn" onClick={toggleSearch}></div>
        </div>

        <div className="button-list sidebar-middle">
            <Link to={`/main/${this.props.match.params.noteId}`}  onClick={this.closeOtherWindows}>
              <div className="notes-btn"></div>
            </Link>
          <div className="notebooks-btn" onClick={toggleNavNotebook}></div>
          <div className="shortcuts-btn" onClick={toggleFavorites}></div>
        </div>

        <div className="button-list sidebar-bottom">
          <a href="http://lifazul.com">
            <img className="profile-site" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANCSURBVGhD7VkxiNRAFF0RFQS1EyuLdTeJByKyjYKI2ouNW3m7kxVcsNBGFAvtDkUEG+HEQosTQded5JTjCgsRUUH0LNTSwkIQFUTxuAMVzzfnL87sTyazt5NNkQePwO38N/8lf/5kcqUCBQr0gYXSCjcUviP9l04gfrqBvzBcim+u9O84XeFRhikAE44U13nB4RI3dhbcT5kmQz0JTiQ/FJ8r04fXU7rxQCnN8AL5YTUQRyndGKiyysWaSCbK6yplzKPcaW/gAvNG3OxblDIPG0Yw6Q9c56N/Xw4zMYJJ3qPrnavK1nalR9KlStDcgpIYw5jf0RhTWjeCCS7VrrVXkRwLV7YOYU8IMb5vQ1aNaMUj8KTYubjRMVo62jQyV5ajG0kmNZygdYzR0tKmkSmSMEJl+vgaJKWaAacZS2tGIHyGJIyBxvCU00yiNSP6nTYeiJ+K6ulor7TwfkYSxkB8fow4oThNEsZAUi84zSTaMyLFFZIwQ6e+EnvKd04zifZKS/rPScIIXihqrJ6G9ozgjEASRsjhPiJOkYQR3Mkj6xA/16uXTHtGuuIkSRjDleILq5lAm2skJAkjVIPGVlZPQ5tG/kDcaHcf6TQ2I/ZJj1YKWlwjEJfiV+1+ey1JaYGYs1GNtLRqRLEqm02S0gKHrGecRhpaN4IJ3ugOVgpe0NjFxaeldSP/KC6THAs1hxP4b/nYdMzECNbKa5Jj4Yb+Ni7OhNkYCcQMybFAWTlcnAkzMuI/JDkW1HbZ2LTMqLT8MZJjoVo0xn2KxpkwCyMTI536apKLBV4Wd2Psh0hsatozIsVjLOIDJJMKai40hvN5eNeah+CNyt3GDgrvC+pLihf4AlqpT4oDMYI1MIt3qwsjHbGJwgYGnP33IskH3LxLuWwjKIVH1W6rTMOtAWtoFDfsK5eDotYIdRQ2GDv2bXXGpqHWof5fqE6efC7+BA2LB/aBjz2B0n9n8mY7KCCXgz25gLoWvwh0kZvRQC8Ubfo5c2D+V9F8VPumn+OBc7SLR/r/V3IpTuBaHwbxVO7hutRIQKnqUe029yCg7w3LGqWYNC5x9YVDlRSCxyHSGRZVh8Iaveh2m/sotQIFChijVPoLPsk8A2q3vAgAAAAASUVORK5CYII=">
            </img>
          </a>
          <a href="https://github.com/tonmoyl">
            <svg width="24" className="github-btn" height="24" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/lifazultonmoy/">
            <svg width="24" className="linkedin" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <div className="logout" onClick={this.handleSubmit}></div>
        </div>


      </div>
    );
  };
};
