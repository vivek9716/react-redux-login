import { SET_CURRENT_USER } from '../types';
import isEmpty from 'lodash/isEmpty';

export default (initialState = {
	isAuthenticated:false,
	user:{}
}, action = {}) => {	
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				isAuthenticated:!isEmpty(action.user),
				user: action.user
			};
		default: 		
		return initialState;
	}
	
};