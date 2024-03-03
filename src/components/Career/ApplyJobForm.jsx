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
} from "@mui/material";
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

  const location = useLocation();
  const { job } = location.state;

  const onSubmit = async (data) => {
    console.log("Submit button clicked", data);
    try {
      const formData = new FormData();
      formData.append("Id", job.id);
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

      // coverletter
      if (selectedCoverLetter) {
        formData.append("coverLetter", selectedCoverLetter);
      }

      // Send the FormData to the server
      const response = await axios.post(
        "http://localhost:3001/insertData",
        formData
      );

      console.log("Server Response:", response.data);

      // Reset form fields
      setSuccessModalVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error.message);
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
              <Paper elevation={0} style={{ margin: "10px auto", background:"transparent", alignItems:"center" }}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="h6" style={{ fontWeight: "bold", textAlign: "center", color:"grey" }}>
           Do you have any prior experience with any Cloud technologies like Azure, AWS?:
          </Typography>
        </Grid>
        <Grid item xs={12}> 
          <FormControl fullWidth>
            <InputLabel htmlFor="cloud-experience-select">Select</InputLabel>
            <Select
              value={hasCloudExperience ? 'Yes' : 'No'}
              onChange={(e) => setHasCloudExperience(e.target.value === 'Yes')}
              label="Cloud Experience"
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
                    <div style={{display:"flex", flexDirection:"column", border: "2px solid #4CAF50", borderRadius:"10px"}}>
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
                    <div style={{display:"flex", flexDirection:"column", border: "2px solid #2196F3", borderRadius:"10px"}}>
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
                <Button type="submit" variant="contained" color="primary">
                  Submit Application
                </Button>
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
          <DialogTitle>Form successfully submitted!</DialogTitle>
          <DialogContent>{/* Additional content */}</DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default DynamicApplicationForm;
