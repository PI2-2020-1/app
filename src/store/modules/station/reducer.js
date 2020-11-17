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
  selectedStation: 1,
};

export default function station(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@station/GET_STATION_DATA_REQUEST': {
        const { selectedData } = action.payload;
        console.log('Select!!!!!!!', selectedData);
        draft.loading = true;
        draft.selectedStation = selectedData;
        break;
      }
      case '@station/GET_STATION_DATA_SUCCESS': {
        const { stationData } = action.payload;
        console.log('PAYLOAD', action.payload);
        // console.log('stationData!', stationData.users[0]);
        draft.user = stationData.users[0];
        draft.farm = stationData.farm;
        draft.name = stationData.name;
        // console.log('Stations', stationData.users[0].plantations[0].stations)
        draft.stationLength =
          stationData.users[0].plantations[0].stations.length;

        console.log('será ???', draft.selectedStation);
        const { readings } = stationData.users[0].plantations[0].stations[
          draft.selectedStation - 1
        ];
        // WIND = 0
        const windSpeed = readings.filter((item) => {
          return item.parameters[0].parameter_type === 0;
        });

        const windFormatted = windSpeed.map((item, index) => {
          return { x: index, y: item.value };
        });
        draft.windSpeed = windFormatted;

        // PRESSURE = 1
        const atmosphericPressure = readings.filter((item) => {
          return item.parameters[0].parameter_type === 1;
        });

        const atmosphericPressureFormatted = atmosphericPressure.map(
          (item, index) => {
            return { x: index, y: item.value };
          }
        );
        draft.atmosphericPressure = atmosphericPressureFormatted;

        // AIR_TEMPERATURE = 2
        const airTemperature = readings.filter((item) => {
          return item.parameters[0].parameter_type === 2;
        });

        const airTemperatureFormatted = airTemperature.map((item, index) => {
          return { x: index, y: item.value };
        });
        draft.temperatures = airTemperatureFormatted;

        // PH = 3
        const ph = readings.filter((item) => {
          return item.parameters[0].parameter_type === 3;
        });

        const phFormatted = ph.map((item, index) => {
          return { x: index, y: item.value };
        });
        draft.pH = phFormatted;

        // SOIL_UMIDITY = 4
        const soilUmidity = readings.filter((item) => {
          return item.parameters[0].parameter_type === 4;
        });

        const soildUmidityFormatted = soilUmidity.map((item, index) => {
          return { x: index, y: item.value };
        });
        draft.soilMoistude = soildUmidityFormatted;

        // AIR_UMIDITY = 5
        const airHumidity = readings.filter((item) => {
          return item.parameters[0].parameter_type === 5;
        });

        const airHumidityFormatted = airHumidity.map((item, index) => {
          return { x: index, y: item.value };
        });
        draft.airHumidity = airHumidityFormatted;

        // RAIN = 6
        const rain = readings.filter((item) => {
          return item.parameters[0].parameter_type === 6;
        });

        const rainFormatted = rain.map((item, index) => {
          return { x: index, y: item.value };
        });
        draft.pluviometricIndex = rainFormatted;

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
