import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import NotFound from '../pages/404';

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
