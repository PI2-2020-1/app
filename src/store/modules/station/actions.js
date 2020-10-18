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
