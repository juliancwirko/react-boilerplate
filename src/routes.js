import React from 'react';
import { Route } from 'react-router-dom';
import Main from './layouts/Main';
import HomeContainer from './containers/Home';
import SubpageContainer from './containers/Subpage';
import { routesPaths } from './settings';

export default (
  <Main>
    <Route exact path={routesPaths.home} component={HomeContainer} />
    <Route exact path={routesPaths.subpage} component={SubpageContainer} />
  </Main>
);
