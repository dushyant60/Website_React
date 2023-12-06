import React from 'react';
import '../Industry/WorkProcess.css';
import { FaBrain, FaCog, FaRocket } from 'react-icons/fa'; // Import desired icons

const WorkProcess = () => {
  return (
    <div className='work-process'>
    <div className="container-wp">
      <h1 className="title"> <span className='highlighted'>HOW</span> We Work</h1>
      <div className="steps">
        <div className="step step-1">
          <div className="step-indicator">1</div>
          <FaBrain className="icon" />
          <h2>Problem Formulation</h2>
          <p>Describe the process of identifying and formulating problems that your company tackles.</p>
        </div>
        <div className="step step-2">
          <div className="step-indicator">2</div>
          <FaCog className="icon" />
          <h2>Applying Algorithm</h2>
          <p>Explain how algorithms are employed or developed to address the formulated problems.</p>
        </div>
        <div className="step step-3">
          <div className="step-indicator">3</div>
          <FaRocket className="icon" />
          <h2>Product Implementation</h2>
          <p>Showcase how the solutions derived from algorithms are implemented into products or services.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WorkProcess;
