import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HeroSearchForm extends Component {

  componentDidMount() {
    this.props.handleUserInput('');
  }

	handleUserInputOnChange = (e) => {
		this.props.handleUserInput(e.target.value);
		this.props.history.push('/search');
	}

	render() {
  	return (
  		<form className='search-form'>
    		<input 
    			type='text' 
    			className='search-input' 
    			placeholder='Search...'
    			autoFocus={true} 
    			onChange={this.handleUserInputOnChange} 
    			value={this.props.userInput} />
    		<input type='submit' className='search-button' value='search' />
  		</form>
		);
	}
}

export default withRouter(HeroSearchForm);




//change state
//change url -> /search -> Search
//
