// Action Types
const UPDATE_TABLEDATAS = 'osc/organization/UPDATE_TABLEDATAS';
const ADD_NEW_ORG = 'osc/organization/ADD_NEW_ORG';
const DELETE_ORG = 'osc/organization/DELETE_ORG';
const EDIT_ORG = 'osc/organization/EDIT_ORG';

// Initial State
const initialState = {
	tableDatas: [],
	org: {
		tradingName: '',
		companyName: '',
		telephone: '',
		address: '',
		addressComplement: '',
		neighborhood: '',
		city: '',
		cep: '',
		cnpj: '',
	},
};

// Reducers
export default function (state = initialState, action) {
	switch (action.type) {
	case UPDATE_TABLEDATAS:
		return Object.assign({}, state, {
			tableDatas: action.info,
		});
	case ADD_NEW_ORG:
		return Object.assign({}, state, {
			...state,
			tableDatas: state.tableDatas.concat(action.info),
		});
	case DELETE_ORG:
		return {
			...state,
			tableDatas: state.tableDatas.filter(org => org !== action.info),
		};
	case EDIT_ORG: {
		// const remainningOrgs = state.tableDatas.filter(
		// 	item => item.id !== action.info.id,
		// );

		return {
			...state,
			tableDatas: action.info,
		};
	}
	default:
		return state;
	}
}

// Action Creators
export const updateTableDatas = info => ({
	type: UPDATE_TABLEDATAS,
	info,
});

export const addNewOrg = info => ({
	type: ADD_NEW_ORG,
	info,
});

export const deleteOrg = info => ({
	type: DELETE_ORG,
	info,
});

export const editOrg = info => ({
	type: EDIT_ORG,
	info,
});
