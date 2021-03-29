import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import foodItems from '../data.json'
import ScrollToTop from './ScrollToTop';
import Landing from './Landing';
import SearchProcessingContainer from './SearchProcessingContainer';
import Details from './Details';
import Category from './Category';
import SignupPage from './Signup/SignupPage';

class App extends Component { 
  state = {
    test: {},
  	userInput: '', 
    foodItems: foodItems.items,
    categories: [
      'Desserts'
    ]
  }

  //componentWillMount() {
  //  axios
  //    .get('http://localhost:3000/api')
  //    .then(responce => {
  //      this.setState({
  //        foodItems: responce.data
  //      });
  //    });
  //}

  handleUserInput = (text) => {
  	this.setState({ userInput: text })
  }

  render() {
    if (this.state.foodItems === []) {
      return null;
    };
  	return (
      <ScrollToTop>
    		<Switch>
      		<Route exact path='/' render={() => <Landing userInput={this.state.userInput} handleUserInput={this.handleUserInput} foodItems={this.state.foodItems} />} />
      		<Route path='/search' render={() => <SearchProcessingContainer userInput={this.state.userInput} handleUserInput={this.handleUserInput} foodItems={this.state.foodItems} />} />
          <Route 
            path='/details/:title' 
            render={props => 
              <Details 
                item={this.state.foodItems.find(item =>
                  props.match.params.title === item.title)}  
                userInput={this.state.userInput} 
                handleUserInput={this.handleUserInput}
                foodItems={this.state.foodItems} {...props} /> } />
          <Route
            path='/category/:category'
            render={props =>
              <Category 
                category={this.state.categories.filter(category =>
                  props.match.params.category === category)} 
                categoryItems={this.state.foodItems.filter(item =>
                  props.match.params.category === item.category)}
                userInput={this.state.userInput} 
                handleUserInput={this.handleUserInput} {...props} /> } />
          <Route path='/signup' render={() => <SignupPage /> } />
    		</Switch>
      </ScrollToTop>
  	);
  }
}

export default App;

