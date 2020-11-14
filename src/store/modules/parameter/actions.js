export function getParametersDataRequest() {
  return {
    type: '@parameter/GET_PARAMETERS_DATA_REQUEST',
  };
}

export function getParametersDataSuccess(parametersData) {
  return {
    type: '@parameter/GET_PARAMETERS_DATA_SUCCESS',
    payload: { parametersData },
  };
}

export function getParametersDataFailure() {
  return {
    type: '@parameter/GET_PARAMETERS_DATA_FAILURE',
  };
}

export function updateParameterRequest(parameter) {
  return {
    type: '@parameter/UPDATE_PARAMETER_REQUEST',
    payload: { parameter },
  };
}

export function updateParameterSuccess(parameter) {
  return {
    type: '@parameter/UPDATE_PARAMETER_SUCCESS',
    payload: { parameter },
  };
}

export function updateParameterFailure() {
  return {
    type: '@parameter/UPDATE_PARAMETER_FAILURE',
  };
}
