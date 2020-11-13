export function getStationDataRequest() {
  return {
    type: '@station/GET_STATION_DATA_REQUEST',
  };
}

export function getStationDataSuccess(stationData) {
  return {
    type: '@station/GET_STATION_DATA_SUCCESS',
    payload: { stationData },
  };
}

export function getStationDataFailure() {
  return {
    type: '@station/GET_STATION_DATA_FAILURE',
  };
}

export function getStationLastedDataRequest(selectedStation) {
  console.log('actionSelectedStation', selectedStation)
  return {
    type: '@station/GET_STATION_LASTED_DATA_REQUEST',
    payload: { selectedStation },
  };
}

export function getStationLastedDataSuccess(lastStationData) {
  return {
    type: '@station/GET_STATION_LASTED_DATA_SUCCESS',
    payload: { lastStationData },
  };
}

export function getStationLastedDataFailure() {
  return {
    type: '@station/GET_STATION_LASTED_DATA_FAILURE',
  };
}

