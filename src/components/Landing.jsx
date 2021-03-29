import React from 'react';
import BaseLayout from './BaseLayout';
import Hero from './Hero';
import GlobalNav from './GlobalNav';
import Carousel from './Carousel';

const Landing = props => {
  const { userInput, handleUserInput, foodItems } = props;
  
  return (
    <BaseLayout userInput={userInput} handleUserInput={handleUserInput} >
      <Hero userInput={userInput} handleUserInput={handleUserInput} />
      <GlobalNav landing />
      <Carousel items={foodItems} />
    </BaseLayout>
  );
};

export default Landing;
