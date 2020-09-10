import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import NotFound from '../pages/404';
import List from '../pages/List';
import Profile from '../pages/Profile';
import Reset from '../pages/Reset';

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Home} />
      <MyRoute exact path="/profile" component={Profile} />
      <MyRoute exact path="/" component={List} isClosed />
      <MyRoute exact path="/user/:id" component={Profile} isClosed />
      <MyRoute exact path="/resettwo/:token" component={Reset} />
      <MyRoute path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
