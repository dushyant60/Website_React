// TechnologyPage.js

import React, { useState, useRef } from "react";
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";
import WorkProcess from "../Industry/WorkProcess/WorkProcess";
import WorkProcessSmall from "../Industry/WorkProcess/WorkProcessSmall";
import Carousel from "react-slick"; // Use a carousel library like react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from '@mui/material';
import "./Technology.css"; // Import your custom stylesheet
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const additionalSectionRef = useRef(null);

  const handleReadMoreClick = (index) => {
    setSelectedTechnology(technologies[index]);
    // Check if the ref is not null before calling scrollIntoView
    if (additionalSectionRef.current) {
      additionalSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  // Define technologies with their details
  const technologies = [
    {
      title: "Big Data and Analytics",
      description: "Harness the power of big data with advanced analytics for data-driven insights.",
      image: "./images/icon/6.png",
      gif: "./videos/Big-Data_gif.gif",
     
    },
    {
      title: "Machine Learning",
      description: "Explore the capabilities of machine learning for predictive analysis and automation.",
      image: "./images/icon/3.png",
      gif: "./videos/ML-gif.gif",
    },
    {
      title: "Open AI",
      description: "Discover the world of artificial intelligence with OpenAI's cutting-edge technologies.",
      image: "./images/icon/openAI_illustration.png",
      gif: "./videos/OpenAI-gif.gif",

    },
    {
      title: "DataBricks",
      description: "Empower your data engineering and data science workflows with Databricks.",
      image: "./images/icon/18.png",
      gif: "./videos/DataBriks_gif.gif",
    },
    {
      title: "Business Intelligence",
      description: "Drive informed decision-making through business intelligence and analytics solutions.",
      image: "./images/icon/10.png",
      gif: "./videos/BI_gif.gif",
    },
    {
      title: "LakeHouse/OneLake",
      description: "Build a unified data platform with Lakehouse architecture for efficient data management.",
      image: "./images/icon/7.png",
      gif: "./videos/LakeHouse_gif.gif",
    },
  ];

  // Carousel settings
  const carouselSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 70,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');


    return (
      <div className="technology-page">
        {/* Carousel Section */}
        <section className="technology-carousel-section">
          <Carousel {...carouselSettings}>
            {technologies.map((tech, index) => (
              <div key={index} className="technology-card">
                <img src={tech.image} alt={`Technology ${index + 1}`} />
                <div className="technology-card-content">
                  <h3>{tech.title}</h3>
                  <p>{tech.description}</p>
                  <button
                  className="read-more-button"
                  onClick={() => handleReadMoreClick(index)}
                >
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
              </div>
            ))}
          </Carousel>
        </section>
        {selectedTechnology && (
          <section ref={additionalSectionRef} className="additional-section"> 
    <div className="selected-technology-content">
      <img
        src={selectedTechnology.gif}
        alt={`Selected Technology GIF`}
        className="selected-technology-gif"
      />
    </div>
    </section>
)}
        
  
        {/* WorkProcess Section */}
        <section className="work-process-section">
          {isSmallScreen ? <WorkProcessSmall /> : <WorkProcess />}
        </section>
  
        {/* TextShpere Section */}
        <section className="text-sphere-section">
          <TextShpere />
        </section>
  
        {/* Footer Section */}
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    );
  };
export default Technology;
