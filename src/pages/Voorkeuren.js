import '../App.css';
import React from 'react';
import BottomNavigationBar from '../navbar';
import ImageGrid from './imagesgrid';


const Voorkeuren = () => {


  return (
    <div>
      <div>
        <ImageGrid/>
           </div>
      <div className="container">
        <nav className="navbar">
          <BottomNavigationBar/>
        </nav>
      </div>   
    </div>
    
  );
}

export default Voorkeuren;

