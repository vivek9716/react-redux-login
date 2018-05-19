import React from 'react';

import Header from './Layout/Header';
import MobileNav from './Layout/MobileNav';
import Language from './Layout/Language';
import Footer from './Layout/Footer';
import FlashMessageList from '../flash/FlashMessageList';
import LoginNav from './Layout/LoginNav';
import LoginPopUp from './Layout/LoginPopUp';


class Layout extends React.Component {
	
	constructor () {
		super();
		this.state = {
	      showLanguage: false,
		  showLoginNav: false,	
		  showLoginPopUp: false,	
	    };
		this.displayLanguage = this.displayLanguage.bind(this);
		this.displayLoginNav = this.displayLoginNav.bind(this);
		this.displayLoginPopUp = this.displayLoginPopUp.bind(this);
	}

	displayLanguage () {		
		this.setState({ showLanguage : !this.state.showLanguage });		
	}
	
	displayLoginNav () {
		this.setState({ showLoginNav : !this.state.showLoginNav });		
	}

	displayLoginPopUp () {
		this.setState({ showLoginPopUp : !this.state.showLoginPopUp });
	}		
	
	headerProps () {
		return {
			displayLoginPopUp: this.displayLoginPopUp,
			displayLoginNav: this.displayLoginNav,
			displayLanguage: this.displayLanguage
		}
	}
	
	addClassPopUp () {		
		return this.state.showLanguage || this.state.showLoginPopUp;
	}
	
	render () {			
		return (			
			<div className= { this.addClassPopUp() ?  'container outercontainer_popup_open' : 'container' }  id="outercontainer">
				<div className="innercontainer">
					<div className="main" id="mainarea">
						<div className="content clearfix" id="main_middle_content">
							<Header headerPropsPass = { this.headerProps() } />
							<MobileNav />
							{ /* <FlashMessageList /> */}							
						</div>
					</div>
					<Footer />
				</div>				
				{ 
					this.state.showLanguage ? <Language displayLanguage = {this.displayLanguage} /> : ''
				}
				{
					this.state.showLoginNav ? <LoginNav displayLoginNav = { this.displayLoginNav } displayLoginPopUp = { this.displayLoginPopUp } />  : ''
				}
				{
					this.state.showLoginPopUp ? <LoginPopUp displayLoginPopUp = { this.displayLoginPopUp } /> : ''
				}				
			</div>			
		)
	}
}

export default Layout;