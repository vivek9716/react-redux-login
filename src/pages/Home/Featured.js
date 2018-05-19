import React from 'react';
import { Link } from 'react-router-dom';
import Tracks from '../../components/common/HomeTracks/Tracks';


class Featured extends React.Component {
	
	constructor () {
		super();
		this.state = {
			data : []
		}		
	}
	
	componentDidMount() {		
		fetch ('http://localhost/gaana-api/featured.php').then(result => {
			return result.json();
		}).then(response => {			
			this.setState({data: this.state.data.concat(response.entities)})
		});				
	}


	
	
	render () {
		var dataReturn = this.state.data;
		return (
			<div className="carousel" id="trendingsong">
				<h2>
				  <Link to="/songs">Trending songs</Link>	
				  <Link to="/songs" className="viewall">
					 View all 
					 <svg width="10" height="17" viewBox="0 0 10 17">
						<path className="fill_path" fillRule="evenodd" d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"></path>
					 </svg>
				  </Link>
				</h2>
				<Tracks tracks = { dataReturn } />
			</div>
		)
	}
}

export default Featured;