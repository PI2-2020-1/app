import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  parameters: [],
};

export default function station(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@parameter/GET_PARAMETERS_DATA_REQUEST': {
        draft.loading = false;
        break;
      }
      case '@parameter/GET_PARAMETERS_DATA_SUCCESS': {
        draft.loading = true;
        const { parametersData } = action.payload;
        console.log('parametersData', parametersData);
        draft.parameters = parametersData;
        draft.loading = false;
        break;
      }
      case '@parameter/GET_PARAMETERS_DATA_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
