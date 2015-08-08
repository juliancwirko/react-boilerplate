import React from 'react';
import Main from './components/Main';
import Home from './components/homeView/Home';
import View from './components/view/View';
import {Router, Route, DefaultRoute} from 'react-router';

export default (
    <Route name="app" path="/" handler={Main}>
        <Route name="route-1" path="route-1/:username" handler={View} />
        <DefaultRoute name="default" handler={Home} />
    </Route>
);
