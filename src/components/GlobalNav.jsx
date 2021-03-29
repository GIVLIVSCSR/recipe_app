import React from 'react';
import { Link } from 'react-router-dom';

const GlobalNav = props => (
	<nav className={`global-nav ${props.landing ? null : 'nothome'}`}>
    <div className="nav-container">
  		<ul className="nav-list">
  	    <li className="nav-list-item">
          <Link to='/category/Snacks' className="nav-list-item-link">
            <figure className="nav-list-item-link-icon snack-icon"></figure>
            <span className="nav-list-item-category-name">Snacks</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to='/category/Salads' className="nav-list-item-link">
            <figure className="nav-list-item-link-icon salat-icon"></figure>
            <span className="nav-list-item-category-name">Salads</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to='/category/Meals' className="nav-list-item-link">
            <figure className="nav-list-item-link-icon meal-icon"></figure>
            <span className="nav-list-item-category-name">Meals</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to='/category/Desserts' className="nav-list-item-link">
            <figure className="nav-list-item-link-icon dessert-icon"></figure>
            <span className="nav-list-item-category-name">Desserts</span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to='/category/Popular' className="nav-list-item-link">
            <figure className="nav-list-item-link-icon popular-icon"></figure>
            <span className="nav-list-item-category-name">Popular</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default GlobalNav;