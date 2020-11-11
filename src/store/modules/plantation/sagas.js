import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getEmployeesError,
  getEmployeesSuccess,
  requestFinish,
  getEmployees as updateEmployees,
} from './actions';
import api from '../../../services/api';

export function* getEmployees({ payload }) {
  try {
    const { username } = payload;

    const response = yield call(api.get, `api/employees/${username}`);
    yield put(getEmployeesSuccess(response.data));
  } catch (err) {
    toast.error('Ocorreu um erro ao recuperar os dados dos funcionários');
    toast.error(err);

    yield put(getEmployeesError());
  }
}

export function* addEmployee({ payload }) {
  try {
    const { cpf, username } = payload;

    yield call(api.post, `api/employees/${username}`, { cpf });
    yield put(requestFinish());

    toast.success('Usuário cadastrado com sucesso');
    yield put(updateEmployees(username));
  } catch (err) {
    yield* put(requestFinish());
    toast.error('Ocorreu um erro ao adicionar funcionário');
    console.log(err);
  }
}

export function* deleteEmployee({ payload }) {
  try {
    const { cpf, username } = payload;

    yield call(api.delete, `api/employees/${username}`, { data: { cpf } });

    yield put(requestFinish());
    toast.success('Usuário removido com sucesso');
    yield put(updateEmployees(username));
  } catch (err) {
    toast.error('Ocorreu um erro ao remover funcionário');
    yield put(requestFinish());
    console.log(err);
  }
}

export default all([
  takeLatest('@plantation/GET_EMPLOYEES', getEmployees),
  takeLatest('@plantation/ADD_EMPLOYEE_REQUEST', addEmployee),
  takeLatest('@plantation/DELETE_EMPLOYEE', deleteEmployee),
]);
