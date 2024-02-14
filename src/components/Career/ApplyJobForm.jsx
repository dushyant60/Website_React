import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Grid, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox } from '@mui/material';

const JobApplicationForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // You can add additional logic here to handle the form submission
  };

  return (
    <div>
      <Container maxWidth='md'>
        <h2>Job Application Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{ required: 'Full Name is required' }}
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
            <Grid item xs={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address',
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
            <Grid item xs={6}>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Invalid phone number',
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
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="position-label">Internship Position</InputLabel>
                <Controller
                  name="internshipPosition"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Internship Position is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Internship Position"
                      labelId="position-label"
                      error={!!errors.internshipPosition}
                    >
                      <MenuItem value="softwareDeveloper">Software Developer</MenuItem>
                      <MenuItem value="dataAnalyst">Data Analyst</MenuItem>
                      <MenuItem value="uxDesigner">UX Designer</MenuItem>
                      {/* Add more positions as needed */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="skills-label">Skills</InputLabel>
                <Controller
                  name="skills"
                  control={control}
                  defaultValue={[]}
                  rules={{ required: 'Skills are required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Skills"
                      labelId="skills-label"
                      multiple
                      error={!!errors.skills}
                    >
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="node">Node.js</MenuItem>
                      <MenuItem value="python">Python</MenuItem>
                      {/* Add more skills as needed */}
                    </Select>
                  )}
                />
              </FormControl>
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
            <Grid item xs={6}>
                <Controller
                  name="certification"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Certification"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="fullStack-label">Applying for Full Stack?</InputLabel>
                <Controller
                  name="fullStack"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Applying for Full Stack?" labelId="fullStack-label">
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="skills-label">General Skills</InputLabel>
                <Controller
                  name="generalSkills"
                  control={control}
                  defaultValue={[]}
                  rules={{ required: 'Skills are required' }}
                  render={({ field }) => (
                    <Select {...field} label="General Skills" labelId="skills-label" multiple>
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="angular">Angular</MenuItem>
                      <MenuItem value="node">Node.js</MenuItem>
                      {/* Add more skills as needed */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="databases-label">Databases Worked With</InputLabel>
                <Controller
                  name="databases"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Databases Worked With" labelId="databases-label">
                      <MenuItem value="mysql">MySQL</MenuItem>
                      <MenuItem value="mongodb">MongoDB</MenuItem>
                      <MenuItem value="postgresql">PostgreSQL</MenuItem>
                      {/* Add more database options as needed */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="roleSkills-label">Role-Specific Skills</InputLabel>
                <Controller
                  name="roleSkills"
                  control={control}
                  defaultValue={[]}
                  rules={{ required: 'Skills are required' }}
                  render={({ field }) => (
                    <Select {...field} label="Role-Specific Skills" labelId="roleSkills-label" multiple>
                      <MenuItem value="uiUxDesign">UI/UX Design</MenuItem>
                      <MenuItem value="digitalMarketing">Digital Marketing</MenuItem>
                      {/* Add more role-specific skills as needed */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Controller
                  name="techPassion"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Tech Passion"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="resume"
                control={control}
                defaultValue=""
                rules={{ required: 'Resume Link is required' }}
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
            <Grid item xs={12}>
              <Controller
                name="coverLetter"
                control={control}
                defaultValue=""
                rules={{ required: 'Cover Letter is required' }}
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
    </div>
  );
};

export default JobApplicationForm;
