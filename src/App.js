import React from 'react';
import { Provider } from "react-redux";
// import FisicalPerson from "./screens/login/createFisicalPerson";
import store from './store';
import LegalPerson from './screens/login/createLegalPerson/LegalPerson';

function App() {
	return (
		<Provider store={store}>
			<div>
				{/* <FisicalPerson /> */}
				<LegalPerson />
			</div>
		</Provider>
	);
}

export default App;
