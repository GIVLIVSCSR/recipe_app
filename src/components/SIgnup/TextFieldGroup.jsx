import React from 'react';

const TextFieldGroup = ({ label, type, onChange, value, field, error }) => (
	<div>	
		<label>{label}</label>
		<input
			type={type}
			onChange={onChange}
			value={value}
			name={field} 
		/>
		{ error && <span>{error}</span> }
	</div>
);

export default TextFieldGroup;