/* eslint-disable jsx-a11y/img-redundant-alt */
// Career.jsx

import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./Career.css"; // Import the CSS file
import Footer from "../Footer/Footer";
// import EmployeesReviewsPage from "./EmployeesReviewsPage";
import JobList from "./JobList";
import RoleDetails from "./RoleDetails";


const InternsPage = () => {
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
        <div className="hiring">
          <h1>Inclusive Hiring for Interns...</h1>
          <h2>
            "At Onelogica, our interns are drawn to a compelling mix of
            world-class mentors, an open culture, and impactful opportunities,
            making for the ultimate fun learning experience. Paired with top
            mentors, supported by managers, and integrated into the Onelogica
            community, interns work on real-time projects from day one, actively
            contributing to coding and implementing algorithms that shape the
            world. Encouraging post-course integration, we offer a flexible
            working culture and monetary benefits, fostering an environment
            where learning meets real-world impact."
          </h2>
          <h1>CONNECT WITH US</h1>
          <Link
          className="linkedin-button"
          style={{
            textDecoration: 'none',
            fontSize: '16px',
          }}
          to="https://www.linkedin.com/company/onelogica/"  // Add your LinkedIn profile link here
          target="_blank"
        >
          <img
            src="./images/linkedin.png"  // Replace with the correct path to the LinkedIn logo
            alt="LinkedIn Logo"
            style={{ marginLeft: '-1%', width: "17%" }}  // Adjust the spacing as needed
          />
        </Link>

        </div>
        <div className="image-container-hiring">
          <img
            className="hiringImg"
            src="./images/internsCareer_img.jpg"
            alt="hiring-Image"
          />
        </div>
      </div>

      {/* Section 2: Ready to Change the World */}
      <Container className="career-container">
        {/* Section 3: Cards for Different Audiences */}
        <Grid container spacing={3} className="cardContainer">
          {/* Card 1: Students and Recent Graduates */}
          <Grid item xs={12} md={6}>
            <Card className="careerCard">
              <img
                className="Card-img"
                src="./images/worldClassMentors_Img.jpg"
                alt="Student Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  World Class Mentors
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We offer a variety of internship opportunities designed to
                  empower you. Imagine the impact you can have and jumpstart
                  your career with limitless boundaries of creativity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Experienced Professionals */}
          <Grid item xs={12} md={6}>
            <Card className="careerCard">
              <img
                className="Card-img"
                src="./images/realTimeProjects_img.jpg"
                alt="Experience Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Real-Time Projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you think you can, step in to explore the wealth of career
                  opportunities and take your career to the next level.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <JobList/>

      <div className="jobPostings">
      <RoleDetails/>
      </div>



      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default InternsPage;
