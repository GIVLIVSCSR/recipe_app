import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './components/App';
import './sass/main.sass';

const renderApp = () => {
	render(
		<BrowserRouter>
			<App/>
		</BrowserRouter>, 
		document.getElementById('root')
	);
};

renderApp();
	
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
};