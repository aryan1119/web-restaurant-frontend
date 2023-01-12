import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
import { API_BASE_URL } from './index';

export const API_CONFIG = {
	baseUrl: `${process.env.REACT_APP_BASE_URL}`,
	path: {
		login: 'user/auth/login',
		forget: 'user/password/forgot',
		reset: 'user/password/reset',
		players: 'user/players',
		shortLists: 'user/shortlists',
		recruitingDashboard: 'user/recruitingdb',
		playerProfile: 'user/players/profile',
		dropdwon: 'user/dropdown',
		account: 'user/account'
	}
};

export const getUrl = (url: string, params: any = {}): string => {
	Object.keys(params).forEach((key) => (params[key] == null || params[key] === '') && delete params[key]);
	let urlString = `${API_BASE_URL}/${url}`;
	if (params && !isEmpty(params)) {
		urlString += `?${queryString.stringify(params)}`;
	}
	return urlString;
};
