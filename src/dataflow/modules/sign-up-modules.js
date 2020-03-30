const ADD_NEW_USER = 'osc/register/ADD_NEW_USER';
const ADD_NEW_PASSWORD = 'osc/register/ADD_NEW_PASSWORD';

const initialState = {
	users: {},
};

// REDUCER
export default function SignUpReducer(state = initialState, action) {
	switch (action.type) {
	case ADD_NEW_USER:
		return Object.assign({}, state, {
			users: {
				...state.users,
				...action.user,
			},
		});
	case ADD_NEW_PASSWORD:
		return Object.assign({}, state, {
			users: {
				...state.users,
				...action.newPassword,
			},
		});
	default:
		return state;
	}
}

// ACTION TYPE
export const addNewUser = user => ({
	type: ADD_NEW_USER,
	user,
});

export const addNewPassword = newPassword => ({
	type: ADD_NEW_PASSWORD,
	newPassword,
});
