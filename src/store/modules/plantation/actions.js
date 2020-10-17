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

export function addEmployeeRequest(cpf, username){
  return {
    type: '@plantation/ADD_EMPLOYEE_REQUEST',
    payload: { cpf, username }
  }
}

export function addEmployeeFinish(){
  return {
    type: '@plantation/ADD_EMPLOYEE_FINISH'
  }
}