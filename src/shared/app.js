import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Overview, NoMatch, Error } from './module';

import fetchIntercept from './static/util/fetch-intercept.js';

import './index.less';

export default (props) => {
  return (
    <div className="y_app">
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/error" component={Error} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
