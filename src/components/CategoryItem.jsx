import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = props => (
	<li className={`recipies-item ${props.carousel ? null : 'full-row'}`}>
    <Link to={`/details/${props.title}`} className="thumbnail">
      <img src={`/src/img/thumbnails/${props.image}`} alt="" />
    </Link>
    <div className="recipies-item-description">
      <h3 className="recipies-item-title">
      	<Link to={`/details/${props.title}`} className="recipies-item-title-link">
      		{props.title}
      	</Link>
      </h3>
      <p className="recipies-item-ingredients">
       	<Link to={`/details/${props.title}`} className="recipies-item-ingredients-link">
          {props.ingredients}
        </Link>
      </p>
    </div>
  </li>
);

export default CategoryItem;