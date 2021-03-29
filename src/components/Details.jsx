import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import BaseActionButton from './BaseActionButton';
import AddButton from './AddButton';
import Carousel from './Carousel';

const Details = props => (
  <BaseLayout userInput={props.userInput} handleUserInput={props.handleUserInput}>
    <section className="recepies">
      <div className="recipies-container recipies-product-full">
        <nav className="recipies-nav">
          <h2 className="recipies-nav-category-title">
            <Link to={`/category/${props.item.category}`}>
              {props.item.category}
            </Link>
          </h2>
        </nav>
        <div className="large-item">
          <a href="" className="large-thumbnail">
            <img src={`/src/img/thumbnails/${ props.item.image }`} alt="" />
          </a>
          <div className="recipies-item-description full-discription">
            <h1 className="large-title">{props.item.title}</h1>
            <span className="action-buttons-wrapper">
              { /* <BaseActionButton className={'add'} style={{background: 'blue'}} text={'Add to the Cookbook'} /> */ }
              <AddButton />
              <a href="" className="share action-btn">Share</a>
            </span>
            <h3 className="small-title">Ingredients</h3>
            <p className="product-full-ingredients">
                {props.item.ingredients}
            </p>
            <h4 className="medium-title">How to cook</h4>
            <p className="recipe-discription">
              {props.item.cook}
            </p>
            <div className="recipe-discription-more">more</div>
          </div>
        </div>
      </div>
    </section>
    <Carousel 
      category={'Recepies with similar ingredients'}
      items={props.foodItems.filter(item => 
        item.category === props.item.category)} />
    <Carousel
      category={props.item.category}
      items={props.foodItems.filter(item =>
        item.category === props.item.category)} />
  </BaseLayout>
);

export default Details;