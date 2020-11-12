export function updateUser(user) {
  return {
    type: '@auth/UPDATE_USER',
    payload: { user },
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@auth/UPDATE_USER_SUCCESS',
    payload: { user },
  };
}

export function updateUserError() {
  return {
    type: '@auth/UPDATE_USER_ERROR',
  };
}
