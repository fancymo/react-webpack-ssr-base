import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import App from '../shared/app';
import configureStore from '../shared/store';
import fetchIntercept from '../shared/static/util/fetch-intercept.js';

const store = configureStore(window.__initialState__);
window.fetch = fetchIntercept(fetch, store);

render((
  <Provider store={store}>
    <Router>
      <App gists={window.initialState} />
    </Router>
  </Provider>
), document.getElementById('app'));
