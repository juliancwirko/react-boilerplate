var React = require('react');
var Main = require('./components/Main');
var Home = require('./components/homeView/Home');
var View = require('./components/view/View');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="route-1" path="route-1/:username" handler={View} />
        <DefaultRoute  handler={Home} />
    </Route>
);
