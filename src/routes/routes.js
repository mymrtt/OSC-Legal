// Libs
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import PrivateRoute from './PrivateRoute';

// Components
import CreateFisicalPersonScreen from "../screens/login/createFisicalPerson/CreateFisicalPersonScreen";
import NoMatch from "../NoMatch";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={NoMatch} />
      <Route
        path="/createfisicalperson"
        component={CreateFisicalPersonScreen}
      />
      {/* <PrivateRoute component = {Dashboard} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
