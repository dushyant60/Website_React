  /* eslint-disable jsx-a11y/img-redundant-alt */
  // IndustryPage.js

  import React, { useState, useEffect, useRef } from "react";
  import Footer from "../Footer/Footer";
  import TextShpere from "../TechStack/TextShpere";
  import WorkProcess from "./WorkProcess/WorkProcess";
  import WorkProcessSmall from "./WorkProcess/WorkProcessSmall";
  import "./Industry.css";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import { useMediaQuery } from '@mui/material';

  const IndustryPage = ({ headingText, introText, paragraphText, carouselImages, gridItems, backgroundImage, sectionImage }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const sectionRef = useRef(null);
    const navbarRef = useRef(null);
    const isSmallScreen = useMediaQuery('(max-width: 1024px)');
    const additionalScrollOffset = isSmallScreen ? -150 : 10;

    useEffect(() => {
      // Set the sectionRef after the component has mounted
      sectionRef.current = document.getElementById("additional-section");
    }, []);

    useEffect(() => {
      // Scroll to the section when selectedItem changes
      scrollToSection();
    }, [selectedItem]);

    const handleGridItemClick = (item) => {
      setSelectedItem(item);
    };

    const scrollToSection = () => {
      if (selectedItem && sectionRef.current) {
        const navbarHeight = navbarRef.current ? navbarRef.current.clientHeight : 0;
        const offsetTop = sectionRef.current.offsetTop - navbarHeight + additionalScrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    return (
      <div>
        <div className="industry-content">
          {/* Introductory Section */}
          <section className="industry-intro-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="industry-intro-text">
              <h1>{headingText}</h1>
              <p>{introText}</p>
            </div>
          </section>

          {/* Paragraph Section */}
          <section className="industry-paragraph-section modern-heading">
            <div className="section-content">
              <div className="section-image">
                <img
                  className="industryImage"
                  src={sectionImage}
                  alt={`Image for ${headingText}`}
                />
              </div>
              <div className="section-text">
                <h2>{headingText}</h2>
                <p>{paragraphText}</p>
              </div>
            </div>
          </section>

          {/* Grid Section */}
          <section className="industry-grid-section">
            <div className="industry-grid">
              {gridItems.map((item, index) => (
                <div className="industry-grid-item" key={index}>
                  <img
                    src={carouselImages[index]}
                    alt={`Grid Image ${index + 1}`}
                  />
                  <div className="industry-grid-item-overlay">
                    <h3 style={{ color: "whitesmoke" }}>{item.title}</h3>
                    <p style={{ width: "70%" }}>{item.description}</p>
                    <button
                      className="read-more-btn"
                      onClick={() => handleGridItemClick(item)}
                    >
                      Read More <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Show additional section on grid item click */}
          {selectedItem && (
            <section className="additional-section" style={{ marginBottom: "20px" }} ref={sectionRef}>
              {/* Display additional section content and the specific image */}
              <div className="additional-section-content">
                <img
                  className="gif-usecases"
                  src={selectedItem.additionalImage}
                  alt={`Additional Image for ${selectedItem.title}`}
                />
                {/* Add any additional content for the selected item */}
              </div>
            </section>
          )}
        </div>

        {/* Render WorkProcess component based on screen size */}
        {isSmallScreen ? (
          <section className="work-process-section">
            <WorkProcessSmall />
          </section>
        ) : (
          <section className="work-process-section">
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
      {selectedItem && sectionRef.current && sectionRef.current.scrollIntoView({ behavior: "smooth" })}
      </div>
    );
  };

  export default IndustryPage;
