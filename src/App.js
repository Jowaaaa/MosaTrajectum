import './App.css';
import React from 'react';
import ImageWithSquare from '../src/imageCanvas';

function App() {

  return (
    <div>
      <div>
      <h1 style={{color: "red", margin: "20px"}}>Welkom bij Mosa Trajectum</h1>
      <h4 style={{margin: "20px"}}>drukte bij de parking</h4>
      </div>
      <div>
        <ImageWithSquare/>
      </div>      
    </div>
  );
}

export default App;

