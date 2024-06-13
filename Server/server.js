const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const fetch = require("node-fetch");
const { BlobServiceClient } = require("@azure/storage-blob");
const { Readable } = require("stream");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  process.env.REACT_APP_AZURE_BLOB_CONNECTION_STRING
);
const containerClient = blobServiceClient.getContainerClient(
  process.env.REACT_APP_AZURE_BLOB_CONTAINER_NAME
);

const dbConnectionString = process.env.REACT_APP_COSMOS_CONNECTION_STRING;

// MongoDB client
const mongoClient = new MongoClient(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const transporter = nodemailer.createTransport({
  host: process.env.REACT_APP_SMTP_HOST,
  port: process.env.REACT_APP_SMTP_PORT,
  secure: process.env.REACT_APP_SMTP_SECURE === 'true',
  auth: {
    user: process.env.REACT_APP_SMTP_USER,
    pass: process.env.REACT_APP_SMTP_PASS
  }
});

// Function to send confirmation email
async function sendConfirmationEmail(email, position, job_Id, fullName) {
  try {
    await transporter.sendMail({
      from: process.env.REACT_APP_SMTP_USER,
      to: email,
      subject: 'Application Confirmation',
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
  <div style="background-color: #101c3d; color: #ffffff; border-radius: 10px; padding: 20px;">
    <img src="https://isamblobstorage.blob.core.windows.net/isamfilecotainer/companyIcon/logo1.png" alt="Company Logo" style="max-width: 150px; margin-bottom: 20px;">
    <h2 style="color: #ffffff;">Dear ${fullName},</h2>
    <p style="color: #ffffff;">Thank you for applying for the position of <strong>${position}</strong> (<strong>${job_Id}</strong>) at OneLogica.</p> 
    <p style="color: #ffffff;">We have received your application and will get back to you soon.</p>
    <p style="color: #ffffff;">Best regards,<br/>OneLogica Team</p>
  </div>
</div>
    
      `
    });
    console.log('Confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}


// Function to fetch job data from the external API
async function fetchJobDataFromAPI() {
  try {
    const response = await fetch('http://98.70.27.45:8000/api/jobforms/ONEL1/');
    return response.json();
  } catch (error) {
    console.log('Error fetching job data from API:');
    throw error; // Rethrow the error to handle it in the caller function
  }
}

// Function to update job data in the database
async function updateJobDataInDB(apiData) {
  try {
    await mongoClient.connect();
    const database = mongoClient.db("websitedb");
    const collection = database.collection("joblistings");

    // Fetch all job IDs from the database
    const dbJobs = await collection.find({}, { projection: { job_id: 1 } }).toArray();
    const dbJobIds = dbJobs.map(job => job.job_id);

    // Extract job IDs from the API data
    const apiJobIds = apiData.map(job => job.job_id);

    // Identify jobs to insert (in API but not in DB)
    const jobsToInsert = apiData.filter(job => !dbJobIds.includes(job.job_id));

    // Identify jobs to delete (in DB but not in API)
    const jobsToDelete = dbJobIds.filter(jobId => !apiJobIds.includes(jobId));

    // Insert new jobs
    if (jobsToInsert.length > 0) {
      await collection.insertMany(jobsToInsert);
      console.log(`Inserted ${jobsToInsert.length} new jobs`);
    }

    // Delete old jobs
    if (jobsToDelete.length > 0) {
      await collection.deleteMany({ job_id: { $in: jobsToDelete } });
      console.log(`Deleted ${jobsToDelete.length} old jobs`);
    }

    console.log('Job data updated in the database');
  } catch (error) {
    console.log('Error updating job data in the database:');
    throw error; // Rethrow the error to handle it in the caller function
  }
}

// Function to fetch job data from the database
async function fetchJobDataFromDB() {
  try {
    await mongoClient.connect();
    const database = mongoClient.db("websitedb");
    const collection = database.collection("joblistings");
    const data = await collection.find({}).toArray();
    return data;
  } catch (error) {
    console.error('Error fetching job data from database:', error);
    throw error; // Rethrow the error to handle it in the caller function
  }
}

//Posting Data in DB
 
app.post("/insertData", upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'coverLetter', maxCount: 1 }]), async (req, res) => {
  let connection;
  try {
    connection = await MongoClient.connect(process.env.REACT_APP_COSMOS_CONNECTION_STRING);
    console.log("Connected to Cosmos DB");

    const database = connection.db("websitedb");
    const collection = database.collection("_formdata");

    const result = await collection.insertOne(req.body);

    // Upload resume to Azure Blob Storage
    if (req.files && req.files['resume']) {
      const resumeBlobName = `applicantResume/resume/${uuidv4()}_resume.pdf`;
      const resumeBlockBlobClient = containerClient.getBlockBlobClient(resumeBlobName);

      const resumeStream = Readable.from(req.files['resume'][0].buffer);
      await resumeBlockBlobClient.uploadStream(resumeStream, req.files['resume'][0].size, undefined, {
        blobHTTPHeaders: { blobContentType: "application/pdf" },
        accessConditions: { leaseAccessConditions: {} },
      });

      const resume = resumeBlockBlobClient.url;

      // Update the database with the resume URL
      await collection.updateOne({ _id: result.insertedId }, { $set: { resume } });
    }

    // Upload cover letter to Azure Blob Storage
    if (req.files && req.files['coverLetter']) {
      const coverLetterBlobName = `applicantResume/coverLetter/${uuidv4()}_coverLetter.pdf`;
      const coverLetterBlockBlobClient = containerClient.getBlockBlobClient(coverLetterBlobName);

      const coverLetterStream = Readable.from(req.files['coverLetter'][0].buffer);
      await coverLetterBlockBlobClient.uploadStream(coverLetterStream, req.files['coverLetter'][0].size, undefined, {
        blobHTTPHeaders: { blobContentType: "application/pdf" },
        accessConditions: { leaseAccessConditions: {} },
      });

      const coverLetter = coverLetterBlockBlobClient.url;

      // Update the database with the cover letter URL
      await collection.updateOne({ _id: result.insertedId }, { $set: { coverLetter } });
    }
    res.status(201).json({ message: "Data inserted successfully", data: result.ops ? result.ops[0] : null });

  } catch (error) {
    console.error("Error connecting to Cosmos DB or uploading to Azure Blob Storage:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});


// Route to send confirmation email
app.post("/sendConfirmationEmail", async (req, res) => {
  const { email, job_Id, position, fullName } = req.body;
  try {
    // Send confirmation email with additional fields
    await sendConfirmationEmail(email, job_Id, position, fullName);
    res.status(200).json({ message: "Confirmation email sent successfully" });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Getting Data Form DB
app.get('/getData', async (req, res) => {
  let connection;
  try {
    connection = await MongoClient.connect(process.env.REACT_APP_COSMOS_CONNECTION_STRING);
    console.log('Connected to Cosmos DB');

    const database = connection.db('websitedb');
    const collection = database.collection('_formdata');

    const data = await collection.find({}).toArray();
    res.status(200).json({ message: 'Data retrieved successfully', data });
  } catch (error) {
    console.error('Error connecting to Cosmos DB:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

// Endpoint to fetch job listings
app.get('/joblist', async (req, res) => {
  try {
    const jobData = await fetchJobDataFromDB();
    res.status(200).json({ message: 'Job data retrieved successfully', data: jobData });
  } catch (error) {
    console.error('Error fetching job data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Scheduled task to update job data from API every hour
const updateJobData = async () => {
  try {
    const jobData = await fetchJobDataFromAPI();
    await updateJobDataInDB(jobData);
  } catch (error) {
    console.error('Error updating job data:', error);
  }
};

// Run the updateJobData function immediately when the server starts
updateJobData();

// Update job data every hour
const intervalTime = 3600000; // 1 hour in milliseconds
const updateInterval = setInterval(updateJobData, intervalTime);

// Handle server shutdown or restart
process.on('SIGINT', () => {
  clearInterval(updateInterval); // Clear the interval when server is stopped
  process.exit();
});

process.on('SIGTERM', () => {
  clearInterval(updateInterval); // Clear the interval when server is stopped
  process.exit();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
