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
  const [jobType, setJobType] = useState("");

  const location = useLocation();
  const { job } = location.state;

  const onSubmit = async (data) => {
    console.log("Submit button clicked", data);
    try {
      setLoading(true);
      // Construct form data
      const formData = new FormData();
      formData.append("Id", job.id);
      formData.append("Company_ID", "ONEL1");
      formData.append("employement_type", job.employment_type);
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
      formData.append("college_name", data.college);
      formData.append("batch", data.batch);
      if(job.employment_type === "Full Time"){
        formData.append("current_CTC", data.currentctc);
        formData.append("notice_Period", data.noticeperiod);
        formData.append("area_of_expertise", data.areaOfExpertise);
      }
      if(job.employment_type === "Internship"){
        formData.append("branch", data.branch);
        formData.append("graduation_Cgpa", data.graduationcgpa);
        formData.append("tenth_Marks", data.tenthMarks);
        formData.append("twelth_Marks", data.twelthMarks);
      }
      if (selectedFile) {
        formData.append("resume", selectedFile);
      }
      formData.append("coverLetter", selectedCoverLetter ? selectedCoverLetter : "");

      // Send the FormData to the server
      const response = await axios.post(
        "http://98.70.27.45:3001/insertData",
        formData
      );
  
      console.log("Server Response:", response.data);

      setSuccessModalVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setSuccessModalVisible(false);
    window.location.reload();
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCoverLetterChange = (e) => {
    setSelectedCoverLetter(e.target.files[0]);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
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
                    <TextField label="Full Name" {...field} fullWidth required />
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
                    <TextField label="Phone Number" {...field} fullWidth required />
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
                    <TextField label="Experience" {...field} fullWidth disabled />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                    <Controller
                      name="college"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="College" {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="batch"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="Batch" {...field} fullWidth required />
                      )}
                    />
                  </Grid>

                  {/* For Full Time */}
                  {job.employment_type === "Full Time" && (
                <>
               
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="noticeperiod"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="Notice Period (in Months)" {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="currentctc"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="Currect CTC" {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <Controller
                      name="areaOfExpertise"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="Area of Expertise" {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                </>
              )}

               {/* Additional fields for Internship */}
               {job.employment_type === "Internship" && (
                <>
               
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="branch"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="Branch" {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="graduationcgpa"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="CGPA / %" {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="tenthMarks"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="10th (% / CGPA)" {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Controller
                      name="twelfthMarks"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="12th or Diploma (% / CGPA) " {...field} fullWidth required />
                      )}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <Controller
                      name="enrollmentNumber"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField label="Enrollment Number" {...field} fullWidth />
                      )}
                    />
                  </Grid> */}
                </>
              )}

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
                <Grid container spacing={2} alignItems="center" justify="center">
                  <Grid item xs={12} md={6}>
                    <Box border={0.5} borderColor="lightgrey" borderRadius={2} p={2}>
                      <Typography
                        variant="p"
                        style={{
                          fontWeight: "500",
                          textAlign: "center",
                          color: "grey",
                        }}
                      >
                        Do you have any prior experience with any Cloud technologies like Azure, AWS?
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="cloud-experience-select">Select</InputLabel>
                      <Select
                        value={hasCloudExperience ? "Yes" : "No"}
                        onChange={(e) => setHasCloudExperience(e.target.value === "Yes")}
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
                  borderRadius: "8px",
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
                        border: selectedFile ? "2px solid #4CAF50" : "2px solid #ccc",
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
                            backgroundColor: selectedFile ? "#4CAF50" : "#ccc",
                            color: selectedFile ? "#fff" : "#000",
                            margin: "8px",
                          }}
                        >
                          <CloudUploadIcon fontSize="inherit" style={{ color: selectedFile ? "#fff" : "#000" }} />
                        </IconButton>
                      </label>
                      <Typography variant="caption" color="textSecondary">
                        {selectedFile ? `Selected File: ${selectedFile.name}` : "Upload Resume (PDF only)"}
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
                  borderRadius: "8px",
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
                        border: selectedCoverLetter ? "2px solid #2196F3" : "2px solid #ccc",
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
                            backgroundColor:  selectedCoverLetter ?  "#2196F3" : "#ccc",
                            color:  selectedCoverLetter ? "white" : "#000",
                            margin: "8px",
                          }}
                        >
                          <AttachFileIcon fontSize="inherit" style={{ color: selectedCoverLetter ? "white" : "#000" }} />
                        </IconButton>
                      </label>
                      <Typography variant="caption" color="textSecondary">
                        {selectedCoverLetter ? `Selected File: ${selectedCoverLetter.name}` : "Upload Cover Letter (PDF only)"}
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
