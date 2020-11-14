import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
// import api from '../../../services/api';
// import stationA2P2 from '../../../services/stationA2P2';
// import { signInSuccess, signFailure } from './actions';
import {
  getStationDataSuccess,
  getStationDataFailure,
  getStationLastedDataSuccess,
  getStationLastedDataFailure,
  updateUserError,
  updateUserSuccess,
} from './actions';

export function* getStationData() {
  try {
    const response = yield call(api.get, '/api/plantation/1');
    yield put(getStationDataSuccess(response.data));
  } catch (err) {
    toast.error('Oops, Erro. Verifique API');
    console.log('????', err);
    // response API
    toast.error(err);
    yield put(getStationDataFailure());
  }
}

export function* getStationLastedData(action) {
  console.log('numeroStationRequest', action);

  const { selectedStation } = action.payload;
  try {
    const response = yield call(api.get, `/api/latest/${selectedStation}`);
    yield put(getStationLastedDataSuccess(response.data));
  } catch (err) {
    toast.error('Oops, Erro. Verifique a API');
    console.log('????', err);
    // response API
    toast.error(err);
    yield put(getStationLastedDataFailure());
  }
}

export function* updateUser({ payload }) {
  try {
    const { user } = payload;

    const response = yield call(api.post, `api/profile/${user.username}`, {
      telegram: user.telegram,
      email: user.email,
      full_name: user.name,
    });
    const { plantations, ...userReponse } = response.data;
    yield put(updateUserSuccess(userReponse));

    history.goBack();
    toast.success('Sucesso ao atualizar perfil');
  } catch (err) {
    yield put(updateUserError());

    toast.error('Erro ao atualizar perfil');
    console.log(err);
  }
}

export default all([
  takeLatest('@station/GET_STATION_DATA_REQUEST', getStationData),
  takeLatest('@station/GET_STATION_LASTED_DATA_REQUEST', getStationLastedData),
  takeLatest('@station/UPDATE_USER', updateUser),
]);
