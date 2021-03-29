import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
	<div className='global-header'>
    <div className='global-header-container'>
      <Link to='/' className='global-header-logo' href='#'></Link>
      <a className='global-header-registration' href='#'>Sing up</a>
       {props.children}
    </div>  
 	</div>
);

export default Header;




