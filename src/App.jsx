import {Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './components/Home';
import Cardapio from './components/Cardapio';
import Knowmore from './components/Knowmore';
import About from './components/About';


const App = () => {

  return (
    <>
      <Routes>
          <Route path="/" element={
        <>
            <Home />
            <Cardapio />
            <Knowmore />
        </>
        }
        />
          <Route path="/About" element={<About />} /> 
          <Route path="/Home" element={<Home />} /> 

      </Routes>   
    </>
  );
};
export default App;

