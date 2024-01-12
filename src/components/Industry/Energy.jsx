/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";
import WorkProcess from "./WorkProcess/WorkProcess";
import WorkProcessSmall from "./WorkProcess/WorkProcessSmall";
import "./Industry.css"; // Ensure this imports the shared CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from '@mui/material';

const Energy = ({ headingText, introText, paragraphText, carouselImages }) => {
  const [showRenewable, setShowRenewable] = useState(false);
  const [showWater, setShowWater] = useState(false);
  const [showWaste, setShowWaste] = useState(false);

  const renewableSectionRef = useRef(null);
  const waterSectionRef = useRef(null);
  const wasteSectionRef = useRef(null);
  const navbarRef = useRef(null); // Add a ref for the Navbar

  const additionalScrollOffset = -150;

  useEffect(() => {
    // Function to scroll to the opened section
    const scrollToOpenedSection = () => {
      const navbarHeight = navbarRef.current ? navbarRef.current.clientHeight : 0;

      if (showRenewable && renewableSectionRef.current) {
        const offsetTop = renewableSectionRef.current.offsetTop - navbarHeight + additionalScrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
      if (showWater && waterSectionRef.current) {
        const offsetTop = waterSectionRef.current.offsetTop - navbarHeight + additionalScrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
      if (showWaste && wasteSectionRef.current) {
        const offsetTop = wasteSectionRef.current.offsetTop - navbarHeight + additionalScrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    // Call the function after the component updates
    scrollToOpenedSection();
  }, [showRenewable, showWater, showWaste]);

  // Sample content for sections if not provided

  const headingMain = `Energy`;

  const headingIntroText = `"Transform your energy sector with innovative solutions and embrace a sustainable future."`;

  const headingParagraphText = `The energy sector plays a vital role in powering economies and shaping the future. With the increasing focus on renewable energy, advancements in oil and gas technologies, and the need for efficient utilities, our solutions are designed to address the challenges and opportunities in the dynamic energy landscape.`;

  const sampleCarouselImages = [
    "./images/RenewableEnergyImage.jpeg",
    "./images/WaterImage.jpeg",
    "./images/WasteImage.jpeg",
  ];

  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  const handleGridItemClick = (itemTitle) => {
    switch (itemTitle) {
      case "Renewable":
        setShowRenewable(!showRenewable);
        setShowWater(false);
        setShowWaste(false);
        break;
      case "Water":
        setShowRenewable(false);
        setShowWater(!showWater);
        setShowWaste(false);
        break;
      case "Waste":
        setShowRenewable(false);
        setShowWater(false);
        setShowWaste(!showWaste);
        break;
      default:
        break;
    }
  };

  // Settings for the Grids

  const gridItemsenergy = [
    {
      title: "Renewable",
      description: "Help you transit to a more sustainable, safer ,cleaner and smarter state by adopting an ecosystem approach.",
    },
    {
      title: "Water",
      description: "Optimize water usage, reduce water consumption through a sustainable approach.",
    },
    {
      title: "Waste",
      description: "Implement smart waste management solutions for a cleaner and sustainable environment.",
    },
  ];

  return (
    <div>
      <div className="bfsi-content">
        {/* Introductory Section */}
        <section className="energyintro-section">
          <div className="bfsiintro-text">
            <h1>{headingText || headingMain}</h1>
            <p>{introText || headingIntroText}</p>
          </div>
        </section>

        {/* Paragraph Section */}
        <section className="energyparagraph-section modern-heading">
          <div className="section-content">
            <div className="section-image">
              <img
                className="energyImage"
                src="./images/Energy_P_img.jpeg"
                alt="Your Image"
              />
            </div>
            <div className="section-text">
              <h2>{headingText || headingMain}</h2>
              <p>{paragraphText || headingParagraphText}</p>
            </div>
          </div>
        </section>

        <section className="bfsi-grid-section">
          <div className="bfsi-grid">
            {gridItemsenergy.map((item, index) => (
              <div className="bfsi-grid-item" key={index}>
                <img
                  src={sampleCarouselImages[index] || carouselImages[index]}
                  alt={`Grid Image ${index + 1}`}
                />
                <div className="bfsi-grid-item-overlay">
                  <h3 style={{ color: "whitesmoke" }}>{item.title}</h3>
                  <p style={{ width: "70%" }}>{item.description}</p>
                  <button
                    className="read-more-btn"
                    onClick={() => handleGridItemClick(item.title)}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sections for Renewable, Water, Waste */}

        {showRenewable && (
          <section className="renewable-section" style={{ marginBottom: "20px" }} ref={renewableSectionRef}>
            <div className="gif-container">
              <img
                className="gif-renewable"
                src="./videos/RenewableEnergy.gif"
                alt="Renewable Energy GIF"
              />
            </div>
          </section>
        )}

        {showWater && (
          <section className="water-section" style={{ marginBottom: "20px" }} ref={waterSectionRef}>
            <div className="gif-container">
              <img
                className="gif-water"
                src="./videos/WaterManagement.gif"
                alt="Water Management GIF"
              />
            </div>
          </section>
        )}

        {showWaste && (
          <section className="waste-section" style={{ marginBottom: "20px" }} ref={wasteSectionRef}>
            <div className="gif-container">
              <img
                className="gif-waste"
                src="./videos/WasteManagement.gif"
                alt="Waste Management GIF"
              />
            </div>
          </section>
        )}
      </div>

      {isSmallScreen ? (
        <section className="work-process-section">
          {/* Render the WorkProcessSmall component for small screens */}
          <WorkProcessSmall />
        </section>
      ) : (
        <section className="work-process-section">
          {/* Render the WorkProcess component for larger screens */}
          <WorkProcess />
        </section>
      )}

      {/* Join-us and TextStack Goes Here */}
      <TextShpere />

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

      {/* Scroll to the opened section */}
      {showRenewable && renewableSectionRef.current && renewableSectionRef.current.scrollIntoView({ behavior: "smooth" })}
      {showWater && waterSectionRef.current && waterSectionRef.current.scrollIntoView({ behavior: "smooth" })}
      {showWaste && wasteSectionRef.current && wasteSectionRef.current.scrollIntoView({ behavior: "smooth" })}
    </div>
  );
};

export default Energy;
