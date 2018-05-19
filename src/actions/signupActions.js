import axios from 'axios';




function sayHello () {
	return 'Hello';
}

export function userSignupRequest(userData) {
	return dispatch => {
		return axios.post('http://localhost:3001/api/singup', userData);
	}
}

export function getUserStatus() {	
	return dispatch => {
		return axios.get('http://localhost/gaana-api/user-status.php')
	}
}