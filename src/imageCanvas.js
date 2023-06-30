import React, { useRef, useEffect } from "react";
import imageSrc from "../src/Kwartieren.png";
import "./App.css";

const ImageWithSquare = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  
  
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const colors = ["green", "orange", "red"]; // mogelijke kleuren
    var now = new Date().getHours();

    const parkingPositions = [
      { x: 120, y: 300 }, // posities op canvas
      { x: 180, y: 180 },
      { x: 240, y: 240 }, 
      { x: 280, y: 325 },
    ];


    const VoorkeurOptie = localStorage.getItem("choice");

    const drawImageAndSquares = () => {
      context.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height); // display image op het canvas
      
      var redCircleCount = parkingPositions.filter(
        (square) => square.color === "red"
      ).length;

      for (let i = 0; i < parkingPositions.length; i++) {
        const colorIndex = Math.floor(Math.random() * colors.length); 
        const color = colors[colorIndex];

        context.fillStyle = color; // set kleur 

        const { x, y } = parkingPositions[i]; // x en y van huidige parking
        
        //instelling voor pins, parking en tekst
        const pinWidth = 10;
        const pinHeight = 30;

        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI); 
        context.fill();
        context.closePath();

        context.font = "bold 12px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("P", x, y);

        // pins op basis van drukte
        if (color === "red") {
          redCircleCount++
          const pinCount = redCircleCount; 
          drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount);
        } else if (color === "orange") {
          const pinCount = 4; // Standaard aantal oranje pins
          if (redCircleCount > 0) {
            drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount + 1); 
          } else {
            drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount);
          }
        } else if (color === "green") {
          const pinCount = 5; // Standaard aantal green pins
          if (redCircleCount > 0) {
            drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount + redCircleCount); //
          } else {
            drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount);
          }
          if (VoorkeurOptie === "Image 3") {
            drawPins(context, x, y, pinWidth, pinHeight, "orange", 2); // Voeg voorkeur pins toe als de voorkeur is gekozen en de parking groen is
          }
          if (now > 18){
            drawPins(context, x, y, pinWidth, pinHeight, "DarkBlue", 4);
            
          }
        }
      }
    };

    const currImage = imageRef.current;

    currImage.addEventListener("load", drawImageAndSquares); //laadt canvasimage voordat alles wordt getekend

    return () => {
      currImage.removeEventListener("load", drawImageAndSquares); // unmount listener
    };
  }, []);

  const drawPins = (context, x, y, pinWidth, pinHeight, color, count) => {
    for (let j = 0; j < count; j++) {
      const offsetX = Math.random() * 50 - 10; // Willekeurige positie van pins
      const offsetY = Math.random() * 50 - 10; 

      context.beginPath();
      context.moveTo(x + offsetX, y + offsetY);
      context.lineTo(x + offsetX - pinWidth / 2, y + offsetY - pinHeight);
      context.lineTo(x + offsetX + pinWidth / 2, y + offsetY - pinHeight);
      context.closePath();
      context.fillStyle = color;
      context.fill();
    }
  };

  return (
    <div>
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} width={400} height={500} />
        <img
          ref={imageRef}
          src={imageSrc}
          alt="Kwartieren"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default ImageWithSquare;
