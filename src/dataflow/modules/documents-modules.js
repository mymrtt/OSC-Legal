/* eslint-disable no-plusplus */
// Action Types
const ADD_NEW_DOCUMENT = 'osc/documents/ADD_NEW_DOCUMENTS';
const DELETE_DOCUMENT = 'osc/documents/DELETE_DOCUMENT';

// Initial State
const initialState = {
	documentsList: [
		{
			id: 1,
			title: 'Modelo 1',
			description: 'fsankdsgfhdasbhklfsdfhjl',
		},
		{
			id: 2,
			title: 'Modelo 2',
			description: 'fsankdsgfhdasbhklfsdfhjl',
		},
		{
			id: 3,
			title: 'Modelo 3',
			description: 'fsankdsgfhdasbhklfsdfhjl',
		},
		{
			id: 4,
			title: 'Modelo 4',
			description: 'fsankdsgfhdasbhklfsdfhjl',
		},
		{
			id: 5,
			title: 'Modelo 5',
			description: 'fsankdsgfhdasbhklfsdfhjl',
		},
		{
			id: 6,
			title: 'Modelo 6',
			description: 'fsankdsgfhdasbhklfsdfhjl',
		},
	],
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
	default: return state;
	}
}

let nextDocId = 1;
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
