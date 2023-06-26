import '../App.css';
import React from 'react';
import ImageWithSquare from '../imageCanvas';
import BottomNavigationBar from '../navbar';


const Home = () => {

  return (
    <div>
      <div>
        <p className='score'>Sterren: 240</p>
      </div>
    <div className='App'>
      <div>
      <h1 className='h1'>Welkom bij Mosa Trajectum</h1>
      <h4 style={{margin: "20px", color: "black"}}>Points of Interest op basis van parkeerdrukte</h4>
      </div>
      <div>
        <ImageWithSquare/>
      </div> 
      <div class="container">
        <nav class="navbar">
          <BottomNavigationBar/>
        </nav>
      </div>   
    </div>
    </div>
  );
}

export default Home;

