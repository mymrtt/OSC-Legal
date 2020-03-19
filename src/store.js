// Libs
import {
	compose, createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import SignUp from './dataflow/modules/sign-up-modules';

const reducers = combineReducers({
	signup: SignUp,
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
