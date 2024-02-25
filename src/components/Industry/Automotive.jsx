import React from 'react';
import IndustryPage from "./IndustryPage";

const Automotive = () => {
  const headingText = "Automotive";
  const introText = `"The biotechnology industry is a sector that utilizes biological organisms, cells, and processes to create products and services that are beneficial to society. It encompasses different fields such as healthcare, agriculture, and environmental science."`;
  const paragraphText = `The automotive industry is undergoing a transformative shift towards sustainability and innovation. Our solutions focus on electric vehicles, smart manufacturing, and efficient resource management to meet the evolving demands for cleaner and more sustainable transportation.`;
  const backgroundImage = "../images/automotive_bg.jpg";
  const sectionImage = "../images/Automotive_P_Img.jpeg";
  const carouselImages = [
    "../images/ElectricVehiclesImage.jpeg",
    "../images/SmartManufacturingImage.jpeg",
    "../images/EfficientResourceManagementImage.jpeg",
  ];

  const gridItems = [
    {
      title: "Electric Vehicles",
      description: "We specialize in electric vehicles (EVs) and charging infrastructure for sustainable and eco-friendly transportation.",
      additionalImage: "../videos/Elec_Vehicle_gif.gif",
    },
    {
      title: "Smart Manufacturing",
      description: "Implementing smart manufacturing processes for efficient and sustainable production in the automotive sector.",
      additionalImage: "../videos/Smart_Manufacturing_gif.gif",
    },
    {
      title: "Efficient Resource Management",
      description: "Optimizing resource usage and waste reduction through sustainable practices in automotive manufacturing.",
      additionalImage: "../videos/ERM_gif.gif",
    },
    // Add more grid items as required
  ];

  return (
    <IndustryPage
      headingText={headingText}
      introText={introText}
      paragraphText={paragraphText}
      backgroundImage={backgroundImage}
      sectionImage={sectionImage}
      carouselImages={carouselImages}
      gridItems={gridItems}
    />
  );
};

export default Automotive;

