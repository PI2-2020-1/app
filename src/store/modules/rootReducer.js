import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import auth from './auth/reducer';
import user from './user/reducer';
import plantation from './plantation/reducer';

export default combineReducers({
  auth,
  user,
  plantation,
  form: formReducer
});
