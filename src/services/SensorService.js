import endpoints from './endpoints';
import api from './api';

const getTemperatures = async() => {
  const temperatures = await api.get(endpoints.GET_TEMPERATURES);
  return temperatures;
}

export default {
  getTemperatures,
};