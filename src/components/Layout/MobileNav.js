import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//import { logout } from "../../actions/loginActions";

import routes from '../../routes';

class MobileNav extends React.Component {
	
	logout(e) {
		e.preventDefault();
		this.props.logout();
	}
	
	render () {		
		//const { isAuthenticated } = this.props.auth;
		var userLink = (
			<section>
				/* <li id="lm2"><NavLink to="/profile">Profile</NavLink></li>
				<li id="lm2"><a href="#" onClick = { this.logout.bind(this) }>Logout</a></li>*/
			</section>
		);
		
		var guestLink = (
			<section>
				/* <li id="lm2"><NavLink to="/register">Register</NavLink></li>
				<li id="lm2"><NavLink to="/login">Login</NavLink></li> */
			</section>
		);
		return (
		
			<div className="mobile_nav">
			 <nav className="mobile clearfix">
				<ul id="leftmenuv5">
					<li id="lm1"><NavLink to="/">Home</NavLink></li>
					<li id="lm2"><NavLink to="/discover">Discover</NavLink></li>
					{ /* isAuthenticated ? userLink : guestLink */ }
				</ul>			
			 </nav>
			 <div className="mobile-appdownload-inner">
				<div className="getonapp">
				   <div className="blurappdownload">
					  <div className="blurimg"> <img className="gaana_ads_bgimg" title="Cut To The Feeling Song" alt="Cut To The Feeling Song" src="https://a10.gaanacdn.com/images/gaanawebsite/virtualimage.jpg" /> </div>
				   </div>
				   <div className="getonapp_txt">
					  <div>
						 <h6>Experience Gaana in 9 languages</h6>
						 <p> Download the app now!</p>
					  </div>
				   </div>
				   <a href="https://ad.apsalar.com/api/v1/ad?re=1&a=timesinternet&i=com.gaana&ca=Gaana_Android&an=GAANA_WAP&p=Android&pl=Internal&h=452a31596e9eb0f4a58e091d1a2e341074f5c867" className="grey-border-btn">GET APP</a>
				</div>
			 </div>			
			 { routes }
		  </div>	  
		)	
	}	
}

/* MobileNav.propTypes = {
	auth: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {	
	 return {
		 auth: state.auth
	 }
}*/



//export default withRouter(connect(mapStateToProps, { logout })(MobileNav));
export default MobileNav;