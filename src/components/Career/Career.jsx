// Career.jsx

import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
// import { useNavigate } from "react-router-dom";
import './Career.css'; // Import the CSS file
import Footer from '../Footer/Footer';

const Career = () => {
  const handleExploreOpportunities = () => {
    // Open the specified link in a new tab
    window.open("https://onelogica.com/jobApplicationForm.html", "_blank");
  };

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
      <Container className='career-container'>
        <div className="readyToChange">
          <Typography variant="h4" gutterBottom>
            Ready to Change the World?
          </Typography>
          <Typography variant="subtitle1">
            If you think you can change the world through innovation, be part of our integral Onelogioca family.
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
                  We offer a variety of internship opportunities designed to empower you. Imagine the impact you can have and jumpstart your career with limitless boundaries of creativity.
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
                  If you think you can, step in to explore the wealth of career opportunities and take your career to the next level.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleExploreOpportunities} className="cardContent">
                  Explore Career Opportunities
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>


      <footer>
        <Footer/>
      </footer>
    </div>


  );
};

export default Career;
