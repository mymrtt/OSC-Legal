import axios from 'axios';

export const API_URL = 'http://localhost:3333';

export const createUser = user => axios({
	url: `${API_URL}/createfp`,
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
	},
	data: user,
});
