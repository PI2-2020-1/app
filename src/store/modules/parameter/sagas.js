import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import {
  getParametersDataSuccess,
  getParametersDataFailure,
  updateParameterSuccess,
  updateParameterFailure,
} from './actions';

export function* getParametersData() {
  try {
    const response = yield call(api.get, '/api/parameters/1');
    yield put(getParametersDataSuccess(response.data));
  } catch (err) {
    toast.error('Oops, Erro. Verifique API');
    console.log('????', err);
    // response API
    toast.error(err);
    yield put(getParametersDataFailure());
  }
}
export function* updateParametersData({ payload }) {
  console.log('payload', payload);
  const { parameter } = payload;
  console.log('montandoFéqvai', parameter);
  // WIND = 0
  // PRESSURE = 1
  // AIR_TEMPERATURE = 2
  // PH = 3
  // SOIL_UMIDITY = 4
  // AIR_UMIDITY = 5
  // RAIN = 6
  let arrOfObj = [
    {
      id: 1,
      parameter_type: 0,
      min_value: parameter.windSpeedMin,
      max_value: parameter.windSpeedMax,
      plantation: 1,
    },
    {
      id: 2,
      parameter_type: 1,
      min_value: parameter.pressureMin,
      max_value: parameter.pressureMax,
      plantation: 1,
    },
    {
      id: 3,
      parameter_type: 2,
      min_value: parameter.temperatureMin,
      max_value: parameter.temperatureMax,
      plantation: 1,
    },
    {
      id: 4,
      parameter_type: 3,
      min_value: parameter.phMin,
      max_value: parameter.phMax,
      plantation: 1,
    },
    {
      id: 5,
      parameter_type: 4,
      min_value: parameter.soilHumidityMin,
      max_value: parameter.soilHumidityMax,
      plantation: 1,
    },
    {
      id: 6,
      parameter_type: 5,
      min_value: parameter.environmentHumidityMin,
      max_value: parameter.environmentHumidityMax,
      plantation: 1,
    },
    {
      id: 7,
      parameter_type: 6,
      min_value: parameter.rainMin,
      max_value: parameter.rainMax,
      plantation: 1,
    },
  ];
  try {
    const response = yield call(api.post, '/api/parameters/1', arrOfObj);
    yield put(updateParameterSuccess(response.data));
    toast.success('Parâmetros editado com sucesso !');
  } catch (err) {
    toast.error('Oops, Erro. Verifique API');
    console.log('????', err);
    // response API
    toast.error(err);
    yield put(updateParameterFailure());
  }
}

export default all([
  takeLatest('@parameter/GET_PARAMETERS_DATA_REQUEST', getParametersData),
  takeLatest('@parameter/UPDATE_PARAMETER_REQUEST', updateParametersData),
]);
