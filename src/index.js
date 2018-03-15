import 'css-lib/lib/assets/css/base.css';
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux';
import App from './components/App'
import bs from './bootstrap';
import { init } from './modules/actions';
import 'css-lib/lib/assets/javascript/loadfonts'

const root = document.getElementById('root');
const {store, history} = bs();

store.dispatch(init());

hydrate(
  <Provider store={store}>
    <App />
  </Provider>
, root);
