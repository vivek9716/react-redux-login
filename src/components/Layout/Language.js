import React from 'react';
import PopUp from '../common/popup';

class Language extends React.Component {

   constructor () {
      super();
      this.state = {
         language : []
      }
   }

   componentDidMount() {      
      fetch ('http://localhost/gaana-api/language.php').then(result => {
         return result.json();
      }).then(data => {       
         this.setState({language: this.state.language.concat(data.data)})        
      });            
   }
   
   content () {
	   const lans = this.state.language;
	   return (
			<span>
				<a  id="language_save" className="language_save orange-btn mobile">Apply</a> 
				   <div className="_top_language clearfix">
					  <h2>Language Selection</h2>
					  <h5>Please select the language(s) of the music you listen to.</h5>
					  <div className="languagelist clearfix">
						 <ul className="languages clearfix">
						 {
							lans.map(function(lan,key) {                           
							   return <li className="list setting_language_hp" key={key}>
								  <a  alt="1" data-value="1" className="_language_name chooselanguage selected">
									 <svg className="uncheckedsvg" width="18" height="18" viewBox="0 0 18 18">
										<circle cx="271" cy="41" r="8" fill="none" fillRule="evenodd" stroke="#979797" transform="translate(-262 -32)"></circle>
									 </svg>
									 <svg className="checkedsvg" width="18" height="18" viewBox="0 0 16 16">
										<g fill="none" fillRule="evenodd">
										   <path className="fill_path orange" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
										   <path fill="#FFF" d="M7.201 12.928L3.158 8.885l1.767-1.768 1.957 1.956 4.142-5.799 2.035 1.453z"></path>
										</g>
									 </svg>
									 {lan.language}
								  </a>
							   </li>
							})
						 }
										   
						 </ul>
					  </div>
				   </div>
				   <div className="save_btn desktop"><a  id="language_save" className="language_save orange-btn">Apply</a></div>
			</span>
	   )
   }

   render () {      
      return (
		<PopUp 
			content = { this.content() }
			onClick = { this.props.displayLanguage }
			className = "popupbg1 mobile-languagebox"	
		/>		         
      )
   }
	
}

export default Language;