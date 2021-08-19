/* eslint-disable max-len */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import RepoDetail from './RepoDetail';

export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/detail/:repoName" component={RepoDetail}/>
    </Switch>
  );
}
