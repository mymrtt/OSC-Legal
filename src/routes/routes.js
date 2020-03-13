// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';

// Components
import FisicalPersonForm from '../screens/login/createFisicalPerson/FisicalPersonForm';
import NoMatch from '../NoMatch';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component = {NoMatch} />
			<Route path='/createfisicalperson' component = {FisicalPersonForm} />
			{/* <PrivateRoute component = {Dashboard} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
