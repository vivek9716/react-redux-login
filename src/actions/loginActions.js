import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from '../types';

export function setCurrentUser (user) {
	console.log(user);
	return {
		type: SET_CURRENT_USER,
		user: JSON.parse(user)
	};
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('jwtToken');
		localStorage.removeItem('user_data');
		setAuthorizationToken(false);
		dispatch(setCurrentUser('{}'))
	}
}

export function userLoginRequest(userData) {
	return dispatch => {
		return axios.post('http://localhost:3001/api/login', userData).then(res => {
			const token = res.data.token;			
			localStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			dispatch(setCurrentUser(jwt.decode(token)));
			return res;
		});
	}
}

export function userEmailCheck(userData) {	
	const dataToSend = {
		email: userData.email,
		action: 'is_email_exist'
	}	
	const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };		
	return dispatch => {		
		return axios.post('http://localhost/gaana-api/user.php', dataToSend, config).then(res => {
			return res;
		});
	}
}

export function userLoginCheck(userData) {	
	const dataToSend = {
		email: userData.email,
		password: userData.password,
		action: 'user_login_check'
	}	
	const config = {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }};		
	return dispatch => {		
		return axios.post('http://localhost/gaana-api/user.php', dataToSend, config).then(res => {			
			if (res.data.response_code === 200) {
				const apiResponse = res.data.api_response;				
				const token = res.data.api_response.tokenInfo.token;
				delete apiResponse.tokenInfo;				
				localStorage.setItem('jwtToken', token);
				localStorage.setItem('user_data', JSON.stringify(apiResponse));
				setAuthorizationToken(token);
				dispatch(setCurrentUser(JSON.stringify(res.data.api_response)));
			}
			return res;
		});
	}
}