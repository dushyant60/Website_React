// axios-config.js
import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://onelogicawebsiteserver.azurewebsites.net',
  baseURL: 'http://localhost:3001',
  timeout: 10000, // Optional: adjust the timeout value if needed
});

export default instance;
