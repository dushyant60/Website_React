// TechnologyPage.js

import React from "react";
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";
import WorkProcess from "../Industry/WorkProcess/WorkProcess";
import WorkProcessSmall from "../Industry/WorkProcess/WorkProcessSmall";
import Carousel from "react-slick"; // Use a carousel library like react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from '@mui/material';
import "./Resources.css"; // Import your custom stylesheet


const Resources = () => {
  // Define technologies with their details
  const resources = [
    {
      title: "Training",
      description: "Explore our comprehensive training programs for skill development.",
      image: "./images/icon/Trainings.png",
    },
    {
      title: "Workshop",
      description: "Participate in our interactive workshops and enhance your knowledge.",
      image: "./images/icon/Workshops.png",
    },
    {
      title: "Blogs",
      description: "Read insightful blogs covering the latest trends and technologies.",
      image: "./images/icon/Blog.png",
    },
    {
      title: "Case Studies",
      description: "Discover real-world examples through our detailed case studies.",
      image: "./images/icon/CaseSTudy.png",
    },
    {
      title: "Newsletter",
      description: "Stay updated with our newsletter for curated content and announcements.",
      image: "./images/icon/NewsLetter.png",
    },
  ];

  // Carousel settings
  const carouselSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 100,
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
      <div className="resource-page">
      {/* Carousel Section */}
      <section className="resource-carousel-section">
        <Carousel {...carouselSettings}>
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <img src={resource.image} alt={`Resource ${index + 1}`} />
              <div className="resource-card-content">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
  
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
export default Resources;
