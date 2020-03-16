// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// Components
import FisicalPersonForm from '../screens/login/createFisicalPerson/FisicalPersonForm';
import Login from '../screens/login/Login';
import NoMatch from '../NoMatch';
// import PrivateRoute from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component = {Login} />
			<Route path='/createfisicalperson' component = {FisicalPersonForm} />
			<Route component={NoMatch} />
			{/* <PrivateRoute component = {Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
