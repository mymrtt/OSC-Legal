import axios from 'axios';

export const API_URL = 'http://localhost:3333';

// Onboarding
export const createUserAccount = (user, base64credentials) => axios({
	url: `${API_URL}/users`,
	method: 'post',
	headers: {
		Authorization: `Basic ${base64credentials}`,
	},
	data: user,
});

export const login = (user, base64credentials) => axios({
	url: `${API_URL}/auth/authenticate`,
	method: 'post',
	headers: {
		Authorization: `Basic ${base64credentials}`,
	},
	data: user,
});

export const findUser = (id, token) => axios({
	url: `${API_URL}/users/${id}`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const resetPassword = email => axios({
	url: `${API_URL}/auth/recovery`,
	method: 'post',
	headers: {
		'x-osclegal-email': email,
	},
});
// Onboarding

// Organization
export const createOrganization = (org, token) => axios({
	url: `${API_URL}/organizations`,
	method: 'post',
	headers: {
		Authorization: `Bearer ${token}`,
	},
	data: org,
});

export const removeOrg = (org, token) => axios({
	url: `${API_URL}/organizations`,
	method: 'patch',
	headers: {
		Authorization: `Bearer ${token}`,
	},
	data: org,
});

export const getAllOrganizations = (userId, token) => axios({
	url: `${API_URL}/users/${userId}/organizations`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const patchOrg = (org, token) => axios({
	url: `${API_URL}/organizations`,
	method: 'patch',
	headers: {
		Authorization: `Bearer ${token}`,
	},
	data: org,
});

// Organization

// Document
export const createDocument = (doc, token) => axios({
	url: `${API_URL}/documents`,
	method: 'post',
	headers: {
		Authorization: `Bearer ${token}`,
	},
	data: doc,
});

// Document

// Template (Document - Admin)
export const createTemplate = (templateData, token) => axios({
	url: `${API_URL}/templates`,
	method: 'post',
	headers: {
		Authorization: `Bearer ${token}`,
	},
	data: templateData,
});

export const getAllTemplates = token => axios({
	url: `${API_URL}/templates`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const deleteTemplate = (templateId, token) => axios({
	url: `${API_URL}/templates/${templateId}`,
	method: 'delete',
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

// Template (Document - Admin)
