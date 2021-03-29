import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Items from './Items';

const SearchProcessingContainer = props => {
	const { userInput, handleUserInput, foodItems } = props;

	return (
		<div>
			<Header>
				<Search userInput={userInput} handleUserInput={handleUserInput} />		
			</Header>
			<main>
				<Items userInput={userInput} foodItems={foodItems} />
			</main>
		</div>
	);
};


export default SearchProcessingContainer;