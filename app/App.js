import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import routes from './routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';
let history = createBrowserHistory();

ReactDOM.render(<Router routes={routes} history={history} />, document.getElementById('app'));
