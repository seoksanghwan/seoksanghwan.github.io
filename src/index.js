import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import App from './container/App';
import logger from 'redux-logger';
import reducer from './reducer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab} from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faCheck, faSignInAlt, faUser, faChartLine, faSignOutAlt, faClone, faWallet } from '@fortawesome/free-solid-svg-icons';
import './common.scss'

library.add(fab ,faCheckSquare, faCoffee, faCheck, faSignInAlt, faUser, faChartLine, faSignOutAlt, faClone, faWallet);

const root = document.getElementById('root');
const history = createHistory();
const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Route render={props =>
        <App
          {...props}
          history={history}
        />
      } />
    </ConnectedRouter>
  </Provider>,
  root
);