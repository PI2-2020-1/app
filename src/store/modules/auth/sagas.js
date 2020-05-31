import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';
// import history from '/services/history';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, email, password } = payload;

    const response = yield call(api.post, 'auth/login/', {
      username,
      email,
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
    const { username, email, password1, password2 } = payload;
     console.log('INFOO',username, email, password1, password2);
;
    yield call(api.post, 'auth/signup/', {
      username,
      email,
      password1,
      password2,
    });

    history.push('/');
    toast.success('Usuário cadastrado com sucesso');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados. Obs: Senha pelo menos 8 caracteres com nº\'s e letras');
    // response API
    console.log('erroooo',err)
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

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);