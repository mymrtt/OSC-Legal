// Action Types
const ADD_NEW_DOCUMENT = 'osc/documents/ADD_NEW_DOCUMENTS';
const DELETE_DOCUMENT = 'osc/documents/DELETE_DOCUMENT';

// Initial State
const initialState = {
	documentsList: [
		{
			id: 1,
			title: 'Modelo Estatuto Associação',
			description: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc.',
			file: '',
		},
		{
			id: 2,
			title: 'Modelo Estatuto para Grupo de capoeira',
			description: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc. 3 Modelo Estatuto Fundação Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público. 4 Modelo Estatuto Associação Organização da Sociedade Civil de Interesse Público (OSCIP). documentação básica de associação, cumprindo as exigências da Lei nº 9.790/1999 para qualificação como OSCIP. 5 Modelo Ata Assembleia de Constituição Associação Modelo de ata de Assembleia específica para constituição de Associação, com a aprovação do estatuto e eleição dos cargos diretivos. 6 Modelo Ata Assembleia Geral Associação Modelo de ata de Assembleia Geral de Associação, que poderá ser adaptado e utilizado em diversos contextos, para qualquer pauta. 7 Modelo Registro Público Constituição Fundação Modelo de Escritura Pública de Registro de constituição de Fundação. Atentar para as exigências e rotinas dos cartórios competentes.',
			file: '',
		},
		{
			id: 3,
			title: 'Modelo Estatuto Fundação',
			description: 'Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público.',
			file: '',
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

// Action Creators
export const addNewDocument = info => ({
	type: ADD_NEW_DOCUMENT,
	info,
});
export const deleteDocument = info => ({
	type: DELETE_DOCUMENT,
	info,
});
