import produce from 'immer';

const INITIAL_STATE = {
  stationData: [],
  loading: false,
};

export default function station(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@station/GET_STATION_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@station/GET_STATION_DATA_SUCCESS': {
        const { stationData } = action.payload;
        // Get environment and Soil of the last update item and tranform in array of object
        let lastEnv = stationData[stationData.length - 1].environment;
        lastEnv = Object.entries(lastEnv).map((e) => ({ [e[0]]: e[1] }));
        let lastSoil = stationData[stationData.length - 1].soil;
        lastSoil = Object.entries(lastSoil).map((e) => ({ [e[0]]: e[1] }));
        // Join in one array
        const envAndSoil = [...lastEnv, ...lastSoil];
        draft.stationData = envAndSoil;
        draft.loading = false;
        break;
      }
      case '@station/GET_STATION_DATA_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
