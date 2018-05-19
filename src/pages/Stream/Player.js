import React from 'react';
import Hls from 'hls.js';

class Player extends React.Component {
	
	constructor () {
		super();
		this.togglePlay = this.togglePlay.bind(this);
		this.songslist = this.songslist.bind(this);
		this.play = this.play.bind(this);		
		this.state = {
			autoPlay:false,
			songs : [
				{
					id:1,
					title:'Raat Di Gadi',
					url:"https://vodhls-vh.akamaihd.net/i/songs/26/2047626/22907163/22907163_192.mp4/master.m3u8?set-akamai-hls-revision=5&hdnts=st=1526718357~exp=1526721957~acl=/i/songs/26/2047626/22907163/22907163_192.mp4/*~hmac=d1acd27309cbb837444030b9fc7c502c8479be892c90b32b79ee9233fc2d36bd"
				},
				{
					id:2,
					title:'Veer Vaar',
					url:"https://vodhls-vh.akamaihd.net/i/songs/93/1699593/17876256/17876256_320.mp4/master.m3u8?set-akamai-hls-revision=5&hdnts=st=1526718511~exp=1526722111~acl=/i/songs/93/1699593/17876256/17876256_320.mp4/*~hmac=91c988db3f1c7649f0480a38f7a1911062b1960bb607ef82cb0326bb96b5d5a0"
				},
				{
					id:3,
					title:'Dream Girl',
					url:"https://vodhls-vh.akamaihd.net/i/songs/66/14766/68735/68735_320.mp4/master.m3u8?set-akamai-hls-revision=5&hdnts=st=1526718564~exp=1526722164~acl=/i/songs/66/14766/68735/68735_320.mp4/*~hmac=18c14fc044aa86e2615a2911d15235bfc61fb8eee94172c3e8dc3957d425995e"
				},
				{
					id:4,
					title:'5 Vajde Nu',
					url:'https://vodhls-vh.akamaihd.net/i/songs/21/2022021/22729990/22729990_192.mp4/master.m3u8?set-akamai-hls-revision=5&hdnts=st=1526718606~exp=1526722206~acl=/i/songs/21/2022021/22729990/22729990_192.mp4/*~hmac=69548ca1d66dcbed09635eac318137dd3f97668cbf73111c6d19415892cea420'
				}
			],
			currentSong: {}
		}
	}
	
	songslist = () => {
		const { songs } = this.state;
		const li = songs.map((song) => {
			return <li key = { song.id } data-id =  { song.id }  onClick = {(e) => this.play(song.id, e)} >{ song.title }</li>;
		});
		
		return (
			<ul className="songlist">				
				{ li }
			</ul>
		);
	}
	
	play = (id, e) => {
		const songs = this.state.songs;		
		songs.map((song) => {
			if (song.id === id) {				
				this.setState({currentSong: song})
				this.playerHLS(song.url);
			}			
		});		
	}
	
	togglePlay = () => {
		const autoPlay = !this.state.autoPlay;
		this.setState({
			autoPlay
		});
		if (autoPlay) {
			this.player.play();
		} else {
			this.player.pause();
		}		
	}		
	
	playerHLS = (streamURL) => {		
		if (Hls.isSupported() && this.player && streamURL) {
		  const video = this.player;		  
		  const hls = new Hls();
		  hls.attachMedia(video);
		  console.log(hls);
		  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
			console.log("video and hls.js are now bound together !");
			hls.loadSource(streamURL);
			hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
			  console.log("manifest loaded, found " + data.levels.length + " quality level");
			});
		  });
		  this.player.play();
		}
	}
	
	componentDidMount = () => {		
		const streamURL = this.state.songs[0].url;
		this.playerHLS(streamURL);
	}
	
	
	
	render () {		
		return (		
			<div className="model">
				{ this.songslist() }
				<div onClick = { this.togglePlay }>Play/Pause</div>
				<video controls={true} ref={(player) => this.player = player} autoPlay={this.state.autoPlay} />
			</div>
		)
	}
}

export default Player;