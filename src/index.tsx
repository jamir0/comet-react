import * as React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {default as reducers} from './reducers';
import Routes from './routes';

/*tslint-disable*/
const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
            {
              // Specify here name, actionsBlacklist, actionsCreators and other options
            }
          ) : compose;

/*tslint-enable*/
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

render(
  <Provider store={store} key="provider">
    <Router history={browserHistory} children={Routes}/>
  </Provider>,
  document.getElementById('container')
);
