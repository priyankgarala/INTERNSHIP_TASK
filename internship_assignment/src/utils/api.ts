import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust if using hosted backend
});

export default API;
