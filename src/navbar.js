import React from 'react';
import './App.css';

const BottomNavigationBar = () => {
  return (
    <div className="navbar">
      <img className='navbar-icons' src={require('./qr-code.png')} alt="QR" />
      <img className='navbar-icons' src={require('./shopping-cart.png')} alt="shop" />
      <img className='navbar-icons' src={require('./home.png')} alt="home" />
      <img className='navbar-icons' src={require('./user.png')} alt="user" />
      <img className='navbar-icons' src={require('./setting.png')} alt="settings" />
    </div>
  );
};

export default BottomNavigationBar;
