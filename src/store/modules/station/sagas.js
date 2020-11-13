import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import api from '../../../services/api';
// import stationA2P2 from '../../../services/stationA2P2';
import api from '../../../services/api';
// import { signInSuccess, signFailure } from './actions';
import {
  getStationDataSuccess,
  getStationDataFailure,
  getStationLastedDataSuccess,
  getStationLastedDataFailure
} from './actions';

export function* getStationData() {
  try {
    const response = yield call(api.get, '/api/plantation/1');
    yield put(getStationDataSuccess(response.data));
  } catch (err) {
    toast.error(
      'Oops, Erro. Verifique API'
    );
    console.log('????', err);
    // response API
    toast.error(err);
    yield put(getStationDataFailure());
  }
}

export function* getStationLastedData(action) {
  console.log('numeroStationRequest', action)

  const { selectedStation } = action.payload;
  try {
    const response = yield call(api.get, `/api/latest/${selectedStation}`);
    yield put(getStationLastedDataSuccess(response.data));
  } catch (err) {
    toast.error(
      'Oops, Erro. Verifique a API'
    );
    console.log('????', err);
    // response API
    toast.error(err);
    yield put(getStationLastedDataFailure());
  }
}


export default all([
  takeLatest('@station/GET_STATION_DATA_REQUEST', getStationData),
  takeLatest('@station/GET_STATION_LASTED_DATA_REQUEST', getStationLastedData),
]);

