// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// Components
import Login from '../screens/onboarding/Login/LoginScreen';
import ErrorPassword from '../screens/onboarding/Login/ErrorPassword';
import ResetPasswordScreen from '../screens/onboarding/Login/ResetPasswordScreen';
import CreateFisicalPerson from '../screens/onboarding/CreateFisicalPerson/CreateFisicalPersonScreen';
import CreateLegalPerson from '../screens/onboarding/CreateLegalPerson/LegalPersonScreen';
import NoMatch from '../NoMatch';
// import PrivateRoute from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} /> 
			<Route exact path='/errorPassword' component={ErrorPassword} />
			<Route exact path='/resetPasswordScreen' component={ResetPasswordScreen} />
			<Route path='/createfisicalperson' component={CreateFisicalPerson} />
			<Route path='/createlegalperson' component={CreateLegalPerson} />
			<Route component={NoMatch} />
			{/* <PrivateRoute component = {Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
