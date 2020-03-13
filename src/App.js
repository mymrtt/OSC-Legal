import React from "react";
import FisicalPerson from "./screens/login/createFisicalPerson/FisicalPerson";
import { Provider } from "react-redux";
import store from './store';
import LegalPerson from './screens/login/createLegalPerson/LegalPerson';
import ModalSucessfully from './screens/login/createLegalPerson/ModalSucessfully';

function App() {
	return (
		<Provider store={store}>
			<div>
				<FisicalPerson />
				<LegalPerson />
				<ModalSucessfully/>
			</div>
		</Provider>
	);
}

export default App;
