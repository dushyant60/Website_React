import React from 'react';
import Footer from '../Footer/Footer';
import TextShpere from '../TechStack/TextShpere';
import WorkProcess from './WorkProcess/WorkProcess';
import "./Industry.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BFSI = ({ pageTitle, headingText, introText, paragraphText, carouselImages }) => {
  // Sample content for sections if not provided

  const headingMain = `BFSI`;

  const headingIntroText = `Empower your BFSI organization with data-driven insights and improve decision-making with our advanced data science solutions.`;
  
  const headingParagraphText = `The BFSI market has demonstrated significant growth in recent years and is expected to continue expanding in the near future. In 2022, the market was valued approximately at 24.5 trillion dollars and is projected to approach 30 trillion dollars by 2025. This growth can be attributed to a variety of factors, including the increasing adoption of digital technologies, the rise of open banking regulations, and the growing demand for personalized financial products and services.`;
  
  const sampleCarouselImages = [
    // Sample image URLs for the carousel
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300'
  ];

  // Settings for the slick carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
        <section className="bfsiparagraph-section">
          <p>{paragraphText || headingParagraphText}</p>
        </section>

        {/* Carousel Section */}
        <section className="bfsislick-carousel-section">
          <Slider {...sliderSettings} className="bfsislick-carousel">
            {carouselImages || sampleCarouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Carousel Image ${index + 1}`} />
                <button>Read More</button>
              </div>
            ))}
          </Slider>
          {/* Read More button inside the carousel section */}
          <div className="bfsiread-more-button">
            
          </div>
        </section>
      </div>



      {/* Work Process Section */}
      <WorkProcess />
      
      {/* Join-us and TextStack Goes Here */}
      <TextShpere />
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BFSI;