import React from 'react';

const BaseSearchForm = props => (
	<div className='header-search-container'>
  	<form className='header-search-form'>
    	{props.children}
   	</form>
	</div>
);

export default BaseSearchForm;
