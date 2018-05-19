import React from 'react';
import PropTypes from 'prop-types';

const TextGroupField = ({field, value, label, placeholder, error, type, onChange, className, tabIndex, autoComplete }) => {	
	return (
		<div>
			{ (label != "") ? <label><b> { label }   </b></label> : "" }
			<input value = { value } type={ type } placeholder = { placeholder } tabIndex = { tabIndex } autoComplete = { autoComplete } className = { className } name={field} onChange = { onChange } />
			{error && <div className="errors">{error}</div>}
		</div>
	);
}

TextGroupField.propTypes = {
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	tabIndex: PropTypes.string,
	autoComplete: PropTypes.string.isRequired,
}

TextGroupField.defaultProps = {
	type:'text',
	autoComplete: 'off'
}

export default TextGroupField;