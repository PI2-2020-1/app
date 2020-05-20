import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_API_URL
});

export default api;