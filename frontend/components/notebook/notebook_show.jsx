import React from 'react';

export default class NotebookShow extends React.Component {
  constructor(props){
    super(props);
    this.closeNav = this.closeNav.bind(this);
  };


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
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
      </div>
    )
  }
};
