// BFSIPage.js

import React from "react";
import IndustryPage from "./IndustryPage";

const BFSIPage = () => {
  // Specific details for BFSI
  const headingText = "BFSI";
  const introText = `"Empower your BFSI organization with data-driven insights and improve decision-making with our advanced data science solutions."`;
  const paragraphText = `The BFSI market has demonstrated significant growth in recent years and is expected to continue expanding in the near future. In 2022, the market was valued approximately at 24.5 trillion dollars and is projected to approach 30 trillion dollars by 2025. This growth can be attributed to a variety of factors, including the increasing adoption of digital technologies, the rise of open banking regulations, and the growing demand for personalized financial products and services.`;

  const backgroundImage = "../images/bfsi.jpg";

  const sectionImage = "../images/BFSI_Image.jpeg";
 
  const carouselImages = [
    "../images/Banking_Image.jpeg",
    "../images/CapitalMarketImg.jpeg",
    "../images/InsuranceImage.jpeg",
  ];

  const gridItems = [
    {
      title: "Banking",
      description: "We aid banks with smart solutions for banking, enhanced fraud detection, and automated customer services",
      additionalImage: "../videos/Banking_Use_Cased.gif",
    },
    {
      title: "Capital Market",
      description: "We focus on ensuring sustainable, long-term growth for lasting capital gains in an increasingly digital future.",
      additionalImage: "../videos/CapitalMarket.gif",
    },
    {
      title: "Insurance",
      description: "We Discover how we help redefine insurance gains by redefining businesses through digitalization.",
      additionalImage: "../videos/InsuranceGif.gif",
    },
    // Add more grid items as required
  ];

  return (
    <IndustryPage 
      headingText={headingText}
      introText={introText}
      backgroundImage={backgroundImage}
      sectionImage={sectionImage}
      paragraphText={paragraphText}
      carouselImages={carouselImages}
      gridItems={gridItems}
    />
    
  );
};

export default BFSIPage;
