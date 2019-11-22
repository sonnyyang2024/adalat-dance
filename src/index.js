import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import { Provider } from 'react-redux';
import store from './store';

import * as serviceWorker from './serviceWorker';

import App from './App';

import './scheme/config.scss';
import './scheme/scheme.scss';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);

serviceWorker.unregister();

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  const HEADER_OFFSET = $('#header').height();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - HEADER_OFFSET
  }, 800);
});
