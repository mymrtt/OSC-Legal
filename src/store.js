// Libs
import {
	compose, createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import Onboarding from './dataflow/modules/onboarding-modules';
import Documents from './dataflow/modules/documents-modules';
import Organization from './dataflow/modules/organization-modules';

const reducers = combineReducers({
	onboarding: Onboarding,
	documents: Documents,
	organization: Organization,
});

export default function configureStore(initialState) {
	const bundle = compose(applyMiddleware(thunkMiddleware));
	const createStoreWithMiddleware = bundle(createStore);
	const store = createStoreWithMiddleware(
		reducers,
		initialState,
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	);

	return store;
}
