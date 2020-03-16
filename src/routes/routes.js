// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';

// Components
import FisicalPersonForm from '../screens/login/createFisicalPerson/FisicalPersonForm';
import NoMatch from '../NoMatch';
import Login from '../screens/login/login/login'
import ResetPassword from '../screens/login/login/resetPassword'
import ErroPassword from '../screens/login/login/erroPassword'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			{/* <Route exact path='/' component={ResetPassword} /> */}
			{/* <Route exact path='/' component={ErroPassword} /> */}

			<Route path='/createfisicalperson' component={FisicalPersonForm} />
			{/* <PrivateRoute component = {Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
