// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import HomePage from './components/HomePage/HomePage';
import ProductAndSolution from './components/ProductandSolution/ProductAndSolution';
import Technology from './components/Technology';
import Resources from './components/Resources';
import About from './components/About';
import Career from './components/Career';
import BFSI from './components/Industry/BFSI';
import Energy from './components/Industry/Energy';
import Manufacturing from './components/Industry/Manufacturing';
import Retail from './components/Industry/Retail';
import HealthCare from './components/Industry/HealthCare';
import Automation from './components/Industry/Automation';
import Telecommunications from './components/Industry/Telecommunication';

function App() {  
  return (
    <div className="App">
      <Router>
      <CustomNavbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productandsolutions" element={<ProductAndSolution/>} />
          
          {/* Industry */}
          <Route path="/bfsi" element={<BFSI/>} />
          <Route path="/energy" element={<Energy />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/retail" element={<Retail />} />
              <Route path="/healthcare" element={<HealthCare />} />
              <Route path="/automation" element={<Automation />} />
              <Route path="/telecommunications" element={<Telecommunications />} />
          {/* Industry End */}
          
          <Route path="/technology" element={<Technology/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/career" celement={<Career/>} />
        </Routes> 
        </Router>

    </div>
  );
}

export default App;

