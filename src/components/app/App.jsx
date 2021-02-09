/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MainContainer from '../containers/main/MainContainer';
import DetailContainer from '../containers/detail/DetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component = {MainContainer}
        />
        <Route
          path="/detail/:id"
          component = {DetailContainer}
        />
      </Switch>
    </Router>
  );
}
