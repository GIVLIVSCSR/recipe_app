import React from 'react';

const BaseActionButton = props => (
	<a style={props.style} className={`action-btn ${props.className}`}>
		{props.text}
	</a>
);

export default BaseActionButton;