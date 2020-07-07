import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ScrollRestore from './utility/scrollRestore'

const history = createBrowserHistory();

const RouterApp = (
  <Router history={history}>
    <ScrollRestore />
    <App history={history}/>
  </Router>
)

ReactDOM.render(RouterApp, document.getElementById('root'));

serviceWorker.register();
