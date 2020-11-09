import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3002'
    : 'https://my-json-server.typicode.com/PI2-2020-1/esp';

const stationA2P2 = axios.create({ baseURL });

export default stationA2P2;
