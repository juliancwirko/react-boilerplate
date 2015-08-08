import React from 'react';
import Router from 'react-router';
import routes from './routes';
import css from './styles/main.styl';

Router.run(routes, (Root, state) => {
    React.render(<Root {...state} />, document.getElementById('app'));
});