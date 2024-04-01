import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Paper,

  // FormGroup,
  // Checkbox,
  Select,
  MenuItem,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import axios from "axios";
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";

const DynamicApplicationForm = () => {
  const { control, handleSubmit } = useForm();
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCoverLetter, setSelectedCoverLetter] = useState(null);
  const [hasCloudExperience, setHasCloudExperience] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const location = useLocation();
  const { job } = location.state;

  const onSubmit = async (data) => {
    console.log("Submit button clicked", data);
    try {
      setLoading(true); // Set loading to true when the form is being submitted
  
      const formData = new FormData();
      formData.append("Id", job.id);
      formData.append("Company_ID", "ONEL1");
      formData.append("job_Id", job.job_id);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("position", job.position);
      formData.append("skills", job.skills);
      formData.append("experience", job.experience);
      formData.append("workExperience", data.workExperience);
      formData.append("github", data.GitHub);
      formData.append("linkedin", data.LinkedIn);
      formData.append("hasCloudExperience", hasCloudExperience ? "Yes" : "No");
  
      // Append the selected resume to FormData
      if (selectedFile) {
        formData.append("resume", selectedFile);
      }
  
      // Append the selected cover letter if available, otherwise append an empty string
      formData.append("coverLetter", selectedCoverLetter ? selectedCoverLetter : "");
  
      // Send the FormData to the server
      const response = await axios.post(
        "http://98.70.27.45:3001/insertData",
        formData
      );
  
      console.log("Server Response:", response.data);
  
      // Reset form fields
      setSuccessModalVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false); // Set loading to false after the form submission (success or failure)
    }
  };

  const handleModalClose = () => {
    setSuccessModalVisible(false);
    window.location.reload();
  };

  const handleFileChange = (e) => {
    // Update the selected file in the state
    setSelectedFile(e.target.files[0]);
  };

  const handleCoverLetterChange = (e) => {
    setSelectedCoverLetter(e.target.files[0]);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("../images/BG_2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "centre",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="md" style={{ padding: "90px 40px 50px 40px" }}>
          <h2 style={{ color: "#101c3d" }}>
            Job Application Form:{" "}
            <span style={{ color: "red" }}>{job.position}</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "4%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      label="Full Name"
                      {...field}
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField label="Email" {...field} fullWidth required />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      label="Phone Number"
                      {...field}
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="position"
                  control={control}
                  defaultValue={job.position}
                  render={({ field }) => (
                    <TextField label="Position" {...field} fullWidth disabled />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="skills"
                  control={control}
                  defaultValue={job.skills}
                  render={({ field }) => (
                    <TextField label="Skills" {...field} fullWidth disabled />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="experience"
                  control={control}
                  defaultValue={job.experience}
                  render={({ field }) => (
                    <TextField
                      label="Experience"
                      {...field}
                      fullWidth
                      disabled
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="workExperience"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      label="Work Experience"
                      {...field}
                      fullWidth
                      multiline
                      rows={4}
                    />
                  )}
                />
              </Grid>
              <Paper
                elevation={0}
                style={{
                  margin: "10px auto",
                  background: "transparent",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={12} md={6}>
                    <Box border={0.5} borderColor="lightgrey" borderRadius={4} p={2}>
                      <Typography
                        variant="p"
                        style={{
                          fontWeight: "500",
                          textAlign: "center",
                          color: "grey",
                        }}
                      >
                        Do you have any prior experience with any Cloud
                        technologies like Azure, AWS?
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="cloud-experience-select">
                        Select
                      </InputLabel>
                      <Select
                        value={hasCloudExperience ? "Yes" : "No"}
                        onChange={(e) =>
                          setHasCloudExperience(e.target.value === "Yes")
                        }
                        label="Select"
                        id="cloud-experience-select"
                        size="small"
                        variant="outlined"
                      >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>

              <Grid item xs={12} md={6}>
                <Controller
                  name="GitHub"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField label="GitHub" {...field} fullWidth />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="LinkedIn"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField label="LinkedIn" {...field} fullWidth />
                  )}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  // border: "2px solid #4CAF50",
                  borderRadius: "8px",
                  // padding: "16px",
                  textAlign: "center",
                }}
              >
                <Controller
                  name="resume"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "2px solid #4CAF50",
                        borderRadius: "10px",
                      }}
                    >
                      <input
                        type="file"
                        accept=".pdf"
                        id="resume-upload"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e)}
                        required
                      />
                      <label htmlFor="resume-upload">
                        <IconButton
                          color="primary"
                          component="span"
                          size="large"
                          style={{
                            backgroundColor: "#4CAF50",
                            color: "white",
                            margin: "8px",
                          }}
                        >
                          <CloudUploadIcon fontSize="inherit" />
                        </IconButton>
                      </label>
                      <Typography variant="caption" color="textSecondary">
                        Upload Resume (PDF only)
                      </Typography>
                    </div>
                  )}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                style={{
                  // border: "2px solid #2196F3",
                  borderRadius: "8px",
                  // padding: "16px",
                  textAlign: "center",
                }}
              >
                <Controller
                  name="coverLetter"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "2px solid #2196F3",
                        borderRadius: "10px",
                      }}
                    >
                      <input
                        type="file"
                        accept=".pdf"
                        id="cover-letter-upload"
                        style={{ display: "none" }}
                        onChange={(e) => handleCoverLetterChange(e)}
                      />
                      <label htmlFor="cover-letter-upload">
                        <IconButton
                          color="primary"
                          component="span"
                          size="large"
                          style={{
                            backgroundColor: "#2196F3",
                            color: "white",
                            margin: "8px",
                          }}
                        >
                          <AttachFileIcon fontSize="inherit" />
                        </IconButton>
                      </label>
                      <Typography variant="caption" color="textSecondary">
                        Upload Cover Letter (PDF only)
                      </Typography>
                    </div>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
            {isLoading ? (
              <CircularProgress color="primary" size={24} />
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Submit Application
              </Button>
            )}
          </Grid>
            </Grid>
          </form>
        </Container>
      </div>

      {/* Our Tech Stack */}

      <TextShpere />

      <footer>
        <Footer />
      </footer>

      {isSuccessModalVisible && (
  <Dialog open={isSuccessModalVisible} onClose={handleModalClose}>
    <DialogTitle style={{ backgroundColor: "#101c3d", color: "white" }}>
      Form Successfully Submitted!
    </DialogTitle>
    <DialogContent style={{ padding: "20px", textAlign: "center" }}>
      <img
        src="https://img.freepik.com/free-vector/verified-concept-illustration_114360-5138.jpg?t=st=1709616728~exp=1709620328~hmac=16cf4617f307b1d51e1a7aa32ce04f0e9cbf0841a327a747cbcadc133ad99ace&w=826"
        alt="Success"
        style={{ width: "100%", maxWidth: "500px", marginBottom: "" }}
      />
      <p style={{ fontSize: "1.2rem", color: "#333" }}>
        Thank you for submitting your application. Please make sure to note this Job-ID: <span style={{color: "Red", fontWeight:"600"}}>{job.job_id}</span> For Job Refference.  We'll get back to you soon!
      </p>
    </DialogContent>
    <DialogActions style={{ justifyContent: "center", padding: "15px" }}>
      <Button
        onClick={handleModalClose}
        variant="contained"
        style={{ backgroundColor: "#101c3d", color: "white" }}
      >
        Close
      </Button>
    </DialogActions>
  </Dialog>
)}
    </div>
  );
};

export default DynamicApplicationForm;
