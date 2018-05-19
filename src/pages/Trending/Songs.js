import React from 'react';

class Songs extends React.Component {
	
	constructor () {
		super();
		this.state = {
			data : []
		}
		this.renderData = this.renderData.bind(this);
	}
	
	componentDidMount() {		
		fetch ('http://localhost/gaana-api/featured.php').then(result => {
			return result.json();
		}).then(response => {			
			this.setState({data: this.state.data.concat(response.entities)})			
		});				
	}

	renderData (data) {
		var artistInfo = data.entity_info[0].value;		
		return (
			<div key={data.entity_id} className="lastend-container details-list-paddingnone content-container artworkload">
			  <div className="s_c" id="sub-content-container">
				 <span id={'parent-row-song' + data.entity_id} data-type="playSong" sourcelist_="" className="parentnode sourcelist_trendingsongs"></span>
				 <ul id={'trackrow' + data.entity_id} className="s_l artworkload ">
					<li className="s_title p_title list loaded" data-value="song22973363">
					   <div className="playlist-data">
						  <div className="playlist_thumb">
							<img className = "img" alt="" src = {data.artwork} data-src = {data.artwork}/>
						  </div>
						  <div className="playlist_thumb_det">
							 <a href="intent://android-app://com.gaana/gaana/share/tNakhra+NawabiI22973363/#Intent;scheme=gaana;package=com.gaana;S.browser_fallback_url=https://gaana.com/songs/?play=0;end" className="sng_c ">{data.name}</a> 
							 <div className="mobile">
							 {
								 artistInfo.map(function(artist, key) {
									return <a key = {key} href="intent://android-app://com.gaana/gaana/share/tNakhra+NawabiI22973363/#Intent;scheme=gaana;package=com.gaana;S.browser_fallback_url=https://gaana.com/songs/?play=0;end" title="Dr. Zeus">
										{artist.name},
									</a>
								 })
							 }
								
							  </div>		
						  </div>
					   </div>
					</li>
					<li className="s_duration ">
					   <a className="s_adply">
						  <svg width="24" height="24" viewBox="0 0 24 24" data-type="addToQueueViaTrack" data-value="song22973363">
							 <g fill="none" fillRule="evenodd">
								<path d="M0 0h24v24H0z" data-type="addToQueueViaTrack" data-value="song22973363"></path>
								<path className="fill_path" fillRule="nonzero" d="M2 15h8v-2H2v2zm16-2V9h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-4-8H2v2h12V5zm0 4H2v2h12V9z" data-type="addToQueueViaTrack" data-value="song22973363"></path>
							 </g>
						  </svg>
					   </a>
					   <a className="mobile mobile_artwork_event">
						  <svg width="24" height="24" viewBox="0 0 24 24">
							 <g fill="#FFF" fillRule="evenodd">
								<path className="fill_path" d="M7 12a2 2 0 1 1-3.999.001A2 2 0 0 1 7 12M14 12a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12M21 12a2 2 0 1 1-3.999.001A2 2 0 0 1 21 12"></path>
							 </g>
						  </svg>
					   </a>
					</li>
				 </ul>
				 <div className="Gaana_Mweb_ROS_Mrec ads-full-block" id="div-gpt-ad-3549566279337-0" tpx3dz5="" hidden=""></div>
				 <div className="Gaana_Mweb_ROS_Mrec ads-full-block" id="div-gpt-ad-3549566279337-0" tpx3dz5="" hidden=""></div>
			  </div>
		   </div>
		)
	}
	
	
	render () {
		var dataReturn = this.state.data;
		var self = this;		
		return (
			<div className="detailspage trendingbox">
			   <div className="Gaana_MWeb_ROS_ATF ads-full-block pagetopads" id="div-gpt-ad-1507803994451-0" tpx3dz5="" hidden=""></div>
			   <div className="Gaana_MWeb_ROS_ATF ads-full-block pagetopads" id="div-gpt-ad-1507803994451-0" tpx3dz5="" hidden=""></div>
			   <div className="_de_tp">
				  <div className="blurimg">
					 <div className="bluroverlay"></div>
					 <img className="img gaana_ads_bgimg" alt="" src="https://css375.gaanacdn.com/images/gaana_ads_bg.jpg" /> 
				  </div>
				  <div className="lastend-container inheritheight">
					 <div className="_d_t inheritheight artworkload">
						<div className="_d_t_img _d_tp_img">
						   <span id="parent-row-playlist"></span> 
						   <div className="mobile">
							  <h2 className="trendingtitle">Trending Songs</h2>
							  <p id="song_cnt">{ dataReturn.length } Songs</p>
							  <p>
								 <a data-type="playall" className="orange-btn playall" title="Play All" data-value="">
									<svg width="20" height="24" viewBox="0 0 20 24">
									   <path className="fill_path" fillRule="evenodd" d="M0 0v24l20-12z"></path>
									</svg>
									Play All
								 </a>
							  </p>
						   </div>
						</div>
					 </div>
				  </div>
			   </div>
			   {
				dataReturn.map (function (data, key) {
						return self.renderData(data)
				}) 
				   
			   }
			</div>
		)
	}
}

export default Songs;