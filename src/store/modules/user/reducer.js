import produce from 'immer';

const INITIAL_STATE = {
  profile: {
    full_name: '',
    email: '',
    telegram: '',
    cpf: '',
    username: '',
    is_responsible: false,
  },
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        return produce(state, (draft) => {
          draft.profile = action.payload.user;
        });
      // return { ...state, token: action.payload.token, signed: true };
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      case '@auth/UPDATE_USER': {
        draft.loading = true;
        break;
      }
      case '@auth/UPDATE_USER_ERROR': {
        draft.loading = false;
        break;
      }
      case '@auth/UPDATE_USER_SUCCESS': {
        draft.profile = action.payload.user;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
