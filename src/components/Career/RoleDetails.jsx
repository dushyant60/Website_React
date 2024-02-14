// src/components/JobList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoleDetails= () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://isam.onelogica.com/api/jobforms/')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h2>{job.position}</h2>
            <p>Description: {job.description}</p>
            <p>Experience: {job.experience} years</p>
            <p>Skills: {job.skills}</p>
            <p>Joining Month: {job.joining_Month}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleDetails;
