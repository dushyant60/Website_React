import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import "./ProductAndSolution.css"; 
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";



const ProductCarousel = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentProductVideo, setCurrentProductVideo] = useState("");


  const products = [
    {
      image: "./images/GlamLogo.jpg",
      title: "GLAM",
      description:
        "The product uses AIOI to provide advanced analytics, Smart Search, Q&A, Summarization, Translation, Moderation, and chat capability on unstructured data.",
      video: "/videos/glam.mp4", // Replace with the actual video file path in public/videos folder
    },
    {
      image: "./images/IsamLogo.png",
      title: "iSAM",
      description:
        "Intelligent startup administration & Management Web App built on cognitive AI foundations is targeted to help startup manage their business optimally.",
      video: "/videos/iSam (1).mp4", // Replace with the actual video file path in public/videos folder
    },
    {
      image: "./images/EASLogo.png",
      title: "EAS",
      description:
        "EAS helps us in gaining insights into their business from every functional aspect of the organization. EAS is plug and play solution which provides and can be tailored to our customers' needs.",
      video: "/videos/EAS (1).mp4", // Replace with the actual video file path in public/videos folder
    },
    // Add more products with image paths, titles, descriptions, and video file paths
  ];

  const openVideoModal = (videoUrl) => {
    setCurrentProductVideo(videoUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentProductVideo("");
  };


  

  return (
    <div className="product-carousel">
      <Carousel showThumbs={false} infiniteLoop autoPlay showArrows={false}>
        {products.map((product, index) => (
          <div key={index} className="product-slide">
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {/* Add a button to open video */}
              <button
                className="product-button"
                onClick={() => openVideoModal(product.video)}
              >
                Know More
              </button>
            </div>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </Carousel>

      {/* Modal to display the video */}
      {showVideoModal && (
        <div className="video-modal">
          <div className="video-container">
          <span className="close-cross" onClick={closeVideoModal}>
              &times;
            </span>
            <video controls autoPlay className="product-video">
              <source src={currentProductVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

const CustomCard = ({ image, title, description }) => {
  return (
    <Card className="custom-card">
      <CardMedia component="img" src={image} alt={title} className="card-image" />
      <CardContent>
        <Typography variant="h5" component="div" className="card-title">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="card-description">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ProductAndSolution = () => {
  const cardData = [
    {
      image: "./images/Databases.png",
      title: "Databases",
      description: "Managing your all database migration over cloud.",
    },
    {
      image: "./images/Datawarehouse.png",
      title: "Data Warehouse",
      description: "Effective & Optimized solutions for future ready Datawarehouse.",
    },
    {
      image: "./images/BigData.png",
      title: "Big Data Platforms",
      description: "Transform your organization's data into actionable insights with cloud native powerful and scalable big data platforms.",
    },
    // Add more card data objects as needed
  ];
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  
  return (
    <div className="product-and-solution">
      <h2 className="section-heading">Products & Solutions</h2>
      <div className="carousel-Container">
        <ProductCarousel />
      </div>

      {/* The solution section content goes here: */}
      <div className="solutions">
        <div className={`solutions-container ${isSmallScreen ? 'small-screen' : ''}`}>
          <Grid container spacing={isSmallScreen ? 1 : 3}>
            {cardData.map((data, index) => (
              <Grid item xs={12} sm={isSmallScreen ? 12 : 6} md={4} key={index}>
                <CustomCard
                  image={data.image}
                  title={data.title}
                  description={data.description}
                />
              </Grid>
          ))}
        </Grid>
        </div>
      </div>
      <div className="wwd-section">
      <div className="wwd-img-section">
        <img className="wwd-img" src="./images/WWD_3.png" alt="What we do" />
       </div>
       </div>

      {/* Join-us and TextStack Goes Here */}
        <TextShpere />

        {/* Footer */}
        
        <footer>
          <Footer />
        </footer>
    </div>
  );
};

export default ProductAndSolution;
