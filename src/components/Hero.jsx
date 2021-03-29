import React from 'react';
import HeroSearchForm from './HeroSearchForm';

const Hero = props => (
  <section className='hero'>
    <div className='hero-container'>
      <h1 className='hero-headline'>
        Find a recipe by ingredients
      </h1>
      <p className='hero-description'>
        Some text about how to search for a recipe
      </p>
    </div>
    <HeroSearchForm userInput={props.userInput} handleUserInput={props.handleUserInput} />
  </section>
);

export default Hero;
