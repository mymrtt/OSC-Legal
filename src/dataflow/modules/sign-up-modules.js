const ADD_NEW_USER = 'osc/register/ADD_NEW_USER';

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
	default:
		return state;
	}
}
// ACTION TYPE
export const addNewUser = user => ({
	type: ADD_NEW_USER,
	user,
});
