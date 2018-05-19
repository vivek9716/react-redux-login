import React from 'react';

import ShowCases from './ShowCases';
import Featured from './Featured';

class Home extends React.Component {
	
	constructor () {
		super();
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			loadAjaxData : false
		}
	}
	
	componentDidMount() {		
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {		
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		let supportPageOffset = window.pageXOffset !== undefined;
		let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');	
		let scroll = {
		   x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
		   y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		}
		let onScrollTopGap = (scroll.y - 2);
		console.log(onScrollTopGap);
		if (onScrollTopGap >= 26) {
			//console.log('Send Ajax Data');
		} else {
			//console.log('Not Send Ajax Data');
		}
	}
	
	render () {
		
		return (
			<div>
				<Featured />
				<ShowCases />				
			</div>
		)
	}

}

export default Home;