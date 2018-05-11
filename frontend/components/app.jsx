import React from 'react';
import LandingContainer from './landing/landing_container';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NoteIndexContainer from './note/note_index_container';
import SidebarContainer from './sidebar/sidebar_container';
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
      <Switch>
        <AuthRoute exact path="/" component={LandingContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>

      <ProtectedRoute path="/" component={SidebarContainer} />
      <ProtectedRoute path="/" component={NoteIndexContainer} />
      <ProtectedRoute path="/" component={NewNoteContainer} />
      <ProtectedRoute path="/" component={NoteIndexContainer} />

    </div>
  );
};



export default App;
