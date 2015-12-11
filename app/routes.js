import React from 'react';
import Main from './components/main/Main';
import Home from './components/homeView/Home';
import View from './components/view/View';
import {Route, IndexRoute} from 'react-router';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="route-1/:username" component={View} />
    </Route>
);
