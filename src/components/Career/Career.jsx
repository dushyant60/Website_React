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
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
import "./Career.css"; // Import the CSS file
import Footer from "../Footer/Footer";
import EmployeesReviewsPage from "./EmployeesReviewsPage";
const Career = () => {
  const handleExploreOpportunities = () => {
    // Open the specified link in a new tab
    window.open("https://onelogica.com/jobApplicationForm.html", "_blank");
  };

  const employeeData = [
    {
      icon: "./images/tab_header_img.png",
      name: "Anshu, Full Stack Developer",
      picture: "./images/profile_img.jpg",
      reviews:
        "At Onelogica, I have thrived as a full stack developer, benefitting from a dynamic and innovative environment. The organizations commitment to cutting-edge technologies, collaborative culture, and supportive leadership has made my experience highly positive. With promising prospects for career growth, Onelogica stands out as a rewarding workplace",
    },
    {
      icon: "./images/tab_header_img.png",
      name: "Prachi, Lead BI Architect",
      picture: "./images/profile_img.jpg",
      reviews:
        "We feel very empowered with the right fix of the team involved in the work. For us work is just fun as we enjoy working at Onelogica. Remote working is more fun the way onelogica has crafted.",
    },
    {
      icon: "./images/tab_header_img.png",
      name: "Vanshika, Data Analyst",
      picture: "./images/profile_img.jpg",
      reviews:
        '"I joined as a fresher and within a short span of time got ample opportunities to work on different tools and technology. Only performance matters at onelogica and I am getting all recognition and rewards. "',
    },
    {
      icon: "./images/tab_header_img.png",
      name: "Ankit, Lead Data Scientist",
      picture: "./images/Ankit-Profile-img.jpg",
      reviews:
        '"Onelogicas unique approach to the R & D driven work environment keeps me challenged every day and enables us to provide our customer withthe best of the delivery. "',
    },
    // Add more employee data as needed
  ];

  return (
    <div className="careerPage">
      {/* Section 1: Panoramic Image */}
      <div className="panoramicImage heading">
        <Typography variant="h2" gutterBottom className="heading">
          Career
        </Typography>
        <Typography variant="h5" className="subheading">
          Join our team of innovative minds
        </Typography>
      </div>

      {/* Section 2: Ready to Change the World */}
      <Container className="career-container">
        <div className="readyToChange">
          <Typography variant="h4" gutterBottom>
            Ready to Change the World?
          </Typography>
          <Typography variant="subtitle1">
            If you think you can change the world through innovation, be part of
            our integral Onelogioca family.
          </Typography>
        </div>

        {/* Section 3: Cards for Different Audiences */}
        <Grid container spacing={3} className="cardContainer">
          {/* Card 1: Students and Recent Graduates */}
          <Grid item xs={12} md={6}>
            <Card className="careerCard">
              <img
                className="Card-img"
                src="./images/STudents_Img.jpg"
                alt="Student Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Students and Recent Graduates
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We offer a variety of internship opportunities designed to
                  empower you. Imagine the impact you can have and jumpstart
                  your career with limitless boundaries of creativity.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="cardContent"
                  onClick={handleExploreOpportunities}
                >
                  Explore Students Opportunities
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Experienced Professionals */}
          <Grid item xs={12} md={6}>
            <Card className="careerCard">
              <img
                className="Card-img"
                src="./images/Experiene_Career.jpg"
                alt="Experience Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Experienced Professionals
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you think you can, step in to explore the wealth of career
                  opportunities and take your career to the next level.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleExploreOpportunities}
                  className="cardContent"
                >
                  Explore Career Opportunities
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <EmployeesReviewsPage employees={employeeData} />
      </Container>
      <div className="container-hiring">
        <div className="hiring">
          <h1>Inclusive Hiring for all...</h1>
          <h2>
            "At Onelogica, we know that having a diverse workforce which includes
            people with disabilities is essential if we are going to deliver on
            our mission to empower every person and every organization on the
            planet to achieve more. Our Neurodiversity Hiring Program, Ability
            Hiring events, and inclusive interviews enable all candidates to
            showcase their skills and bring their best selves."
          </h2>
          <h1>Let's transform together!</h1>
        </div>
        <div className="image-container-hiring">
          <img
            className="hiringImg"
            src="./images/hiring-img.jpg"
            alt="hiring-Image"
          />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Career;
