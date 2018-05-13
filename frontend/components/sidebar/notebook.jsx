import React from 'react';

export default class Notebook extends React.Component{
  constructor(props){
    super(props)
  }

  closeNav() {
    document.getElementById("notebook-side").style.width = "0px";
  }

  render(){
    return(
      <div id="notebook-side" className="notebook-side sidenav">

        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
        <p>Some information about the side</p>

      </div>
    )
  }
}
