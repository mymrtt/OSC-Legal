// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components


import Login from '../screens/onboarding/Login/LoginScreen';
import CreateUserScreen from '../screens/onboarding/User/CreateUserScreen';
import CreateLegalPerson from '../screens/onboarding/CreateLegalPerson/LegalPersonScreen';
import NoMatch from '../NoMatch';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/createuser' component={CreateUserScreen} />
      <Route path='/createlegalperson' component={CreateLegalPerson} />
      <Route component={NoMatch} />
      {/* <PrivateRoute component = {Dashboard} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
