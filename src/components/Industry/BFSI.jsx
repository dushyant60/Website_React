/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect, useRef } from "react";
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

const BFSI = ({ headingText, introText, paragraphText, carouselImages }) => {
  const [showBanking, setShowBanking] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);
  const [showInvestment, setShowInvestment] = useState(false);

  const bankingSectionRef = useRef(null);
  const investmentSectionRef = useRef(null);
  const insuranceSectionRef = useRef(null);                                                                                        
  const navbarRef = useRef(null); // Add a ref for the Navbar

  const additionalScrollOffset = -150;

  useEffect(() => {
    // Function to scroll to the opened section
    const scrollToOpenedSection = () => {
      const navbarHeight = navbarRef.current ? navbarRef.current.clientHeight : 0;

      if (showBanking && bankingSectionRef.current) {
        const offsetTop = bankingSectionRef.current.offsetTop - navbarHeight + additionalScrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
      if (showInvestment && investmentSectionRef.current) {
        const offsetTop = investmentSectionRef.current.offsetTop - navbarHeight + additionalScrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
      if (showInsurance && insuranceSectionRef.current) {
        const offsetTop = insuranceSectionRef.current.offsetTop - navbarHeight + additionalScrollOffset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    // Call the function after the component updates
    scrollToOpenedSection();
  }, [showBanking, showInvestment, showInsurance]);

  // Sample content for sections if not provided

  const headingMain = `BFSI`;

  const headingIntroText = ` "Empower your BFSI organization with data-driven insights and improve decision-making with our advanced data science solutions." `;

  const headingParagraphText = `The BFSI market has demonstrated significant growth in recent years and is expected to continue expanding in the near future. In 2022, the market was valued approximately at 24.5 trillion dollars and is projected to approach 30 trillion dollars by 2025. This growth can be attributed to a variety of factors, including the increasing adoption of digital technologies, the rise of open banking regulations, and the growing demand for personalized financial products and services.`;

  const sampleCarouselImages = [
    // Sample image URLs for the carousel
    "./images/Banking_Image.jpeg",
    "./images/CapitalMarketImg.jpeg",
    "./images/InsuranceImage.jpeg",
  ];
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');


  const handleGridItemClick = (itemTitle) => {
    switch (itemTitle) {
      case "Banking":
        setShowBanking(!showBanking);
        setShowInsurance(false);
        setShowInvestment(false);
        break;
      case "Insurance":
        setShowBanking(false);
        setShowInsurance(!showInsurance);
        setShowInvestment(false);
        break;
      case "Capital Market":
        setShowBanking(false);
        setShowInsurance(false);
        setShowInvestment(!showInvestment);
        break;
      default:
        break;
    }
  };

  // Settings for the Grids

  const gridItems = [
    {
      title: "Banking",
      description:
        "We aid banks with smart solutions for banking, enhanced fraud detection, and automated customer services",
      // Add more properties as needed
    },
    {
      title: "Capital Market",
      description:
        "We focus on ensuring sustainable, long-term growth for lasting capital gains in an increasingly digital future.",
      // Add more properties as needed
    },
    {
      title: "Insurance",
      description:
        "We Discover how we help redefine insurance gains by redefining businesses through digitalization.",
      // Add more properties as needed
    },
    // Add more grid items as required
  ];
  return (
    <div>
      <div className="bfsi-content">
        {/* Introductory Section */}
        <section className="bfsiintro-section">
          <div className="bfsiintro-text">
            <h1>{headingText || headingMain}</h1>
            <p>{introText || headingIntroText}</p>
          </div>
        </section>

        {/* Paragraph Section */}
        <section className="bfsiparagraph-section modern-heading">
          <div className="section-content">
            <div className="section-image">
              <img
                className="bfsiImage"
                src="./images/BFSI_P_Image.jpeg"
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
            {gridItems.map((item, index) => (
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

        {/* Sections for Banking, Insurance, Investment */}

        {showBanking && (
          <section className="banking-section" style={{marginBottom:"20px"}} ref={bankingSectionRef}>
            <div className="gif-container">
              <img
                className="gif-banking"
                src="./videos/Banking Use Cased.gif"
                alt="Banking Use Cases GIF"
              />
            </div>
          </section>
        )}

        {showInvestment && (
          <section className="banking-section" style={{marginBottom:"20px"}} ref={investmentSectionRef}>
            <div className="gif-container">
              <img
                className="gif-banking"
                src="./videos/CapitalMarket.gif"
                alt="Banking Use Cases GIF"
              />
            </div>
          </section>
        )}
        {showInsurance && (
          <section className="banking-section" style={{marginBottom:"20px"}} ref={insuranceSectionRef}>
            <div className="gif-container">
              <img
                className="gif-banking"
                src="./videos/InsuranceGif.gif"
                alt="Banking Use Cases GIF"
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
      {showBanking && bankingSectionRef.current && bankingSectionRef.current.scrollIntoView({ behavior: "smooth" })}
      {showInvestment && investmentSectionRef.current && investmentSectionRef.current.scrollIntoView({ behavior: "smooth" })}
      {showInsurance && insuranceSectionRef.current && insuranceSectionRef.current.scrollIntoView({ behavior: "smooth" })}
      

    </div>
  );
};

export default BFSI;
