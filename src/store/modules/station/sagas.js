import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import api from '../../../services/api';
import stationA2P2 from '../../../services/stationA2P2';
// import { signInSuccess, signFailure } from './actions';
import { getStationDataSuccess, getStationDataFailure } from './actions';

export function* getStationData() {
  try {
    const response = yield call(stationA2P2.get, '/station');
    yield put(getStationDataSuccess(response.data));
  } catch (err) {
    toast.error(
      'Oops, Erro. Verifique o micro-serviço da estação A2P2 (Mock) '
    );
    console.log('????', err);
    // response API
    toast.error(err);
    yield put(getStationDataFailure());
  }
}

export default all([
  takeLatest('@station/GET_STATION_DATA_REQUEST', getStationData),
]);
