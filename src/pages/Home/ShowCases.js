import React from 'react';
import ShowCasesItems from './ShowCasesItems.js';

class ShowCases extends React.Component {
	
	constructor () {
		super();
		this.state = {
			showcaseData : []
		}		
	}
	
	componentDidMount() {		
		fetch ('http://localhost/gaana-api/show-case.php').then(result => {
			return result.json();
		}).then(data => {			
			this.setState({showcaseData: this.state.showcaseData.concat(data.entities)})			
		});				
	}


	
	
	render () {
		var dataReturn = this.state.showcaseData;		
		return (
			<div className="landingpage_container">
			   <div className="carousel landingpage_slider">
				  <div className="addlayer"></div>
				  <div className="card_layout" data-mcs-axis="x">
					<ul className="clearfix carousel_ul artworkload" title="Showcase">
					{
						dataReturn.map(function(value, key) {
							return <ShowCasesItems key={key} item={value} />
						})
					}
						
					 	
					</ul>
				  </div>      
			   </div>
			</div>
		)
	}
}

export default ShowCases;