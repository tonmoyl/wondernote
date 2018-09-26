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

  // transitionWhite(){
  //   document.getElementById("fade").style.opacity = "1";
  //   setTimeout( ()=>{
  //     document.getElementById("fade").style.opacity = "0";
  //   }, 250)
  // }


  changeForm() {
    if (this.state.display === "login"){
      // document.getElementById("fade").style.zIndex = "2";
      // document.getElementById("movable").classList.remove('left');
      this.setState({display: "signup"});
      document.getElementById("movable").classList.add('right');
      document.getElementById("login-form").style.left = "-400%";
      document.getElementById("signup-form").style.left = "0px";
      // this.transitionWhite();
      // setTimeout( ()=>{
      //   this.setState({display: "signup"});
      // }, 250)
      // setTimeout( ()=>{
      //   document.getElementById("fade").style.zIndex = "-1";
      // }, 500)
    } else {
      this.setState({display: "login"});
      console.log('hey');
      document.getElementById("movable").classList.remove('right');
      document.getElementById("signup-form").style.left = "400%";
      document.getElementById("login-form").style.left = "0px";
      // document.getElementById("movable").classList.add('left');

    }
  }

  render() {


    return(
      <div className="landing">
        <div id="movable" className="movable left">

          <div className="login-form" id="login-form">
            <LoginFormContainer />
              Don't have an account?
              <button className="change-form btn" onClick={this.changeForm}>
                Sign Up
              </button>
          </div>
          <div className="signup-form" id="signup-form">
            <SignupFormContainer />
              Already have an account?
              <button className="change-form btn" onClick={this.changeForm}>
                Log in
              </button>
          </div>
        </div >
      </div>
    )
  }
}
