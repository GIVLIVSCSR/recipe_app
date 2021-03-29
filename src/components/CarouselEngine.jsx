import React, { Component } from 'react';
import Carousel from './Carousel';
import CategoryItem from './CategoryItem';

class CarouselEngine extends Component {
	state = { 
		move: 0,
		containerWidth: 864,
		ulWidth: 1960,
		liWidth: 196 
	}

	handleMoveLeft = () => {
		this.state.ulWidth > this.state.containerWidth ?
			this.setState({ 
				ulWidth: this.state.ulWidth - this.state.liWidth,
				move: this.state.move + -this.state.liWidth
			})
		:
			this.setState({
				move: this.state.move
			});
	}

	handleMoveRight = () => {
		this.state.move < 0 ?
			this.setState({ 
				ulWidth: this.state.ulWidth + this.state.liWidth,
				move: this.state.move + this.state.liWidth 
			})
		:
			this.setState({
				move: this.state.move
			});
	}

	render() {
		return (
			<div>
				<div ref={ ref => this.row = ref } className="recipies-row-slider">
      		<ul style={{left: `${this.state.move}px` }} className="recipies-list-slider">
        		{!this.props.items ? null : this.props.items.map(item =>
        			<CategoryItem key={item.title} title={item.title} ingredients={item.ingredients} image={item.image} carousel /> )}
      		</ul>    
    		</div>
    		<div className="content-arrows">
          <a className="arrow left-arrow" onClick={this.handleMoveRight}></a>
          <a className="arrow right-arrow" onClick={this.handleMoveLeft}></a>
        </div>
      </div>
		);
	}
}

export default CarouselEngine;