import React from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="landing">
        <header className="header-landing">
          <div className="left">
            <img src="#" alt="" />
            <h1 className="title">WONDERNOTE</h1>
          </div>
          <div className='right'>
            <ul className='right-list'>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up!</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="landing-photo">
          <img src={window.staticAssets.landing} />
        </div>
      </div>
    )
  }
}
