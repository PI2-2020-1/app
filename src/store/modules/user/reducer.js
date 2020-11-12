import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
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
        // draft.profile = action.payload.user;
        draft.profile = {
          full_name: 'Testando Teste',
          cpf: '09876543213',
          username: 'test',
          email: 'tes@gmail.com',
          camp: 'Fazenda Feliz',
          telegram: 'test_tel',
        };
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
