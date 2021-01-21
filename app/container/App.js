import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Search from './Search';
import UserProfile from './UserProfile';


export default function App(props) {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path="/search" component={Search} />
        <Route exact={true} path="/:username" component={UserProfile} />
        <Redirect to="/search" />
      </Switch>
    </HashRouter>
  );
}