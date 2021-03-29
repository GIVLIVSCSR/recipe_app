import React, { Component } from 'react';

class AddButton extends Component {
	state = {
		clicked: false
	}

	handleClick = () => {
		this.setState({
			clicked: this.state.clicked ? false : true
		});
	}

	render() {
		const { style, text } = this.state.clicked ? 
			{ style: {background: '#ff5722'}, text: 'Added' }
		:
			{ style: null, text: 'Add to the Cookbook' };
		
		return (
			<a style={style} className='action-btn add' onClick={this.handleClick}>
				{text}
			</a>
		);
	}
}

export default AddButton;