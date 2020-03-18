// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// Components
import Login from '../screens/onboarding/Login/LoginScreen';
import ErrorPassword from '../screens/onboarding/Login/ErrorPassword';
import ResetPasswordCodeScreen from '../screens/onboarding/Login/ReserPasswordCodeScreen';
import ResetPasswordEmailScreen from '../screens/onboarding/Login/ResetPasswordEmailScreen';
import CreateFisicalPerson from '../screens/onboarding/CreateFisicalPerson/CreateFisicalPersonScreen';
import CreateLegalPerson from '../screens/onboarding/CreateLegalPerson/LegalPersonScreen';
import NoMatch from '../NoMatch';
// import PrivateRoute from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
	  	{/* <Route exact path='/' component={ResetPasswordCodeScreen} /> */}
			<Route exact path='/' component={Login} />
			<Route exact path='/errorPassword' component={ErrorPassword} />
			<Route exact path='/resetPasswordEmailScreen' component={ResetPasswordEmailScreen} />
			<Route exact path='/' component={ResetPasswordCodeScreen} />
			<Route path='/createfisicalperson' component={CreateFisicalPerson} />
			<Route path='/createlegalperson' component={CreateLegalPerson} />
			<Route component={NoMatch} />
			{/* <PrivateRoute component = {Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
