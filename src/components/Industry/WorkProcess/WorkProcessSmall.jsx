import React from 'react';
import { FaBrain, FaCog, FaDesktop } from 'react-icons/fa';
import './WorkProcessSmall.css';

const WorkProcessSmall = () => {
  return (
    <div className="work-process-section">
      <div className="background-shapes"></div>
      <h1 className='Wp_h1_Small'>Our Work Process</h1>

      <div className="Wp_step">
      <FaBrain size={60} className="Wp_icon brain" />
        <h2>Problem Formulation</h2>
        
        <p>
          Clearly define the problem you're solving. Understand the requirements and constraints.
        </p>
      </div>

      <div className="Wp_step">
      <FaCog size={60} className="Wp_icon cog" />
        <h2>Applying Algorithm</h2>
       
        <p>
          Develop and apply appropriate algorithms to solve the identified problem. Test and iterate as needed.
        </p>
      </div>

      <div className="Wp_step">
      <FaDesktop size={60} className="Wp_icon desktop" />
        <h2>Product Implementation</h2>
        
        <p>
          Bring the solution to life. Implement the product, considering scalability, usability, and maintainability.
        </p>
      </div>
    </div>
  );
};


export default WorkProcessSmall;
