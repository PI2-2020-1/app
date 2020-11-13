import produce from 'immer';

const INITIAL_STATE = {
  lastData: [],
  allStationData: [],
  loading: false,
  stationLength: [],
  temperatures: [],
  airHumidity: [],
  atmosphericPressure: [],
  windSpeed: [],
  pluviometricIndex: [],
  pH: [],
  soilMoistude: [],
  user: [],
  farm: '',
  name: '',
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
        console.log(stationData.users[0]);
        draft.user = stationData.users[0];
        draft.farm = stationData.farm;
        draft.name = stationData.name;
        // console.log('Stations', stationData.users[0].plantations[0].stations)
        draft.stationLength =
          stationData.users[0].plantations[0].stations.length;
        console.log('Length', draft.stationLength);
        // // Get environment and Soil of the last update item and tranform in array of object
        // let lastEnv = stationData[stationData.length - 1].environment;
        // lastEnv = Object.entries(lastEnv).map((e) => ({ [e[0]]: e[1] }));
        // let lastSoil = stationData[stationData.length - 1].soil;
        // lastSoil = Object.entries(lastSoil).map((e) => ({ [e[0]]: e[1] }));
        // // Join in one array
        // const envAndSoil = [...lastEnv, ...lastSoil];
        // draft.lastData = envAndSoil;
        // draft.allStationData = stationData;
        // // GRAPHIC ENVIRONMENT
        // const temperatures = stationData.map((item, index) => {
        //   return { x: index, y: item.environment.temperature };
        // });
        // draft.temperatures = temperatures;
        // const airHumidity = stationData.map((item, index) => {
        //   return { x: index, y: item.environment.airHumidity };
        // });
        // draft.airHumidity = airHumidity;
        // const atmosphericPressure = stationData.map((item, index) => {
        //   return { x: index, y: item.environment.atmosphericPressure };
        // });
        // draft.atmosphericPressure = atmosphericPressure;
        // const windSpeed = stationData.map((item, index) => {
        //   return { x: index, y: item.environment.windSpeed };
        // });
        // draft.windSpeed = windSpeed;
        // const pluviometricIndex = stationData.map((item, index) => {
        //   return { x: index, y: item.environment.pluviometricIndex };
        // });
        // draft.pluviometricIndex = pluviometricIndex;
        // // GRAPHIC SOIL
        // const pH = stationData.map((item, index) => {
        //   return { x: index, y: item.soil.pH };
        // });
        // draft.pH = pH;
        // const soilMoistude = stationData.map((item, index) => {
        //   return { x: index, y: item.soil.soilMoistude };
        // });
        // draft.soilMoistude = soilMoistude;

        // draft.loading = false;
        break;
      }

      case '@station/GET_STATION_DATA_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@station/GET_STATION_LASTED_DATA_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@station/GET_STATION_LASTED_DATA_SUCCESS': {
        draft.loading = true;
        const { lastStationData } = action.payload;
        console.log('LastDataOnReducer', lastStationData);
        draft.lastData = lastStationData;
        draft.loading = false;
        break;
      }

      case '@station/GET_STATION_LASTED_DATA_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@station/UPDATE_USER': {
        draft.loading = true;
        break;
      }
      case '@station/UPDATE_USER_ERROR': {
        draft.loading = false;
        break;
      }
      case '@station/UPDATE_USER_SUCCESS': {
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
