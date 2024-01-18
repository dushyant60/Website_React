import React from 'react';
import IndustryPage from "./IndustryPage";

const Manufacturing = () => {
  const headingText = "Manufacturing";
  const introText = `"The global manufacturing industry, worth $39.5 trillion in 2022, is poised for growth fueled by increasing demand, technology advancements, and government initiatives. Challenges include supply chain disruptions, geopolitical risks, and changing consumer preferences"`;
  const paragraphText = `One significant impact on the manufacturing industry today is the Industry 4.0, which refers to the integration of advanced technologies such as the Internet of Things (IoT), artificial intelligence (AI), and automation into manufacturing processes. Industry 4.0 has revolutionized the way goods are produced, leading to increased efficiency, improved quality, and reduced costs. It has also enabled manufacturers to collect and analyze vast amounts of data to optimize processes and make better decisions. The COVID-19 pandemic has accelerated the adoption of Industry 4.0 technologies in the manufacturing industry, and this trend is expected to continue in the coming years.`;
  const backgroundImage = "./images/manufacturing_bg.jpg";
  const sectionImage = "./images/Manufacturing_P_Img.jpg";
  const carouselImages = [
    "./images/Industrial_Product_Img.jpeg",
    "./images/Distribution_Img.jpeg",
    "./images/Process_Img.jpeg",
  ];

  const gridItems = [
    {
      title: "Industrial (Product)",
      description: "We help you Shift outlook, shift approach, shift mindsets, shift gears.",
      additionalImage: "./videos/Industrial_gif.gif",
    },
    {
      title: "Distribution & Logistics",
      description: "Build agile ,digital supply chains for better growth and profitability.",
      additionalImage: "./videos/Distribution_gif.gif",
    },
    {
      title: "Process",
      description: "AI development involves collecting, processing data to train models, deploying them, and monitoring in production",
      additionalImage: "./videos/Process_gif.gif",
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

export default Manufacturing;


