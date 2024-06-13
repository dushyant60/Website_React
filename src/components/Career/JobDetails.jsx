import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaDownload } from "react-icons/fa";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Career.css";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const JobDetails = () => {
  const { state } = useLocation();
  const job = state?.job;
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  if (!job) {
    return <div className="container">Job details not found</div>;
  }
  const handleApplyClick = (job) => {
    navigate(`/applyjobform/${job.id}`, { state: { job } });
  };

  return (
    <div className="job-details-container">
      <div className="panoramicImage-job heading">
        <Typography variant="h2" gutterBottom className="heading">
          {job.position}
        </Typography>
        <Typography variant="h5" className="subheading">
          Join our team of innovative minds
        </Typography>
      </div>
      <Grid container spacing={3} style={{ padding: "2% 10%" }}>
        <Grid item xs={12} sm={4}>
          <Box
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              padding: "5%",
              backgroundColor: "rgb(209 209 209)",
              borderRadius: "15px",
            }}
          >
            <h2 className="job-details-subheading">Job Overview</h2>
            <p>
              <strong>Qualifications:</strong> {job.qualifications}
            </p>
            <p>
              <strong>Experience:</strong> {job.experience}
            </p>
            <p>
              <strong>Skills:</strong> {job.skills}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Employment Type:</strong> {job.employment_type}
            </p>
            <p>
              <strong>Joining Month:</strong> {job.joining_month}
            </p>
            <p>
              <strong>Salary Type:</strong> {job.salary_type}
            </p>
            <Box style={{ justifyContent: "center", display: "flex" }}>
              {/* <Button
                variant="contained"
                color="primary"
                startIcon={<FaDownload />}
                component="a"
                href={job.jd_file}
                target="_blank"
                rel="noopener noreferrer"
              >
                Job Description
              </Button> */}

<Button
              className="job-details-apply-button"
              onClick={() => handleApplyClick(job)}
              variant="contained"
              color="primary"
            >
              Apply Now
            </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div
            className="job-details-section2"
            style={{
              textAlign: "left",
              padding: "4% 3%",
              backgroundColor: "rgb(209 209 209)",
              borderRadius: "15px",
            }}
          >
            <h2 className="job-details-subheading">Job Description</h2>
            <p>{job.description}</p>
            <h2 className="job-details-subheading">
              Responsibilities and Duties
            </h2>
            <ul>
              {job.responsibilities_and_duties.split(";").map((item, index) => (
                <li key={index}>◉ {item.trim()}.</li>
              ))}
            </ul>
            <h2 className="job-details-subheading">Requirements</h2>
            <ul>
              {job.requirements.split(";").map((item, index) => (
                <li key={index}>◉ {item.trim()}.</li>
              ))}
            </ul>
          </div>

          {/* <Grid
            item
            xs={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "2% 0",
            }}
          >
       
          </Grid> */}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default JobDetails;
