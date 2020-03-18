// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Login from '../screens/onboarding/Login/LoginScreen';
import CreateUserScreen from '../screens/onboarding/User/CreateUserScreen';
import ErrorPassword from '../screens/onboarding/Login/ErrorPassword';
import ResetPasswordScreen from '../screens/onboarding/Login/ResetPasswordScreen';
import Organization from '../screens/onboarding/Organization/OrganizationScreen';
import NoMatch from '../NoMatch';

const Routes = () => (

	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} /> 
			<Route exact path='/errorPassword' component={ErrorPassword} />
			<Route exact path='/resetPasswordScreen' component={ResetPasswordScreen} />
			<Route path='/createuser' component={CreateUserScreen} />
			<Route path='/organization' component={Organization} />
			<Route component={NoMatch} />
			{/* <PrivateRoute component = {Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
