import 'react-app-polyfill/ie9';
import 'core-js/es/array/find';
import 'core-js/es/array/includes';
import 'core-js/es/number/is-nan';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history'
import App from './container/App';
import logger from 'redux-logger';
import reducer from './reducer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './common.scss';

library.add(fas, far, fab);

const root = document.getElementById('root');
const history = createHistory();
const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      logger
    )
  )
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  root
);