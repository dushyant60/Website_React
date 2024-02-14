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
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import "./Career.css"; // Import the CSS file
import Footer from "../Footer/Footer";
import EmployeesReviewsPage from "./EmployeesReviewsPage";
import JobList from "./JobList";
const Career = () => {

  const employeeData = [
    {
      icon: "./images/tab_header_img.png",
      name: "Anshu, Full Stack Developer",
      picture: "./images/profile_img.jpg",
      reviews:
        '"At Onelogica, I have thrived as a full stack developer, benefitting from a dynamic and innovative environment. The organizations commitment to cutting-edge technologies, collaborative culture, and supportive leadership has made my experience highly positive. With promising prospects for career growth, Onelogica stands out as a rewarding workplace"',
    },
    {
      icon: "./images/tab_header_img.png",
      name: "Prachi, Lead BI Architect",
      picture: "./images/profile_img.jpg",
      reviews:
        '"We feel very empowered with the right fix of the team involved in the work. For us work is just fun as we enjoy working at Onelogica. Remote working is more fun the way onelogica has crafted."',
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
                <Link to="/internspage">
        <Button variant="contained" color="primary">
          Explore Students Opportunities
        </Button>
      </Link>
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
                <Link to="/fulltimepage">
        <Button variant="contained" color="primary">
          Explore Career Opportunities
        </Button>
      </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <EmployeesReviewsPage employees={employeeData} />
      </Container>


      

          {/* Section 4: Benefits */}

      <Container className="career-container">
        <Grid container spacing={3} className="cardContainer">
          {/* Card 3: Shape your career */}
          <Grid item xs={12} md={4}>
            <Card className="careerCard">
            <CardMedia
                component="img"
                height="340"
                image="./images/shapeYourCareer_Img.jpg" // Replace with your image path
                alt="Shape your Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Shape your Career
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bring your ideas and pursue innovative career tracks, opportunities, and job rotations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 4: Learn and grow */}
          <Grid item xs={12} md={4}>
            <Card className="careerCard">
            <CardMedia
                component="img"
                height="340"
                image="./images/learnAndGrow_img.jpg" // Replace with your image path
                alt="Shape your Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Learn and Grow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enhance your professional development through education and training.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 5: Keep current */}
          <Grid item xs={12} md={4}>
            <Card className="careerCard">
            <CardMedia
                component="img"
                height="340"
                image="./images/keepCurrent_img.jpg" // Replace with your image path
                alt="Shape your Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Keep Current
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our skills training helps you keep pace with the changing workplace.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 6: Give back */}
          <Grid item xs={12} md={4}>
            <Card className="careerCard">
            <CardMedia
                component="img"
                height="340"
                image="./images/giveBack_img.jpg" // Replace with your image path
                alt="Shape your Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Give Back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Help improve our communities and environment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 7: Stay healthy */}
          <Grid item xs={12} md={4}>
            <Card className="careerCard">
            <CardMedia
                component="img"
                height="340"
                image="./images/stayHealthy_img.jpg" // Replace with your image path
                alt="Shape your Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Stay Healthy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Be well with health plans that help you support your loved ones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 8: Invest in yourself */}
          <Grid item xs={12} md={4}>
            <Card className="careerCard">
            <CardMedia
                component="img"
                height="340"
                image="./images/investInYourself_Img.jpg" // Replace with your image path
                alt="Shape your Career"
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Invest in Yourself
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plan for the future with our compensation and benefits packages, including holidays.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* ... (rest of the code) */}
      </Container>

      <JobList/>

      <div className="container-hiring">
        <div className="hiring">
          <h1>Inclusive Hiring for all...</h1>
          <h2>
            "At Onelogica, we know that having a diverse workforce which
            includes people with disabilities is essential if we are going to
            deliver on our mission to empower every person and every
            organization on the planet to achieve more. Our Neurodiversity
            Hiring Program, Ability Hiring events, and inclusive interviews
            enable all candidates to showcase their skills and bring their best
            selves."
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
