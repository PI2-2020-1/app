import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { 
  getEmployeesError, 
  getEmployeesSuccess,
  addEmployeeFinish
} from './actions';
import api from '../../../services/api';

export function* getEmployees({ payload }){
  try {
    const { username } = payload;
  
    const response = yield call(api.get, `api/employees/${username}`);
    yield put(getEmployeesSuccess(response.data));
    
  } catch(err) {
    toast.error('Ocorreu um erro ao recuperar os dados dos funcionários');
    toast.error(err);

    yield put(getEmployeesError());
  }
};

export function* addEmployee({ payload }){
  try {
    const { cpf, username } = payload;

    yield call(api.post, `api/employees/${username}`, { cpf });
    
    yield put(addEmployeeFinish());
    toast.success('Usuário cadastrado com sucesso');

    // getEmployees(payload);
  } catch (err) {
    yield put(addEmployeeFinish());
    toast.error('Ocorreu um erro ao adicionar funcionário');
    toast.error(err);
  }
};

export default all([
  takeLatest('@plantation/GET_EMPLOYEES', getEmployees),
  takeLatest('@plantation/ADD_EMPLOYEE_REQUEST', addEmployee),
]);