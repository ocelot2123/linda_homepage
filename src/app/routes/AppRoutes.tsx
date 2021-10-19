import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFoundPage } from '../components/NotFoundPage';
//import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { UnderConstructionPage } from '../pages/UnderConstructionPage';
import { ThankYouPage } from '../pages/ThankYouPage';
import { baseUrl, loginUrl, signupUrl, thankYouUrl } from './paths';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={loginUrl} component={LoginPage} />
      <Route exact path={signupUrl} component={SignupPage} />
      <Route exact path={baseUrl} component={UnderConstructionPage} />
      <Route exact path={thankYouUrl} component={ThankYouPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
