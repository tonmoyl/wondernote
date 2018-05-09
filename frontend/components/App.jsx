import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Sidebar from './sidebar/sidebar'
import Note from './note/note';
import NewNote from './note/new_note';


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
      <Route exact path="/" component={GreetingContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/" component={Sidebar} />
      <ProtectedRoute exact path="/note/new" component={NewNote} />

    </div>
  );
};

export default App;
