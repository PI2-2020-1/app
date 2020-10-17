import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  employees: []
};

export default function plantation(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch (action.type) {

      case '@plantation/GET_EMPLOYEES': {
        draft.loading = true;
        break;
      }
      case '@plantation/GET_EMPLOYEES_SUCCESS': {
        draft.loading = false;
        draft.employees = action.payload.list;
        break;
      }
      case '@plantation/GET_EMPLOYEES_ERROR': {
        draft.loading = false;
        break;
      }
      default:
        return state;

    }
  });
}