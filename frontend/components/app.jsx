import React from 'react';
import LandingContainer from './landing/landing_container';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NoteIndexContainer from './note/note_index_container';
import Sidebar from './sidebar/sidebar'
import Note from './note/note';
import NewNoteContainer from './note/new_note_container';


import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={LandingContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={Sidebar} />
      <ProtectedRoute exact path="/note/new" component={NewNoteContainer} />
      <ProtectedRoute exact path="/notes" component={NoteIndexContainer} />

    </div>
  );
};

export default App;
