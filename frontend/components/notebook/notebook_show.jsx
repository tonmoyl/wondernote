import React from 'react';
import { Link } from 'react-router-dom';

export default class NotebookShow extends React.Component {
  constructor(props){
    super(props);
    this.closeNav = this.closeNav.bind(this);
  };

  componentDidMount(){
    if (document.getElementById("notebook-side") && document.getElementById("notebook-show")) {
      document.getElementById("notebook-side").style.width = "0px";
      document.getElementById("notebook-show").style.zIndex = "4";
    }
  }


  closeNav() {
    // if (document.getElementById("notebook-show")){
      document.getElementById("notebook-show").style.zIndex = "0";
    // }
  }

  render(){
    return (
      <div id="notebook-show">
        This is coming from the notebook show
        {this.props.notebookId}
        <Link to={`/main/${this.props.match.params.noteId}`}>&times;</Link>
      </div>
    )
  }
};
