import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { TextField, Button, Container, Grid, MenuItem } from "@mui/material";
// import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";
import axios from "axios";

const DynamicApplicationForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const { job } = location.state || {};

  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  // State to manage form input values
  const [formData, setFormData] = useState({
    position_id: job.id,
    fullName: "",
    email: "",
    phoneNumber: "",
    position: job.position,
    skills: job.skills,
    experience: job.experience,
    workExperience: "",
    LinkedIn: "",
    GitHub: "",
    resume: "",
    coverLetter: "",

    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(
        "http://localhost:3001/insertData",
        formData 
      );

      // Log the response from the server
      console.log("Server Response:", response.data);

      //Reset all the fields
      setFormData({
        position_id: job.id,
        fullName: "",
        email: "",
        phoneNumber: "",
        position: job.position,
        skills: job.skills,
        experience: job.experience,
        workExperience: "",
        LinkedIn: "",
        GitHub: "",
        resume: "",
        coverLetter: "",
        // cloudExperience: "",
        // Add more fields as needed
      });

      // Show success modal
      setSuccessModalVisible(true);

      // Hide the success modal after 2 seconds
      setTimeout(() => {
        setSuccessModalVisible(false);
      }, 2500);

      // Optionally, you can redirect or perform other actions after successful submission
    } catch (error) {
      // Handle errors, log or display error messages as needed
      console.error("Error submitting form:", error.message);
    }
  };
  if (!job) {
    // Handle the case when job details are not available
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        backgroundImage: 'url("../images/BG_2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "centre",
        backgroundRepeat: "no-repeat",
      }}
    >
      {isSuccessModalVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontWeight: "500", margin: "0 auto" }}>
              Form successfully submitted!
            </p>
          </div>
        </div>
      )}
      <Container maxWidth="md" style={{ padding: "90px 40px 50px 40px" }}>
        <h2 style={{ color: "#101c3d" }}>
          Job Application Form:{" "}
          <span style={{ color: "Red" }}>{job.position}</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{ required: "Full Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange(e)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
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
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{
                  required: "Phone Number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={formData.phoneNumber} // Set value to formData.phoneNumber
                    onChange={(e) => handleInputChange(e)} // Add onChange handler
                    label="Phone Number"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="position"
                control={control}
                defaultValue={job.position} // Set the defaultValue to job.position
                rules={{ required: "Applied Position is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Position"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputProps={{
                      readOnly: true, // Make the TextField non-editable
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="skills"
                control={control}
                defaultValue={job.skills} // Set value to job.skills or an empty string
                rules={{ required: "Skills are required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Skills"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputProps={{
                      readOnly: true, // Make the TextField non-editable
                    }}
                  />
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
                    {...field}
                    label="Experience"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputProps={{
                      readOnly: true, // Make the TextField non-editable
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <Controller
                name="workExperience"
                control={control}
                defaultValue=""
                rules={{ required: "Work Experience is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={formData.workExperience} // Set value to formData.workExperience
                    onChange={(e) => handleInputChange(e)} // Add onChange handler
                    label="Work Experience"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Controller
                name="GitHub"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={formData.GitHub} // Set value to formData.workExperience
                    onChange={(e) => handleInputChange(e)} // Add onChange handler
                    label="GitHub"
                    variant="outlined"
                    margin="normal"
                    // multiline
                    // rows={4}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="LinkedIn"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={formData.LinkedIn} // Set value to formData.workExperience
                    onChange={(e) => handleInputChange(e)} // Add onChange handler
                    label="LinkedIn"
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="resume"
                control={control}
                defaultValue=""
                rules={{ required: "Resume Link is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={formData.resume} // Set value to formData.workExperience
                    onChange={(e) => handleInputChange(e)} // Add onChange handler
                    label="Resume Link"
                    variant="outlined"
                    margin="normal"
                    error={!!errors.resume}
                    helperText={errors.resume?.message}
                    required
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="coverLetter"
                control={control}
                defaultValue=""
                // rules={{ required: "Resume Link is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    value={formData.coverLetter} // Set value to formData.workExperience
                    onChange={(e) => handleInputChange(e)} // Add onChange handler
                    label="Cover Letter"
                    variant="outlined"
                    margin="normal"
                    // error={!!errors.resume}
                    // helperText={errors.resume?.message}
                    // required
                    fullWidth
                  />
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

      <TextShpere />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DynamicApplicationForm;
