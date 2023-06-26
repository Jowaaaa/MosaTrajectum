import '../App.css';
import React from 'react';
import BottomNavigationBar from '../navbar';
//import DropdownMenu from '../dropdown';
import ImageGrid from './imagesgrid';


const Voorkeuren = () => {


  return (
    <div>
      <div>
        <ImageGrid/>
           </div>
      <div class="container">
        <nav class="navbar">
          <BottomNavigationBar/>
        </nav>
      </div>   
    </div>
    
  );
}

export default Voorkeuren;

