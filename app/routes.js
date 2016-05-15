import React from 'react';
import Main from './components/main/Main';
import Home from './components/home/Home';
import Subpage from './components/subpage/Subpage';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="route-1/:username" component={Subpage} />
  </Route>
);
