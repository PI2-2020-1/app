import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateUserError, updateUserSuccess } from './actions';
import history from '../../../services/history';

export function* updateUser({ payload }) {
  try {
    const { user } = payload;

    // const response = yield call(api.put, `api/user/update`, user);
    const response = { data: {} };
    yield put(updateUserSuccess(response.data));

    history.goBack();
    toast.success('Sucesso ao atualizar perfil');
  } catch (err) {
    yield put(updateUserError());

    toast.error('Erro ao atualizar perfil');
    console.log(err);
  }
}

export default all([takeLatest('@auth/UPDATE_USER', updateUser)]);
