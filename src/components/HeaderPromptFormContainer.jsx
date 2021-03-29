import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import focus from './focus';
import BaseSearchForm from './BaseSearchForm';

class HeaderPromptFormContainer extends Component {
	state = {
		showInput: false
	}

	handleShowInput = () => {
		this.setState({ showInput: true });
		this.props.handleUserInput('');
		document.body.style.overflow = 'hidden';
	}

	handleHideInput = () => {
		this.setState({ showInput: false });
		document.body.style.overflow = 'auto';
	}

	handleUserInputOnChange = (e) => {
		this.props.handleUserInput(e.target.value);
		this.props.history.push('/search');
	}

	componentWillUnmount = () => {
		document.body.style.overflow = 'auto';
	}

	render() {
		return (
			<BaseSearchForm>
				{ 
					this.state.showInput ? 
						<input
							className='header-search-input' 
							type='text' 
							autoFocus={true} 
							onBlur={this.handleHideInput}
							onChange={this.handleUserInputOnChange}
							value={this.props.userInput} />
					:
						null
				}
				<a 
					className='header-search-button'
					onClick={this.handleShowInput}>
						Search
				</a>
			</BaseSearchForm>
		);
	}
}

export default withRouter(HeaderPromptFormContainer);