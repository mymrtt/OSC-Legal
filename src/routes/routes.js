// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components

// onboarding
import Login from '../screens/onboarding/Login/LoginScreen';
import LoginResetPasswordScreen from '../screens/onboarding/Login/LoginResetPasswordScreen';
import ResetPasswordCode from '../screens/onboarding/Login/ResetPasswordCode';
import NewPassowrdScreen from '../screens/onboarding/Login/NewPasswordScreen';
import ResetPasswordEmailScreen from '../screens/onboarding/Login/ResetPasswordScreen';

import CreateUserScreen from '../screens/onboarding/User/CreateUserScreen';
import Organization from '../screens/dashboard/Organization/OrganizationScreen';

// dashboard
import Dashboard from '../screens/dashboard/index';

import PrivateRoute from './PrivateRoute';
import NoMatch from '../NoMatch';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/login' component={Login} />
			<Route path='/loginreset' component={LoginResetPasswordScreen} />
			<Route path='/resetcode' component={ResetPasswordCode} />
			<Route path='/resetpassword' component={ResetPasswordEmailScreen} />
			<Route path='/newpassword' component={NewPassowrdScreen} />
			<Route path='/createuser' component={CreateUserScreen} />
			<Route path='/organization' component={Organization} />

			<Route component={NoMatch} />
			<PrivateRoute component={Dashboard} />
		</Switch>
	</BrowserRouter>
);

export default Routes;