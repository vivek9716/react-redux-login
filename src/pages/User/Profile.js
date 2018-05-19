import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getUserStatus } from '../../actions/signupActions';


var dateFormat = require('dateformat');
class Profile extends React.Component {
	
	constructor () {
		super();		
		this.getSubscription = this.getSubscription.bind(this);
		this.getFree = this.getFree.bind(this);
	}
	
	componentDidMount() {		
		/* fetch ('http://localhost/gaana-api/show-case.php').then(result => {
			return result.json();
		}).then(data => {			
			this.setState({showcaseData: this.state.showcaseData.concat(data.entities)})			
		}); */
		this.props.getUserStatus();
	}
	
	getFree () {
		return (
			<span>
				 <h4>Gaana+</h4>
					<div className="plus-feature">
						<div className="_m unlimited-down">
							<div className="_m1">
								<svg viewBox="0 0 66 66" className="download-thumb" width="40">
								<g fill="none" fillRule="evenodd" transform="translate(1 1)">
								<circle cx="32" cy="32" r="32" className="stroke_path"/>
								<g className="fill_path" fillOpacity=".8">
								<path d="M31 21v8.586l-2.293-2.293-1.414 1.414L32 33.414l4.707-4.707-1.414-1.414L33 29.586V21zM25 37h14l-.003 2H25v-2zm-2 0v2c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2H25c-1.103 0-2 .897-2 2z"/>
								</g>
								</g>
								</svg>
								<div className="_m1-det"> 
								<h5>Unlimited Downloads</h5>
								<p>Download unlimited songs on your Android or iOS app</p>
								</div>
							</div>
						</div>
						<div className="_m stream">
							<div className="_m1">
								<svg viewBox="0 0 66 66" className="hd-thumb" width="40">
								<g fill="none" fillRule="evenodd" transform="translate(1 1)">
								<circle cx="32" cy="32" r="32" className="stroke_path"/>
								<text className="fill_path" fontFamily="OpenSans-Bold, Open Sans" fontSize="18" fontWeight="bold" letterSpacing="1.35">
								<tspan x="19" y="37">HD</tspan>
								</text>
								</g>
								</svg>
								<div className="_m1-det"> 
								<h5>Stream in High definition</h5>
								<p>Stream music in HD on both web and mobile</p>
							</div>
							</div>  
						</div>
						<div className="_m notads">
							<div className="_m1">
								<svg viewBox="0 0 66 66" className="noads-thumb" width="40">
								<g fill="none" fillRule="evenodd" transform="translate(1 1)">
								<circle cx="32" cy="32" r="32" className="stroke_path" />
								<text className="fill_path" fontFamily="OpenSans-Bold, Open Sans" fontSize="18" fontWeight="bold" letterSpacing="1.35">
								<tspan x="14" y="37">Ads</tspan>
								</text>
								<path className="stroke_path" strokeLinecap="square" d="M54.5 10.5L10.517 54.483"/>
								</g>
								</svg>
								<div className="_m1-det"> 
								<h5>Get rid of Ads</h5>
								<p>Have ad free experience forever</p>
							</div>
							</div>   
						</div>
					</div>
			</span>
		)
	}
	
	getSubscription () {
		const { isAuthenticated, user } = this.props.auth;
		const gaanaPlusInfo = (typeof user.paymentStatus != 'undefined') ? user.paymentStatus : null;
		var subscriptionOn = new Date(gaanaPlusInfo.lastpayment * 1000);
		var validateUpto = new Date(gaanaPlusInfo.validupto * 1000);
		var subHtml = (
			<div className="setbg bk1">
				<h4>{ gaanaPlusInfo.productInfo.name }</h4>
				<p>
					<span className="title">Subscribed on: </span> 
					<span className="labval">{ dateFormat(subscriptionOn, "dS mmm yyyy") }</span>  
					<br/> 
					<span className="title">To be renewed on: </span> 
					<span className="labval"> { dateFormat(validateUpto, "dS mmm yyyy") } </span>  
				</p>
			 </div>
		)
		
		var freeHtml = (
			<span>
				<div className="setbg bk1">
					<h4>Free</h4>
					<p>
						Ad supported, low and medium quality streaming only.
					</p>
				 </div>
				 <h2 className="top-heading">RECOMMENDED PLAN</h2>
					<div className="setbg bk2">
						<h4>Gaana+</h4>
						<div className="plus-feature">
							<div className="_m unlimited-down">
								<div className="_m1">
									<svg viewBox="0 0 66 66" className="download-thumb" width="40">
									<g fill="none" fillRule="evenodd" transform="translate(1 1)">
									<circle cx="32" cy="32" r="32" className="stroke_path"/>
									<g className="fill_path" fillOpacity=".8">
									<path d="M31 21v8.586l-2.293-2.293-1.414 1.414L32 33.414l4.707-4.707-1.414-1.414L33 29.586V21zM25 37h14l-.003 2H25v-2zm-2 0v2c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2H25c-1.103 0-2 .897-2 2z"/>
									</g>
									</g>
									</svg>
									<div className="_m1-det"> 
									<h5>Unlimited Downloads</h5>
									<p>Download unlimited songs on your Android or iOS app</p>
									</div>
								</div>
							</div>
							<div className="_m stream">
								<div className="_m1">
									<svg viewBox="0 0 66 66" className="hd-thumb" width="40">
									<g fill="none" fillRule="evenodd" transform="translate(1 1)">
									<circle cx="32" cy="32" r="32" className="stroke_path"/>
									<text className="fill_path" fontFamily="OpenSans-Bold, Open Sans" fontSize="18" fontWeight="bold" letterSpacing="1.35">
									<tspan x="19" y="37">HD</tspan>
									</text>
									</g>
									</svg>
									<div className="_m1-det"> 
									<h5>Stream in High definition</h5>
									<p>Stream music in HD on both web and mobile</p>
								</div>
								</div>  
							</div>
							<div className="_m notads">
								<div className="_m1">
									<svg viewBox="0 0 66 66" className="noads-thumb" width="40">
									<g fill="none" fillRule="evenodd" transform="translate(1 1)">
									<circle cx="32" cy="32" r="32" className="stroke_path" />
									<text className="fill_path" fontFamily="OpenSans-Bold, Open Sans" fontSize="18" fontWeight="bold" letterSpacing="1.35">
									<tspan x="14" y="37">Ads</tspan>
									</text>
									<path className="stroke_path" strokeLinecap="square" d="M54.5 10.5L10.517 54.483"/>
									</g>
									</svg>
									<div className="_m1-det"> 
									<h5>Get rid of Ads</h5>
									<p>Have ad free experience forever</p>
								</div>
								</div>   
							</div>
						</div>
					</div>	
			</span>
		)
		
		return (typeof user.paymentStatus.account != 'undefined' && user.paymentStatus.account == 'paid') ? subHtml : freeHtml;		
	}
	
	render () {		
		const { isAuthenticated, user } = this.props.auth;
		const userInfo = user.userInfo;
		const userImage = userInfo.picture;		
		const userName = userInfo.fullname;		
		const userEmail = userInfo.email;
		
		return (
			<div className="detailspage myzone">
			   <div className="_de_tp">
				  <div className="blurimg"><img src="https://a10.gaanacdn.com/images/users/417/crop_110x110_1516626546_425417.jpg" /></div>
				  <div className="lastend-container inheritheight">
					 <div className="_d_t inheritheight">
						<div className="_d_t_img"> <img src= { userImage } alt={ userName } /> </div>
						<input type="hidden" name="topicId" id="topicId" value="" /> 
						<div className="_d_t_det">
						   <h1>{ userName }</h1>
						   <h5>{ userEmail }</h5>
						</div>
					 </div>
					 <div className="myzone-tabs">
						<NavLink to="/profile">Subscription</NavLink> 						 
					 </div>
				  </div>
			   </div>
			   <div className="myzone-tab-content">
			  <div className="lastend-container myzone_subscription">
				 <h2 className="top-heading">current plan</h2>
				 { this.getSubscription() }
			  </div>
		   </div>			   
			</div>
		)
	}
}

Profile.propTypes = {
	auth: PropTypes.object.isRequired,
	getUserStatus: PropTypes.func.isRequired
}

function mapStateToProps(state) {	
	 return {
		 auth: state.auth
	 }
}

export default connect(mapStateToProps, { getUserStatus })(Profile);