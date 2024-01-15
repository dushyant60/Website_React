import React, { useEffect, useState } from "react";
import "./TextShpere.css";
import TagCloud from "TagCloud";
import Popup from "reactjs-popup";
import { FaTimes } from 'react-icons/fa'; 

const TextShpere = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "ESLint",
        "Three.js",
        "React",
        "Preact",
        "Parcel",
        "Jest",
        "Next",
        "ESLint",
        "Three.js",
        "VSCode",
       "TypeScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "ESLint",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "ESLint",
        "Three.js",
        "React",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "ESLint",
        "Three.js",
        "React",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
      ];
      const screenWidth = window.innerWidth;

      let radius = 320; // Default radius
      if (screenWidth <= 768) {
        // Adjust radius for smaller screens
        radius = 165; // Change the radius value for smaller screens
      }

      const options = {
        radius: radius,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options,);
    };
  }, []);

  return (
    <>
    <div className="techStack">
  <div className="intro-text-lefts">
    <h2 className="intro-headings">Join Us on This Journey</h2>
    <p className="intro-paragraph">
      <span className="highlight">Explore our tech stack showcase </span>a testament to our dedication,
      expertise, and commitment to delivering solutions that exceed
      expectations. Dive into the world of possibilities with us and let's
      embark on this transformative journey together!
    </p>
    <Popup
  open={isOpen}
  closeOnDocumentClick
  onClose={() => setIsOpen(false)}
  modal
  closeButton={<button className="close-button" onClick={() => setIsOpen(false)}><FaTimes /></button>}
>
  <div className="modal">
  <div className="container-tech">
  <button className="close-button" onClick={() => setIsOpen(false)}><FaTimes /></button>
      <div className="text">
        Join Us
      </div>
   
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Name</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Phone No.</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Email Address</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Business Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
            <br />
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</Popup>

<button className="contactButton_Techs" onClick={() => setIsOpen(true)}>
  Join Us
</button>
  </div>

  <div className="tagcloud-container">
 
      {/* span tag className must be "tagcloud"  */}
      <span className="tagcloud"></span>
  </div>
</div>
    </>
  );
};

export default TextShpere;