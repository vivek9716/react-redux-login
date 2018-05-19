import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userLoginRequest } from '../../actions/loginActions';
import validateInput from '../../utils/validation/Login';
import TextGroupField from '../../components/common/Form/TextGroupField';

class Login extends React.Component {
	
	constructor () {
		super();
		this.state = {			
			password:'vivek@1989',					
			username:'chvivek',			
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
		e.preventDefault();
		this.setState({errors:{}, isLoading:true});		
		if (this.isValid()) {
			this.props.userLoginRequest(this.state).then(			
				({ data }) => {
					//console.log(data);
					//console.log('This is token ', data.token);
					if (data.success === true) {
						this.props.history.push('/profile');
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
					  <TextGroupField type = 'password' field = 'password' value = { this.state.password } label = 'Password' placeholder = 'Enter Password' error = { errors.password } onChange = { this.onChange } />
					  
					  <div className="clearfix">						
						<button type="submit" disabled={this.state.isLoading} className="signupbtn">Login</button>
					  </div>
					</div>
				  </form>
			</div>
		)
	}
}

Login.propTypes = {
	userLoginRequest: PropTypes.func.isRequired
}




export default connect((state) => { return {} }, { userLoginRequest })(Login);