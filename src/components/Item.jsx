import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => (
	<Link to={`/details/${props.title}`}>
		<div className='searching-card'>
			<div className='item-card'>
				<div className='img-container'>
					<img src={`/src/img/thumbnails/${ props.image }`} />
				</div>
				<div className='item-text'>
					<h3 className='item-title'>{ props.title }</h3>
					<p className='item-ingredients'>{ props.ingredients }</p>
				</div>
			</div>
		</div>
	</Link>
);

export default Item;