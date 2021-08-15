import {
    activateUrl,
    baseUrl,
    loginUrl,
    signupUrl,
} from './paths';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../components/NotFoundPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from '../components/PrivateRoute';
import { SignupPage } from '../pages/SignupPage';
import {ActivatePage} from "../pages/ActivatePage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={loginUrl} component={LoginPage} />
      <Route exact path={signupUrl} component={SignupPage} />
      <Route path={activateUrl} component={ActivatePage} />
      <PrivateRoute exact path={baseUrl} component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
