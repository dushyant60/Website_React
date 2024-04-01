import React from 'react';
import IndustryPage from "./IndustryPage";

const HealthCare = () => {
  const headingText = "Biotechnology";
  const introText = `"The biotechnology industry is a sector that utilizes biological organisms, cells, and processes to create products and services that are beneficial to society. It encompasses different fields such as healthcare, agriculture, and environmental science."`;
  const paragraphText = ` The biotechnology market, valued at $737.1 billion in 2020, is expected to grow at a 15.9% annual rate from 2021 to 2028. Challenges include navigating complex regulations, high research and development costs, and limited entry for smaller companies. Adhering to standards like Good Manufacturing Practice and ISO quality management ensures product safety and quality. The industry's growth is driven by demand for personalized medicine, gene editing, and sustainability. Despite promising growth, challenges such as regulation and competition persist. In renewable energy, IRENA predicts it could meet 86% of global electricity demand by 2050, highlighting its vital role in the shift to sustainable energy amid government policies and increased environmental awareness.`;
  const backgroundImage = "../images/biotechnolofy_bg.jpg";
  const sectionImage = "../images/biotehnology_P_Img.jpg";
  const carouselImages = [
    "../images/Biotechnology_Image.jpeg",
  ];

  const gridItems = [
    {
      title: "BioTechnology",
      description: "The advancements in biotechnology have led to the development of life-saving therapies and treatments for a wide range of diseases and conditions.",
      additionalImage: "../videos/Biotech_gif.gif",
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

export default HealthCare;




