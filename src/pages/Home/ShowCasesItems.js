import React from 'react';
import LazyLoad from 'react-lazy-load';

class ShowCasesItems extends React.Component {
	
	render () {
		const item = this.props.item;			
		return (
			<li className="list draggable loaded">
			   <div className="card_layout_data">
				  <div className="hover-events-parent">
					 <a data-premium-value="0" data-pjax="" href={item.seokey} data-type="play" data-value={'song' + item.entity_id} 
						className="play">
						<svg width="20" height="24" viewBox="0 0 20 24">
						   <path className="fill_path" data-premium-value="0" data-type="play" data-value={'song' + item.entity_id} 
						   fillRule="evenodd" d="M0 0v24l20-12z" data-pjax="" href={'/song/' + item.seokey}></path>
						</svg>
					 </a>
					 <a data-value={ 'song' + item.entity_id} href={'/song/' + item.seokey} className="imghover"> 					 
					 <LazyLoad height={762} offsetVertical={300}>
						<img src={item.artwork} className="img" alt={item.title} />
					 </LazyLoad>
					 </a>
				  </div>
			   </div>
			</li>			
		)
	}
}

export default ShowCasesItems;