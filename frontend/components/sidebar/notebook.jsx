import React from 'react';

export default class Notebook extends React.Component{
  constructor(props){
    super(props)
  }

  openForm() {
    document.getElementById("create-notebook").style.display = "flex";
  }

  render(){
    return(
      <div id="notebook-side" className="notebook-side sidenav">

        <a href="javascript:void(0)" className="addnotebook" onClick={this.openForm}>+</a>
        <p>Some information about the side</p>

      </div>
    )
  }
}
