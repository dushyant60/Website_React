/* eslint-disable jsx-a11y/img-redundant-alt */
// AboutUsPage.js

import React from "react";
import Footer from "../Footer/Footer";
import "./About.css";
import { useMediaQuery } from "@mui/material";
import { FaCheck } from 'react-icons/fa';

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");

  const Ourteam = [
    {
      list: "50",
      cover: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1411172638.1698308870&semt=sph",
      designation: "Co-Founder & CEO",
      name: "Navin Kumar ",
    },
    {
      list: "70",
      cover: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1705242219~exp=1705242819~hmac=7ab36142a7b26bb72d2c592e3f66ffa5a19b8a97be88a4f37e376c94db541052",
      designation: "Co-Founder & CTO",
      name: "Shiva Kumar",
    },
    {
      list: "80",
      cover: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1705242257~exp=1705242857~hmac=32cc303802ae81e861476c5d22d763d47d1e6d2cf1b6f54eb6632751c7901a62",
      designation: "Chief Delivery Officer",
      name: "Pradeep",
    },
    {
      list: "51",
      cover: "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?size=626&ext=jpg&ga=GA1.1.1411172638.1698308870",
      designation: "Human Resource Head",
      name: "Sima Priya",
    },
    {
      list: "71",
      cover: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=740&t=st=1705242506~exp=1705243106~hmac=2fd40f3daa6416003dd4cc15a52129a9800b1cb3fa08f4c2186ac696bb85e4a2",
      designation: "Product Mentor",
      name: "Siddheshwar Kumar",
    },
    {
      list: "72",
      cover: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?w=740&t=st=1705242676~exp=1705243276~hmac=c41232baa3dd027d408d39a02d7a14f20bedbf90cb2c51dbebe8c1b6c2285a62",
      designation: "Finance Mentor",
      name: "Rajeev Kumar",
    },
    {
      list: "73",
      cover: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833560.jpg?w=740&t=st=1705242617~exp=1705243217~hmac=495cca4492656bd9ff9d6bafd505713142a7f47e325bb614cd5f3f745f679147",
      designation: "Cloud Mentor",
      name: "Badal Vishal",
    },
  ]

  return (
    <div className="aboutus-page-content">
      {/* Introduction Section */}
      <section className="aboutus-intro-section">
        <div className="aboutus-intro-text">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="aboutus-story-section aboutus-modern-heading">
        <div className="aboutus-section-content">
          <div className="aboutus-section-image">
            <img
              className="aboutus-sectionImage"
              src="./images/icon/9.png"
              alt="Our Story Image"
            />
          </div>
          <div className="aboutus-section-text">
            <h2>We provide big data analytics Techniques & Data Solutions</h2>
            <p>
              We are a 4.0 era forward-thinking company, born in the cloud,
              committed to harnessing cutting-edge technologies to design and
              develop innovative products and solutions that drive disruptive
              transformation for businesses. Our focus is on building top-notch
              products that solve complex and evolving challenges, while
              constantly pushing the boundaries of traditional solutions through
              innovation. We endeavour to stay ahead of industry reforms and
              norms, such as Open Banking, Banking 4.0, Industry 4.0, and Open
              Healthcare. As a data and analytics company, we provide
              comprehensive solutions across a range of industries and
              technologies. Our offerings span the entire data analytics
              lifecycle, including data management, data quality, master data
              management, data governance, data warehousing, big data,
              analytics, AI and ML, as well as complementary technologies like
              RPA, blockchain, and bots. We also offer low-code no-code smart
              application development on the customer's preferred cloud platform
              (Azure, AWS, or GCP). We are dedicated to finding unique and
              effective solutions for our customers and continuously pushing the
              boundaries of data and technology.
            </p>

            <h2 className="custom-title">Unlock Your Journey in 3 Simple Steps</h2>
      <ul className="aboutus-steps-list">
        <li>
          <span className="check-icon">
            <FaCheck />
          </span>
          <span>Master the Secrets of Databases</span>
        </li>
        <li>
          <span className="check-icon">
            <FaCheck />
          </span>
          <span>Embark on the Adventure of Data Science Workflow</span>
        </li>
        <li>
          <span className="check-icon">
            <FaCheck />
          </span>
          <span>Ascend to New Heights with Big Data</span>
        </li>
      </ul>
          </div>
        </div>
      </section>

{/* Our Jurney Section */}

{/* <div className="startup-section">
        <h2>Our Journey</h2>
        <div className="info-container">
          <div className="circle">
            <span>01</span>
          </div>
          <div className="line"></div>
          <div className="circle">
            <span>02</span>
          </div>
          <div className="line"></div>
          <div className="circle">
            <span>03</span>
          </div>
          <div className="line"></div>
          <div className="circle">
            <span>04</span>
          </div>
        </div>
        <div className="additional-text">
          <p>Company Started: 16/01/2023</p>
          <p>Team: 35+</p>
          <p>Projects: 5+</p>
          <p>Presence: Global</p>
        </div>
      </div>   */}


      {/* Team Section */}
        <section className="aboutus-team-section">
          <div className='team-container'>
          <h2>Meet Our Team</h2>
              <div className='content-team '>
              {Ourteam.map((val, index) => (
                <div className='box' key={index}>
                  {/* <button className='btn3'>{val.list} Listings</button> */}
                  <div className='details'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      <i className='fa-solid fa-circle-check'></i>
                    </div>
                    <i className='fa fa-location-dot'></i>
                    <label>{val.designation}</label>
                    <h4>{val.name}</h4>
                    <div className='button flex'>
                      <button>
                        <i className='fa fa-envelope'></i>
                        Message
                      </button>
                      {/* <button className='btn4'>
                        <i className='fa fa-phone-alt'></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Add team member components or content here */}
        </section>

      {/* Values Section */}
      <section className="aboutus-innovation-section">
        <div className="aboutus-section-content">
          
          <div className="aboutus-section-text">
            <h2>We are experts in solving business problems using cutting edge technologies.</h2>
            <p>
            At Onelogica, we believe in finding innovative solutions to complex enterprise problems. With a focus on cutting-edge technologies and a deep understanding of industry best practices, we tailor our approach to meet your unique needs and challenges. Our team of experts is committed to delivering measurable results that drive business success.
            </p>
          </div>
          <div className="aboutus-section-image">
            <img
              className="aboutus-sectionImage"
              src="./images/icon/11.png"
              alt="Our Story Image"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer-section">
          <Footer />
        </section>
    </div>
  );
};

export default About;
