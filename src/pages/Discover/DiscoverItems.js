import React from 'react';
import LazyLoad from 'react-lazy-load';

class ShowCasesItems extends React.Component {
	
	render () {
		const item = this.props.item;			
		return (
			<section>
				<li className="list loaded">
				 <div className="card_layout_data">
					<div className="hover-events-parent"> 
					<a>
					<div className="filler" />
					<img src="https://a10.gaanacdn.com/media/images-v5/default-album-175x175.jpg" alt="Gaana" />
					<LazyLoad>
						<img className="img" title={item.name} alt={item.name} src={item.artwork} 
					data-src={item.artwork} />
					 </LazyLoad>						 
					</a> </div>
				 </div>
				</li>      
		  <div className="new_pager_data"></div>			
		  </section>
		)
	}
}

export default ShowCasesItems;