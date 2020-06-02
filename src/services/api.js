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

export const removeOrg = (orgID, token) => axios({
	url: `${API_URL}/organizations/${orgID}`,
	method: 'patch',
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const getAllOrganizations = (token, userId) => axios({
	url: `${API_URL}/organizations/${userId}`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${token}`,
	},
)};
// Organization

// Document
export const createDocument = doc => axios({
	url: `${API_URL}/documents`,
	method: 'post',
	data: doc,
});
// Document

// Template (Document - Admin)
export const createTemplate = (title, description, isFile) => axios({
	url: `${API_URL}/templates`,
	method: 'post',
	data: { title, description, isFile },
});
// Template (Document - Admin)
