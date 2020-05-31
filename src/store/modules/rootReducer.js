import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  form: formReducer
});
