import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../common/popup';
import TextGroupField from '../../components/common/Form/TextGroupField';
import validateInput from '../../utils/validation/Validation';
import { userEmailCheck, userLoginCheck } from '../../actions/loginActions';
import { withRouter } from 'react-router-dom';

class LoginNav extends React.Component {
	
	
	constructor () {
		super();		
		this.closeClicked = this.closeClicked.bind(this);
		this.loginPopupContent = this.loginPopupContent.bind(this);
		this.onChange = this.onChange.bind(this);
		this.isValid = this.isValid.bind(this);
		this.afterUserEmailCheck = this.afterUserEmailCheck.bind(this);
		this.userLoginHtml = this.userLoginHtml.bind(this);
		this.userRegisterHtml = this.userRegisterHtml.bind(this);
		this.signIn = this.signIn.bind(this);
		this.initialState = this.initialState.bind(this);
		
		this.state = this.initialState();
	}
	
	initialState () {
		return {
			isOptionChoosed: false,
			email:'nice.vivek25@gmail.com',
			password:'vivek@1989',
			errors:{},
			isEmailCheckVerified:false,
			verifiedEmailUserData:{},
			isUserRegister:false
		}
	}
	
	onChange (e) {		
		this.setState({
			[e.target.name] : e.target.value
		});
	}
	
	closeClicked (e) {		
		e.preventDefault();
		this.props.displayLoginPopUp();
	}
	
	emailClicked (e) {
		e.preventDefault();
		this.setState({isOptionChoosed: true});
	}
	
	backOptionClicked (e) {
		e.preventDefault();
		this.setState({isOptionChoosed: false});
	}
	
	checkEmail(e) {
		e.preventDefault();
		this.setState({isEmailCheckVerified:false, verifiedEmailUserData : {}, isUserRegister:false});
		if (this.isValid()) {
			this.props.userEmailCheck(this.state).then (
				({data}) => {
					if (data.response_code === 200) {
						this.setState({
							isEmailCheckVerified:true,
							verifiedEmailUserData:{ 
								email : data.api_response.email,
								username : data.api_response.username
							},
							isUserRegister:true
						});						
					} else {
						this.setState({
							isEmailCheckVerified:true
						});
					}
				}
			);
		}
	}
	
	signIn(e) {
		e.preventDefault();
		if (this.isValid()) {
			this.props.userLoginCheck(this.state).then(
				({ data }) => {
					if (data.response_code === 200) {
						this.setState(this.initialState());
						this.props.history.push('/profile');
						this.props.displayLoginPopUp();
					}
				}
			);
			//this.props.userLoginCheck(this.state);
		} else {
			console.log('Not Valid Password');
		}
	}
	
	isValid() {
		const { errors, isValid } = validateInput(this.state);
		if (!isValid) {
			this.setState({errors, isLoading:false});
		}
		return isValid;
	}
	
	isOptionChoosedData() {
		const { errors } = this.state;
		const optionHtml = (
			<div className="chooseloginoption">					 
				 <a href="javascript:void(0)" className="emailopt" onClick = { (e) => { this.emailClicked(e) } }>Email Address</a>
				 <a href="javascript:void(0)" className="mobileopt">Phone Number</a>
			 </div>
		)
		
		const optionChoosedHtml = (
			 <div className="inputmail">				
				<TextGroupField 
					field = "email" 
					value = { this.state.email } 
					label = '' 
					placeholder = "Enter Email"
					error = { errors.email }
					onChange = { this.onChange }
					className = "single_txt"					
					tabIndex = "1"
				/>				
				<svg width="13" height="10" viewBox="0 0 13 10" className="arw_btn" onClick = { (e) => this.checkEmail(e) } >
				   <path className="fill_path" fillRule="evenodd" d="M8 .249L6.823 1.426l2.741 2.741H.751v1.666h8.813L6.823 8.574 8 9.751 12.751 5z"></path>
				</svg>
				<a href="javascript:void(0)" className="bk_opt" onClick = { (e) => { this.backOptionClicked(e) } }>BACK</a> 
			 </div>
		)		
		return this.state.isOptionChoosed ? optionChoosedHtml : optionHtml;
	}
	
	loginPopupContent () {
		return (
			<span>
			   <div className="popup-heading">
				  <h2>India's no. 1 music app</h2>
				  <h6 className="popup-subheading">Over 30 million songs to suit every mood and occasion</h6>
			   </div>
			   <div className="_lginfo clearfix">
				  <div className="_divider"></div>
				  <ul className="features clearfix">
					 <li className="createplaylist">
						<svg width="24" height="24" viewBox="0 0 24 24">
						   <g className="fill_path" fillRule="evenodd">
							  <circle cx="12" cy="12" r="12" opacity=".2"></circle>
							  <g fillOpacity=".9">
								 <path d="M17.716 10.29a.602.602 0 0 0-.584-.027l-3.6 1.8a.6.6 0 0 0-.332.537v2.43a1.5 1.5 0 1 0 1.2 1.47v-3.529l2.4-1.2v2.06A1.5 1.5 0 1 0 18 15.3v-4.5c0-.209-.108-.402-.284-.511M16.2 6H6v1.2h10.2zM16.2 8.4H6v1.2h10.2zM11.4 10.8H6V12h5.4zM11.4 13.2H6v1.2h5.4z"></path>
							  </g>
						   </g>
						</svg>
						<span>Create your own playlists</span>
					 </li>
					 <li className="share">
						<svg width="24" height="24" viewBox="0 0 24 24">
						   <g className="fill_path" fillRule="evenodd">
							  <circle cx="12" cy="12" r="12" opacity=".2"></circle>
							  <path fillOpacity=".9" d="M15.6 16.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4m-7.2-3.6a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4m7.2-6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4m0 6c-.72 0-1.36.325-1.8.83l-3.055-1.528a2.384 2.384 0 0 0 0-1.004L13.8 9.971c.44.504 1.08.829 1.8.829 1.324 0 2.4-1.076 2.4-2.4C18 7.076 16.924 6 15.6 6a2.402 2.402 0 0 0-2.345 2.902L10.2 10.429A2.385 2.385 0 0 0 8.4 9.6 2.402 2.402 0 0 0 6 12c0 1.324 1.076 2.4 2.4 2.4.72 0 1.36-.325 1.8-.83l3.055 1.528A2.402 2.402 0 0 0 15.6 18c1.324 0 2.4-1.076 2.4-2.4 0-1.324-1.076-2.4-2.4-2.4"></path>
						   </g>
						</svg>
						<span>Share music with family and friends</span>
					 </li>
					 <li className="like">
						<svg width="24" height="24" viewBox="0 0 24 24">
						   <g className="fill_path" fillRule="evenodd">
							  <circle cx="12" cy="12" r="12" opacity=".2"></circle>
							  <path fillOpacity=".9" d="M9.611 7.5c-1.194 0-2.167 1.01-2.167 2.25 0 2.522 3.354 5.405 5.056 6.605 1.702-1.2 5.056-4.083 5.056-6.605 0-1.24-.973-2.25-2.167-2.25-1.22 0-2.167 1.21-2.167 2.25 0 .414-.323.75-.722.75-.399 0-.722-.336-.722-.75 0-1.04-.947-2.25-2.167-2.25M12.5 18a.704.704 0 0 1-.383-.114C11.867 17.724 6 13.868 6 9.75 6 7.682 7.62 6 9.611 6c1.151 0 2.218.628 2.889 1.56.67-.932 1.738-1.56 2.889-1.56C17.38 6 19 7.682 19 9.75c0 4.118-5.867 7.974-6.117 8.136A.704.704 0 0 1 12.5 18"></path>
						   </g>
						</svg>
						<span>Save your<br/> favorites</span>
					 </li>
				  </ul>
				  <div className="social_login">
					 <a href="javascript:void(0)" id="google-login" className="gplus_btn">
						<svg width="18" height="19" viewBox="0 0 18 19">
						   <g fill="none" fillRule="evenodd">
							  <path fill="#4285F4" d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"></path>
							  <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"></path>
							  <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"></path>
							  <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"></path>
							  <path d="M0 0h18v18H0z"></path>
						   </g>
						</svg>
						Continue with Google
					 </a>
					 <a href="javascript:void(0)" id="facebook-login" className="fb_btn">
						<svg width="18" height="18" viewBox="0 0 18 18">
						   <path className="fill_path" fillRule="nonzero" d="M15.574 0H2.426A2.426 2.426 0 0 0 0 2.426v13.148A2.426 2.426 0 0 0 2.426 18H8.91l.01-6.432h-1.67a.394.394 0 0 1-.395-.393l-.008-2.073c0-.219.176-.396.394-.396h1.669V6.702c0-2.325 1.42-3.59 3.493-3.59h1.702c.218 0 .395.176.395.394v1.748a.394.394 0 0 1-.394.394h-1.045c-1.128 0-1.346.537-1.346 1.323v1.735h2.478c.236 0 .42.206.392.44l-.246 2.074a.394.394 0 0 1-.392.348h-2.221L11.716 18h3.858A2.426 2.426 0 0 0 18 15.575V2.425A2.426 2.426 0 0 0 15.574 0z"></path>
						</svg>
						Continue with Facebook
					 </a>
				  </div>
				  <div className="emaildetails">
					 <div className="ur_email">or continue with</div>
					 
					 {
						this.isOptionChoosedData()
					 }					 
					 
				  </div>
			   </div>
			   <div className="validateTips signinPage"></div>
			</span>
		)
	}
	
	userLoginHtml () {
		const { errors } = this.state;
		return (
			<span>		
				<div className="login_overlay"></div>
				   <svg width="13" height="10" viewBox="0 0 13 10" className="btm_llink">
					  <path className="fill_path" fillRule="evenodd" d="M8 .249L6.823 1.426l2.741 2.741H.751v1.666h8.813L6.823 8.574 8 9.751 12.751 5z"></path>
				   </svg>
				   <div className="signup-step">
					  <div className="popup-heading etpass">
						 <h2>Hi, { this.state.verifiedEmailUserData.username }</h2>
						 <h6>Enter your password to proceed</h6>
					  </div>
					  <div className="input_field">
						 <svg width="12" height="12" viewBox="0 0 12 12" className="key">
							<g className="fill_path" fillRule="evenodd">
							   <path d="M8.001 0a3.637 3.637 0 0 0-3.636 3.637c0 .467.098.91.26 1.32L.206 9.374C.079 9.502 0 9.624 0 9.82v1.09c0 .39.338.728.727.728h1.091c.195 0 .318-.078.446-.205l.522-.522h.852a.728.728 0 0 0 .727-.727v-.728h.727a.728.728 0 0 0 .728-.727v-.852l.861-.863c.41.162.852.26 1.32.26a3.637 3.637 0 0 0 0-7.272zm0 6.546a2.88 2.88 0 0 1-1.469-.411l-.125.124-.41.41-.692.692a.727.727 0 0 0-.213.515v.852h-.727a.727.727 0 0 0-.728.727v.728h-.851a.728.728 0 0 0-.514.213l-.516.515-1.028-.001V9.873L4.968 5.64l.535-.534a2.879 2.879 0 0 1-.412-1.469 2.91 2.91 0 1 1 2.91 2.91z"></path>
							   <path d="M10.116 2.997a6.44 6.44 0 0 0-1.474-1.474.35.35 0 0 0-.32-.047c-.506.178-.852.524-1.029 1.029a.346.346 0 0 0 .047.32A6.45 6.45 0 0 0 8.813 4.3a.352.352 0 0 0 .321.047 1.606 1.606 0 0 0 1.03-1.029.357.357 0 0 0-.047-.32zm-1.09 1.007a6.203 6.203 0 0 1-1.39-1.379 1.26 1.26 0 0 1 .794-.808 6.09 6.09 0 0 1 1.387 1.386c-.142.398-.404.66-.792.801z"></path>
							</g>
						 </svg>
							<TextGroupField 
								field = "password" 
								value = { this.state.password } 
								label = '' 
								placeholder = "Enter your password"
								error = { errors.password }
								onChange = { this.onChange }
								className = "fd"					
								tabIndex = "2"
								type = "password"
							/>						 
					  </div>
					  <div className="captch_blk clearfix" id="login_captcha">
						 <div id="g-recaptcha-login" className="g-recaptcha"></div>
					  </div>
					  <button className="orange-btn" onClick = { (e) => this.signIn(e) }>Sign in</button> 
					  <a href="javascript:void(0)" className="forget_pass" id="forgot_pswd">Forgot password?</a> 
				   </div>
			</span>
		)
	}
	
	userRegisterHtml () {
		return (
			<span>User Login</span>
		)
	}
	
	afterUserEmailCheck () {		
		const userRegister = this.userRegisterHtml();
		const userLogin = this.userLoginHtml();		
		return this.state.isUserRegister ? userLogin : userRegister;				
	}
	
	render () {
		console.log(this.state);
		const myStyle = {
			height:570
		}		
		return (
			<PopUp 
				content = { this.state.isEmailCheckVerified ? this.afterUserEmailCheck() : this.loginPopupContent() }				
				onClick = { (e) => { this.closeClicked(e) } }
				myStyle = { myStyle }
			/>			
		)
	}
	
}

LoginNav.propTypes = {
	userEmailCheck: PropTypes.func.isRequired,
	userLoginCheck: PropTypes.func.isRequired
}




export default withRouter(connect((state) => { return {} }, { userEmailCheck, userLoginCheck })(LoginNav));