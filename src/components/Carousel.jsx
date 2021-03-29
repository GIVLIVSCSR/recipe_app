import React from 'react';
import { Link } from 'react-router-dom';
import CarouselEngine from './CarouselEngine';

const Carousel = props => (
	<section className='recipies'>
	 <div className="recipies-container">
  	 <nav className="recipies-nav">
    	 <h2 className="recipies-nav-category-title">{props.category}</h2>
    	 <Link to={`/category/${props.category}`} className="recipies-nav-all-link">
      	 <span className="recipies-nav-all-link-button">See all</span>
      	 <figure className="recipies-nav-all-arrow"></figure>
    	 </Link>
  	 </nav>
     <CarouselEngine items={props.items} />
    </div>
  </section>
);

export default Carousel;