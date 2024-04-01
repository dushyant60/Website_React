  const express = require("express");
  const { MongoClient } = require("mongodb");
  const cors = require("cors");
  const { BlobServiceClient } = require("@azure/storage-blob");
  const { Readable } = require("stream");
  const { v4: uuidv4 } = require("uuid");
  const multer = require("multer");
  require("dotenv").config();

  const app = express();
  const port = process.env.PORT || 3001;

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.REACT_APP_AZURE_BLOB_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.REACT_APP_AZURE_BLOB_CONTAINER_NAME
  );

  app.use(express.json());
  app.use(cors());

  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

  app.get("/", (req, res) => {
    res.send("Welcome to the backend server!");
  });

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

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
