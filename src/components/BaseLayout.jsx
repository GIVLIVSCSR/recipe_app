import React from 'react';
import BaseHeader from './BaseHeader';

const BaseLayout = props => (
	<div>
		<BaseHeader userInput={props.userInput} handleUserInput={props.handleUserInput} />
  	<main>
  		{props.children}
  	</main>
  	<footer></footer>
  </div>
);

export default BaseLayout;