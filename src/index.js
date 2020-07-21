import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import detectReducer from './store/reducers/detectReducer'
import playerReducer from './store/reducers/playerReducer'

import ScrollRestore from './utility/scrollRestore'

const history = createBrowserHistory();

const rootReducer = combineReducers({
  detect: detectReducer,
  player: playerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const logger = (store) => {
//   return next => {
//     return action => {
//       console.log('[Middleware] action', action)
//       const nextResult = next(action)
//       console.log('[Middleware] next state', store.getState())
//       return nextResult
//     }
//   }
// }

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const RouterApp = (
  <Provider store={store}>
    <Router history={history}>
      <ScrollRestore />
      <App history={history}/>
    </Router>
  </Provider>
)

ReactDOM.render(RouterApp, document.getElementById('root'));

serviceWorker.register();
