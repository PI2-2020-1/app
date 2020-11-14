import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import plantation from './plantation/sagas';
import station from './station/sagas';
import parameter from './parameter/sagas';

export default function* rootSaga() {
  return yield all([auth, user, plantation, station, parameter]);
}
