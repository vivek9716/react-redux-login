import React from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends React.Component {
	
	render () {
		const {id , type, text}	= this.props.message;
		return (
			<div>
				{ text }
			</div>
		)
	}
}

FlashMessage.propTypes = {
	messages:PropTypes.object.isRequired
}

export default FlashMessage;