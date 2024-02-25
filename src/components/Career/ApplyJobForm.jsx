import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Footer from "../Footer/Footer";
import TextShpere from "../TechStack/TextShpere";

const DynamicApplicationForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const { job } = location.state || {};

  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted with data:", formData);
    // You can redirect or perform other actions after form submission
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
      <Container maxWidth="md" style={{ padding: "90px 40px 50px 40px" }}>
      <h2 style={{ color: "#101c3d" }}>
  Job Application Form: <span style={{ color: "Red" }}>{job.position}</span>
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
                  name="Position"
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
                  defaultValue={[job.skills]}
                  rules={{ required: "Skills are required" }}
                  render={({ field }) => (
                    <TextField
                    {...field}
                    label="Skills"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                )}
                />
            </Grid>
            {/* <Grid item xs={6}> */}
            {/* <FormControlLabel
                // control={
                //   <Checkbox
                //     {...control.getValues('azureExperience')}
                //     checked={control.getValues('azureExperience') || false}
                //   />
                // }
                label="Do you have hands-on experience with Azure Cloud?"
              /> */}
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
            {/* <FormControlLabel
                control={
                  <Checkbox
                    // {...control.getValues('azureCertified')}
                    // checked={control.getValues('azureCertified') || false}
                  />
                }
                label="Are you Azure certified?"
              /> */}
            {/* </Grid>  */}
            <Grid item xs={12} md={6}>
              <Controller
                name="experience"
                control={control}
                defaultValue={[job.experience]}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Experience"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item  md={12} xs= {12}>
              <Controller
                name="workExperience"
                control={control}
                defaultValue=""
                rules={{ required: "Cover Letter is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Work Experiece"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    // error={!!errors.coverLetter}
                    // helperText={errors.coverLetter?.message}
                    // required
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="Socials"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Socials"
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
                name="resume"
                control={control}
                defaultValue=""
                rules={{ required: "Resume Link is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
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
            <Grid item  md={12} xs= {12}>
              <Controller
                name="coverLetter"
                control={control}
                defaultValue=""
                rules={{ required: "Cover Letter is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Cover Letter"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    error={!!errors.coverLetter}
                    helperText={errors.coverLetter?.message}
                    required
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
