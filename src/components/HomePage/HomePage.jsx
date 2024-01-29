/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";
import "./HomePage.css";
// import IntroModal from "./IntroModal";

const HomePage = () => {
  
  const navigate = useNavigate();

   //[ Ram Mandir Video ]

  // const [isModalOpen, setIsModalOpen] = useState(true);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const introVideoSrc = "./videos/Ram Mandir.mp4"; 

  const products = [
    {
      id: 1,
      name: "GLAM",
      description: "Generative Language-based Analysis & Maximization",
      image: "/images/GlamLogo.jpg",
    },
    {
      id: 2,
      name: "iSAM",
      description: "Intelligent Startup Administration & Management",
      image: "/images/IsamLogo.png",
    },
    {
      id: 3,
      name: "EAS",
      description: "Enterprise Analytics Suite",
      image: "/images/EASLogo.png",
    },
    // Add more products as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectToProductAndSolutions = () => {
    navigate("/productandsolutions");
    window.location.reload(); // Reload the page
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div class="homepage">
      {/* <IntroModal isOpen={isModalOpen} closeModal={closeModal} videoSrc={introVideoSrc} /> */}
      <div class="intro-section">
        <div class="intro-video">
          <video
            title="Intro Video"
            width="710"
            height="400"
            autoPlay
            loop
            muted
            playsInline
            src="./videos/Intro_Video.mp4"
            frameBorder="0"
            allowFullScreen
            class="video-overlay"
          ></video>
        </div>
        <div class="intro-text">
          <h1>
            <span class="highlight">We</span> provide smart application using
            cloud and leading edge technologies
          </h1>
        </div>
      </div>

      {/* Fun Fact Area */}
      <div class="fun-fact-container">
        <div class="fun-fact-content">
          {/* <!-- Display your fun facts or statistics --> */}
          <div class="fun-fact-item">
            <div class="circle">100+</div>
            <p>Years of collective expertise</p>
          </div>
          <div class="fun-fact-item">
            <div class="circle">5+</div>
            <p>Products</p>
          </div>
          <div class="fun-fact-item">
            <div class="circle">20+</div>
            <p>Solutions</p>
          </div>
          <div class="fun-fact-item">
            <div class="circle">50+</div>
            <p>Strong minds, one unified vision</p>
          </div>
          {/* <!-- Add more fun facts or statistics --> */}
        </div>
      </div>

      {/* About-US */}

      <div className="about-us-container">
        <div className="container-aboutUS">
          <div className="about-us">
            <p>WHAT WE DO...</p>
            <h1>Empower your journey with our advanced cloud applications.</h1>
            <h2>
              At Onelogica, we're experts in developing cutting-edge smart
              applications, leveraging cloud technology for digital innovation.
              Our proficiency extends to Smart Applications, Data Analytics, Big
              Data, Machine Learning, and Artificial Intelligence. We stand out
              for delivering ready-to-use, highly innovative solutions.
              Moreover, we support organizations in business modernization
              through custom applications, harnessing leading-edge technologies
              like Generative AI for optimal transformation.
            </h2>
            <h1>Let's transform together!"</h1>
            <div className="buttons-container">
              <button className="contact-button" onClick={scrollToFooter}>Contact Us</button>
              <Link onClick={redirectToProductAndSolutions} className="products-button" style={{
                textDecoration: 'none', // Remove underline
                fontSize: '16px',
              }}>
            Products
            </Link>
            </div>
          </div>
          <div className="image-container">
            <img
              className="aboutUsImg"
              src="./images/AboutUsIMG.jpg"
              alt="About-Us-Image"
            />
          </div>
        </div>
        <div className="infoTabs-container">
          <div className="infoTabs">
            <div className="infoTab">
              <img src="./images/RandS.png" alt="Research & Solution" />
              <h3>Research & Solution</h3>
              <p>
                Our research-driven framework delivers solutions based on
                cutting-edge, proven technologies. Designed to add values.
              </p>
            </div>
            <div className="infoTab">
              <img src="./images/DandS.jpg" alt="Design & Strategy" />
              <h3>Design & Strategy</h3>
              <p>
                Design thinking creates world-class products meeting future
                needs, while strategic thinking defines the path to optimal
                solutions.
              </p>
            </div>
            <div className="infoTab">
              <img src="./images/Insights.jpg" alt="Insights" />
              <h3>Insights</h3>
              <p>
                Data is the next oil, but only when crafted into insights. Our
                expertise helps businesses turn data into robust solutions.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="products-section">
        <h2 className="section-title">
          <span className="highlight">Our</span> Products
        </h2>
        <Slider {...sliderSettings} className="product-slider">
          {products.map((product) => (
            <div key={product.id}>
              <div className="product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link className="product-btn" onClick={redirectToProductAndSolutions} style={{
                textDecoration: 'none', // Remove underline
                fontSize: '16px',
              }}>
                      View Details
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <TextShpere />

      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
