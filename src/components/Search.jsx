import React, { Component } from 'react';
import BaseSearchForm from './BaseSearchForm';

class Search extends Component {

	handleUserInputOnChange = (e) => {
		this.props.handleUserInput(e.target.value);
	}

	render() {
		return (
			<BaseSearchForm>
				<input 
					className='header-search-input' 
					type='text'
					autoFocus={true}
					onChange={this.handleUserInputOnChange}
					value={this.props.userInput}
				/>
				<a
					className='header-search-button'>
						Search
				</a>
			</BaseSearchForm>
		);
	}
}

export default Search;