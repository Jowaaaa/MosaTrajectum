import React, { useRef, useEffect } from 'react';
import imageSrc from '../src/Kwartieren.png';  // Replace with the actual path to your image

const ImageWithSquare = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawImageAndSquares = () => {
      context.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height); // Draw the image onto the canvas

      const colors = ['green', 'orange', 'red']; // Available colors for the squares

      const squarePositions = [
        { x: 150, y: 250 },    // Position of the first square
        { x: 200, y: 100 },   // Position of the second square
        { x: 230, y: 240 },   // Position of the third square
        { x: 350, y: 325 },   // Position of the fourth square
      ];

      for (let i = 0; i < squarePositions.length; i++) {
        const colorIndex = Math.floor(Math.random() * colors.length); // Select a random color index

        context.fillStyle = colors[colorIndex]; // Set the fill color to the selected color

        const { x, y } = squarePositions[i]; // Get the x and y positions from the squarePositions array

        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI); // Draw a circle at the specified position
        context.fill();
        context.closePath();
      }
    };

    imageRef.current.addEventListener('load', drawImageAndSquares); // Wait for the image to load before drawing the image and squares

    return () => {
      imageRef.current.removeEventListener('load', drawImageAndSquares); // Clean up event listener on unmount
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} />
      <img ref={imageRef} src={imageSrc} alt="Kwartieren Maastricht" style={{ display: 'none' }} />
    </div>
  );
};

export default ImageWithSquare;
