import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({content, className, onClick, myStyle}) => {
	return (
		<div id="popup" className= { className } style = { myStyle }>
		   <a href="javascript:void(0)" className="popup-close" onClick = { onClick }>
			  <svg width="17" height="17" viewBox="0 0 17 17">
				 <path className="fill_path" fillRule="evenodd" d="M16.293 1.592l-1.3-1.3-6.7 6.701-6.7-6.7-1.3 1.299 6.7 6.7-6.7 6.701 1.3 1.3 6.7-6.7 6.7 6.7 1.3-1.3-6.7-6.7z"></path>
			  </svg>
		   </a>
		   <div className="popup_content clearfix">
				{ content }
		   </div>
		</div>
	);
}

PopUp.propTypes = {
	content		:	PropTypes.object.isRequired,
	className	:	PropTypes.string.isRequired,
	onClick		:	PropTypes.func.isRequired,
	myStyle		:	PropTypes.object,	
}

PopUp.defaultProps = {
	className : 'popupbg1'
}
export default PopUp;