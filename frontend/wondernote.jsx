import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//test
import { login, signup, logout } from './util/session_api_util';
window.login = login;
window.signup = signup;
window.logout = logout;
//test

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test

  ReactDOM.render(<Root store={store} />, root);
});
