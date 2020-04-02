const ADD_NEW_USER = 'osc/register/ADD_NEW_USER';
const ADD_NEW_PASSWORD = 'osc/register/ADD_NEW_PASSWORD';
const EMAIL_RESET_PASSWORD = 'osc/resetpassword/EMAIL_RESET_PASSWORD';

const initialState = {
	users: {},
	emailReset: '',
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
	case EMAIL_RESET_PASSWORD:
		return {
			...state,
			emailReset: action.email,
		};
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

export const emailReset = email => ({
	type: EMAIL_RESET_PASSWORD,
	email,
});
