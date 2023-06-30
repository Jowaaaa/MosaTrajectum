import React from "react";
import "../App.css";

const ImageGrid = () => {
  const handleClick = (imageName) => {
    console.log(`Clicked image: ${imageName}`);
    localStorage.setItem("choice","None")
    localStorage.removeItem("choice");
    localStorage.setItem("choice", imageName);


  };

  return (
    <div className="image-grid">
      <div className="row">
        <div className="column">
          <img
            src={require("../beer.png")}
            alt="(speciaal) bier"
            className="grid-image"
            onClick={() => handleClick("Image 1")}
          />
          <p>(speciaal) bier</p>
        </div>
        <div className="column">
          <img
            src={require("../furniture.png")}
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 2")}
          />
          <p>meubelzaken</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img
            src={require("../sport.png")}
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 3")}
          />
          <p>sport en spel</p>
        </div>
        <div className="column">
          <img
            src={require("../history.png")}
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 4")}
          />
          <p>Historie en Cultuur</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img
            src={require("../restaurant.png")}
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 5")}
          />
          <p>Restaurants</p>
        </div>
        <div className="column">
          <img
            src={require("../music.png")}
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 6")}
          />

        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
