import './App.css';
import React from 'react';
import ImageWithSquare from '../src/imageCanvas';

function App() {
  var randNum = Math.round(Math.random()*100)
  var randNum2 = Math.round(Math.random()*100)
  var randNum3 = Math.round(Math.random()*100)

  

  const bins = [ //verschillende ranges 
    {
      status: 'rustig',
      predicate: randNum => randNum < 50,
    },
    {
      status: 'middel',
      predicate: randNum => randNum < 75,
    },
    {
      status: 'druk',
      predicate: randNum => randNum > 75,
    }
  ]


  const parkingStatus = bins.find(bin => bin.predicate(randNum)).status; //zoek eerste bin die true teruggeeft.
  const parkingStatus2 = bins.find(bin => bin.predicate(randNum2)).status; //zoek eerste bin die true teruggeeft.
  const parkingStatus3 = bins.find(bin => bin.predicate(randNum3)).status; //zoek eerste bin die true teruggeeft.

  return (
    <div>
      <div>
      <h1 style={{color: "red", margin: "20px"}}>Welkom bij Mosa Trajectum</h1>
      <h4 style={{margin: "20px"}}>drukte bij de parking</h4>
      </div>
      <div>
        <ImageWithSquare/>
      </div>
      
      {/* <component>
        <h4 className={parkingStatus}>OLV</h4>
      </component>
      <component>
        <h4 className={parkingStatus2}>vrijhof</h4>
      </component>
      <component>
        <h4 className={parkingStatus3}>colonel</h4>
      </component> */}
      
      
    </div>
  );
}

export default App;

