import express from 'express';
import React from 'react';
import { StaticRouter as Router, matchPath } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import sourceMapSupport from 'source-map-support';
import fetch from 'node-fetch';

import fetchIntercept from '../shared/static/util/fetch-intercept.js';

import App from '../shared/app';
import NoMatch from '../shared/module/nomatch';
import Error from '../shared/module/error';

import render from './render';

import configureStore from '../shared/store.js';

const routes = [
  '/',
  '/overview',
];
sourceMapSupport.install();

const app = express();

app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  if (!match) {
    res.status(404).send(render(<NoMatch />));
    return;
  }
  const initialState = {};
  const store = configureStore(initialState);
  const nfetch = fetchIntercept(fetch, store);

  res.status(200).send(render(
  (
    <Provider store={store}>
      <Router location={req.url}>
        <App />
      </Router>
    </Provider>
  ), initialState));
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
