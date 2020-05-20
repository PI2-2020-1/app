import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sics-api.herokuapp.com/'
});

export default api;