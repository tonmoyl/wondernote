import React from 'react';
import LandingContainer from './landing/landing_container';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NoteIndexContainer from './note/note_index_container';
import SidebarContainer from './sidebar/sidebar_container';
import NewNoteContainer from './note/new_note_container';
import EditNoteContainer from './note/edit_note_container';
import NotebookContainer from './sidebar/notebook_container';
import NotebookFormContainer from './notebook/notebook_form_container';
import NotebookShowContainer from './notebook/notebook_show';


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

      <ProtectedRoute exact path="/" component={SidebarContainer} />
      <ProtectedRoute exact path="/" component={NoteIndexContainer} />
      <ProtectedRoute exact path="/" component={NewNoteContainer} />
      <ProtectedRoute path="/main/:noteId" component={NotebookContainer} />

      <ProtectedRoute path="/main" component={SidebarContainer} />
      <ProtectedRoute path="/main" component={NotebookFormContainer} />
      <ProtectedRoute path="/main/:noteId/:notebookId" component={NotebookShowContainer} />
      <ProtectedRoute exact path="/main/:noteId" component={NoteIndexContainer} />

      <Switch>
        <ProtectedRoute path="/main/new" component={NewNoteContainer} />
        <ProtectedRoute path="/main/:noteId" component={EditNoteContainer} />
      </Switch>

    </div>
  );
};



export default App;

// <ProtectedRoute path="/main" component={SidebarContainer} />
// <ProtectedRoute path="/main" component={NoteIndexContainer} />
// <ProtectedRoute exact path="/main/:noteId" component={NewNoteContainer} />
