import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


export default class Landing extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: "login"
    }
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm() {
    if (this.state.display === "login"){
      this.setState({display: "signup"});
      document.getElementById("movable").classList.remove('left');
      document.getElementById("movable").classList.add('right');
    } else {
      this.setState({display: "login"});
      document.getElementById("movable").classList.remove('right');
      document.getElementById("movable").classList.add('left');

    }
  }

  render() {
    let displayForm;
    if (this.state.display === "login"){
      displayForm = <LoginFormContainer />
    } else {
      displayForm = <SignupFormContainer />
    }

    return(
      <div className="landing">
        <div id="movable" className="movable left">
          {displayForm}
          <button onClick={this.changeForm}>Change</button>
        </div>
      </div>
    )
  }
}
