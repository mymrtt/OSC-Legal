// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// Components
import FisicalPersonForm from '../screens/login/createFisicalPerson/FisicalPersonForm';
import NoMatch from '../NoMatch';
import Login from '../screens/login/login/login';
import ResetPassword from '../screens/login/login/resetPassword';
import ErroPassword from '../screens/login/login/erroPassword';
// import PrivateRoute from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component = {Login} />
			<Route path='/createfisicalperson' component = {FisicalPersonForm} />
			<Route component={NoMatch} />
			{/* <Route exact path='/resetPassword' component={ResetPassword} /> */}
			{/* <Route exact path='/erroPassword' component={ErroPassword} /> */}
			{/* <PrivateRoute component = {Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
