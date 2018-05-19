import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { logout } from "../../actions/loginActions";

class LoginNav extends React.Component {
	
	constructor () {
		super();
		this.closeClicked = this.closeClicked.bind(this);		
		this.viewProfile = this.viewProfile.bind(this);		
		this.openLoginPopUp = this.openLoginPopUp.bind(this);		
		this.logout = this.logout.bind(this);		
		this.goToHome = this.goToHome.bind(this);		
	}
	
	logout(e) {		
		this.closeClicked(e);
		this.props.logout();
		this.props.history.push('/');
	}
	
	viewProfile (e) {
		this.closeClicked(e);
		this.props.history.push('/profile');
	}
	
	closeClicked (e) {		
		e.preventDefault();
		this.props.displayLoginNav();
	}
	
	openLoginPopUp (e) {
		this.closeClicked(e);
		this.props.displayLoginPopUp();	
	}
	
	goToHome (e) {
		this.closeClicked(e);
		this.props.history.push('/');	
	}
	
	render () {		
		const displayBlock = {
			display:'block'
		}
		const displayNone = {
			display:'none'
		}
		
		const { isAuthenticated, user } = this.props.auth;		
		const userIn = isAuthenticated ? displayBlock : displayNone;
		const userOut = isAuthenticated ? displayNone : displayBlock;
		const userImg = isAuthenticated ? user.userInfo.picture : 'https://a10.gaanacdn.com/media/images-v5/default-album-175x175.jpg';
		
		return (
			<div className="mobmenu-popup">
				<div className="mobmenu">
					<div className="mobmenu-close setupindex">
						<a href="#" className="close" onClick = { (e) => { this.closeClicked(e) } }>					
							<svg width="17" height="17" viewBox="0 0 17 17">
								<path className="fill_path" fillRule="evenodd" d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"></path>
							</svg>
						</a>
					</div>
						<div className="logindata-content setupindex clearfix">
							<div className="loggedoutuser afterlogin" style = { userOut }>
								<h5 className="username">Get more out of Gaana</h5>
								<h6 className="user_p"><a href="#" className="open-popup login" onClick = { (e) => { this.openLoginPopUp(e) } }>Login or Register</a></h6>
							</div>
							<div className="loggeduser beforelogin" style = { userIn } >
								<h5 className="username user_name">Gaana User</h5>
								<h6 className="user_p"><div onClick = { (e) => { this.viewProfile(e) } } to="/profile">View Profile</div></h6>
							</div>
							<div className="loggeduserimg beforelogin" style = { userIn } ><img src={ userImg } /></div>
					</div>
				<div className="mobmenu-content setupindex clearfix">
					<ul>
						<li><a href="#" onClick = { this.goToHome } className="mobmenu-home"><svg width="24" height="24" viewBox="0 0 24 24"><path className="fill_path" fillRule="evenodd" d="M17.497 21.6h-2.012a2.019 2.019 0 0 1-2.013-2.021v-3.032h-2.013v3.032A2.019 2.019 0 0 1 9.446 21.6H7.433a2.019 2.019 0 0 1-2.013-2.021v-6.063H3.407a1.012 1.012 0 0 1-.712-1.725l9.058-9.095a1.003 1.003 0 0 1 1.424 0l9.058 9.095a1.012 1.012 0 0 1-.712 1.725H19.51v6.063a2.019 2.019 0 0 1-2.013 2.021z"></path></svg>Home</a></li>
						<li><a href="javascript:void(0)" className="mobmenu-language-sel"><svg width="18" height="18" viewBox="0 0 18 18" className="svgicons"><path className="fill_path" fillRule="evenodd" d="M.002.992C.002.443.447 0 .995 0H18L0 18.001.002.992zm10.499.996H8.934v7.01l-.858-.627v-2.92a1.46 1.46 0 0 1-.214.067A2.23 2.23 0 0 1 7.3 5.6c-.11 0-.192-.005-.247-.016a2.492 2.492 0 0 1-.858-.297 1.845 1.845 0 0 1-.33-.231c.044.11.071.198.082.264.055.22.083.434.083.643 0 .22-.02.402-.058.545a1.464 1.464 0 0 1-.255.478c-.396.56-.902.841-1.518.841-.297 0-.594-.071-.89-.214a3.265 3.265 0 0 1-.842-.594c-.22-.21-.473-.5-.759-.874a7.408 7.408 0 0 1-.478-.76c-.055-.11-.132-.258-.231-.444l.363-.198c.12.209.214.373.28.494.231.385.424.666.578.842.23.264.48.48.75.651.27.17.553.256.85.256.198 0 .379-.039.544-.116.319-.143.566-.36.742-.651.176-.292.264-.564.264-.817 0-.374-.126-.66-.38-.857a1.3 1.3 0 0 0-.395-.198l-1.468.676-.479-.775 1.469-.66c.197-.088.34-.165.428-.231.286-.198.43-.423.43-.676a2.72 2.72 0 0 0 .016-.231c0-.264-.072-.457-.215-.578-.143-.12-.34-.181-.593-.181a1.99 1.99 0 0 0-.479.066 7.642 7.642 0 0 0-.56.165l-.726.38-.512-.776c.165-.077.292-.137.38-.181.297-.143.536-.237.717-.28A2.48 2.48 0 0 1 3.59.997c.594 0 1.105.176 1.534.528.429.352.643.78.643 1.287 0 .11-.005.192-.016.247-.044.253-.16.5-.347.742-.055.077-.148.17-.28.28.209.188.385.325.528.413.461.286.945.429 1.451.429.231 0 .462-.099.693-.297.077-.066.17-.17.28-.313V1.988H6.51l-.56-.858H9.94l.561.858zm7.497 15.02a.994.994 0 0 1-.993.993H0L18-.001l-.002 17.01zm-2.673-.76a.99.99 0 0 0 .994-.999l-.19-12.56L2.912 16.261l12.413-.015zm-1.748-1.434l-.307-.808h-2.618l-.308.826c-.12.322-.222.54-.307.652-.085.113-.224.17-.417.17a.612.612 0 0 1-.435-.18.551.551 0 0 1-.19-.41c0-.087.016-.178.045-.272.03-.093.077-.224.145-.39l1.647-4.182.17-.433c.065-.168.135-.308.21-.42a.857.857 0 0 1 .294-.27.902.902 0 0 1 .45-.103c.182 0 .334.035.455.103.122.07.22.158.294.266.075.108.138.225.19.35.05.124.116.29.195.498l1.682 4.155c.132.316.198.546.198.69a.57.57 0 0 1-.187.41.614.614 0 0 1-.45.187.54.54 0 0 1-.448-.204 1.374 1.374 0 0 1-.16-.29c-.058-.13-.107-.245-.148-.345zm-2.583-1.788h1.924l-.97-2.657-.954 2.657z"></path></svg>Language Settings</a></li>
						<li
							id="li-auto-queue" className="clearfix"><a href="javascript:void(0)" className="auto-queue-set"><svg width="16px" height="17px" viewBox="0 0 16 17" version="1.1"> <defs></defs> <g id="Navigation---v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="wap-menu-open---loggedout" transform="translate(-24.000000, -284.000000)" fill="#FFFFFF"> <g id="header"> <g id="Group-3-Copy-8" transform="translate(20.000000, 276.000000)"> <g id="back-white-copy" transform="translate(0.000000, 5.000000)"> <g id="queue"> <path d="M17.7848667,3.53693475 L8.20013062,6.66347565 C7.60779393,6.85517038 7.20715196,7.40725117 7.20715196,8.03025902 L7.20715196,14.1165664 C5.61991967,14.1165664 4.33173114,15.402838 4.33173114,16.9919873 C4.33173114,18.5792195 5.61991967,19.8674081 7.20715196,19.8674081 C8.7963012,19.8674081 10.0825728,18.5792195 10.0825728,16.9919873 L10.0825728,9.0730783 L16.791888,6.88584153 L16.791888,12.1996192 C15.2046557,12.1996192 13.9164672,13.4858908 13.9164672,15.07504 C13.9164672,16.6622723 15.2046557,17.9504609 16.791888,17.9504609 C18.3810373,17.9504609 19.6673089,16.6622723 19.6673089,15.07504 L19.6673089,4.90371811 C19.6673089,4.44556773 19.4468599,4.01042071 19.0749722,3.74013115 C18.7030844,3.47175854 18.2200137,3.39508065 17.7848667,3.53693475" id="Combined-Shape"></path> </g> </g> </g> </g> </g> </g> </svg>Autoplay</a>
							<a
								id="queue_mode" href="javascript:void(0)" className="auto-queue-btn _setmode setting_language sett-btn queue_mode popup selected" data-value="" data-action="silent" data-event=""> <svg className="uncheckedsvg" width="18" height="18" viewBox="0 0 18 18"> <circle cx="271" cy="41" r="8" fill="none" fillRule="evenodd" stroke="#979797" transform="translate(-262 -32)"></circle> </svg> <svg data-value="" data-action="silent"
									data-event="" className="checkedsvg" width="18" height="18" viewBox="0 0 16 16"> <g data-value="" data-action="silent" data-event="" fill="none" fillRule="evenodd"> <path data-value="" data-action="silent" data-event="" fill="#00AFFF" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path> <path data-value="" data-action="silent" data-event="" fill="#FFF" d="M7.201 12.928L3.158 8.885l1.767-1.768 1.957 1.956 4.142-5.799 2.035 1.453z"></path> </g> </svg>                    <span>On</span> </a>
								</li>
								<li><a href="javascript:void(0)" className=" "><svg width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path className="fill_path" d="M16.772 3H18l-2.419 14.158C14.92 21 11.193 21 11.193 21H6l1.396-2.57h4.247c1.239 0 1.452-1.272 1.452-1.272l.238-1.298h-2.497s-3.728 0-3.086-3.869l.876-5.142C9.296 3 13.025 3 13.025 3H16.77zm-1.926 3.849c.24-1.279-.997-1.279-.997-1.279h-1.26c-1.232 0-1.467 1.279-1.467 1.279l-.877 5.142c-.216 1.295 1.015 1.295 1.015 1.295h2.498l1.088-6.437z"></path></g></svg>Download App!</a></li>
					</ul>
				</div>
				<br />
				<div className="comp_box beforelogin clearfix" style = { userIn }>
					<div className="mobmenu-content clearfix">
						<ul>
							<li><a href="javascript:void(0)" className="notification_mob mobmenu-notiff"><svg width="24" height="24" viewBox="0 0 24 24"><path className="fill_path" fillRule="nonzero" d="M13.778 19.2c0 .994-.796 1.8-1.778 1.8a1.789 1.789 0 0 1-1.778-1.8h3.556zM12 3c.49 0 .889.403.889.9v.972c2.524.432 4.444 2.655 4.444 5.328v5.4L20 18.3H4l2.667-2.7v-5.4c0-2.673 1.92-4.896 4.444-5.328V3.9c0-.497.398-.9.889-.9z"></path></svg>Notifications <span className="noti_cnt">1</span></a></li>
							<li><a href="/music" data-pjax="" className="mobmenu-mymusic"><svg width="20" height="20" viewBox="0 0 20 20"><path className="fill_path" fillRule="evenodd" d="M17.2.4c1.324 0 2.4 1.076 2.4 2.4v14.4c0 1.324-1.076 2.4-2.4 2.4H2.8a2.402 2.402 0 0 1-2.4-2.4V2.8C.4 1.476 1.476.4 2.8.4h14.4zm-3.579 4.178l-6 1.957A.899.899 0 0 0 7 7.39v3.81A1.8 1.8 0 1 0 8.8 13V8.043L13 6.674V10a1.8 1.8 0 1 0 1.8 1.8V5.433a.903.903 0 0 0-.371-.728.906.906 0 0 0-.808-.127z"></path></svg>My Music</a></li>
							<li><a href="/settings" data-pjax="" className="mobmenu-settings"><svg width="24" height="24" viewBox="0 0 24 24"><path className="fill_path" fillRule="nonzero" d="M11.73 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65a.506.506 0 0 0-.5-.42h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.3 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"></path></svg>Settings</a></li>
						</ul>
					</div>
					<div className="mobmenu-content clearfix hideborder">
						<ul>
							<li><a href="javascript:void(0)" onClick = { this.logout } id="logout-button" className="mobmenu-logout"><svg width="16" height="18" viewBox="0 0 16 18"><g fill="none" fillRule="evenodd"><path d="M-4-3h24v24H-4z"></path><path className="fill_path" d="M11 2.589v2.223A5.999 5.999 0 0 1 14 10c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.998 5.998 0 0 1 3-5.188V2.589C2.072 3.779 0 6.65 0 10c0 4.411 3.589 8 8 8s8-3.589 8-8c0-3.35-2.072-6.221-5-7.411z"></path><path className="fill_path" d="M7 0h2v8H7z"></path></g></svg>Logout</a></li>
						</ul>
					</div>
				</div>
				<div className="login_registernew afterlogin clearfix" style = { userOut }>
					<p>Login to make your Collection, Create<br/> Playlists, and Favourite Songs</p>
					<div><a className="open-popup login" href="javascript:void(0)" onClick = { (e) => { this.openLoginPopUp(e) } }>Login / Register</a></div>
				</div>
			</div>
			</div>
		)
	}
	
}

LoginNav.propTypes = {
	auth: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {	
	 return {
		 auth: state.auth
	 }
}

export default withRouter(connect(mapStateToProps, { logout })(LoginNav));