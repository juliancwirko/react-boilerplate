import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { object } from 'prop-types';
import store from './store';
import routes from './routes';

const App = ({ history }) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

App.propTypes = {
  history: object.isRequired,
};

export default App;
