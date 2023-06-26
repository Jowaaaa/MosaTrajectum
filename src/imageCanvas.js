import React, { useRef, useEffect } from "react";
import imageSrc from "../src/Kwartieren.png"; // Replace with the actual path to your image
import "./App.css";


const VoorkeurOptie = localStorage.getItem("choice");

const ImageWithSquare = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const drawImageAndSquares = () => {
      context.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height); // Draw the image onto the canvas
      const colors = ["green", "orange", "red"]; // Available colors for the squares

      const squarePositions = [
        { x: 150, y: 250 }, // Position of the first square
        { x: 200, y: 100 }, // Position of the second square
        { x: 230, y: 240 }, // Position of the third square
        { x: 350, y: 325 }, // Position of the fourth square
      ];


      for (let i = 0; i < squarePositions.length; i++) {
        const colorIndex = Math.floor(Math.random() * colors.length); // Select a random color index

        context.fillStyle = colors[colorIndex]; // Set the fill color to the selected color

        const { x, y } = squarePositions[i]; // Get the x and y positions from the squarePositions array

        const pinWidth = 10;
        const pinHeight = 30;

        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI); // Draw a circle at the specified position
        context.fill();
        context.closePath();

        context.font = "bold 12px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("P", x, y);

        // Add additional circles based on the color
        
        if (colors[colorIndex] === "red") {
          for (let j = 0; j < 2; j++) {
            const offsetX = Math.random() * 50 - 10; // Generate a random X offset within -10 to +10
            const offsetY = Math.random() * 50 - 10; // Generate a random Y offset within -10 to +10

            context.beginPath();
            context.moveTo(x + offsetX, y + offsetY);
            context.lineTo(x + offsetX - pinWidth / 2, y + offsetY - pinHeight);
            context.lineTo(x + offsetX + pinWidth / 2, y + offsetY - pinHeight);
            context.closePath();
            context.fillStyle = "DarkRed";
            context.fill();
          }
        } else if (colors[colorIndex] === "orange") {
          for (let j = 0; j < 4; j++) {
            const offsetX = Math.random() * 50 - 7.5; // Generate a random X offset within -7.5 to +7.5
            const offsetY = Math.random() * 50 - 7.5; // Generate a random Y offset within -7.5 to +7.5

            context.beginPath();
            context.moveTo(x + offsetX, y + offsetY);
            context.lineTo(x + offsetX - pinWidth / 2, y + offsetY - pinHeight);
            context.lineTo(x + offsetX + pinWidth / 2, y + offsetY - pinHeight);
            context.closePath();
            context.fillStyle = "DarkRed";
            context.fill();
          }
        } else if (colors[colorIndex] === "green") {
          for (let j = 0; j < 6; j++) {
            const offsetX = Math.random() * 75 - 5; // Generate a random X offset within -5 to +5
            const offsetY = Math.random() * 75 - 5; // Generate a random Y offset within -5 to +5

            context.beginPath();
            context.moveTo(x + offsetX, y + offsetY);
            context.lineTo(x + offsetX - pinWidth / 2, y + offsetY - pinHeight);
            context.lineTo(x + offsetX + pinWidth / 2, y + offsetY - pinHeight);
            context.closePath();
            context.fillStyle = "DarkRed";
            context.fill();

            if (VoorkeurOptie === "Image 3" && j < 2){
              const offsetX = Math.random() * 50 - 10; // Generate a random X offset within -10 to +10
              const offsetY = Math.random() * 50 - 10; // Generate a random Y offset within -10 to +10
    
              context.beginPath();
              context.moveTo(x + offsetX, y + offsetY);
              context.lineTo(x + offsetX - pinWidth / 2, y + offsetY - pinHeight);
              context.lineTo(x + offsetX + pinWidth / 2, y + offsetY - pinHeight);
              context.closePath();
              context.fillStyle = "orange";
              context.fill();
    
            }
          } 
        }
      }

      
    };

    const currImage = imageRef.current;

    currImage.addEventListener("load", drawImageAndSquares); // Wait for the image to load before drawing the image and squares

    return () => {
      currImage.removeEventListener("load", drawImageAndSquares); // Clean up event listener on unmount
    };
  }, []);

  return (
    <div className="canvas-wrapper">
      <canvas ref={canvasRef} width={500} height={500} />
      <img
        ref={imageRef}
        src={imageSrc}
        alt="Kwartieren"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageWithSquare;
