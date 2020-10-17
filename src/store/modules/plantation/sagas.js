import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getEmployeesError, getEmployeesSuccess } from './actions';
import api from '../../../services/api';

export function* getEmployees({ payload }){
  
  try {
    const { username } = payload;
  
    const response = yield call(api.get, `api/employees/${username}`);
    const list = response.data;

    yield put(getEmployeesSuccess(list));
  } catch(err) {
    toast.error('Ocorreu um erro ao recuperar os dados dos funcionários');
    toast.error(err);

    yield put(getEmployeesError());
  }

}

export default all([
  takeLatest('@plantation/GET_EMPLOYEES', getEmployees),
]);