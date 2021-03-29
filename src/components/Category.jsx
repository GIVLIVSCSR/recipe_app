import React from 'react';
import BaseLayout from './BaseLayout';
import GlobalNav from './GlobalNav';
import CategoryItem from './CategoryItem';

const Category = props => (
	<BaseLayout userInput={props.userInput} handleUserInput={props.handleUserInput}>
		<GlobalNav />
		<section className="recepies">
      <div className="recipies-container">
        <nav className="recipies-nav">
          <h2 className="recipies-nav-category-title">{props.category}</h2>
        </nav>
				<div className="recipies-row">
          <ul className="recipies-list">
            {props.categoryItems.map(item => 
            	<CategoryItem key={item.title} title={item.title} ingredients={item.ingredients} image={item.image} />)}
          </ul>
        </div>
      </div>
    </section>
	</BaseLayout>
);

export default Category;