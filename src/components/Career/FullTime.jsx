/* eslint-disable jsx-a11y/img-redundant-alt */
// Career.jsx

import React from "react";
import {
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./Career.css"; // Import the CSS file
import Footer from "../Footer/Footer";
// import EmployeesReviewsPage from "./EmployeesReviewsPage";
import JobList from "./JobList";

const FullTimePage = () => {
  return (
    <div className="careerPage">
      {/* Section 1: Panoramic Image */}
      <div className="panoramicImage-interns">
        <Typography variant="h2" gutterBottom className="heading">
          Build the Future
        </Typography>
        <Typography variant="h5" className="subheading">
          Join our team of innovative minds
        </Typography>
      </div>

      <div className="container-hiring">
        <div className="image-container-hiring">
          <img
            className="hiringImg"
            src="../images/fullTime_Img.jpg"
            alt="hiring-Image"
          />
        </div>
        <div className="hiring">
          <h1>Inclusive Hiring for Full Time...</h1>
          <h2>
            "At Onelogica, our commitment to fostering a thriving environment
            for full-time employees extends beyond conventional boundaries.
            Rooted in an open and collaborative culture, our workforce
            experiences a realm of impactful opportunities designed to elevate
            their professional trajectory. Engaged in cutting-edge projects from
            the outset, our full-time team actively contributes to the
            development and implementation of innovative solutions,
            significantly influencing the global landscape. We prioritize the
            well-being and growth of our employees, offering not only a flexible
            work culture but also an array of substantial benefits, including
            competitive compensation packages, professional development
            programs, and comprehensive healthcare coverage. At Onelogica, we
            believe in empowering our full-time workforce with the tools and
            resources they need to succeed, creating a dynamic and fulfilling
            career journey."
          </h2>
          <h1>Let's transform together!</h1>
          <Link
            className="linkedin-button"
            style={{
              textDecoration: "none",
              fontSize: "16px",
            }}
            to="/linkedin-profile-link" // Add your LinkedIn profile link here
            target="_blank"
          >
            <img
              src="../images/linkedin.png" // Replace with the correct path to the LinkedIn logo
              alt="LinkedIn Logo"
              style={{ marginLeft: "-1%", width: "14%" }} // Adjust the spacing as needed
            />
          </Link>
        </div>
      </div>

      <JobList />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FullTimePage;
