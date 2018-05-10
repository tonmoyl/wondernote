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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push(`/note`);
  }

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
    if (this.props.formType === 'login'){
      return (
        <div className="session-footer-login">
          Don't have an account? Please
          <Link to="/signup"> Sign up!</Link>
        </div>
      )
    } else {
      return (
        <div className="session-footer-signup">
          Already have an account? Please
          <Link to="/login"> Sign in!</Link>
        </div>
      )
    }
  }

  render() {
    const footer = this.renderFooter();

    return (
      <div className='login-form-container'>
        <div className="logo"></div>
        <br/>
        <h1 className="session-title">{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <br/>
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
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
            <input className="session-submit" type="submit" value={this.props.formType} />
            <h5 className="errors">
              {this.renderErrors()}
            </h5>
          </div>
        </form>
        <footer className="session-footer">
          {footer}
        </footer>
      </div>
    )
  }
}













//
