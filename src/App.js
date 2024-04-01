// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/Navbar/CustomNavbar';
import HomePage from './components/HomePage/HomePage';
import ProductAndSolution from './components/ProductandSolution/ProductAndSolution';
import Technology from './components/Technology/Technology';
import Resources from './components/Resources/Resources';
import About from './components/About_Us/About';
import Career from './components/Career/Career';
import BFSI from './components/Industry/BFSI';
import Energy from './components/Industry/Energy';
import Manufacturing from './components/Industry/Manufacturing';
import Retail from './components/Industry/Retail';
import HealthCare from './components/Industry/HealthCare';
import Automotive from './components/Industry/Automotive';
import Telecommunications from './components/Industry/Telecommunication';
import TermsAndConditionsPage from './components/Footer/Terms&Condition';
import PrivacyPolicyPage from './components/Footer/Privacy';
import InternsPage  from './components/Career/InternsPage';
import FullTimePage from './components/Career/FullTime';
import RoleDetails from './components/Career/RoleDetails';
import DynamicApplicationForm from './components/Career/ApplyJobForm';
import JobDetails from './components/Career/JobDetails';


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
              <Route path="/automotive" element={<Automotive />} />
              <Route path="/telecommunications" element={<Telecommunications />} />
          {/* Industry End */}
          
          <Route path="/technology" element={<Technology/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/terms" element={<TermsAndConditionsPage/>} />
        <Route path="/privacy" element={<PrivacyPolicyPage/>} />
        <Route path="/internspage" element={<InternsPage/>} />
        <Route path="/fulltimepage" element={<FullTimePage/>} />
        <Route path = "/roledetails" element={<RoleDetails/>} />
        <Route path="/applyjobform/:jobId" element={<DynamicApplicationForm/>} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        </Routes> 
        </Router>

    </div>
  );
}

export default App;

