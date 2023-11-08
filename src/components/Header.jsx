import React from 'react'
import logo from '../images/Logo.png';
import Navigation from './Navgation';

export default function Header() {
  return (
    <header>
      <div className='wrapper'>
        <div className='site-logo'>
          <a href='/'>
            <img src={logo} alt='SuperMarket' />
          </a>
        </div>
        <Navigation />
        </div>
    </header>
  )
}
