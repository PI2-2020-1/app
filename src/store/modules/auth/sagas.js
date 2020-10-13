import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';
// import history from '/services/history';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'auth/login/', {
      username,
      password,
    });
    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    toast.success('LogIn com sucesso');

    yield put(signInSuccess(token, user));

    history.push('/home');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    // response API
    toast.error(err);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { username, email, password1, password2, full_name, telegram } = payload;
     console.log('INFOO',username, email, password1, password2, full_name, telegram);

    yield call(api.post, 'auth/signup/', {
      username,
      email,
      password1,
      password2,
      full_name,
      telegram
    });

    history.push('/');
    toast.success('Usuário cadastrado com sucesso');
  } catch (err) {
    toast.error('Falha no cadastro, Preencha os campos adequadamente e escolha uma senha bem segura');

    toast.error(err.data);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  /* Se for a 1ª vez q o user ta acessando
   a aplicação, ou tiver nada salvo */
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export function* signUpVerification({ payload }) {
  try {
    const { cpf } = payload;
     console.log('CPF', cpf);

    yield call(api.get, 'api/signup/verification/' + cpf);

    history.push('/register');
    toast.success('Usuário habilitado para cadastro.');
  } catch (err) {
    toast.error('Falha na verificação. Verifique o CPF');

    toast.error(err.data);
    yield put(signFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_UP_VERIFICATION_REQUEST', signUpVerification),
  takeLatest('@auth/SIGN_OUT', signOut),
]);