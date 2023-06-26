import './App.css'
import React, { useState } from "react";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option when an option is chosen
  };

  return (
    <div className='dropdown'>
      <h3>Select an option:</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- Select --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
        <option value="option6">Option 6</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default DropdownMenu;
