import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//test
import { login, signup, logout } from './actions/session_actions';
window.login = login;
window.signup = signup;
window.logout = logout;
//test

//test
import { createNote } from './util/note_api_util';
window.createNote = createNote;
//test

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test

  ReactDOM.render(<Root store={store} />, root);
});
