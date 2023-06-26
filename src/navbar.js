import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

const BottomNavigationBar = () => {
  return (
    <div className="navbar">
      <img className='navbar-icons' src={require('./qr-code.png')} alt="QR" />
      <img className='navbar-icons' src={require('./shopping-cart.png')} alt="shop" />
      <Link to='/'>
        <img className='navbar-icons' src={require('./home.png')} alt="home" />
      </Link>     
      <img className='navbar-icons' src={require('./user.png')} alt="user" />
      <div>
        <Link to='/Voorkeuren'>
          <img className='navbar-icons' src={require('./setting.png')} alt="settings"/>
        </Link>
      </div>
      
    </div>
  );
};

export default BottomNavigationBar;
