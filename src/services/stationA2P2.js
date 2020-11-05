import axios from 'axios';

const baseURL = 'https://my-json-server.typicode.com/PI2-2020-1/esp';
// const baseURL = 'http://localhost:3002';
const stationA2P2 = axios.create({ baseURL });

export default stationA2P2;