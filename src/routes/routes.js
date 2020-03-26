// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components

// Onboarding
import Login from '../screens/onboarding/Login/LoginScreen';
import LoginResetPasswordScreen from '../screens/onboarding/Login/LoginResetPasswordScreen';
import ResetPasswordCode from '../screens/onboarding/Login/ResetPasswordCode';
import NewPassowrdScreen from '../screens/onboarding/Login/NewPasswordScreen';
import ResetPasswordEmailScreen from '../screens/onboarding/Login/ResetPasswordScreen';

import CreateUserScreen from '../screens/onboarding/User/CreateUserScreen';

// Dashboard
import Dashboard from '../screens/dashboard/index';
// import Organization from '../screens/dashboard/Organization/OrganizationScreen';
import PrivateRoute from './PrivateRoute';
// import NoMatch from '../NoMatch';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/login' component={Login} />
			<Route exact path='/OSC-Legal' component={Login} />
			<Route path='/loginreset' component={LoginResetPasswordScreen} />
			<Route path='/resetcode' component={ResetPasswordCode} />
			<Route path='/resetpassword' component={ResetPasswordEmailScreen} />
			<Route path='/newpassword' component={NewPassowrdScreen} />
			<Route path='/createuser' component={CreateUserScreen} />
			{/* <Route component={NoMatch} /> */}
			<PrivateRoute component={Dashboard} />
		</Switch>
	</BrowserRouter>
);

export default Routes;