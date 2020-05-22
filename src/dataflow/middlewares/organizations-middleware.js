import axios from 'axios';

export const API_URL = 'http://localhost:3333';

export const createOrganizationMiddleware = org => axios({
	url: `${API_URL}/organizations`,
	method: 'post',
	data: org,
});
