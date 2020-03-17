// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import CreateFisicalPersonScreen from '../screens/login/createFisicalPerson/CreateFisicalPersonScreen';
import NoMatch from '../NoMatch';
import Login from '../screens/login/createAccount/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route
        path="/createfisicalperson"
        component={CreateFisicalPersonScreen}
      />
      <Route component={NoMatch} />
      {/* <PrivateRoute component = {Dashboard} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
