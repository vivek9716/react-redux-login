import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput (data) {
	let errors = {};
	
	if (Validator.isEmpty(data.username)) {
		errors.username = 'This field is required!';
	}
	
	if (Validator.isEmpty(data.dob)) {
		errors.dob = 'This field is required!';
	}
	
	if (Validator.isEmpty(data.gender)) {
		errors.gender = 'This field is required!';
	}
	
	if (Validator.isEmpty(data.name)) {
		errors.name = 'This field is required!';
	}
	
	if (Validator.isEmpty(data.password)) {
		errors.password = 'This field is required!';
	}
	
	if (Validator.isEmpty(data.confirmpassword)) {
		errors.confirmpassword = 'This field is required!';
	}
	
	if (Validator.isEmpty(data.email)) {
		errors.email = 'This field is required!';
	}
	
	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is not valid';
	}

	if (!Validator.equals(data.password, data.confirmpassword)) {
		errors.confirmpassword = 'Password not matched';
	}	
	
	
	return {
		errors,
		isValid : isEmpty(errors)
	}
}