import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";

const DynamicApplicationForm = () => {
  const { control, handleSubmit } = useForm();
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (data) => {
    console.log("Submit button clicked", data);
    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("workExperience", data.workExperience);
      formData.append("GitHub", data.GitHub);
      formData.append("LinkedIn", data.LinkedIn);

      // Append the selected file to FormData
      if (selectedFile) {
        formData.append("resume", selectedFile);
      }

      // Send the FormData to the server
      const response = await axios.post("http://localhost:3001/insertData", formData);

      console.log("Server Response:", response.data);

      // Reset form fields
      setSuccessModalVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleModalClose = () => {
    setSuccessModalVisible(false);
    // window.location.reload();
  };

  const handleFileChange = (e) => {
    // Update the selected file in the state
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <Container maxWidth="md" style={{ padding: "90px 40px 50px 40px" }}>
        <h2 style={{ color: "#101c3d" }}>Job Application Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            {/* ... (other form fields) */}
            <Grid item xs={12}>
              <Controller
                name="resume"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e)}
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
