import React from 'react';
import Header from './Header';
import OnScrollDown from './OnScrollDown';
import HeaderPromptFormContainer from './HeaderPromptFormContainer';

const BaseHeader = props => (
	<Header>
    <OnScrollDown>
      {scrollDown => scrollDown ? <HeaderPromptFormContainer userInput={props.userInput} handleUserInput={props.handleUserInput} /> : null}
    </OnScrollDown> 
  </Header>
);

export default BaseHeader;