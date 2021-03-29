import React from 'react';
import Item from './Item';

const Items = props => {
	const { userInput, foodItems } = props; 
		return (
			<div className='search-container'>
				{foodItems
					.filter(item => `${item.ingredients}`.toUpperCase().indexOf(userInput.toUpperCase()) >=0)
					.map(item => 
						<Item 
							key={item.title} 
							title={item.title} 
							ingredients={item.ingredients} 
							image={item.image} />)}
			</div>
	);
};

export default Items;