export function getEmployees(username){
  return {
    type: '@plantation/GET_EMPLOYEES',
    payload: { username },
  };
}

export function getEmployeesSuccess(list){
  return {
    type: '@plantation/GET_EMPLOYEES_SUCCESS',
    payload: { list },
  };
}

export function getEmployeesError(){
  return {
    type: '@plantation/GET_EMPLOYEES_ERROR'
  };
}