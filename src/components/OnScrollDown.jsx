import React, { Component } from 'react';

class OnScrollDown extends Component {
	state = {
		scrollDown: false
	}
	
	componentDidMount = () => {
		window.addEventListener('scroll', this.handleShowInput);
	}

	handleShowInput = () => {
		window.pageYOffset > 10 ?
			this.setState({ scrollDown: true }) :
			this.setState({ scrollDown: false });
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleShowInput);
	}

	render() {
		return <div>{this.props.children(this.state.scrollDown)}</div>;
	}
}

export default OnScrollDown;