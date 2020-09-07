import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import NotFound from '../pages/404';
import List from '../pages/List';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/profile" component={Profile} />
      <MyRoute exact path="/list" component={List} isClosed />
      <MyRoute path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
