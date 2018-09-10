import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  };

  demoLogin(e) {
    e.preventDefault();
    this.props.processForm({username: 'Demo', password: 'starwars'})
    // this.props.history.push(`/main`);
  };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  renderFooter() {
    if (this.props.formType === 'Log In'){
      return (
        <div className="session-footer-session">
          Don't have an account?
          <br />
          <Link to="/signup" className="session-link">Create Account</Link>
        </div>
      )
    } else {
      return (
        <div className="session-footer-signup">
          Already have an account? Please
          <Link to="/login" className="link"> Sign in!</Link>
        </div>
      )
    }
  }

  render() {
    const footer = this.renderFooter();

    return (
      <div className='session-form-container'>
        <div className="logo"></div>
        <br/>
        <h1 className="session-title">{this.props.formType}</h1>

        <form onSubmit={this.handleSubmit} className="session-form-box">
          <div className="session-form">
            <br/>
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
                placeholder="Email address or username"
              />
            </label>
            <br/>
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="password-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <input className="session-submit submit-btn" type="submit" value={this.props.formType} />
            <h5 className="errors">
              {this.renderErrors()}
            </h5>
            <button className="demo submit-btn" onClick={this.demoLogin}>Demo Login</button>
          </div>
        </form>
        <footer className="session-footer">
          {footer}
        </footer>
      </div>
    )
  }
}
