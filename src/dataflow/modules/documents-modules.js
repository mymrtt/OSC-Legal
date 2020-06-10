/* eslint-disable no-plusplus */
// Action Types
const ADD_NEW_DOCUMENT = 'osc/documents/ADD_NEW_DOCUMENTS';
const DELETE_DOCUMENT = 'osc/documents/DELETE_DOCUMENT';
const DELETE_TEMPLATE = 'osc/documents/DELETE_TEMPLATE';

// Initial State
let nextDocId = 0;
const initialState = {
	documentsList: [],
};

// Reducers
export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_NEW_DOCUMENT:
		return Object.assign({}, state, {
			documentsList: [
				...state.documentsList,
				{
					...action.info,
					id: action.id,
				},
			],
		});
	case DELETE_DOCUMENT:
		return Object.assign({}, state, {
			...state,
			documentsList: state.documentsList.filter(item => item.id !== action.info),
		});
	case DELETE_TEMPLATE:
		return Object.assign({}, state, {
			...state,
			documentsList: state.documentsList.filter(item => item.id !== action.info),
		});
	default: return state;
	}
}


// Action Creators
export const addNewDocument = info => ({
	type: ADD_NEW_DOCUMENT,
	id: nextDocId++,
	info,
});

export const deleteDocument = info => ({
	type: DELETE_DOCUMENT,
	info,
});

export const deleteTemplate = info => ({
	type: DELETE_TEMPLATE,
	info,
});
