import axios from 'axios';

export const API_URL = 'http://localhost:3333';

// Document
export const createDocumentMiddleware = doc => axios({
	url: `${API_URL}/documents`,
	method: 'post',
	data: doc,
});

// Template (Admin)
export const createTemplateMiddleware = template => axios({
	url: `${API_URL}/templates`,
	method: 'post',
	data: template,
});
