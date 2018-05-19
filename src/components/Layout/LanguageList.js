import React from 'react';

const LanguageList = (props) => {
            
      return (         
            lans.map(function(lan,key) {                           
               return <li className="list setting_language_hp" key={key}>
                  <a href="javascript:void(0)" alt="1" data-value="1" className="_language_name chooselanguage selected">
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
      )   
	
}

export default Language;