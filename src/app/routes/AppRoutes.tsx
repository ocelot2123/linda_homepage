import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={HomePage} />
    </Switch>
  );
};
