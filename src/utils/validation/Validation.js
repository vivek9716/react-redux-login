import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput (data) {
	let errors = {};
	
	if (Validator.isEmpty(data.email)) {
		errors.email = 'This field is required!';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is not valid';
	}
	
	if (data.isEmailCheckVerified) {
		if (Validator.isEmpty(data.password)) {
			errors.password = 'This field is required!';
		}
	}
	
	return {
		errors,
		isValid : isEmpty(errors)
	}
}