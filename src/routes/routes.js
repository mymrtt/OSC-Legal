// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components

// onboarding
import Login from '../screens/onboarding/Login/LoginScreen';
import CreateUserScreen from '../screens/onboarding/User/CreateUserScreen';
import ErrorPassword from '../screens/onboarding/Login/ErrorPassword';
import ResetPasswordCodeScreen from '../screens/onboarding/Login/ReserPasswordCodeScreen';
import ResetPasswordEmailScreen from '../screens/onboarding/Login/ResetPasswordEmailScreen';
// import Organization from '../screens/dashboard/Organization/OrganizationScreen';

// dashboard
import Dashboard from '../screens/dashboard/index';

import PrivateRoute from './PrivateRoute';
// import NoMatch from '../NoMatch';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/login' component={Login} />
			<Route path='/errorPassword' component={ErrorPassword} />
			<Route path='/resetPasswordEmailScreen' component={ResetPasswordEmailScreen} />
			<Route path='/ResetPasswordCodeScreen' component={ResetPasswordCodeScreen} />
			<Route path='/createuser' component={CreateUserScreen} />
			{/* <Route path='/organization' component={Organization} /> */}

			{/* <Route component={NoMatch} /> */}
			<PrivateRoute component={Dashboard} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
