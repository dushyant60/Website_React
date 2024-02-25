// EnergyPage.js

import React from "react";
import IndustryPage from "./IndustryPage";

const EnergyPage = () => {
  // Specific details for Energy
  const headingText = "Energy";
  const introText = `"Empower your energy sector with innovative solutions and sustainable technologies."`;
  const paragraphText = `The energy industry plays a crucial role in powering the world's economies. Our solutions focus on renewable energy, smart grids, and efficient resource management to meet the growing demands for clean and sustainable energy sources.`;
  const backgroundImage = "./images/energy.jpg";
  const sectionImage = "./images/Energy_P_img.jpeg";
  const carouselImages = [
    "../images/RenewableEnergyImage.jpeg",
    "../images/WaterImage.jpeg",
    "../images/WasteImage.jpeg",
  ];

  const gridItems = [
    {
      title: "Renewable Energy",
      description: "We specialize in harnessing the power of renewable sources such as solar and wind for sustainable energy production.",
      additionalImage: "../videos/Reneable_Gif.gif",
    },
    {
      title: "Water",
      description: "Optimize water usage, reduce water consumption through a sustainable approach.",
      additionalImage: "../videos/Water_gif.gif",
    },
    {
      title: "Waste",
      description: "Sustainable strategies, resilience , reduce carbon emmissions.",
      additionalImage: "../videos/Waste_gif.gif",
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

export default EnergyPage;
