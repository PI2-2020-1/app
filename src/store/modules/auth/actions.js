export function signInRequest(username, email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(username, email, password1, password2) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { username, email, password1, password2 },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
