import React from 'react';
import NotebookIndexContainer from '../notebook/notebook_index_container';

export default class Notebook extends React.Component{
  constructor(props){
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.props.fetchNotebooks();
    document.getElementById("create-notebook").style.display = "flex";
  }

  render(){
    return(
      <div id="notebook-side" className="notebook-side sidenav">
        <div className="notebook-inner">
          <a href="javascript:void(0)" className="addnotebook" onClick={this.openForm}>+</a>
          <p>Some information about the side</p>
          <NotebookIndexContainer />
        </div>
      </div>
    )
  }
}
