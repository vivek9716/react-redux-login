import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashmessages';
import validateInput from '../../utils/validation/signup';
import TextGroupField from '../../components/common/Form/TextGroupField';

class Register extends React.Component {
	
	constructor () {
		super();
		this.state = {
			email:'',
			password:'',
			confirmpassword:'',
			name:'',
			username:'',
			dob:'25-07-1989',
			gender:'Male',
			errors:{},
			isLoading:false
		}
		this.onChange = this.onChange.bind(this);
		this.onsubmit = this.onsubmit.bind(this);
		this.isValid = this.isValid.bind(this);
	}
	
	onChange (e) {
		this.setState({
			[e.target.name] : e.target.value
		});
	}
	
	isValid() {
		const { errors, isValid } = validateInput(this.state);
		if (!isValid) {
			this.setState({errors, isLoading:false});
		}
		return isValid;
	}
	
	onsubmit (e) {
		console.log(this.props);
		e.preventDefault();
		this.setState({errors:{}, isLoading:true});		
		if (this.isValid()) {
			this.props.userSignupRequest(this.state).then(			
				({ data }) => {
					if (data.status === 'success') {
						this.props.addFlashMessage({
							type:'success',
							text:'You signed up successfully.'
						});
						this.props.history.push('/');
					} else {
						this.setState({errors:data, isLoading:false}) 
					}
				}
			);
		}
	}
	
	
	render () {		
		const { errors } = this.state;
		return (
			<div className="model">
				<form className="modal-content" onSubmit = { this.onsubmit }>
					<div className="container">
					  <div>Sign Up</div>
					  <p>Please fill in this form to create an account.</p>
					  <hr/>
					  
					  <TextGroupField field = 'username' value = { this.state.username } label = 'User Name' placeholder = 'Enter User Name' error = { errors.username } onChange = { this.onChange } />
					  <TextGroupField field = 'name' value = { this.state.name } label = 'Name' placeholder = 'Enter Name' error = { errors.name } onChange = { this.onChange } />					  					  
					  <TextGroupField field = 'email' value = { this.state.email } label = 'Email' placeholder = 'Enter Email' error = { errors.name } onChange = { this.onChange } />					  					  
					  <TextGroupField type = 'password' field = 'password' value = { this.state.password } label = 'Password' placeholder = 'Enter Password' error = { errors.password } onChange = { this.onChange } />
					  <TextGroupField type = 'password' field = 'confirmpassword' value = { this.state.confirmpassword } label = 'Confirm Password' placeholder = 'Enter Confirm Password' error = { errors.confirmpassword } onChange = { this.onChange } />
					  <TextGroupField field = 'dob' value = { this.state.dob } label = 'DOB' placeholder = 'Enter DOB' error = { errors.dob } onChange = { this.onChange } />
					  <TextGroupField field = 'gender' value = { this.state.gender } label = 'Gender' placeholder = 'Enter Gender' error = { errors.gender } onChange = { this.onChange } />
					  
					  <div className="clearfix">						
						<button type="submit" disabled={this.state.isLoading} className="signupbtn">Sign Up</button>
					  </div>
					</div>
				  </form>
			</div>
		)
	}
}

Register.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired
}




export default connect((state) => { return {} }, { userSignupRequest, addFlashMessage })(Register);