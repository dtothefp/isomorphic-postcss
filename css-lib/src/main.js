import React from 'react';
import ReactDOM from 'react-dom';

import loadFonts from 'utils/loadfonts';
import 'assets/css/base.css';

import App from './components/App/App';
import AppContainer from './components/AppContainer/AppContainer';

loadFonts();

if (document.querySelector('[data-app]')) {
  ReactDOM.render(
    <App />,
    document.querySelector('[data-app]'),
  );
}

if (document.querySelector('[data-app-container]')) {
  ReactDOM.render(
    <AppContainer />,
    document.querySelector('[data-app-container]'),
  );
}
