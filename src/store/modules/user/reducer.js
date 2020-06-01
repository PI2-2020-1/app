import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        return produce(state, draft => {
          draft.profile = action.payload.user;
        });
      // return { ...state, token: action.payload.token, signed: true };
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
        return state;
    }
  })
}
