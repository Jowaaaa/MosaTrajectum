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
          const pinCount = redCircleCount; // Number of pins based on the number of red circles
          drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount);
        } else if (color === "orange") {
          const pinCount = 4; // Default number of pins for orange circle
          if (redCircleCount > 0) {
            drawPins(context, x, y, pinWidth, pinHeight, "green", pinCount + 1); // Add an extra pin for the orange circle if there are any red circles
          } else {
            drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount);
          }
        } else if (color === "green") {
          const pinCount = 5; // Default number of pins for green circle
          if (redCircleCount > 0) {
            drawPins(context, x, y, pinWidth, pinHeight, "green", pinCount + redCircleCount); // Add pins based on the number of red circles
          } else {
            drawPins(context, x, y, pinWidth, pinHeight, "DarkRed", pinCount);
          }
          if (VoorkeurOptie === "Image 3") {
            drawPins(context, x, y, pinWidth, pinHeight, "orange", 2); // Add extra pins for the green circle if VoorkeurOptie is "Image 3" and there are red circles
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
