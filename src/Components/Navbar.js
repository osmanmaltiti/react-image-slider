import React from 'react';
import '../Styles/Navbar/Navbar.css';

const Navbar = () => {
  return <div className='main-navbar'>
    <h1>Robot</h1>
    <div className='links'>
      <a href='#'>About</a>
      <a href='#'>Contact</a>
      <a href='#'>Pricing</a>
      <a href='#'>Sign Out</a>
    </div>
  </div>;
};

export default Navbar;
