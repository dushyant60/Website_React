// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import HomePage from './components/HomePage/HomePage';
import ProductAndSolution from './components/ProductandSolution/ProductAndSolution';
import Industry from './components/Industry/Industry';
import Technology from './components/Technology';
import Resources from './components/Resources';
import About from './components/About';
import Career from './components/Career';

function App() {  
  return (
    <div className="App">
      <Router>
      <CustomNavbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productandsolutions" element={<ProductAndSolution/>} />
          <Route path="/industry" element={<Industry/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/career" celement={<Career/>} />
        </Routes>
        </Router>
      {/* Add your sections and content here */}
    </div>
  );
}

export default App;

