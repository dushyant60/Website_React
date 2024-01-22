import React from 'react';
import './Footer.css'; // Import CSS file for styling
import { SocialIcon } from 'react-social-icons'; // Import SocialIcon component from the library
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const redirectTotermsandConditions = () => {
    navigate("/terms");
    window.location.reload();
  };

  return (
    <footer className="footer">
      <div className='main-container-ft'>
      <div className='container-ft'>
      <div className='details'>
        <div className="contact-info">
          <div className="company-info">
            <img src='./images/logo1.png' alt="Company Logo" className="company-logo" />  
            <h3>Contact-Info</h3>
            <p>Hope Tower, 18th Floor, Unit No. TS-1926, Plot No. C-03, Sec-04, Galaxy Blue Sapphire Mall, Greater Noida 201309 </p>
            <p>Email: sales@onelogica.com</p>
            <p>Contact: +91-9953793025</p>
          </div>
        </div>
        <div className="social-links">
          {/* Replace the image elements with SocialIcon components */}
          <SocialIcon url="https://www.linkedin.com/company/onelogica/" className="social-icon" target="_blank" rel="noopener noreferrer" network="linkedin" />
          <SocialIcon url="https://www.youtube.com/channel/UCBo9n4HdMCJZ6VTWvPrTLqg" className="social-icon" target="_blank" rel="noopener noreferrer" network="youtube" />
          {/* <SocialIcon url="https://twitter.com/" className="social-icon" target="_blank" rel="noopener noreferrer" network="x" /> */}
        </div>
      </div>
      <div className="location-image">
        <img src="./images/ourlocations.png" alt="map"/>
      </div>
      </div>
      <div className="footer-links">
        <div className='copyright-text'>
        <p>© Copyright 2024. All Rights Reserved by Onelogica</p>
        </div>
        <div className='tandP'>
        <Link onClick={redirectTotermsandConditions}>Terms & Conditions</Link>
        <Link to="/privacy">Privacy</Link>
        </div>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
