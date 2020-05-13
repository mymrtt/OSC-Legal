import axios from 'axios';

export const API_URL = 'http://localhost:3333';

export const createAccountMiddleware = (token, user) => axios({
	url: `${API_URL}/users`,
	method: 'post',
	headers: {
		Authorization: `Bearer ${token}`,
	},
	data: user,
});

export const loginMiddleware = user => axios({
	url: `${API_URL}/auth/authenticate`,
	method: 'post',
	headers: {
		Authorization: `Basic ${user}`,
	},
	data: user,
});
