// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Onboarding
import Login from '../screens/onboarding/Login/LoginScreen';
import ResetPasswordCode from '../screens/onboarding/Login/ResetPasswordCode';
import NewPassowrdScreen from '../screens/onboarding/Login/NewPasswordScreen';
import ResetPasswordEmailScreen from '../screens/onboarding/Login/ResetPasswordScreen';
import CreateUserScreen from '../screens/onboarding/User/CreateUserScreen';

// Dashboard
import Dashboard from '../screens/dashboard/index';
import DocumentsScreen from '../screens/dashboard/Documents/DocumentsScreen';
import OrganizationScreen from '../screens/dashboard/Organization/OrganizationScreen';
import ModalCreateOrganization from '../screens/dashboard/Organization/ModalCreateOrganization';
import ModalSucessfully from '../screens/dashboard/Organization/ModalSucessfully';
// import CreateOrganization from '../screens/dashboard/Organization/teste';
import ModalOrganization from '../screens/dashboard/Organization/ModalOrganization';
// import Header from '../screens/dashboard/components/Header';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/login' component={Login} />
			{/* <Route exact path='/OSC-Legal' component={Login} /> */}
			<Route path='/resetcode' component={ResetPasswordCode} />
			<Route path='/resetpassword' component={ResetPasswordEmailScreen} />
			<Route path='/newpassword' component={NewPassowrdScreen} />
			<Route path='/createuser' component={CreateUserScreen} />

			<PrivateRoute path='/dashboard' component={Dashboard} />
			{/* <Route path='/documentsScreen' component={DocumentsScreen} /> */}
			<Route path='/organizationScreen' component={OrganizationScreen} />
			{/* <Route path='/modalCreateOrganization' component={ModalCreateOrganization} /> */}
			{/* <Route path='/' component={ModalOrganization} /> */}
			{/* <Route path='/modalSucessfully' component={ModalSucessfully} /> */}
			{/* <Route path='/createOrganization' component={CreateOrganization} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
