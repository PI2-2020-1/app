import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://sics-api.herokuapp.com';
const api = axios.create({ baseURL });

export default api;