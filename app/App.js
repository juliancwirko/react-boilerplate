var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var css = require('./styles/main.styl');

Router.run(routes, function (Root) {
    React.render(<Root />, document.getElementById('app'));
});