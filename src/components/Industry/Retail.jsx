import React from 'react';
import IndustryPage from "./IndustryPage";

const Retail = () => {
  const headingText = "Retail and E-commerce";
  const introText = `"The retail and e-commerce industry are composed of businesses engaged in the sale of goods and services through physical stores or online platforms. It encompasses a wide range of businesses, from large multinational retailers to small independent sellers."`;
  const paragraphText = `
  In 2022, the global retail industry is valued at $26 trillion, with e-commerce at $4.5 trillion. Challenges include competition, changing consumer behavior, supply chain disruptions, and rising costs. To ensure fairness and protect consumers, the industry adheres to standards like data privacy, online payment, product safety, and intellectual property protection. Adherence to these standards is crucial for consumer trust and industry growth. Despite challenges, the retail and e-commerce sector is steadily growing, expected to reach $6.4 trillion in global e-commerce sales by 2024. The industry remains adaptable, evolving to meet consumer needs, leveraging new technologies, and overcoming challenges like supply chain disruptions, cybersecurity threats, and regulatory pressures.`;
  const backgroundImage = "./images/retail_bg.jpg";
  const sectionImage = "./images/retail_P_Img.jpg";
  const carouselImages = [
    "./images/E-com_Image.jpeg",
      "./images/CPG_Image.jpeg",
      "./images/Supply_Chain_Img.jpeg",
  ];

  const gridItems = [
    {
      title: "E-commerce Platforms",
      description: "Enhance your online presence and user experience with cutting-edge e-commerce platform solutions.",
      additionalImage: "./videos/ElectricVehicles.gif",
    },
    {
      title: "CPG",
      description: "CPG stands for consumer packaged goods. These are products that are sold to consumers and are designed to be used up or replaced regularly.",
      additionalImage: "./videos/SmartManufacturing.gif",
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize your supply chain processes to ensure efficiency and meet the demands of the digital marketplace.",
      additionalImage: "./videos/SmartManufacturing.gif",
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

export default Retail;



