import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import './WorkProcessSmall.css';

const WorkProcessSmall = () => {
  return (
    <section className="work-process-small">
      <div className="container">
        <h2 className="section-title-wp">Our Work Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Problem Formulation</h3>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>Applying Algorithm</h3>
          </div>
          <div className="process-step">
            <div className="step-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>Product Implementation</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSmall;
