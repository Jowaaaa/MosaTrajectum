import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import React, {useState} from 'react';
import Voorkeuren from './pages/Voorkeuren'


const App = () => {
  
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = option => {
    setSelectedOption(option);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home selectedOption={selectedOption} />}
        />
        <Route
          path="/voorkeuren"
          element={
            <Voorkeuren
              handleOptionChange={handleOptionChange}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
