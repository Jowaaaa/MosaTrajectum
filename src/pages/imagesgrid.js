import React from "react";
import "../App.css";

const ImageGrid = () => {
  const handleClick = (imageName) => {
    console.log(`Clicked image: ${imageName}`);
    localStorage.setItem("choice","None")
    localStorage.removeItem("choice");
    localStorage.setItem("choice", imageName);


    // Add your desired logic here for handling the image click
  };

  return (
    <div className="image-grid">
      <div className="row">
        <div className="column">
          <img
            src="image1.png"
            alt="keuze 1"
            className="grid-image"
            onClick={() => handleClick("Image 1")}
          />
        </div>
        <div className="column">
          <img
            src="image2.png"
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 2")}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img
            src="image3.png"
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 3")}
          />
        </div>
        <div className="column">
          <img
            src="image4.png"
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 4")}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img
            src="image5.png"
            alt="keuze 2"
            className="grid-image"
            onClick={() => handleClick("Image 5")}
          />
        </div>
        <div className="column">
          <img
            src="image6.png"
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
