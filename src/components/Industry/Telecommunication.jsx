import React from 'react';
import IndustryPage from "./IndustryPage";

const Telecommunications = () => {
  const headingText = "Telecommunications";
  const introText = `"The global telecom industry, valued at approximately $2.9 trillion in 2022, faces challenges like intense competition, evolving technology, and regulatory hurdles. Meeting rising demand for high-speed internet and mobile services while maintaining competitive prices is an ongoing challenge."`;
  const paragraphText = `The telecom industry refers to companies that provide communication services such as voice, data, and video transmission through wired and wireless networks. It also includes manufacturers of networking equipment and devices. The global telecom industry is worth approximately $2.9 trillion in 2022. Despite its significant size, the industry faces various challenges, including stiff competition, rapidly changing technology, and regulatory hurdles. Keeping prices competitive while meeting the increasing consumer demand for high-speed internet and mobile services is also a challenge for the telecom industry.`;
  const backgroundImage = "./images/telecommunication_bg.jpg";
  const sectionImage = "./images/Telecommunication_Img.jpg";
  const carouselImages = [
    "./images/tele_Img.jpeg",
  ];

  const gridItems = [
    {
      title: "Telecommunications",
      description: "Telecommunications has revolutionized the way we communicate and connect with one another.",
      additionalImage: "./videos/Telecom_gif.gif",
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

export default Telecommunications;

