import React from 'react';
import DiscoverItems from './DiscoverItems.js';


class Discover extends React.Component {
	
	constructor () {
		super();
		this.state = {
			discoverData : []
		}		
	}
	
	componentDidMount() {		
		fetch ('http://localhost/gaana-api/discover.php').then(result => {
			return result.json();
		}).then(data => {			
			this.setState({discoverData: this.state.discoverData.concat(data.entities)})			
		});				
	}


	
	
	render () {
		var dataReturn = this.state.discoverData;		
		return (
			<div className="lastend-container">   
			   <ul className="content-container clearfix striplayout artworkload" id="new-release-album">
				  {
					dataReturn.map(function(value, key) {
						return <DiscoverItems key={key} item={value} />
					})
				}				  
			   </ul>			   
			</div>
		)
	}
}

export default Discover;