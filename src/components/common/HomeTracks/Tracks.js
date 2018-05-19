import React from 'react';

class Tracks extends React.Component {
	
	render () {
		var tracks = this.props.tracks;			
		return (	
			<div className="card_layout">					
				<ul className="clearfix carousel_ul artworkload" id="new-release-album" title="Trending songs">				
					{					
						tracks.map(function (track, key) {						
							return <li key = {key}  id={'trackrow' + track.entity_id} className="list loaded">
								<div className="card_layout_data">						   
								   <div className="hover-events-parent item-artwork loaded"> 
										<a 
											href="intent://android-app://com.gaana/gaana/share/tNakhra+NawabiI22973363/#Intent;scheme=gaana;package=com.gaana;S.browser_fallback_url=https://gaana.com//?play=0;end" className="play"> 
										</a> 
										<a data-pjax="" href={'/song/' + track.seokey } data-value={'song' + track.entity_id} data-type="touch-play"> 
											<img 
												className="img" 
												data-value={'song' + track.entity_id}
												data-type="touch-play" 
												title={track.name}
												alt={track.name}
												src={track.artwork}
												data-src={track.artwork}
											/>
										</a> 
									</div>
								   <div className="arwtork_label"> 
									<a 
										href="intent://android-app://com.gaana/gaana/share/tNakhra+NawabiI22973363/#Intent;scheme=gaana;package=com.gaana;S.browser_fallback_url=https://gaana.com//?play=0;end" 
										className="album-name block_dotes _dotes pjax" 
										title={track.name}>
										{track.name}
										</a>  
									</div>								   
								</div>
							 </li>
						})					
					}
				</ul>
			</div>
		)	
	}	
}

export default Tracks;