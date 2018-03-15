import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducer from './modules/reducers';

export default function() {
  const isNode = typeof window === 'undefined';
  let history;

  if (!isNode) {
    history = createHistory({});
  }

  const middleware = [
    routerMiddleware(history),
    thunk
  ];
  const {NODE_ENV} = process.env;
  const isDev = NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  let composeEnhancers = compose;

  if (isDev) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  } else if (NODE_ENV === 'development' && !isNode) {
    middleware.push(createLogger({}));
  }

  const store = createStore(
    reducer,
    global.__STORE__ || {},
    composeEnhancers(applyMiddleware(...middleware))
  );


  if (module && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(`./modules/reducers`, () => {
      const nextRootReducer = require(`./modules/reducers`);

      store.replaceReducer(nextRootReducer.default);
    });
  }

  return {store, history};
}

